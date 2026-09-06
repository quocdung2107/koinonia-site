-- ============================================================
-- Koinonia Community — bảng "songs" (dữ liệu bài hát dạng THÔ)
-- Giai đoạn 1 — xem .agent/ke-hoach-trang-cong-dong-2026-09-06.md
-- ============================================================
-- NGUYÊN TẮC: bảng này chỉ lưu văn bản thô, KHÔNG lưu slide đã
-- build sẵn (không có cột style/màu/canvas/layout). Koinonia (client)
-- tự build slide bằng cơ chế "Tạo hàng loạt" đã có sẵn trong app —
-- đây là lý do web có thể giữ giao diện đơn giản và không cần tính
-- toán gì phía server.
--
-- Đã xác minh từ code thật của koinonia-bible (không suy đoán):
--   - renderer/src/features/presentation/components/PresentationPanel.tsx
--     dòng 154-184, hàm createSlidesFromBulkText():
--       + dòng 160-163: text.split('---') — mỗi đoạn giữa 2 dấu
--         "---" (một dòng chỉ chứa đúng 3 gạch ngang) tạo thành 1 slide.
--       + dòng 168-175: MỘT title và MỘT reference dùng chung cho
--         TẤT CẢ slide sinh ra trong 1 lần (không phải mỗi slide 1 title).
--       + dòng 178-179: nếu có nhập tên nhóm, toàn bộ slide mới được
--         gộp vào 1 Group cùng tên đó.
--   - renderer/locales/vi/presentation.json dòng 204-212 — nhãn thật
--     trong UI: "Tiêu đề chung", "Tham chiếu chung", "Tên nhóm (tùy chọn)".
--   - renderer/src/features/presentation/components/slideBuilder.tsx
--     hàm fromBulkText()/base(defaults) — style/màu/fontSize/canvas lấy
--     từ Default Slide Settings CỤC BỘ của từng máy, không nằm trong
--     dữ liệu thô truyền vào => bảng KHÔNG cần (và không nên) có cột style.
-- ============================================================

-- 0. Cần cho gen_random_uuid() — Supabase đã bật sẵn pgcrypto,
--    dòng dưới chỉ để chạy an toàn trên Postgres khác.
create extension if not exists pgcrypto;

-- 1. Bảng dữ liệu thô -------------------------------------------------
create table if not exists public.songs (
    id           uuid primary key default gen_random_uuid(),

    -- Nội dung thô. QUY ƯỚC bắt buộc: các đoạn cách nhau bằng 1 dòng
    -- chứa đúng 3 dấu gạch ngang "---", giống hệt định dạng tab
    -- "Tạo hàng loạt" trong Koinonia yêu cầu (xem trích dẫn ở trên).
    lyrics_raw   text not null,

    -- Tương ứng ô "Tiêu đề chung" trong Bulk tab.
    title        text not null,
    -- Tương ứng ô "Tham chiếu chung" (vd: "Koinonia Bible", tên tác giả...).
    reference    text,
    -- Tương ứng ô "Tên nhóm (tùy chọn)" — gộp các slide vào 1 Group.
    group_name   text,

    language     text not null default 'vi',
    tags         text[] not null default '{}',
    -- Tên người đóng góp hiển thị công khai — KHÔNG phải tài khoản đăng
    -- nhập, chỉ là ghi công. Cột tự thêm cho trang cộng đồng, không có
    -- tương ứng trong app.
    contributor  text,

    is_public    boolean not null default true,
    created_at   timestamptz not null default now(),
    updated_at   timestamptz not null default now(),
    deleted_at   timestamptz
);

comment on table public.songs is
  'Dữ liệu bài hát dạng thô cho trang cộng đồng Koinonia — client tự build slide bằng cơ chế "Tạo hàng loạt" (xem PresentationPanel.tsx).';

-- 2. Index phục vụ truy vấn công khai ---------------------------------
create index if not exists idx_songs_public_visible
    on public.songs (created_at desc)
    where is_public = true and deleted_at is null;

create index if not exists idx_songs_tags
    on public.songs using gin (tags);

-- 3. Trigger tự cập nhật updated_at (tiện, không bắt buộc) ------------
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_songs_updated_at on public.songs;
create trigger trg_songs_updated_at
    before update on public.songs
    for each row
    execute function public.set_updated_at();

-- 4. Row Level Security ------------------------------------------------
alter table public.songs enable row level security;

-- Chỉ cho ĐỌC (SELECT) các bản ghi công khai & chưa xoá mềm.
-- Web/app dùng ANON KEY — KHÔNG bao giờ dùng service_role ở client
-- (đúng nguyên tắc đã chốt trong .agent/boi-canh-supabase-sync-2026-09-06.md).
drop policy if exists read_public on public.songs;
create policy read_public
    on public.songs
    for select
    to anon, authenticated
    using (is_public = true and deleted_at is null);

-- CHƯA tạo policy insert/update/delete ở Giai đoạn 1 — "ai được phép
-- đóng góp bài hát, có cần duyệt trước không" là quyết định CHƯA CHỐT
-- (xem mục "quyết định còn mở" trong kế hoạch). Việc ghi dữ liệu hiện
-- làm thủ công qua Supabase Studio hoặc script có service_role, không
-- qua client. Khi chốt được cơ chế đóng góp, thêm policy insert riêng
-- có điều kiện rõ ràng — không mở INSERT công khai vô điều kiện.

-- 5. Dữ liệu mẫu (seed) — 2 bài hát ví dụ, đúng định dạng "---" -------
insert into public.songs (title, reference, group_name, language, tags, contributor, lyrics_raw)
values
(
  'Thánh Thay, Thánh Thay, Thánh Thay',
  'Koinonia Bible',
  'Thánh Ca Truyền Thống',
  'vi',
  array['thanh-ca', 'tho-phuong'],
  'Ban Truyền Thông Koinonia',
  E'Thánh thay, Thánh thay, Thánh thay\nChúa toàn năng nhân từ\nSớm mai con dâng bài ca\nCa ngợi Cha uy nghi\n---\nThánh thay, Thánh thay, Thánh thay\nMuôn thánh đồ sấp mình\nBỏ mão triều dâng trước ngai\nBên biển thủy tinh trong'
),
(
  'Ha-lê-lu-gia',
  'Koinonia Bible',
  'Tôn Vinh',
  'vi',
  array['ton-vinh'],
  'Ban Truyền Thông Koinonia',
  E'Ha-lê-lu-gia, Ha-lê-lu-gia\nHa-lê-lu-gia, A-men\n---\nChúa là Vua, Chúa là Vua\nNgài trị vì đời đời'
);

-- 6. Cách trang cộng đồng / Koinonia client truy vấn --------------------
-- select id, title, reference, group_name, tags, lyrics_raw, created_at
-- from public.songs
-- order by created_at desc;
-- (dùng ANON KEY; RLS policy read_public ở trên tự lọc is_public/deleted_at,
--  không cần lặp lại điều kiện đó trong WHERE — nhưng trang cộng đồng vẫn
--  nên khai báo tường minh để tận dụng index idx_songs_public_visible.)

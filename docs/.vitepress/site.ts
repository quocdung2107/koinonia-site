export const site = {
  app: {
    name: "Koinonia Bible",
    slogan: "Đọc và trình chiếu Kinh Thánh",
    description:
      "Phần mềm miễn phí hỗ trợ đọc, tìm kiếm và trình chiếu Kinh Thánh dành cho cá nhân, nhóm học Kinh Thánh và Hội Thánh."
  },

  release: {
    version: "1.0.0",
    date: "2026-07-25",
    platform: "Windows x64",
    size: "Đang cập nhật"
  },

  links: {
    github: "https://github.com/quocdung2107/koinonia-site",
    download:
      "https://github.com/quocdung2107/koinonia-bible-app/releases/latest",
    docs: "/guide/getting-started"
  },

  // Giai đoạn 1 — trang /community đọc trực tiếp bảng "songs" qua
  // Supabase REST API (PostgREST), dùng ANON KEY (chỉ có quyền đọc nhờ
  // RLS policy "read_public" — xem supabase/001_songs_raw.sql).
  // KHÔNG bao giờ điền service_role key vào đây, vì file này chạy ở
  // trình duyệt của người xem web (public).
  community: {
    supabaseUrl: "https://YOUR_PROJECT_REF.supabase.co",
    supabaseAnonKey: "YOUR_SUPABASE_ANON_KEY",
    table: "songs"
  },

  license: "MIT"
}

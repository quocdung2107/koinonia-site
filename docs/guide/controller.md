# Cửa sổ Điều khiển

**Mục tiêu:** sau bài này bạn vận hành trọn một buổi nhóm từ cửa sổ Điều khiển mà không cần chạm vào Studio.

Đây là **màn hình làm việc chính của người vận hành ngày Chúa nhật**.

---

## 1. Mở và bố trí cửa sổ

Trong Studio, bấm **🎮 Điều khiển**. Một cửa sổ riêng mở ra. Bấm lần nữa để đóng.

::: tip Bố trí màn hình khuyến nghị
Đặt cửa sổ Điều khiển chiếm **nửa phải màn hình máy tính**, Studio ở nửa trái. Nút **→** trên thanh tiêu đề của cửa sổ Điều khiển làm việc này chỉ bằng một cú bấm — và nó dời sang đúng **màn hình đang chứa cửa sổ Điều khiển**, kể cả khi bạn đã kéo nó sang màn phụ.
:::

### Thanh tiêu đề — 8 nút

| Nút | Tác dụng |
|---|---|
| **▶️** | Chiếu toàn màn hình ra màn hình đích |
| **⏩** | Mở **tất cả** Màn hình xuất cùng lúc |
| **⛔** | Dừng trình chiếu |
| **📌** | Ghim cửa sổ luôn nằm trên cùng (nút **đổi màu rõ** khi đang bật) |
| **→** | Dời cửa sổ sang nửa phải màn hình |
| **🗕 🗖 ✕** | Thu nhỏ · Phóng to/Khôi phục · Đóng |

::: warning Nút ✕ ở đây chỉ ẩn cửa sổ
Đóng cửa sổ Điều khiển **không thoát ứng dụng**. Mở lại bằng **🎮 Điều khiển** trong Studio. Chỉ nút ✕ của **cửa sổ chính** mới thoát hẳn.
:::

---

## 2. Bố cục màn hình

```
┌──────────────────────────────────────────────────────────┐
│ ▶️ ⏩ ⛔ 📌 → │            🗕 🗖 ✕                          │
├──────────────────────────────────────────────────────────┤
│ [Màn chính] [Song ngữ] [Sảnh chờ] │ 🗂 Cây Nhóm          │ ← Tab
├──────────────────────────────────────────────────────────┤
│  Lớp phủ    │     ĐANG PHÁT      │   Tiếp theo          │
│  ☐ Logo     │  (xem trước lớn)   │   ──────────         │
│  ☐ Đếm ngược│                    │   Trước              │
├──────────────────────────────────────────────────────────┤
│  🏷 Phân đoạn    Bấm vào 1 slide để phát ngay            │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐              │
│  │ 1  │ │ 2  │ │ 3  │ │ 4  │ │ 5  │ │ 6  │              │
│  └────┘ └────┘ └────┘ └────┘ └────┘ └────┘              │
└──────────────────────────────────────────────────────────┘
```

### Hàng tab

Mỗi Màn hình xuất có một tab riêng, cộng thêm tab **🗂 Cây Nhóm**. Bạn đang ở tab nào thì mọi lệnh áp cho Màn hình xuất đó.

### Khu Đang phát

| Ô | Nội dung |
|---|---|
| **Đang phát** | Slide đang hiện trên màn hình xuất (xem trước lớn) |
| **Tiếp theo** | Slide sẽ hiện khi bấm Tiến |
| **Trước** | Slide trước đó |
| **🔄 Đồng bộ** | Đồng bộ lại trạng thái nếu có gì lệch |

Ba ô này chính là lý do cửa sổ Điều khiển tồn tại: **bạn thấy trước thứ hội chúng chưa thấy**.

### Lưới slide

Bấm vào **một slide bất kỳ để phát ngay**. Slide bị **ẩn** hiện mờ đi và sẽ bị **bỏ qua** khi bấm Trước/Sau.

---

## 3. Điều khiển Màn hình phụ

Khi đang ở tab của một **Màn hình phụ**, bạn có thêm hai nút:

| Nút | Tác dụng |
|---|---|
| **🚫 Ẩn hình** | Cho màn đó về màn đen (bấm lại: **Bật lại hình**) |
| **🔗 Theo Màn hình chính** | Bỏ ghi đè thủ công, trở lại đi theo màn chính |

Khi màn phụ đang chạy độc lập, huy hiệu **Đang ghi đè thủ công** hiện lên để bạn không quên.

Ở tab **Màn hình chính** hai nút này không có — màn chính không "theo" ai cả.

Lưới slide của một Màn hình phụ chia làm hai khối:

- **Đã khóa cho Màn hình xuất này** — các slide thuộc Nhóm đã khóa vào màn này.
- **Slide thường** — phần dùng chung với danh sách phát của màn chính.

---

## 4. Tab 🗂 Cây Nhóm

Tab này hiện **toàn bộ slide theo Nhóm**, không giới hạn theo danh sách phát của một màn nào.

- Bấm một khối để mở danh sách slide bên trong; khối khác tự đóng lại.
- Có dropdown **Phát tới Màn hình xuất** riêng — bạn chọn slide ở đây và chỉ định phát tới màn nào.

::: tip Vì sao cần tab này?
Vì trong buổi nhóm thật, người vận hành thường phải **chủ động nhảy tới một slide ngoài kịch bản**: mục sư nhắc lại một câu Kinh Thánh ở phần trước, ban hát đổi bài phút chót. Cây Nhóm cho bạn tiếp cận mọi slide ngay lập tức mà không phải cuộn dọc cả danh sách phát.
:::

---

## 5. Phân đoạn — chia nhỏ lưới slide cho dễ nhìn

Khi buổi nhóm có 60–80 slide, lưới trở thành một khối liền tù tì rất khó tìm bằng mắt.

Bấm **🏷 Phân đoạn** để khai báo các đoạn: **tên + số lượng slide**, tính tuần tự từ slide 1.

Ví dụ khai `Thánh ca = 5`, `Kinh Thánh = 7` thì lưới hiện:

```
── Thánh ca ──
 1  2  3  4  5
── Kinh Thánh ──
 6  7  8  9  10  11  12
```

Ba điều cần biết:

1. **Đánh số slide chạy liên tục** qua các phân đoạn (1→12), không reset về 1 ở mỗi đoạn.
2. Nếu tổng số slide **nhiều hơn** tổng đã khai, phần dư hiện thành một khối **không tên** ở cuối.
3. Phân đoạn **chỉ tạm trong phiên làm việc này** — đóng hoặc đổi Phiên Thờ Phượng là mất.

::: tip Đây thuần là trợ giúp thị giác
Phân đoạn **không đổi thứ tự phát, không đổi hành vi trình chiếu, không phải là Nhóm**. Hãy hình dung nó như việc bạn ngắt dòng một câu văn dài cho dễ đọc.
:::

Trong dialog, mỗi dòng sửa được tên và số lượng tại chỗ, kèm nút **↑ / ↓** và xóa.

---

## 6. Lớp phủ

Panel **Danh sách Lớp phủ** nằm bên trái khu Đang phát. Đây là nơi bạn bật/tắt logo, chữ chạy, đồng hồ trong lúc đang chiếu — xem [Lớp phủ](/guide/overlays).

---

## 7. Ba màn hình bấm được — chọn cái nào?

| Cách | Ưu điểm | Hạn chế |
|---|---|---|
| **Cửa sổ Điều khiển** | Đầy đủ nhất: thấy trước, lưới slide, lớp phủ, nhiều màn | Phải ngồi tại máy |
| **Điện thoại (từ xa)** | Đi lại tự do, nhiều người cùng cầm | Quyền hạn chế theo vai trò |
| **Trong Studio** | Tiện lúc đang dựng slide | Màn hình lộn xộn, không hợp lúc vận hành |

Khuyến nghị: **Chúa nhật hãy vận hành từ cửa sổ Điều khiển**, kết hợp điện thoại cho mục sư hoặc người hát dẫn.

---

## 8. Lỗi thường gặp

**"Bấm slide mà màn hình thật không lên."**
Màn hình xuất chưa được mở. Bấm **▶️** hoặc **⏩** trên thanh tiêu đề.

**"Bấm Tiến mà slide nhảy cách quãng."**
Slide ở giữa đang **ẩn** (hiện mờ trong lưới) — đây là hành vi đúng.

**"Màn phụ không theo màn chính nữa."**
Nó đang ghi đè thủ công. Bấm **🔗 Theo Màn hình chính**.

**"Tôi khai phân đoạn mà tuần sau mở lại mất hết."**
Đúng như thiết kế — phân đoạn chỉ tồn tại trong phiên làm việc. Nếu bạn cần cấu trúc bền vững, hãy dùng **Nhóm**.

**"Cửa sổ Điều khiển bị slide của máy chiếu che mất."**
Bấm **📌** để ghim cửa sổ luôn trên cùng.

---

## Bài thực hành

Hãy làm bài này **trước một buổi nhóm thật**, ít nhất một lần:

1. Mở phiên có ít nhất 12 slide. Mở **🎮 Điều khiển**, bấm **→** để dời sang nửa phải màn hình, bấm **📌** để ghim.
2. Bấm **▶️** mở màn hình xuất. Bấm một slide bất kỳ, kiểm tra ô **Đang phát** và **Tiếp theo**.
3. Ẩn một slide ở giữa (trong Studio), quay lại bấm Tiến qua chỗ đó — xác nhận nó bị bỏ qua.
4. Bấm **🏷 Phân đoạn**, khai hai đoạn (ví dụ 5 và 7). Kiểm tra số thứ tự vẫn chạy 1→12.
5. Nếu có màn phụ: sang tab của nó, bấm **🚫 Ẩn hình** rồi **🔗 Theo Màn hình chính**.
6. Mở tab **🗂 Cây Nhóm**, chọn một slide ở nhóm khác và phát tới màn chính — tập tình huống "mục sư nhắc lại câu Kinh Thánh phần trước".
7. Bấm **⛔** để dừng trình chiếu.

Bài tiếp theo: [Điều khiển từ xa bằng điện thoại](/guide/remote).

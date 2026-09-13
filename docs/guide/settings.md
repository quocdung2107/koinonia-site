# Cài đặt & Ngôn ngữ

**Mục tiêu:** nắm mọi thiết lập của Koinonia và biết chỗ nào đổi cái gì.

---

## 1. Cài đặt nằm ở đâu?

Koinonia có hai nhóm cài đặt, ở hai nơi:

| Nơi | Chứa gì |
|---|---|
| **Thanh công cụ màn hình Đọc** | Cỡ chữ đọc · Giao diện sáng/tối · Ngôn ngữ |
| **⚙ trong Studio** | Ngôn ngữ · Màn hình xuất · Luồng màn hình · Cài đặt mặc định |

---

## 2. Cỡ chữ đọc

Cụm **A- / % / A+** trên thanh công cụ màn hình Đọc — 6 mức từ 85% đến 175%.

Áp cho đúng ba nơi: khung đọc Kinh Thánh, câu Kinh Thánh trong Sổ tay, khối văn bản đang soạn trong Sổ tay. Nút bấm và nhãn giao diện **không** đổi cỡ, để bố cục không vỡ.

Được ghi nhớ sau khi tắt ứng dụng.

::: tip Đây không phải cỡ chữ trên màn chiếu
Cỡ chữ slide đặt riêng trong tab **Chỉnh sửa** của Studio, hoặc trong **⚙ → Cài đặt mặc định**. Hai thứ hoàn toàn độc lập: một cái cho bạn đọc gần, một cái cho hội chúng nhìn xa.
:::

---

## 3. Giao diện sáng / tối

Nút **☀️ / 🌙** trên thanh công cụ. Ứng dụng có nhiều tông giao diện; mọi màn hình đều được thiết kế để đọc rõ ở từng tông.

::: tip Chọn tông nào cho phòng kỹ thuật?
Phòng kỹ thuật thường tối. Giao diện **tối** đỡ chói mắt và đỡ hắt sáng lên màn chiếu. Nhưng nếu bạn ngồi cạnh cửa sổ nhiều nắng, giao diện **sáng** dễ nhìn hơn.
:::

---

## 4. Ngôn ngữ giao diện và Gói ngôn ngữ

Nút **🌐** trên thanh công cụ, hoặc **⚙ → 🌐 Ngôn ngữ** trong Studio.

Ứng dụng có sẵn **tiếng Việt** và **tiếng Anh**. Ngoài ra bạn tự thêm ngôn ngữ mới bằng **Gói ngôn ngữ (Language Pack)** — không cần biết lập trình:

1. Bấm **⭳ Xuất mẫu dịch (EN)** để tải file mẫu JSON tiếng Anh.
2. Mở file bằng trình soạn thảo văn bản bất kỳ. Điền `manifest.code` (ví dụ `"fr"`), `manifest.name`, `manifest.nativeName`.
3. **Dịch phần giá trị** trong từng nhóm — giữ nguyên mọi khóa, chỉ đổi phần chữ hiển thị.
4. Lưu file, bấm **+ Nhập Language Pack…** và chọn file vừa dịch.

Ngôn ngữ mới xuất hiện ngay trong danh sách. Nếu trùng mã ngôn ngữ đã có, ứng dụng hỏi bạn có **ghi đè** không.

Gói ngôn ngữ do bạn thêm có thể **xóa** (có xác nhận). Hai ngôn ngữ **Có sẵn** thì không.

::: tip Hữu ích cho Hội Thánh đa sắc tộc
Nếu Hội Thánh bạn phục vụ cộng đồng nói ngôn ngữ khác, bạn hoàn toàn dịch được giao diện sang ngôn ngữ đó và chia sẻ file cho Hội Thánh bạn.
:::

---

## 5. Cài đặt mặc định cho slide

**⚙ → 🎨 Cài đặt mặc định** trong Studio. Gồm:

- **Chọn tông màu** — bảng màu dựng sẵn
- **Màu chữ**, **Màu nền**
- **Kích thước canvas** — tỉ lệ khung hình cho slide tạo nhanh

Đây là phong cách áp cho **slide được tạo mới về sau**. Slide đã có sẵn không bị đổi.

::: tip Đặt một lần vào đầu
Ngay tuần đầu dùng Koinonia, hãy dành 10 phút chọn màu nền, màu chữ và tỉ lệ khung hình đúng với máy chiếu của Hội Thánh. Mọi slide sau đó đã đúng ngay, bạn không phải sửa từng cái.
:::

Tỉ lệ khung hình nên khớp với máy chiếu: **16:9** cho hầu hết máy chiếu và TV hiện nay, **4:3** cho máy chiếu cũ.

---

## 6. Màn hình xuất và Luồng màn hình

Hai tab còn lại của **⚙** — xem bài riêng: [Màn hình xuất & Luồng màn hình](/guide/outputs).

---

## 7. Hoạt cảnh toàn ứng dụng

Nút **🎬 Hoạt cảnh: Bật/Tắt** trên thanh Studio.

Đây là công tắc **cấp cao nhất**: nó thắng cả thiết lập riêng của từng Màn hình xuất. Tắt khi máy yếu hoặc khi bạn muốn mọi thứ chạy thật đơn giản.

Lưu ý: có hiệu lực **từ slide kế tiếp**, không đổi slide đang hiện.

---

## 8. Bản dịch Kinh Thánh

Ứng dụng đi kèm hai bản dịch tiếng Việt: **Kinh Thánh Tiếng Việt 1925** và **Bản Dịch Mới 2002**.

Koinonia có sẵn cơ chế **nhập thêm bản dịch từ file XML** và màn hình **quản lý bản dịch** (xem danh sách bản dịch, số sách, số câu, so sánh hai bản dịch xem có chương nào lệch số câu, xóa bản dịch).

::: warning Về lối vào hai màn hình này
Tùy phiên bản bạn đang dùng, hai màn hình này có thể **chưa có nút trên thanh công cụ**. Nếu bạn cần nhập một bản dịch mới mà không tìm thấy lối vào, hãy liên hệ qua [trang Cộng đồng](/community) — đây là phần đang được hoàn thiện.
:::

::: danger Xóa bản dịch là không hoàn tác
Xóa một bản dịch sẽ xóa toàn bộ nội dung và dữ liệu tìm kiếm liên quan tới bản dịch đó.
:::

---

## 9. Cửa sổ và thanh tiêu đề

Koinonia tự vẽ thanh tiêu đề riêng thay cho thanh mặc định của Windows:

| Nút | Tác dụng |
|---|---|
| **🗕** | Thu nhỏ |
| **🗖 / 🗗** | Phóng to / Khôi phục (nhấp đúp vùng trống thanh tiêu đề cũng được) |
| **✕** | Đóng |

::: warning Nút ✕ ở cửa sổ chính thoát hẳn ứng dụng
Đóng cửa sổ chính sẽ đóng luôn mọi Màn hình xuất, cửa sổ Điều khiển, và tắt tiến trình nền. Đây là cách **đúng** để thoát — đừng chỉ đóng các cửa sổ phụ rồi bỏ đó.
:::

---

## 10. Dữ liệu của bạn được lưu ở đâu?

| Dữ liệu | Còn sau khi đóng phiên? | Còn sau khi xóa phiên? |
|---|---|---|
| Kinh Thánh, Ghi chú, Nhãn, Sổ tay | ✅ | ✅ |
| Thư viện Mẫu, Bộ sưu tập, Khuôn | ✅ | ✅ |
| Slide, Nhóm, Màn hình xuất, Lớp phủ của một phiên | ✅ (trong file phiên) | ❌ |
| Danh sách cục bộ (khi không mở phiên) | ⚠️ rủi ro | — |
| Phân đoạn ở cửa sổ Điều khiển | ❌ chỉ trong phiên làm việc | ❌ |

Cập nhật ứng dụng lên bản mới **không làm mất** dữ liệu.

---

## Bài thực hành

1. Đặt cỡ chữ đọc lên 130%, đổi giao diện tối, tắt app và mở lại — xác nhận cả hai được giữ.
2. Vào **⚙ → 🎨 Cài đặt mặc định**, đặt màu nền và tỉ lệ khung hình đúng với máy chiếu Hội Thánh. Tạo một slide mới và xác nhận nó đã đúng phong cách.
3. Bấm **⭳ Xuất mẫu dịch (EN)**, mở thử file JSON để hiểu cấu trúc Gói ngôn ngữ.
4. Bật/tắt **🎬 Hoạt cảnh** và quan sát khác biệt trên slide kế tiếp.

Xem thêm: [Xử lý sự cố](/guide/troubleshooting).

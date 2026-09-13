# Lớp phủ

**Mục tiêu:** sau bài này bạn thêm được logo, chữ chạy thông báo, đồng hồ đếm ngược và nền lên màn chiếu — những thứ nằm **đè lên** slide và không đổi khi chuyển slide.

---

## 1. Lớp phủ là gì?

Slide thay đổi liên tục trong buổi nhóm. Nhưng có những thứ cần **đứng yên**:

- Logo Hội Thánh ở góc màn hình
- Dòng chữ chạy thông báo
- Đồng hồ đếm ngược 5 phút trước giờ nhóm
- Ảnh/video nền cho cả phần thờ phượng
- Khung giới thiệu diễn giả

Đó chính là **Lớp phủ**. Bạn bật lên, nó nằm đó xuyên suốt; bạn tắt đi, nó biến mất — slide bên dưới không bị ảnh hưởng.

::: warning Cần Phiên Thờ Phượng đang mở
Lớp phủ **chỉ dùng được khi có một Phiên Thờ Phượng đang mở**. Ở chế độ Danh sách cục bộ, panel Lớp phủ báo rõ điều này. Xem [Phiên Thờ Phượng](/guide/projects).
:::

---

## 2. Lớp phủ nằm ở đâu?

Trong **cửa sổ Điều khiển** (mở bằng **🎮 Điều khiển** trên thanh Studio), panel **Danh sách Lớp phủ** nằm bên trái khu *Đang phát*.

Đặt ở đó là có lý do: bật/tắt lớp phủ là thao tác **lúc đang chiếu**, cùng chỗ với người đang bấm Trước/Sau.

Panel cho bạn: **+ Thêm Lớp phủ** · **Bật/Tắt từng lớp phủ** · **Sửa** · **Xóa khỏi Thư viện Lớp phủ**.

---

## 3. Bảy loại Lớp phủ

### Logo

Ảnh nhỏ đặt ở một góc.

Thiết lập: **Chọn file** · **Vị trí neo** (Trên trái / Trên phải / Dưới trái / Dưới phải / Giữa) · **Lề (%)** · **Bề rộng (% màn hình)**.

### Chữ chạy

Dòng chữ chạy ngang màn hình.

Thiết lập: **Nội dung chữ chạy** · **Vị trí** (Trên/Dưới) · **Tốc độ (px/giây)** · **Cỡ chữ**.

Dùng cho thông báo khẩn: *"Xin tắt chuông điện thoại"*, *"Lớp thiếu nhi tan lúc 10g30"*.

### Ảnh

Ảnh tĩnh phủ lên slide.

Thiết lập: **Chọn file** · **Vị trí neo** · **Bề rộng** · **Cách hiển thị**: *Phủ đầy* (cắt bớt nếu lệch tỉ lệ) hoặc *Giữ nguyên tỉ lệ*.

### Video

Video phát đè lên slide. Có tùy chọn **Phát âm thanh** và **Âm lượng**.

### Nền (Background)

Loại đặc biệt và rất hữu dụng. Chọn **Màu**, **Ảnh** hoặc **Video** làm nền, kèm thanh **Độ mờ**:

| Độ mờ | Kết quả |
|---|---|
| **100%** | Che kín hoàn toàn — **tự động ẩn slide**, giống thao tác *Ẩn hình* |
| **Dưới 100%** | Phủ mờ lên slide, **vẫn thấy slide bên dưới** |

::: tip Kỹ thuật xếp lớp
Bạn bật **nhiều Nền mờ cùng lúc** để lồng hiệu ứng: một video nền chuyển động + một lớp màu tối 30% để chữ nổi rõ hơn. Đây là cách làm slide đẹp mà không phải sửa từng slide.
:::

### Đồng hồ

Hai chế độ:

- **Giờ hệ thống** — hiện giờ hiện tại.
- **Đếm ngược** — đặt **Thời gian đếm ngược (giây)**.

Tùy chọn thêm: **Có âm thanh tick**, **Tick dồn dập khi còn (giây)**, **Màu chữ**, **Bề rộng**, **Vị trí neo**.

Rất hợp cho: đếm ngược trước giờ nhóm, giới hạn thời gian chia sẻ, giờ giải lao.

### Thông báo 2 dòng

Khung giới thiệu ở phần dưới màn hình, kiểu nhà đài:

- **Dòng 1** — ví dụ *Diễn giả: Mục sư Nguyễn Văn A.*
- **Dòng 2** — ví dụ *Quản nhiệm Hội thánh ABC*
- **Căn lề**, **Màu dải nhấn**, **Màu nền bảng**, **Màu chữ**

---

## 4. Cách làm việc: thư viện + công tắc

Lớp phủ hoạt động theo hai bước tách biệt, và bạn nên nghĩ theo đúng hai bước đó:

1. **Tạo trước** (thứ Bảy) — dựng sẵn mọi lớp phủ cần dùng: logo, chữ chạy, đồng hồ, nền. Chúng nằm trong thư viện, chưa hiện gì cả.
2. **Bật/tắt lúc chiếu** (Chúa nhật) — người vận hành chỉ việc gạt công tắc đúng lúc.

::: tip Đặt tên rõ ràng
Đặt tên theo **thời điểm dùng**, không theo hình thức: `Logo — suốt buổi`, `Đếm ngược — trước giờ nhóm`, `Diễn giả — đầu bài giảng`, `Nền tối — phần thờ phượng`. Người vận hành đọc tên là biết bật lúc nào.
:::

Xóa một Lớp phủ là xóa khỏi **thư viện của phiên** — không ảnh hưởng slide nào.

---

## 5. Kịch bản mẫu cho một buổi nhóm

| Thời điểm | Bật | Tắt |
|---|---|---|
| Trước giờ nhóm 10 phút | `Đếm ngược`, `Nền — chờ` | |
| Bắt đầu | | `Đếm ngược`, `Nền — chờ` |
| Suốt buổi | `Logo — góc dưới phải` | |
| Thánh ca | `Nền tối 30%` | |
| Đầu bài giảng | `Diễn giả` (tắt sau 20 giây) | |
| Thông báo | `Chữ chạy` | `Nền tối` |
| Kết thúc | | tất cả |

---

## 6. Lớp phủ và Thư viện Mẫu

Một Lớp phủ đã dựng công phu (logo đúng vị trí, khung diễn giả đúng màu Hội Thánh) nên được **lưu thành Mẫu loại *Lớp phủ*** để tuần sau áp lại — xem [Thư viện Mẫu](/guide/model-library).

---

## 7. Lỗi thường gặp

**"Panel Lớp phủ báo cần Phiên Thờ Phượng."**
Bạn đang ở Danh sách cục bộ. Mở hoặc tạo một phiên.

**"Bật Nền xong slide biến mất."**
Độ mờ đang ở 100% — đúng như thiết kế, nó che kín slide. Kéo xuống 30–50% nếu bạn muốn vẫn thấy chữ.

**"Logo che mất chữ trên slide."**
Đổi **Vị trí neo** sang góc khác, hoặc giảm **Bề rộng**.

**"Video lớp phủ không có tiếng."**
Bật **Phát âm thanh** và kiểm tra **Âm lượng**.

**"Ảnh/video trong lớp phủ không hiện trên điện thoại xem từ xa."**
Đúng như hiện trạng: Lớp phủ **chưa nằm trong phạm vi** của màn xem từ xa trên điện thoại. Màn chiếu thật vẫn hiển thị đầy đủ.

---

## Bài thực hành

1. Mở một Phiên Thờ Phượng, mở **🎮 Điều khiển**, tìm panel **Danh sách Lớp phủ**.
2. Thêm Lớp phủ **Logo**, chọn một ảnh, neo **Dưới phải**, bề rộng 10%. Bật lên và xem trên màn hình xuất.
3. Thêm Lớp phủ **Nền** màu đen, độ mờ 40%. Bật và quan sát chữ slide nổi lên thế nào. Kéo lên 100% và giải thích điều xảy ra.
4. Thêm **Đồng hồ** ở chế độ **Đếm ngược** 60 giây, bật âm thanh tick khi còn 10 giây.
5. Thêm **Thông báo 2 dòng** với tên diễn giả. Bật 20 giây rồi tắt — tập đúng nhịp bạn sẽ làm trong buổi nhóm thật.
6. Lưu Lớp phủ Logo thành Mẫu để dùng cho phiên tuần sau.

Bài tiếp theo: [Cửa sổ Điều khiển](/guide/controller).

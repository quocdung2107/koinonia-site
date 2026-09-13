# Xử lý sự cố

Trang tra cứu nhanh. Tìm triệu chứng của bạn, làm theo thứ tự từ trên xuống.

::: tip Nguyên tắc vàng khi đang trong buổi nhóm
**Khôi phục màn chiếu trước, tìm nguyên nhân sau.** Xem bảng xử lý nhanh ở cuối [Quy trình & Checklist Chúa nhật](/guide/service-checklist#xử-lý-sự-cố-ngay-giữa-buổi-nhóm).
:::

---

## Ứng dụng và khởi động

### Mở app lần thứ hai chậm hơn lần đầu

Lần trước bạn chưa thoát đúng cách, tiến trình nền vẫn còn sống và tranh tài nguyên với tiến trình mới.

**Cách làm đúng:** luôn thoát bằng nút **✕ trên cửa sổ chính**. Nút ✕ của cửa sổ Điều khiển chỉ ẩn cửa sổ đó.

**Sửa ngay:** mở Task Manager, kết thúc mọi tiến trình `Koinonia Bible` / `backend`, rồi mở lại.

### Ứng dụng vẫn "chạy ngầm" sau khi đóng

Cùng nguyên nhân trên. Bản mới đã sửa vấn đề này — nếu vẫn gặp, hãy cập nhật ứng dụng.

### Báo lỗi lạ dạng "no such column…"

Thường xảy ra khi ứng dụng vừa được cập nhật mà tiến trình nền cũ chưa khởi động lại.

**Cách sửa:** thoát hẳn ứng dụng (Task Manager nếu cần) rồi mở lại.

---

## Nội dung và lưu trữ

### Sửa slide xong, mở lại thì mất

Bạn đang làm trên **Danh sách cục bộ**, không phải trong Phiên Thờ Phượng. Kiểm tra huy hiệu **📂** trên thanh Studio.

**Cách sửa:** tạo/mở một Phiên Thờ Phượng và làm việc trong đó. Trước khi chuyển, dùng **📁 Tệp → 🧩 Lưu vào Thư viện Mẫu** để cứu nội dung đang có.

### Thứ tự slide quay về cũ sau khi mở lại

Cùng nguyên nhân trên.

### Nhóm còn đó nhưng slide bên trong biến mất

Dấu hiệu điển hình của việc dữ liệu Danh sách cục bộ bị dọn. Nhóm được lưu một nơi, slide của Danh sách cục bộ lưu nơi khác — mất một nửa thì còn lại nửa kia.

**Phòng ngừa:** làm việc trong Phiên Thờ Phượng.

### Xóa nhầm Phiên Thờ Phượng

Không hoàn tác được. Nếu bạn từng **xuất `.kon`**, hãy nhập lại file đó.

**Phòng ngừa:** xuất `.kon` mỗi tuần; lưu Nhóm quan trọng vào Thư viện Mẫu.

### Nhập `.kon` báo "File này đã có trong dự án"

Ứng dụng nhận diện trùng theo **nội dung**, không theo tên file. Đổi tên hay copy sang chỗ khác vẫn bị nhận ra.

### Ảnh trong file `.kon` bạn bè gửi bị vỡ

File được xuất từ bản cũ (chỉ mang đường dẫn, không mang ảnh). Bản mới đã nhúng ảnh vào gói — nhờ người gửi cập nhật ứng dụng rồi xuất lại.

---

## Trình chiếu

### Bấm Trước/Sau nhưng màn hình thật không đổi

Màn hình xuất **chưa được mở**. Điều hướng chỉ cập nhật nội dung, nó không tự bật cửa sổ màn hình.

**Cách sửa:** bấm **▶️** hoặc **⏩** trên cửa sổ Điều khiển, hoặc **Phát** trong **⚙ → Màn hình xuất**.

### Slide bị bỏ qua khi bấm Sau

Ba khả năng, kiểm tra theo thứ tự:

1. Slide đang **ẩn** (hiện mờ trong lưới).
2. Slide thuộc Nhóm bị **khóa cho Màn hình xuất khác** → không nằm trong danh sách phát của màn chính.
3. Thứ tự thật khác thứ tự bạn thấy — mở **Xem Danh sách phẳng (thứ tự thật)** để kiểm chứng.

### Chữ bị cắt trên màn chiếu

Slide ở mức **OVERFLOW**. Chạy **Kiểm tra toàn bộ** trong Cây Nhóm, rồi bật **Tự co**, giảm cỡ chữ, hoặc chia slide.

### Màn hình phụ không theo màn chính

Nó đang ghi đè thủ công. Bấm **🔗 Theo Màn hình chính** trên cửa sổ Điều khiển.

### Màn hình phụ kẹt ở màn đen

Đang ở trạng thái **Ẩn hình**. Bấm **Bật lại hình**, hoặc kiểm tra lại **⚙ → Luồng màn hình**.

### Máy chiếu nhận nhầm màn hình

Vào **⚙ → Màn hình xuất**, kiểm tra mục **Dùng màn hình vật lý**. Nếu bạn cắm máy chiếu **sau khi** đã cấu hình, hãy gán lại.

### Hoạt cảnh giật, máy chậm

Bấm **🎬 Hoạt cảnh: Tắt** trên thanh Studio. Hoặc tắt riêng cho một Màn hình xuất trong **⚙ → Màn hình xuất**.

### Video không chạy trên khung xem trước

Đúng như thiết kế — *Tự phát khi live* chỉ áp cho màn hình xuất thật.

### Bấm Tiến mà cả slide hiện ra một lượt

Không layer nào được đặt kiểu **Bước** trong bảng **Thứ tự xuất hiện**.

---

## Điều khiển từ xa

### Không bật được server

Thông báo thường nói **cổng 8770 đang bị chiếm**. Tắt phần mềm đang dùng cổng đó rồi thử lại.

### Không tìm thấy địa chỉ IP mạng LAN

Máy tính chưa nối Wifi hoặc dây mạng.

### Điện thoại không mở được trang

1. Điện thoại có đang ở **đúng Wifi** không (rất hay quên — máy đang dùng 4G)?
2. Server có hiện **Đang chạy** không?
3. Thử gõ tay địa chỉ IP thay vì quét QR.

### Nhập PIN báo sai

PIN đổi mỗi lần bật server. Xem lại PIN hiện tại trên bảng. Số lần thử sai bị giới hạn.

### Nút trên điện thoại bị mờ

Vai trò được cấp không có quyền đó. Sửa trong **Quản lý vai trò**.

### Điện thoại hiện dải cảnh báo đỏ

Nhóm bị giới hạn trong Vai trò đã bị **xóa** hoặc đã **hết slide**. Vào **Quản lý vai trò**, trỏ Vai trò sang Nhóm khác — điện thoại tự phục hồi, không cần kết nối lại.

### Slide trên điện thoại trông khác màn chiếu

Trình duyệt điện thoại vẽ chữ hơi khác. Dùng Chrome để sát nhất. **Luôn tin màn chiếu thật.**

### Lớp phủ không hiện trên điện thoại

Đúng hiện trạng — Lớp phủ chưa nằm trong phạm vi màn xem từ xa. Màn chiếu thật vẫn đầy đủ.

---

## Soạn thảo

### Bôi đen trong Sổ tay mà không thấy thanh định dạng

Bạn đang ở pha gõ chữ. Bấm ra ngoài ô hoặc nhấn **Esc** để sang pha định dạng.

### Bấm Đậm xong bấm Màu thì mất Đậm

Đã sửa ở bản mới. Hãy cập nhật ứng dụng.

### Gõ vào ô tìm kiếm bị mất con trỏ

Đã sửa ở bản mới. Hãy cập nhật ứng dụng.

### Bấm tab bên phải làm tắt Sổ tay

Đã sửa — bốn tab bên phải không còn ảnh hưởng Sổ tay. Lối thoát duy nhất là nút **✕ Đóng** trên đầu Sổ tay. Hãy cập nhật nếu vẫn gặp.

### Không kéo được slide, hiện hộp thoại chặn

Nhóm đang bật **Khóa Nhóm**. Hộp thoại nói rõ khóa nào. Tắt khóa đó nếu bạn thật sự muốn đổi.

---

## Khi không tìm thấy câu trả lời ở đây

1. Kiểm tra bạn đang dùng **phiên bản mới nhất** — nhiều lỗi trong danh sách này đã được sửa.
2. Thử **thoát hẳn ứng dụng và mở lại** (Task Manager nếu cần).
3. Mở lại Phiên Thờ Phượng và thử lại đúng thao tác đó.
4. Báo lỗi qua [trang Cộng đồng](/community), kèm: bạn đang làm gì, bạn mong đợi gì, thực tế xảy ra gì, và ảnh chụp màn hình nếu có.

::: tip Ghi chú trung thực về giai đoạn phát triển
Koinonia đang ở giai đoạn phát triển tích cực. Một số phần (Luồng màn hình nhiều màn, Điều khiển từ xa theo Vai trò) đã hoàn thiện về tính năng nhưng **chưa được kiểm thử tự động đầy đủ**. Vì vậy bộ hướng dẫn này nhấn mạnh **chạy thử tối thứ Bảy** ở mọi bài — đó không phải sự thận trọng thừa.
:::

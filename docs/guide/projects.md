# Phiên Thờ Phượng

**Mục tiêu:** sau bài này bạn tạo, mở, sao lưu, gửi đi và xóa an toàn một buổi nhóm — và không bao giờ mất nội dung đã chuẩn bị.

---

## 1. Phiên Thờ Phượng là gì?

**Một Phiên Thờ Phượng = một file chứa trọn một buổi nhóm.** Bên trong nó có:

- Toàn bộ **slide**
- Cách chia **Nhóm** và các **Khóa Nhóm**
- Cấu hình **Màn hình xuất** (mấy màn, chiếu ra đâu)
- Bảng **Luồng màn hình** (màn phụ chiếu gì khi màn chính chiếu gì)
- Kho **Lớp phủ** (logo, chữ chạy, đồng hồ…)
- Danh sách **Vai trò** điều khiển từ xa

Tuần sau, bạn tạo phiên mới — buổi nhóm tuần trước vẫn nằm nguyên trong file của nó, mở lại bất kỳ lúc nào.

::: danger Vì sao bạn nên luôn làm việc trong một Phiên Thờ Phượng
Khi không mở phiên nào, Koinonia chạy ở chế độ **Danh sách cục bộ** — một vùng nhớ tạm. Ở đó bạn **không dùng được Lớp phủ**, **không xuất file gửi đi được**, và nội dung có nguy cơ mất nếu dữ liệu ứng dụng bị dọn. Hãy xem Danh sách cục bộ như tờ nháp, còn Phiên Thờ Phượng là quyển sổ thật.
:::

---

## 2. Mở Trung tâm Phiên Thờ Phượng

Trong Trình Chiếu, bấm **🗄 Trung tâm Phiên Thờ Phượng** trên thanh trên cùng.

Màn hình có **4 tab**:

| Tab | Nội dung |
|---|---|
| **Phiên Thờ Phượng** | Danh sách các buổi nhóm của bạn |
| **Thư viện Mẫu** | Kho nội dung dùng lại — xem [Thư viện Mẫu](/guide/model-library) |
| **Bộ sưu tập** | Gom nhiều Mẫu thành một bộ |
| **Khuôn Phiên Thờ Phượng** | Khuôn dựng sẵn để tạo phiên mới |

Quay lại bằng **← Quay lại Trình Chiếu**.

---

## 3. Tạo và mở một Phiên Thờ Phượng

### Tạo mới

1. Vào tab **Phiên Thờ Phượng**.
2. Gõ tên vào ô *Tên Phiên Thờ Phượng mới…* — nên đặt tên theo ngày, ví dụ `CN 2026-10-12 — Thờ phượng sáng`.
3. (Tùy chọn) chọn một **Khuôn** ở ô bên cạnh, hoặc để *Không dùng Khuôn*.
4. Bấm **Tạo Phiên Thờ Phượng**.

### Mở để làm việc

Trên dòng của phiên, bấm **Mở trong Trình Chiếu**. Quay lại Studio, bạn sẽ thấy huy hiệu **📂 \<tên phiên\>** trên thanh trên cùng — dấu hiệu chắc chắn rằng mọi thay đổi đang được ghi vào phiên đó.

### Xem nhanh mà không mở

Nút **Xem nhanh** hiện số lượng slide / nhóm / màn hình xuất / lớp phủ của phiên **mà không mở nó ra**.

::: tip Vì sao tách "Xem nhanh" riêng?
Vì mở một phiên sẽ **đóng phiên đang mở**. Nếu chỉ để liếc xem nội dung mà phải đóng phiên đang làm dở thì rất phiền — và nguy hiểm. "Xem nhanh" là thao tác chỉ đọc: không đóng phiên nào, không làm nhảy thứ tự "Mở lần cuối".
:::

### Đóng phiên

Bấm dấu **✕** ngay trên huy hiệu **📂** ở thanh Studio. Ứng dụng quay về Danh sách cục bộ.

---

## 4. Gửi buổi nhóm cho người khác — file `.kon`

### Xuất

Trên dòng của phiên, bấm **Xuất** → chọn nơi lưu → bạn nhận được một file `.kon`.

File `.kon` mang theo **mọi thứ**, kể cả **ảnh và video đã nhúng vào trong gói**. Người nhận mở ra là thấy đầy đủ, không bị vỡ hình vì thiếu file.

### Nhập

Hai cách:

- Trong Trung tâm Phiên Thờ Phượng, bấm **Nhập Phiên Thờ Phượng (.kon)** và chọn file.
- Hoặc **nhấp đúp thẳng vào file `.kon`** trong Windows Explorer. Ứng dụng tự mở (hoặc tự bật lên nếu đang chạy sẵn) và thêm phiên vào danh sách, kèm thông báo tên phiên vừa thêm.

### Chống nhập trùng

Nếu bạn nhập đúng một file đã có, ứng dụng báo **"File này đã có trong dự án"** và **không tạo bản thứ hai**.

Việc kiểm tra dựa trên **nội dung file**, không dựa vào tên hay đường dẫn. Nghĩa là bạn copy file ra chỗ khác, đổi tên khác, nhập lại — vẫn bị phát hiện trùng.

---

## 5. Xóa an toàn

Xóa một Phiên Thờ Phượng là **xóa vĩnh viễn toàn bộ nội dung bên trong**: slide, nhóm, màn hình xuất, lớp phủ. Vì vậy hộp thoại xóa có **hai lớp bảo vệ**:

1. **Lớp nhắc** — hiện phiên này có bao nhiêu nhóm, bao nhiêu slide, và mời bạn **Lưu vào Thư viện Mẫu trước khi xóa**. Bấm vào đó là lưu ngay các Nhóm thành Mẫu dùng lại được.
2. **Lớp xác nhận** — bạn phải **gõ lại đúng tên phiên** thì nút Xóa mới hoạt động.

::: warning Không có tự động sao lưu
Ứng dụng **không tự lưu** Nhóm vào Thư viện Mẫu giùm bạn. Hộp thoại chỉ **nhắc** và cho làm nhanh. Nếu bỏ qua, nội dung mất là mất hẳn.
:::

Nếu phiên đang mở trong Studio, hộp thoại cũng cảnh báo rằng xóa sẽ đóng luôn phiên làm việc hiện tại.

---

## 6. Khuôn Phiên Thờ Phượng

**Khuôn** lưu lại **cấu trúc** của một buổi nhóm — cách chia Nhóm, cấu hình Màn hình xuất, bộ Lớp phủ — để tuần sau tạo phiên mới là có sẵn khung sườn.

### Tạo Khuôn

Trên dòng của một phiên đã dựng ưng ý, bấm **Lưu làm Khuôn** → đặt tên (và danh mục nếu muốn).

### Dùng Khuôn

Lúc tạo phiên mới, chọn Khuôn ở ô dropdown cạnh ô nhập tên.

::: tip Khuôn khác Mẫu ở chỗ nào?
**Khuôn** là *bộ khung của cả buổi nhóm* (cấu trúc). **Mẫu** trong Thư viện Mẫu là *một khối nội dung* (một bài thánh ca, một bộ thông báo). Khuôn dựng sân khấu; Mẫu là tiết mục.
:::

Xóa một Khuôn **không ảnh hưởng** các phiên đã tạo từ nó.

---

## 7. Quy trình một tuần được khuyến nghị

```
Thứ Hai   ─ Tạo phiên "CN <ngày>" từ Khuôn "Thờ phượng sáng"
Thứ Ba–Sáu ─ Soạn bài trong Sổ tay → Sinh Slide vào phiên này
           ─ Áp dụng Mẫu: thánh ca, thông báo (Thư viện Mẫu)
Thứ Bảy   ─ Chạy thử: mở Màn hình xuất, bấm hết một lượt
           ─ Xuất .kon gửi cho người dự phòng
Chúa nhật ─ Mở phiên, mở Cửa sổ Điều khiển, vận hành
Sau buổi  ─ Nhóm nào dùng lại được → Lưu vào Thư viện Mẫu
```

---

## 8. Lỗi thường gặp

**"Tôi sửa slide mà lần sau mở lại không thấy."**
Kiểm tra huy hiệu **📂** lúc bạn sửa. Không có huy hiệu nghĩa là bạn đang sửa trên Danh sách cục bộ, không phải trong phiên.

**"Nút Áp dụng Mẫu bị mờ."**
Chưa có phiên nào đang mở. Áp dụng Mẫu là thao tác *đổ nội dung vào một phiên*, nên bắt buộc phải có phiên mở.

**"Nhập .kon báo trùng nhưng tôi chắc là file khác."**
Nội dung hai file giống hệt nhau. Đổi tên file không làm nó khác đi. Nếu thật sự cần hai bản, hãy mở phiên cũ, đổi một chi tiết rồi xuất lại.

**"Ảnh trong file .kon bạn tôi gửi bị vỡ."**
Bản mới đã nhúng ảnh vào gói `.kon`. Nếu file được xuất từ bản cũ thì vẫn thiếu ảnh — hãy nhờ họ cập nhật ứng dụng rồi xuất lại.

---

## Bài thực hành

1. Tạo phiên `Tập-01`, mở trong Trình Chiếu, xác nhận huy hiệu **📂**.
2. Tạo vài slide bất kỳ, quay lại Trung tâm, bấm **Xem nhanh** phiên đó và đối chiếu số slide.
3. Bấm **Xuất** ra Desktop. Tìm file `.kon` vừa tạo trong Explorer.
4. Nhấp đúp vào chính file đó — xác nhận ứng dụng báo **đã có trong dự án** và không tạo phiên thứ hai.
5. Bấm **Lưu làm Khuôn** cho phiên này, rồi tạo phiên `Tập-02` **từ Khuôn đó**. So sánh cấu trúc hai phiên.
6. Xóa `Tập-02`: đọc kỹ hộp thoại, thử bấm Xóa khi **chưa** gõ đúng tên để thấy lớp bảo vệ hoạt động.

Bài tiếp theo: [Thư viện Mẫu & Bộ sưu tập](/guide/model-library).

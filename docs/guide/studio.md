# Trình Chiếu (Studio)

**Mục tiêu:** sau bài này bạn thuộc bố cục Studio, tạo được slide bằng cả ba cách, và biết thanh lệnh đổi theo lựa chọn của bạn như thế nào.

---

## 1. Vào Studio

Từ màn hình Đọc Kinh Thánh, bấm **🎬 Trình Chiếu** trên thanh công cụ. Quay lại bằng **← Quay lại Reader**.

::: tip Trước khi làm gì khác
Hãy nhìn lên thanh trên cùng: có huy hiệu **📂 \<tên phiên\>** không? Nếu không, bạn đang làm trên tờ nháp. Xem [Phiên Thờ Phượng](/guide/projects).
:::

---

## 2. Bố cục màn hình

```
┌─────────────────────────────────────────────────────────────────────┐
│ KOINONIA Trình chiếu                                                │
│ 🗂 Danh sách Slide & Nhóm │ 🎮 Điều khiển │ 🎬 Hoạt cảnh │ 📡 Từ xa   │ ← Hàng 1
│                    ← Quay lại Reader │ 📁 Tệp │ 🗄 Trung tâm │ 📂 │ ⚙ │
├─────────────────────────────────────────────────────────────────────┤
│ (thanh lệnh — đổi theo slide/nhóm bạn đang chọn)                    │ ← Hàng 2
├──────────────┬──────────────────────┬───────────────────────────────┤
│  Cây Nhóm    │   Khung xem trước    │  Bảng làm việc                │
│  & Slide     │   (đúng tỉ lệ        │  Kinh Thánh · Nhập hàng loạt  │
│              │    màn hình chiếu)   │  · Chỉnh sửa                  │
└──────────────┴──────────────────────┴───────────────────────────────┘
```

### Hàng 1 — luôn đứng yên

| Nút | Tác dụng |
|---|---|
| **🗂 Danh sách Slide & Nhóm** | Ẩn/hiện cột Cây Nhóm bên trái |
| **🎮 Điều khiển** | Mở/đóng **cửa sổ Điều khiển** riêng — xem [Cửa sổ Điều khiển](/guide/controller) |
| **🎬 Hoạt cảnh: Bật/Tắt** | Công tắc hoạt cảnh cho **toàn bộ** màn hình xuất |
| **📡 Điều khiển từ xa** | Mở bảng điều khiển bằng điện thoại (có huy hiệu số thiết bị đang chờ duyệt) |
| **📁 Tệp** | Lưu vào Thư viện Mẫu · Áp dụng Mẫu |
| **🗄 Trung tâm Phiên Thờ Phượng** | Quản lý phiên, mẫu, bộ sưu tập, khuôn |
| **📂 \<tên\> ✕** | Phiên đang mở — bấm ✕ để đóng phiên |
| **⚙** | Cài đặt: Ngôn ngữ · Màn hình xuất · Luồng màn hình · Cài đặt mặc định |

::: tip Về nút 🎬 Hoạt cảnh
Đây là công tắc **cấp cao nhất**, thắng cả cài đặt riêng của từng Màn hình xuất. Rất hữu ích khi máy yếu bị giật: tắt hoạt cảnh là chạy mượt ngay. Lưu ý nó có hiệu lực **từ slide kế tiếp**, không đổi slide đang hiện.
:::

### Hàng 2 — thanh lệnh theo ngữ cảnh

Hàng này **đổi nội dung theo thứ bạn đang chọn**: chọn một slide thì hiện lệnh cho slide, chọn nhiều slide thì hiện lệnh hàng loạt, chọn một Nhóm thì hiện lệnh cho Nhóm.

Đây là lý do bạn nên **luôn liếc xuống hàng 2 sau khi chọn** — nó cho biết bạn đang thao tác trên cái gì.

### Cột trái — Cây Nhóm & Slide

Xem chi tiết ở [Nhóm & Khóa Nhóm](/guide/groups). Tóm tắt:

- Danh sách các **Nhóm**, mở/đóng từng nhóm.
- Mục **Chưa vào nhóm nào** ở cuối.
- Nút chuyển sang **Xem Danh sách phẳng (thứ tự thật)**.

### Cột giữa — Khung xem trước

Hiện slide đang chọn **đúng tỉ lệ màn hình chiếu thật**. Đây là nơi bạn kiểm tra bằng mắt trước khi chiếu.

### Cột phải — Bảng làm việc, 3 tab

| Tab | Dùng để |
|---|---|
| **Kinh Thánh** | Sinh slide từ các câu đã chọn ở Reader |
| **Nhập hàng loạt** | Dán một khối văn bản dài, cắt thành nhiều slide |
| **Chỉnh sửa** | Sửa chi tiết slide đang chọn |

---

## 3. Ba cách tạo slide

### Cách 1 — Từ câu Kinh Thánh đã chọn (tab **Kinh Thánh**)

Các câu bạn đã chọn ở màn hình Đọc hiện ra dưới dạng **cây**: Bản dịch → Sách → Chương → Câu.

Bạn sinh slide theo **từng cấp**:

| Nút | Sinh ra |
|---|---|
| **Sinh tất cả** | Toàn bộ cây, đúng thứ tự đã sắp |
| Sinh cả bản dịch | Mọi câu thuộc bản dịch đó |
| Sinh cả sách | Mọi câu thuộc sách đó |
| Sinh cả chương | Mọi câu thuộc chương đó — **mỗi câu một slide** |

Các nút **↑ / ↓** trên từng nút của cây cho phép đổi thứ tự trước khi sinh.

Nhãn **Đã sinh (N)** cho biết nhánh đó đã sinh bao nhiêu slide, để bạn không sinh trùng.

::: tip Nguyên tắc không sinh trùng
Câu đã có slide sẽ **không bị sinh lại**. Nhờ vậy mọi chỉnh sửa của bạn trên slide cũ được giữ nguyên, và bạn có thể vừa đọc vừa bổ sung câu mới mà không sợ hỏng những gì đã làm.
:::

### Cách 2 — Dán văn bản dài (tab **Nhập hàng loạt**)

Đây là cách nhanh nhất để lên slide lời bài hát.

1. Dán toàn bộ lời bài hát vào ô lớn.
2. Chèn dấu `---` tại mỗi chỗ muốn sang slide mới.
3. Điền (tùy chọn): **Tiêu đề**, **Tham chiếu**, **Nhóm** — để trống Nhóm nếu không muốn gom nhóm.
4. Bấm **Tạo Slide**.

Bốn nút xử lý văn bản giúp bạn dọn nội dung copy từ nơi khác:

| Nút | Việc nó làm |
|---|---|
| **Lọc hợp âm** | Xóa các ký hiệu hợp âm (`[Am]`, `G7`…) khỏi lời bài hát |
| **Xóa dòng trống** | Dồn các dòng trống thừa |
| **Xóa xuống dòng** | Nối các dòng bị ngắt vụn thành đoạn liền |
| **Xuống dòng cho slide** | Chèn dòng trống trước mỗi dấu `---` cho dễ nhìn |
| **Định dạng Kinh Thánh** | Nhận diện đoạn Kinh Thánh dán từ nguồn khác, tự chèn `---` và điền tiêu đề |

::: tip Mẹo dùng cho bản dịch không có sẵn trong app
Copy đoạn Kinh Thánh từ nguồn bạn dùng → dán vào ô này → bấm **Định dạng Kinh Thánh** → **Tạo Slide**. Chỉ vài giây là có cả bộ slide.
:::

### Cách 3 — Từ Sổ tay bài học

Xem [Sổ tay bài học](/guide/notebook). Slide sinh ra được xếp sẵn vào một Nhóm mang tên Sổ tay.

Ngoài ra, ở cuối danh sách Nhóm còn hai nút tạo nhanh: **Slide tự do** và **Slide Canvas** — xem [Slide & Canvas](/guide/slides).

---

## 4. Thanh lệnh — những thao tác hay dùng

Khi chọn slide (bấm chọn, Ctrl+bấm để chọn thêm, Shift+bấm để chọn khoảng), thanh lệnh cho bạn:

| Lệnh | Ý nghĩa |
|---|---|
| **Chỉnh N slide** | Sửa hàng loạt: màu chữ, màu nền, cỡ chữ cho mọi slide đã chọn |
| **Nhân bản slide** | Tạo bản sao |
| **Nhân bản dạng Tự do** | Tạo bản sao dưới dạng slide Tự do để chỉnh tay |
| **Tách slide thành 2** | Chia một slide dài làm đôi |
| **Gộp 2 slide** | Gộp đúng 2 slide đã chọn thành 1 |
| **Ẩn slide** | Slide bị bỏ qua khi bấm Trước/Sau, nhưng vẫn còn trong danh sách |
| **Chọn slide chẵn / lẻ** | Chọn nhanh để áp hai phong cách xen kẽ |
| **Xóa đã chọn (N)** | Xóa hàng loạt (có xác nhận) |

::: tip "Chọn chẵn/lẻ" dùng khi nào?
Khi Hội Thánh đọc Kinh Thánh **đối đáp**: slide lẻ một màu cho người hướng dẫn, slide chẵn màu khác cho hội chúng. Chọn chẵn → đặt màu; chọn lẻ → đặt màu khác. Xong trong hai bước.
:::

### Gộp và tách — hai nguyên tắc cần biết

- **Gộp**: slide kết quả **giữ danh tính của slide đứng trước**. Slide thứ hai biến mất và tự được gỡ khỏi mọi Nhóm chứa nó.
- **Tách**: phần 1 giữ nguyên slide gốc; phần 2 là slide mới được chèn **ngay sát bên**, và **vẫn nằm trong đúng Nhóm cũ**.

Nghĩa là gộp/tách không bao giờ làm slide của bạn "rơi" ra khỏi Nhóm.

---

## 5. Kiểm tra tràn khung trước khi chiếu

Studio tự đánh giá từng slide theo ba mức:

| Mức | Nghĩa |
|---|---|
| **OK** | Nội dung nằm gọn trong vùng an toàn |
| **WARNING** | Vượt vùng an toàn nhưng vẫn trong màn hình — nên xem lại |
| **OVERFLOW** | Tràn khỏi màn hình — **chữ sẽ bị cắt khi chiếu** |

Slide bạn đang sửa được kiểm tra tự động khi gõ. Để quét lại **toàn bộ**, bấm **Kiểm tra toàn bộ** trong Cây Nhóm.

::: tip Đưa việc này vào quy trình
Chạy **Kiểm tra toàn bộ** vào tối thứ Bảy, sau khi mọi nội dung đã xong. Sửa hết mức OVERFLOW rồi mới coi là chuẩn bị xong.
:::

---

## 6. Cài đặt mặc định (⚙ → Cài đặt mặc định)

Đây là phong cách áp cho **slide tạo nhanh** về sau: tông màu, màu chữ, màu nền, và **kích thước canvas** (tỉ lệ khung hình).

Đặt một lần theo phong cách Hội Thánh, mọi slide tạo sau đó đã đúng ngay từ đầu — đỡ hẳn việc sửa màu từng slide.

---

## 7. Lỗi thường gặp

**"Tôi bấm Sinh tất cả mà không ra slide nào."**
Danh sách câu đã chọn đang trống, hoặc mọi câu đã có slide rồi (xem nhãn *Đã sinh*).

**"Thanh lệnh trống trơn."**
Bạn chưa chọn slide hay Nhóm nào. Bấm vào một slide trước.

**"Nút Gộp 2 slide bị mờ."**
Bạn phải chọn **đúng 2** slide. Ngoài ra, slide thuộc Layout tự do hiện chưa hỗ trợ gộp.

**"Slide bị bỏ qua khi bấm Sau."**
Slide đang **ẩn**, hoặc bị **khóa cho một Màn hình xuất khác**. Xem [Nhóm & Khóa Nhóm](/guide/groups).

**"Tôi sửa cỡ chữ cho một slide nhưng slide khác không đổi."**
Sửa trong tab **Chỉnh sửa** chỉ áp cho slide đang chọn. Muốn áp hàng loạt, chọn nhiều slide rồi dùng **Chỉnh N slide**.

---

## Bài thực hành

1. Mở phiên `Tập-01`. Vào tab **Kinh Thánh**, sinh slide cho cả một chương. Đếm số slide sinh ra.
2. Bấm **Sinh cả chương** lần nữa — xác nhận không có slide trùng.
3. Sang tab **Nhập hàng loạt**, dán lời một bài thánh ca, chèn `---` giữa các đoạn, đặt **Nhóm** là `Thánh ca mở đầu`, bấm **Tạo Slide**.
4. Chọn 4 slide bất kỳ, dùng **Chọn slide chẵn** rồi đổi màu chữ; **Chọn slide lẻ** rồi đổi màu khác. Xem kết quả trên khung xem trước.
5. Chọn 2 slide liền nhau, bấm **Gộp 2 slide**. Kiểm tra slide gộp còn nằm đúng Nhóm không.
6. Bấm **Kiểm tra toàn bộ** và sửa mọi slide bị OVERFLOW.

Bài tiếp theo: [Slide & Canvas](/guide/slides).

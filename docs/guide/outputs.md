# Màn hình xuất & Luồng màn hình

**Mục tiêu:** sau bài này bạn cấu hình được nhiều màn hình chiếu cùng lúc và viết được kịch bản "màn chính chiếu gì thì màn phụ chiếu gì".

Đây là phần kỹ thuật nhất của Koinonia. Nếu Hội Thánh bạn chỉ dùng **một** máy chiếu, bạn chỉ cần đọc mục 1–3 rồi dừng lại; phần còn lại để dành khi nào cần.

---

## 1. Màn hình xuất là gì?

**Màn hình xuất** là một "đầu ra" nội dung. Mỗi Màn hình xuất là một cửa sổ riêng, gán vào một màn hình vật lý (máy chiếu, TV) hoặc chạy ở dạng cửa sổ trên màn hình chính.

Có đúng **một Màn hình chính (Master)** — màn hội chúng nhìn. Các màn còn lại là **Màn hình phụ (Follower)**.

::: tip Màn hình chính là cố định
Không có nút "đặt làm Màn hình chính". Đây là quyết định thiết kế có chủ ý: mọi thứ trong hệ thống (danh sách phát, điều hướng, điều khiển từ xa) đều lấy Màn hình chính làm mốc. Cho phép đổi mốc giữa chừng sẽ sinh ra cả một lớp lỗi khó tìm.
:::

Ví dụ Hội Thánh dùng nhiều màn:

| Màn hình xuất | Chiếu gì |
|---|---|
| **Màn hình chính** | Lời thánh ca, câu Kinh Thánh cho hội chúng |
| **Song ngữ** | Cùng nội dung nhưng bản dịch khác |
| **Sảnh chờ** | Thông báo, không cần theo bài giảng |
| **Ban hát** | Lời bài hát + câu kế tiếp |

---

## 2. Cấu hình Màn hình xuất

Mở **⚙** trên thanh Studio → tab **🖥 Màn hình xuất**.

| Thiết lập | Ý nghĩa |
|---|---|
| **Tên Màn hình xuất** | Đặt tên dễ hiểu: `Màn chính`, `Song ngữ`, `Sảnh chờ` |
| **Thêm / Xóa Màn hình xuất** | Quản lý danh sách |
| **Kích thước khung** | Chọn tỉ lệ có sẵn hoặc **Tùy chỉnh…** rồi nhập Chiều rộng/Chiều cao |
| **Dùng màn hình vật lý** | Gán vào máy chiếu/TV cụ thể; **Tự động chọn màn hình** để ứng dụng tự dò; màn có nhãn **(chính)** là màn máy tính của bạn |
| **Tắt hoạt cảnh cho Màn hình xuất này** | Dành cho màn hình yếu hoặc nội dung cần đơn giản |
| **Phát** | Mở màn hình xuất này ngay |
| **Mở tất cả Màn hình xuất** | Bật toàn bộ cùng lúc |

::: warning Cắm màn hình trước khi cấu hình
Hãy cắm máy chiếu/TV và để Windows nhận ra nó **trước** khi vào gán màn hình vật lý. Nếu gán rồi mới cắm, hãy quay lại kiểm tra lại thiết lập này.
:::

Để tắt trình chiếu: **Tắt màn hình chiếu** (trên thanh lệnh Studio) hoặc nút **⛔** trên cửa sổ Điều khiển.

---

## 3. Nếu bạn chỉ có một máy chiếu

Thì công việc chỉ có vậy:

1. Cắm máy chiếu.
2. Vào **⚙ → Màn hình xuất**, gán **Màn hình chính** vào máy chiếu đó.
3. Bấm **Phát**.
4. Dùng [Cửa sổ Điều khiển](/guide/controller) để bấm Trước/Sau.

Phần dưới đây chỉ cần khi bạn có từ hai màn trở lên.

---

## 4. Luồng màn hình — kịch bản phối hợp

Câu hỏi cần trả lời: *"Khi Màn hình chính đang chiếu slide X, thì Màn hình phụ chiếu gì?"*

Có **5 câu trả lời**:

| Hành động | Màn hình phụ sẽ |
|---|---|
| **Theo mặc định** | Không đặt riêng — dùng quy tắc chung |
| **Sao chiếu** | Chiếu **y hệt** màn chính, cùng slide, cùng bước |
| **Hiện slide…** | Chiếu **một slide khác** do bạn chỉ định |
| **Giữ nguyên** | **Không đổi gì** — giữ nội dung nó đang chiếu |
| **Ẩn hình** | Màn đen |

### Bốn ví dụ thực tế

| Tình huống | Đặt gì |
|---|---|
| Màn song ngữ cần chiếu bản dịch khác cùng lúc | **Hiện slide…** trỏ tới slide bản dịch tương ứng |
| Ban hát cần thấy lời bài hát trong lúc mục sư giảng | **Giữ nguyên** |
| Màn sảnh chờ không nên chiếu bài giảng | **Ẩn hình**, hoặc **Hiện slide…** một slide thông báo |
| Màn phụ chỉ cần lặp lại màn chính | **Sao chiếu** |

---

## 5. Dùng bảng Luồng màn hình

Mở **⚙** → tab **🔀 Luồng màn hình**. Màn hình chia **3 cột**:

```
┌─ Trình tự Màn hình chính ─┬─ Màn hình xuất đang sửa ─┬─ Nguồn Slide ─┐
│  slide 1                  │  Sao chiếu               │  slide 12     │
│  slide 2                  │  Hiện slide → slide 12   │  slide 13     │
│  slide 3                  │  Giữ nguyên              │  …            │
└───────────────────────────┴──────────────────────────┴───────────────┘
```

- **Cột trái** — trình tự slide của Màn hình chính.
- **Cột giữa** — điều bạn muốn Màn hình phụ làm ở mỗi slide đó.
- **Cột phải** — kho slide để kéo sang khi chọn *Hiện slide…* (có ô tìm theo tiêu đề, nội dung, tham chiếu).

### Kéo-thả theo cặp

Bạn chọn nhiều mục ở hai bên rồi kéo. Ứng dụng xử lý theo **3 quy tắc**:

| Bạn chọn | Kết quả |
|---|---|
| **1 nguồn → nhiều đích** | Áp cùng một slide nguồn cho tất cả đích |
| **N nguồn → N đích** (bằng nhau) | Ghép cặp lần lượt 1-1 |
| **N nguồn → M đích** (khác nhau, cả hai đều > 1) | **Ứng dụng không tự đoán** — hiện hộp thoại hỏi bạn |

::: tip Vì sao không tự đoán?
Vì khi số lượng lệch nhau, mọi cách ghép đều có thể sai, và sai ở đây nghĩa là **chiếu nhầm slide trước mặt hội chúng**. Hỏi lại một câu rẻ hơn nhiều so với một sự cố.
:::

### Luôn có bản xem trước

Trước khi áp thật, ứng dụng hiện **Xem trước N thay đổi**. Hãy đọc rồi mới xác nhận.

### Hai nút tiết kiệm thời gian

- **Sao chép từ Màn hình xuất khác** — lấy nguyên kịch bản của một màn đã cấu hình.
- **Về mặc định** — xóa mọi thiết lập riêng của màn hình đang sửa.

---

## 6. Hai cơ chế dễ nhầm với nhau

Người mới thường lẫn lộn hai thứ sau. Hãy phân biệt rõ:

| | **Khóa Màn hình xuất** (Khóa Nhóm) | **Luồng màn hình** (Routing) |
|---|---|---|
| Trả lời câu hỏi | *Slide này thuộc về màn nào?* | *Màn phụ làm gì khi màn chính ở slide X?* |
| Ảnh hưởng | Slide bị loại khỏi danh sách phát của màn chính | Không đổi danh sách phát, chỉ đổi nội dung màn phụ |
| Đặt ở đâu | Bảng Khóa của Nhóm | ⚙ → Luồng màn hình |

Một cấu hình đầy đủ thường dùng **cả hai**: Khóa để tách nội dung riêng của từng màn, Routing để mô tả cách các màn phối hợp theo thời gian.

---

## 7. Lỗi thường gặp

**"Màn hình xuất mở ra nhưng trắng trơn."**
Chưa có slide nào được chiếu. Bấm một slide trong cửa sổ Điều khiển.

**"Bấm Trước/Sau mà màn hình thật không đổi."**
Màn hình xuất **chưa được mở**. Điều hướng chỉ cập nhật nội dung; nó **không tự bật** cửa sổ màn hình. Bấm **Phát** trước.

**"Màn phụ kẹt ở màn đen."**
Nó đang ở trạng thái *Ẩn hình*. Bấm **Bật lại hình** trong cửa sổ Điều khiển, hoặc sửa lại Luồng màn hình.

**"Màn phụ không chịu theo màn chính."**
Nó có thể đang ở chế độ ghi đè thủ công. Bấm **🔗 Theo Màn hình chính** trong cửa sổ Điều khiển.

**"Tôi đặt Luồng màn hình xong mà không thấy tác dụng."**
Kiểm tra bạn đã **xác nhận** ở bản xem trước thay đổi chưa, và đang sửa đúng Màn hình phụ chưa (không phải Màn hình chính).

::: warning Ghi chú trung thực về độ hoàn thiện
Cơ chế Luồng màn hình đã chạy được đầy đủ nhưng **chưa có bộ kiểm thử tự động** cho các thao tác kéo-thả phức tạp. Nếu Hội Thánh bạn dùng nhiều màn, hãy **chạy thử trọn một lượt** vào tối thứ Bảy, đừng thử lần đầu vào sáng Chúa nhật.
:::

---

## Bài thực hành

1. Vào **⚙ → Màn hình xuất**, thêm một màn hình xuất tên `Thử nghiệm`, để nó chạy ở dạng cửa sổ (không gán màn vật lý). Bấm **Phát**.
2. Trong cửa sổ Điều khiển, bấm một slide bất kỳ — quan sát cả hai màn.
3. Vào **⚙ → Luồng màn hình**, chọn màn `Thử nghiệm`, đặt slide đầu là **Sao chiếu**, slide thứ hai là **Giữ nguyên**, slide thứ ba là **Ẩn hình**. Đọc bản xem trước rồi xác nhận.
4. Bấm Trước/Sau và quan sát màn phụ ở từng bước. Giải thích từng hành vi.
5. Thử kéo 3 slide nguồn sang 2 đích để thấy hộp thoại hỏi khi số lượng lệch nhau.
6. Bấm **Về mặc định** để dọn sạch cấu hình thử nghiệm.

Bài tiếp theo: [Lớp phủ](/guide/overlays).

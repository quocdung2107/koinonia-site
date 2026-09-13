# Nhóm & Khóa Nhóm

**Mục tiêu:** sau bài này bạn tổ chức được một buổi nhóm thành các Nhóm rõ ràng, và dùng Khóa Nhóm để nội dung quan trọng không bị xô lệch trong lúc vận hành.

---

## 1. Nhóm là gì và không là gì

**Nhóm** là một cái rổ có tên đựng slide: `Thánh ca mở đầu`, `Kinh Thánh đối đáp`, `Bài giảng`, `Thông báo`.

Nhóm cho bạn bốn thứ:

1. **Sắp xếp** — nhìn một buổi nhóm theo cấu trúc thay vì theo 60 slide rời.
2. **Áp phong cách chung** — đặt màu/kiểu chữ cho cả Nhóm.
3. **Tái sử dụng** — lưu Nhóm thành Mẫu để tuần sau dùng lại.
4. **Khóa** — chống xô lệch. Xem mục 4.

::: danger Nhắc lại điều quan trọng nhất
**Nhóm không phải là Danh sách phát.** Nhóm là cách bạn *sắp xếp*; Danh sách phát là *thứ tự chiếu thật* mà nút Trước/Sau đi qua. Chúng thường trùng nhau, nhưng không phải lúc nào cũng vậy. Nút **Xem Danh sách phẳng (thứ tự thật)** trong Cây Nhóm luôn là nơi bạn kiểm chứng thứ tự thật.
:::

---

## 2. Thao tác cơ bản với Nhóm

Trong **Cây Nhóm** (cột trái của Studio):

| Việc | Cách làm |
|---|---|
| Tạo nhóm | **Tạo nhóm mới**, đặt tên |
| Đổi tên | Chọn nhóm → **Đổi tên** |
| Thêm slide vào nhóm | Kéo-thả slide vào nhóm, hoặc chọn slide → **Thêm vào nhóm khác** |
| Bỏ slide khỏi nhóm | Chọn slide → **Bỏ khỏi nhóm này** |
| Nhân bản nhóm | **Nhân bản Nhóm** (tên mới có hậu tố *(bản sao)*) |
| Gộp nhóm | **Gộp với nhóm khác** |
| Bỏ nhóm | **Bỏ nhóm (giữ câu)** — slide vẫn còn, chỉ ra khỏi nhóm |
| Xóa nhóm | **Xóa nhóm (kèm câu)** — xóa cả slide bên trong, **không hoàn tác được** |
| Ẩn cả nhóm | **Ẩn/hiện cả nhóm** |
| Nhóm lại | **Nhóm lại** — gom các slide của nhóm đang nằm rải rác về liền nhau |

Slide chưa thuộc nhóm nào nằm ở mục **Chưa vào nhóm nào** cuối danh sách.

### Chọn nhanh trong nhóm

**Chọn tất cả** · **Chọn chẵn** · **Chọn lẻ** — để áp định dạng hàng loạt.

### Cách chọn và kéo-thả (áp dụng toàn ứng dụng)

| Thao tác | Kết quả |
|---|---|
| Bấm thường | Thay hẳn lựa chọn hiện tại |
| **Ctrl/Cmd + bấm** | Thêm/bớt từng mục |
| **Shift + bấm** | Chọn cả khoảng liên tục |
| Kéo một mục **đang trong** lựa chọn | Kéo cả khối đã chọn |
| Kéo một mục **chưa** được chọn | Lựa chọn tự đổi thành đúng mục đó rồi kéo |

---

## 3. Đề xuất cấu trúc cho một buổi nhóm

```
📁 Mở đầu            — chào, câu gốc chủ đề
📁 Thánh ca mở đầu   — 2 bài
📁 Kinh Thánh        — đoạn đọc chung
📁 Bài giảng         — sinh từ Sổ tay
📁 Thánh ca đáp ứng
📁 Thông báo
📁 Kết thúc          — lời chúc phước
```

Cấu trúc này lặp lại được mỗi tuần, và chính là thứ bạn nên **Lưu làm Khuôn Phiên Thờ Phượng**.

---

## 4. Khóa Nhóm — 5 khóa độc lập

Bảng **Khóa (Lock)** của mỗi Nhóm có **5 công tắc riêng biệt**. Chúng **cộng dồn**: bật cái nào thì ràng buộc cái đó, không cái nào tự kéo theo cái khác.

| Khóa | Ngăn chuyện gì |
|---|---|
| **Thứ tự (Order)** | Giữ đúng thứ tự tương đối của các slide trong nhóm |
| **Khối liền kề (Nhóm)** | Bắt các slide phải nằm sát nhau, không cho slide khác chen vào giữa |
| **Thành viên (Membership)** | Không cho thêm/bớt slide khỏi nhóm — kể cả xóa một slide đang là thành viên |
| **Tỉ lệ khung hình (Canvas)** | Chỉ nhận slide cùng tỉ lệ khung hình với các slide hiện có |
| **Màn hình xuất** | Gắn cả nhóm vào **một Màn hình xuất cụ thể** — xem mục 5 |

### Vì sao cần khóa?

Vì lúc 9 giờ sáng Chúa nhật, một cú kéo-thả nhầm có thể phá vỡ trật tự bài hát mà không ai kịp nhận ra. Khóa biến những sai sót đó thành **thông báo chặn**, thay vì thành sự cố trên màn chiếu.

Khi một thao tác bị khóa chặn, ứng dụng hiện hộp thoại **"Bị chặn bởi Khóa Nhóm"** và nói rõ khóa nào đang chặn.

### Hai trợ giúp thông minh

- **Gom & Khóa** — khi bạn bật *Khối liền kề* mà các slide đang nằm rải rác, ứng dụng hỏi: *"Gom lại thành 1 khối liền kề rồi bật Khóa Nhóm?"*. Đồng ý là nó tự gom giúp.
- **Bật cả 3** — khi bạn bật *Khóa Màn hình xuất*, ứng dụng đề nghị bật kèm *Khóa Nhóm* + *Khóa Canvas*, vì ba khóa này thường đi cùng nhau để nội dung ổn định. Bạn vẫn chọn được **Chỉ bật Khóa Màn hình xuất**.

### Cảnh báo lệch thứ tự

Nếu thứ tự thật đã lệch so với thứ tự đã khóa, ứng dụng hiện cảnh báo kèm nút **Sửa trình tự theo Nhóm** để đưa về đúng.

::: warning Chưa có Hoàn tác gộp
Các thao tác Khóa Nhóm hiện **chưa gộp thành một bước Hoàn tác duy nhất**. Hãy cân nhắc trước khi bật/tắt khóa trên nhóm lớn.
:::

---

## 5. Khóa Màn hình xuất — khóa đặc biệt nhất

Bốn khóa đầu nói về **trật tự**. Khóa thứ năm nói về **slide này thuộc về màn hình nào**.

Khi bạn khóa một Nhóm vào Màn hình xuất `Song ngữ`:

- Các slide đó **biến mất khỏi Danh sách phát của Màn hình chính** — bấm Trước/Sau ở màn chính sẽ **không** đi qua chúng.
- Chúng **chỉ xuất hiện** trong danh sách điều khiển của Màn hình xuất `Song ngữ`.

### Ví dụ cụ thể

Bạn có 7 slide. Slide 3 và 5 được khóa cho Màn hình xuất phụ.

```
Danh sách phát của Màn hình chính:  1 → 2 → 4 → 6 → 7
Màn hình xuất phụ nhìn thấy:        [khối khóa: 3, 5]  +  [các slide thường]
```

::: tip Dùng khi nào?
Ca dùng điển hình: phụ đề song ngữ, hoặc màn hình riêng cho ban hát với nội dung khác màn hội chúng. Slide dành riêng cho màn đó không được phép lọt vào lượt bấm của màn chính.
:::

Chi tiết cách các màn hình phối hợp: xem [Màn hình xuất & Luồng màn hình](/guide/outputs).

---

## 6. Lỗi thường gặp

**"Tôi kéo slide mà không được, hiện hộp thoại chặn."**
Nhóm đang bật khóa. Đọc tên khóa trong hộp thoại, tắt khóa đó nếu bạn thật sự muốn đổi.

**"Slide có trong nhóm nhưng bấm Sau không đi qua."**
Hai khả năng: slide đang **ẩn**, hoặc nhóm đang bị **khóa cho Màn hình xuất khác**.

**"Thứ tự trong Cây Nhóm khác với thứ tự chiếu thật."**
Chuyện này có thể xảy ra. Hãy tin vào **Xem Danh sách phẳng (thứ tự thật)** và dùng **Sửa trình tự theo Nhóm** nếu cần.

**"Tôi xóa nhầm nhóm kèm slide."**
Không hoàn tác được. Đây chính là lý do nên **Lưu vào Thư viện Mẫu** những Nhóm quan trọng ngay sau khi dựng xong.

---

## Bài thực hành

1. Tạo 3 Nhóm: `Thánh ca mở đầu`, `Kinh Thánh`, `Bài giảng`. Kéo slide vào từng nhóm.
2. Dùng **Ctrl+bấm** chọn 3 slide không liền nhau rồi kéo cả khối vào một nhóm.
3. Bật **Khóa Thứ tự** cho `Thánh ca mở đầu`, rồi thử kéo đổi chỗ hai slide bên trong — quan sát hộp thoại chặn.
4. Cố ý kéo một slide của nhóm khác chen vào giữa `Thánh ca mở đầu`, sau đó bật **Khóa Khối liền kề** và dùng **Gom & Khóa**.
5. So sánh **Xem theo Nhóm** với **Xem Danh sách phẳng (thứ tự thật)** — hai danh sách có giống nhau không?
6. Chọn nhóm `Kinh Thánh`, dùng **Chọn chẵn/lẻ** để áp hai màu chữ xen kẽ cho việc đọc đối đáp.

Bài tiếp theo: [Màn hình xuất & Luồng màn hình](/guide/outputs).

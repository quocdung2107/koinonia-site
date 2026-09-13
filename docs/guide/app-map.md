# Bản đồ ứng dụng

**Mục tiêu:** sau bài này bạn gọi đúng tên mọi thứ trong Koinonia, biết mỗi cửa sổ dùng để làm gì, và hiểu dữ liệu của bạn đang được lưu ở đâu.

Đây là bài quan trọng nhất trong bộ hướng dẫn. Gần như mọi nhầm lẫn của người mới đều bắt nguồn từ việc chưa phân biệt được **Nhóm** với **Danh sách phát**, hay **Phiên Thờ Phượng** với **Danh sách cục bộ**.

---

## 1. Ba cửa sổ, ba nhiệm vụ

Koinonia không phải một cửa sổ duy nhất. Khi vận hành đầy đủ, bạn có ba loại cửa sổ chạy cùng lúc:

| Cửa sổ | Ai nhìn | Dùng để |
|---|---|---|
| **Cửa sổ chính** | Người chuẩn bị | Đọc Kinh Thánh, Sổ tay, Trình Chiếu (Studio), Trung tâm Phiên Thờ Phượng |
| **Cửa sổ Điều khiển** | Người vận hành | Bấm Trước/Sau, chọn slide, bật/tắt Lớp phủ trong lúc đang chiếu |
| **Màn hình xuất** | Hội chúng | Chính là nội dung chiếu lên máy chiếu/TV. Có thể có **nhiều hơn một** |

::: tip Vì sao tách ra?
Vì người vận hành cần **thấy trước** slide kế tiếp, còn hội chúng thì không. Nếu chỉ có một cửa sổ, bạn buộc phải để hội chúng nhìn thấy mọi thao tác của mình.
:::

Cách mở:

- **Cửa sổ Điều khiển**: trong Studio, bấm **🎮 Điều khiển** trên thanh trên cùng. Bấm lần nữa để đóng.
- **Màn hình xuất**: bấm **Phát** trên một Màn hình xuất, hoặc **Mở tất cả Màn hình xuất**.

::: warning Đóng cửa sổ nào thì thoát app?
Nút **✕** trên cửa sổ chính (Studio/Reader) **thoát hẳn ứng dụng**, đóng luôn mọi Màn hình xuất và tiến trình nền.
Nút **✕** trên cửa sổ Điều khiển **chỉ ẩn cửa sổ đó** — ứng dụng vẫn chạy, mở lại bằng **🎮 Điều khiển**.
:::

---

## 2. Hai không gian làm việc trong cửa sổ chính

Cửa sổ chính có hai "thế giới", chuyển qua lại bằng đúng hai nút:

- **Đọc Kinh Thánh (Reader)** — nơi bạn đọc, tìm, chọn câu, ghi chú, soạn Sổ tay bài học.
  → Sang Studio bằng nút **🎬 Trình Chiếu** ở thanh công cụ trên cùng.
- **Trình Chiếu (Studio)** — nơi bạn dựng slide, nhóm, màn hình xuất, lớp phủ.
  → Quay lại bằng nút **← Quay lại Reader**.

Ngoài ra Studio còn một lối vào thứ ba: **🗄 Trung tâm Phiên Thờ Phượng** — nơi quản lý file dự án và thư viện nội dung dùng lại.

---

## 3. Từ điển thuật ngữ — học thuộc 8 từ này

Đây là 8 từ bạn sẽ gặp liên tục. Hiểu sai một từ là hiểu sai cả hệ thống.

### Slide
Một trang nội dung sẽ hiện lên màn hình. Koinonia có **4 kiểu slide**: `Kinh Thánh`, `Bài hát`, `Tự do` (nhiều đoạn văn bản), `Canvas` (tự do xếp lớp chữ/ảnh/video).

### Nhóm
Một **cái rổ đựng slide có tên** — ví dụ "Thánh ca mở đầu", "Bài giảng CN 12/10". Nhóm dùng để sắp xếp, để áp cùng một kiểu chữ/màu, để khóa, và để lưu lại tái sử dụng.

### Danh sách phát (Playlist)
**Thứ tự thật** mà nút Trước/Sau sẽ đi qua.

::: danger Đây là chỗ hay nhầm nhất
**Nhóm ≠ Danh sách phát.** Nhóm là cách bạn *sắp xếp* nội dung; Danh sách phát là *thứ tự chiếu thật*. Một slide có thể nằm trong Nhóm nhưng bị loại khỏi Danh sách phát của Màn hình chính (vì bị khóa riêng cho một Màn hình xuất khác). Trong Studio, nút **Xem Danh sách phẳng (thứ tự thật)** luôn cho bạn thấy thứ tự thật, khác với cách hiển thị theo Nhóm.
:::

### Màn hình xuất (Output)
Một "đầu ra" nội dung. Thường thì:
- **Màn hình chính (Master)** — màn hình cho hội chúng.
- Các **Màn hình xuất phụ (Follower)** — ví dụ màn phụ đề song ngữ, màn cho ban hát, màn sảnh chờ.

Mỗi Màn hình xuất được gán vào một màn hình vật lý (máy chiếu, TV) hoặc chạy dạng cửa sổ.

### Luồng màn hình (Routing)
Kịch bản trả lời câu hỏi: *"Khi Màn hình chính chiếu slide X thì Màn hình phụ chiếu cái gì?"* — Sao chiếu, Giữ nguyên, Ẩn hình, hay Hiện một slide khác. Xem [Màn hình xuất & Luồng màn hình](/guide/outputs).

### Lớp phủ (Overlay)
Thứ nằm **đè lên** slide và không đổi khi bạn chuyển slide: logo góc màn hình, chữ chạy thông báo, đồng hồ đếm ngược, nền, khung giới thiệu diễn giả.

### Phiên Thờ Phượng (Project)
Một **file dự án** chứa trọn buổi nhóm: slide, nhóm, màn hình xuất, luồng màn hình, lớp phủ. File có đuôi `.kproj` trên máy bạn, và xuất ra `.kon` khi muốn gửi cho người khác.

### Thư viện Mẫu (Model Library)
Kho nội dung **dùng lại giữa các Phiên Thờ Phượng**: một bài thánh ca, một bộ slide thông báo, một cấu hình màn hình xuất. Lưu một lần, áp dụng cho mọi tuần sau.

---

## 4. Dữ liệu của bạn nằm ở đâu?

Koinonia có **hai chế độ lưu trữ chạy song song**. Biết mình đang ở chế độ nào là điều bắt buộc.

| | **Danh sách cục bộ** (mặc định) | **Phiên Thờ Phượng** (khuyến nghị) |
|---|---|---|
| Khi nào | Khi bạn chưa mở Phiên Thờ Phượng nào | Khi đã tạo/mở một Phiên Thờ Phượng |
| Dấu hiệu trên màn hình | Không có huy hiệu 📂 ở thanh trên cùng | Có huy hiệu **📂 \<tên phiên\>** ở thanh trên cùng |
| Slide lưu ở đâu | Bộ nhớ cục bộ của ứng dụng | File `.kproj` riêng của phiên đó |
| Lớp phủ | **Không dùng được** | Dùng được đầy đủ |
| Gửi cho người khác | Không | Có — xuất file `.kon` |

::: danger Khuyến nghị quan trọng
**Hãy tạo một Phiên Thờ Phượng ngay từ đầu cho mỗi buổi nhóm.** Danh sách cục bộ chỉ nên dùng để nghịch thử. Nó lưu trong bộ nhớ tạm của ứng dụng, không xuất ra file được, không dùng được Lớp phủ, và nếu bộ nhớ đó bị xóa (gỡ cài đặt, dọn dữ liệu ứng dụng) thì slide mất trong khi các Nhóm vẫn còn — bạn sẽ thấy những Nhóm rỗng trỏ tới slide không còn tồn tại.
:::

Ngoài ra có hai kho **không phụ thuộc Phiên Thờ Phượng nào**, luôn còn đó dù bạn đóng/xóa phiên:

- **Kinh Thánh, Ghi chú, Nhãn, Sổ tay bài học** — thuộc về bạn, không thuộc về buổi nhóm nào.
- **Thư viện Mẫu, Bộ sưu tập, Khuôn Phiên Thờ Phượng** — kho dùng lại chung.

---

## 5. Dòng chảy công việc một tuần điển hình

```
       Đọc Kinh Thánh ──► chọn câu ──► Ghi chú
              │                          │
              └──────► Sổ tay bài học ◄──┘
                            │
                   "✅ Sinh Slide"
                            ▼
   Trung tâm Phiên Thờ Phượng ──► tạo "CN 12/10"
                            │
                            ▼
                   Trình Chiếu (Studio)
             dựng Nhóm · chỉnh slide · Lớp phủ
                            │
              ┌─────────────┴─────────────┐
              ▼                           ▼
     Cửa sổ Điều khiển          Điều khiển từ xa (điện thoại)
              │                           │
              └──────────► Màn hình xuất ◄┘
                        (hội chúng nhìn thấy)
```

---

## 6. Lỗi thường gặp của người mới

**"Tôi thêm Lớp phủ nhưng nút bị mờ."**
Bạn đang ở Danh sách cục bộ. Lớp phủ chỉ dùng được khi có Phiên Thờ Phượng đang mở.

**"Tôi bấm Sau mà slide nhảy lung tung / bỏ qua slide."**
Slide đó có thể đang bị **ẩn**, hoặc bị **khóa riêng cho một Màn hình xuất khác** nên không nằm trong Danh sách phát của Màn hình chính. Mở **Xem Danh sách phẳng (thứ tự thật)** để kiểm chứng.

**"Tôi đóng app rồi mở lại, thứ tự slide quay về cũ."**
Bạn đang ở Danh sách cục bộ, và thao tác vừa rồi chưa kịp lưu. Hãy chuyển sang làm việc trong một Phiên Thờ Phượng.

**"Máy chạy chậm dần sau nhiều lần mở app."**
Hãy đóng ứng dụng bằng nút **✕ trên cửa sổ chính**, không phải chỉ đóng các cửa sổ phụ. Đóng đúng cách sẽ tắt hẳn tiến trình nền.

---

## Bài thực hành

1. Mở app, nhìn lên thanh trên cùng của Studio: bạn có thấy huy hiệu **📂** không? Nếu không, bạn đang ở Danh sách cục bộ — hãy nói to ra điều đó cho quen.
2. Vào **🗄 Trung tâm Phiên Thờ Phượng**, tạo một phiên tên `Tập làm quen`, bấm **Mở trong Trình Chiếu**. Quay lại Studio và xác nhận huy hiệu 📂 đã xuất hiện.
3. Chỉ vào từng vùng của Studio và gọi tên: đâu là danh sách **Nhóm**, đâu là **Danh sách phẳng**, đâu là nút mở **Màn hình xuất**.
4. Tự trả lời không nhìn lại: *Nhóm khác Danh sách phát ở điểm nào?*

Xong bài này, chọn nhánh phù hợp với vai trò của bạn ở [trang Bắt đầu](/guide/getting-started#nên-học-theo-thứ-tự-nào).

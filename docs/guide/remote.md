# Điều khiển từ xa bằng điện thoại

**Mục tiêu:** sau bài này mục sư, người hát dẫn hoặc bất kỳ ai trong ban phục vụ đều bấm slide được từ điện thoại — với đúng quyền hạn bạn cho phép.

**Không cần cài ứng dụng gì trên điện thoại.** Chỉ cần trình duyệt.

---

## 1. Cách hoạt động

Máy tính chạy Koinonia mở một trang web nhỏ **ngay trên mạng nội bộ của bạn**. Điện thoại mở trang đó bằng trình duyệt, nhập mã PIN, xin quyền, người vận hành duyệt — thế là bấm được.

Ba điều kiện:

1. Điện thoại và máy tính **cùng một mạng Wifi/LAN**.
2. Máy tính đang chạy Koinonia và đã **bật server**.
3. Người vận hành ở máy tính **duyệt** thiết bị đó.

::: tip Không cần Internet
Toàn bộ chuyện này diễn ra trong mạng nội bộ Hội Thánh. Mất mạng Internet không ảnh hưởng gì — miễn là router Wifi vẫn chạy.
:::

---

## 2. Bật server (làm ở máy tính)

1. Trong Studio, bấm **📡 Điều khiển từ xa**.
2. Bấm **Bật server**. Trạng thái đổi thành **Đang chạy**.
3. Bảng hiện ra ba thứ:
   - **Mã PIN** — 4 chữ số
   - **Địa chỉ IP** — địa chỉ điện thoại cần mở
   - **Mã QR** — quét bằng camera điện thoại là vào thẳng

::: warning Nếu không bật được server
Thông báo lỗi thường là **cổng 8770 đang bị chương trình khác chiếm**. Hãy tắt phần mềm đang dùng cổng đó rồi thử lại. Nếu báo **không tìm thấy địa chỉ IP mạng LAN**, máy tính chưa nối Wifi/dây mạng.
:::

---

## 3. Kết nối từ điện thoại

1. Mở camera điện thoại, **quét mã QR** trên màn hình (hoặc gõ tay địa chỉ IP vào trình duyệt).
2. Nhập **mã PIN**.
3. Màn hình **Đang xem** hiện ra, gồm hai nhóm nút:
   - **Xin quyền điều khiển: \<tên màn hình\>** — cho mỗi Màn hình xuất
   - **Xem toàn màn hình: \<tên màn hình\>** — chỉ xem, không điều khiển

::: tip Nên dùng Chrome trên điện thoại
Trang điều khiển vẽ lại slide bằng chính bộ máy của ứng dụng. Chrome cho kết quả sát nhất với màn chiếu thật. Safari/iPhone vẫn chạy được nhưng có thể hiển thị hơi khác.
:::

### Chế độ chỉ xem — không cần duyệt

Nút **Xem toàn màn hình** cho phép **bất kỳ ai có PIN** xem nội dung đang chiếu, toàn màn hình, **không cần người vận hành duyệt**. Đây là thiết kế có chủ ý: rất tiện cho ban hát, người phiên dịch, người ngồi cuối hội trường.

Màn xem có hai nút nhỏ ở góc: **⛶ Toàn màn hình** và **✕ Thoát**.

::: tip Màn hình điện thoại không tự tắt
Ứng dụng tự giữ màn hình điện thoại luôn sáng khi đang kết nối — cả ở màn xem lẫn màn điều khiển. Bạn không phải chạm liên tục để màn khỏi tắt.
:::

---

## 4. Duyệt thiết bị (làm ở máy tính)

Khi một điện thoại xin quyền, bảng **📡 Điều khiển từ xa** hiện nó trong mục **Đang chờ duyệt** (và nút 📡 trên thanh Studio có huy hiệu số).

Với mỗi yêu cầu:

1. Xem tên thiết bị và **màn hình nó xin điều khiển**.
2. Chọn **Vai trò** trong ô dropdown (danh sách đã lọc đúng theo màn hình đó).
3. Bấm **Duyệt**.

Nếu Màn hình xuất tương ứng **chưa được mở**, ứng dụng hỏi ngay: *"Mở Màn hình xuất ngay?"*

- **Mở Màn hình xuất** — bật luôn, để thao tác trên điện thoại có hiệu lực thật.
- **Để sau** — thiết bị **vẫn được duyệt**, chỉ là chưa mở màn hình.

::: tip Vì sao có câu hỏi này?
Vì bấm Tiến/Lùi chỉ **cập nhật nội dung**, nó **không tự bật** cửa sổ màn hình xuất. Nếu chưa mở màn, người cầm điện thoại sẽ bấm mà chẳng thấy gì xảy ra trên màn chiếu và tưởng hỏng.
:::

Muốn ngắt quyền: bấm **Thu hồi** trên dòng thiết bị.

---

## 5. Vai trò — cho ai bấm được cái gì

Đây là phần mạnh nhất của tính năng này. Mở **Quản lý vai trò** trong bảng Điều khiển từ xa.

Mỗi Vai trò gồm:

| Thiết lập | Ý nghĩa |
|---|---|
| **Tên vai trò** | `Mục sư`, `Ban hát`, `Phiên dịch`… |
| **Áp dụng cho màn hình** | Màn hình chính, hoặc một Màn hình xuất cụ thể |
| **Quyền được phép** | **Tiến/Lùi** · **Về đầu/Đến cuối** · **Ẩn màn hình** · **Theo màn hình chính** |
| **Giới hạn trong Nhóm** | Chỉ cho đi lại **trong một Nhóm** — hoặc *Không giới hạn (toàn bộ Playlist)* |

Hai vai trò mẫu nên tạo sẵn:

| Vai trò | Màn hình | Quyền | Giới hạn Nhóm |
|---|---|---|---|
| **Mục sư** | Màn hình chính | Tiến/Lùi | Nhóm `Bài giảng` |
| **Ban hát** | Màn `Ban hát` | Tiến/Lùi, Về đầu/Đến cuối | Nhóm `Thánh ca` |

### Giới hạn trong Nhóm hoạt động thế nào?

- Bấm Tiến/Lùi chỉ đi **trong Nhóm đó**, tới biên thì **dừng lại**, không tràn sang phần khác.
- Nếu màn hình đang ở một slide **ngoài Nhóm**, bấm Tiến sẽ **nhảy về đầu Nhóm**.
- Quyền **Ẩn màn hình** / **Theo màn hình chính** **không bị** giới hạn Nhóm chặn.

### Khi Nhóm bị xóa hoặc rỗng

Điện thoại tự **vô hiệu nút Tiến/Lùi** và hiện dải cảnh báo đỏ với hai câu khác nhau:

- *Nhóm không còn tồn tại* — Nhóm đã bị xóa
- *Nhóm không còn slide* — Nhóm còn đó nhưng rỗng

Người vận hành vào **Quản lý vai trò**, sửa vai trò để trỏ sang Nhóm khác. Điện thoại **tự hết cảnh báo, không cần kết nối lại**.

::: tip Điện thoại không tự quyết định quyền của mình
Điện thoại chỉ **làm mờ nút** cho dễ nhìn. Mọi lệnh gửi lên đều được máy tính **kiểm tra lại từ đầu**. Nghĩa là kể cả khi ai đó can thiệp vào trang trên điện thoại, họ cũng không vượt quá được quyền bạn đã cấp.
:::

---

## 6. Nhiều điện thoại cùng lúc

Bạn cấp quyền cho **nhiều điện thoại**, mỗi cái một Màn hình xuất:

- Mục sư cầm máy điều khiển **Màn hình chính** trong phần bài giảng.
- Người phiên dịch cầm máy điều khiển **màn song ngữ**, chạy độc lập.
- Người hát dẫn điều khiển **màn ban hát**.

Các màn phụ chạy **độc lập** — người phiên dịch bấm Tiến không kéo theo màn chính.

Nếu hai người bấm gần như đồng thời trên cùng một màn hình, hệ thống **từ chối lệnh đến sau** để tránh nhảy hai slide. Lúc đó chỉ cần bấm lại.

---

## 7. Điều gì hiện được trên điện thoại?

- **Được**: nội dung slide thật, gồm cả **hoạt cảnh và từng bước xuất hiện** đúng như màn chiếu; ảnh và video nằm **trong slide**.
- **Chưa được**: **Lớp phủ** (logo, chữ chạy, đồng hồ) chưa hiển thị trên điện thoại — màn chiếu thật vẫn có đầy đủ.

---

## 8. Lỗi thường gặp

**"Điện thoại không mở được trang."**
Kiểm tra điện thoại có đang ở **đúng Wifi** của Hội Thánh không (rất hay quên — máy đang dùng 4G). Kiểm tra server hiện **Đang chạy**.

**"Nhập PIN báo sai."**
PIN đổi mỗi lần bật server. Xem lại PIN hiện tại trên bảng ở máy tính. Số lần thử sai bị giới hạn.

**"Bấm Tiến trên điện thoại nhưng màn chiếu không đổi."**
Màn hình xuất chưa được mở. Ở máy tính bấm **Phát** cho màn hình đó.

**"Nút trên điện thoại bị mờ."**
Vai trò được cấp không có quyền đó. Xem lại **Quản lý vai trò**.

**"Đang dùng thì điện thoại báo mất kết nối."**
Máy tính đã tắt server, ứng dụng đã đóng, hoặc Wifi rớt. Khi Koinonia trên máy tính gặp sự cố, mọi điện thoại nhận báo **mất kết nối ngay lập tức** thay vì treo im lặng — đó là hành vi đúng.

**"Slide trên điện thoại trông hơi khác màn chiếu."**
Trình duyệt điện thoại vẽ chữ hơi khác. Hãy dùng Chrome. **Luôn tin vào màn chiếu thật**, không tin điện thoại.

---

## 9. Checklist triển khai lần đầu

Làm một lần, trước buổi nhóm:

- [ ] Máy tính nối **dây mạng hoặc Wifi Hội Thánh** (không dùng mạng khách)
- [ ] Bật server, ghi lại IP và PIN
- [ ] Tạo sẵn Vai trò `Mục sư` và `Ban hát`
- [ ] Cho từng người quét QR, xin quyền, bạn duyệt kèm đúng Vai trò
- [ ] Mỗi người **bấm thử Tiến/Lùi vài lần** và nhìn màn chiếu xác nhận
- [ ] Dặn rõ: *ai bấm màn nào* — để tránh hai người cùng bấm một màn

---

## Bài thực hành

1. Bật server, quét QR bằng điện thoại của chính bạn, nhập PIN.
2. Trước tiên thử **Xem toàn màn hình** — xác nhận không cần ai duyệt.
3. Bấm **Xin quyền điều khiển: Màn hình chính**. Ở máy tính, duyệt **không gán Vai trò** và thử bấm Tiến/Lùi.
4. Tạo Vai trò `Mục sư` (Màn hình chính · chỉ Tiến/Lùi · giới hạn trong Nhóm `Bài giảng`). Thu hồi rồi duyệt lại kèm Vai trò này.
5. Trên điện thoại, đứng ở một slide **ngoài** Nhóm `Bài giảng` rồi bấm Tiến — quan sát nó nhảy về đầu Nhóm.
6. Bấm Tiến liên tục tới cuối Nhóm — xác nhận nó dừng lại, không tràn sang phần khác.
7. Xóa Nhóm `Bài giảng` ở máy tính — quan sát điện thoại hiện dải cảnh báo đỏ. Sửa Vai trò trỏ sang Nhóm khác và xác nhận điện thoại tự phục hồi.

Bài tiếp theo: [Quy trình & Checklist Chúa nhật](/guide/service-checklist).

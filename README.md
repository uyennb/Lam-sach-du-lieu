# DataCleaner Pro - Phần mềm làm sạch & chuẩn hoá dữ liệu liên hệ

Phần mềm giao diện web giúp trích xuất, làm sạch và chuẩn hoá danh sách số điện thoại và email từ các nguồn dữ liệu thô (như bình luận Facebook/diễn đàn, danh sách copy-paste).

## 🌟 Tính năng chính

- **Trích xuất thông tin tự động**: Tự động nhận diện cấu trúc bình luận (Tên người dùng, thời gian, nội dung bình luận) hoặc trích xuất dòng theo dòng.
- **Chuẩn hoá Email**:
  - Loại bỏ các khoảng trắng dư thừa trong email (ví dụ: `huongpt_92@gmail .com` → `huongpt_92@gmail.com`).
  - Sửa lỗi gõ sai tên miền phổ biến (ví dụ: `gmai.com`, `gmal.com` → `gmail.com`).
  - Xoá bỏ dấu tiếng Việt trong tên email (ví dụ: `dụnglv` → `dunglv`).
  - Sửa lỗi đuôi email (ví dụ: `gmail.con`, `gmail.cơm` → `gmail.com`).
  - Sửa lỗi lặp dấu chấm (ví dụ: `gmail..com` → `gmail.com`).
- **Chuẩn hoá Số điện thoại**:
  - Chuyển đổi các đầu số quốc gia như `+84...` hoặc `84...` về đầu số di động chuẩn `0...`.
  - Phân loại nhà mạng di động Việt Nam (Viettel, VinaPhone, MobiFone, Vietnamobile, Gmobile, Itelecom, Wintel) dựa trên đầu số.
  - Kiểm tra độ dài hợp lệ (10 chữ số).
- **Giao diện quản lý thông minh**:
  - Hỗ trợ kéo thả file dữ liệu dạng `.txt` hoặc `.csv`.
  - Bảng hiển thị so sánh trực quan dữ liệu Gốc và dữ liệu đã Làm sạch.
  - Cho phép chỉnh sửa dữ liệu trực tiếp trên bảng (Double-click để sửa).
  - Lọc dữ liệu theo trạng thái (Hợp lệ, Đã sửa đổi, Lỗi định dạng, Không liên hệ).
  - Tải xuống file CSV kết quả hoặc sao chép nhanh toàn bộ email hợp lệ vào Clipboard.
- **Tích hợp bộ kiểm thử (Unit Tests)**: Giúp nhà phát triển kiểm tra trực quan các quy tắc chuẩn hoá ngay trên giao diện web.

## 🛠️ Công nghệ sử dụng

- **HTML5**: Cấu trúc ứng dụng ngữ nghĩa.
- **Vanilla CSS3**: Giao diện thiết kế theo phong cách hiện đại (Dark/Light mode, hiệu ứng Glassmorphism, Responsive).
- **Vanilla JavaScript**: Xử lý logic làm sạch, phân tích regex và quản lý trạng thái.
- **Lucide Icons**: Bộ thư viện icon hiện đại.

## 🚀 Hướng dẫn khởi chạy cục bộ

1. Clone dự án về máy tính của bạn.
2. Khởi chạy một server HTTP (ví dụ sử dụng Python):
   ```bash
   python3 -m http.server 8000
   ```
3. Mở trình duyệt và truy cập: `http://localhost:8000`.

## 📁 Cấu trúc thư mục

```
├── index.html   # Giao diện chính của ứng dụng
├── styles.css   # Định nghĩa giao diện & hiệu ứng
├── cleaner.js   # Thư viện xử lý logic làm sạch dữ liệu
├── app.js       # Quản lý sự kiện & hiển thị giao diện
└── README.md    # Hướng dẫn dự án
```

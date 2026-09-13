import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "vi-VN",

  title: "Koinonia Bible",
  base: "/koinonia-site/",
  head: [
    ["link", { rel: "icon", href: "/koinonia-site/favicon.ico" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&family=Big+Shoulders+Display:wght@700;800;900&family=JetBrains+Mono:wght@500&display=swap",
      },
    ],
  ],
  description: "Phần mềm đọc và trình chiếu Kinh Thánh",

  lastUpdated: true,

  themeConfig: {
    logo: "/images/Logo-1.svg",

    siteTitle: "Koinonia Bible",

    nav: [
      {
        text: "Trang chủ",
        link: "/",
      },

      {
        text: "Tải xuống",
        link: "/download",
      },

      {
        text: "Hướng dẫn",
        link: "/guide/getting-started",
      },

      {
        text: "Cộng đồng",
        link: "/community",
      },

      {
        text: "FAQ",
        link: "/faq",
      },

      {
        text: "GitHub",
        link: "https://github.com/quocdung2107/koinonia-site",
      },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "Bắt đầu",
          items: [
            { text: "Giới thiệu & cài đặt", link: "/guide/getting-started" },
            { text: "Bản đồ ứng dụng", link: "/guide/app-map" },
          ],
        },

        {
          text: "Chuẩn bị nội dung",
          items: [
            { text: "Đọc Kinh Thánh", link: "/guide/reader" },
            { text: "Tìm kiếm", link: "/guide/search" },
            { text: "Ghi chú & Nhãn", link: "/guide/notes" },
            { text: "Sổ tay bài học", link: "/guide/notebook" },
          ],
        },

        {
          text: "Tổ chức & lưu trữ",
          items: [
            { text: "Phiên Thờ Phượng", link: "/guide/projects" },
            { text: "Thư viện Mẫu & Bộ sưu tập", link: "/guide/model-library" },
          ],
        },

        {
          text: "Dựng slide",
          items: [
            { text: "Trình chiếu — tổng quan", link: "/guide/presentation" },
            { text: "Trình Chiếu (Studio)", link: "/guide/studio" },
            { text: "Slide & Canvas", link: "/guide/slides" },
            { text: "Nhóm & Khóa Nhóm", link: "/guide/groups" },
            { text: "Màn hình xuất & Luồng màn hình", link: "/guide/outputs" },
            { text: "Lớp phủ", link: "/guide/overlays" },
          ],
        },

        {
          text: "Vận hành buổi nhóm",
          items: [
            { text: "Cửa sổ Điều khiển", link: "/guide/controller" },
            { text: "Điều khiển từ xa bằng điện thoại", link: "/guide/remote" },
            { text: "Quy trình & Checklist Chúa nhật", link: "/guide/service-checklist" },
          ],
        },

        {
          text: "Tham khảo",
          items: [
            { text: "Cài đặt & Ngôn ngữ", link: "/guide/settings" },
            { text: "Xử lý sự cố", link: "/guide/troubleshooting" },
          ],
        },
      ],

      "/": [],
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/quocdung2107/koinonia-bible-app",
      },
    ],

    footer: {
      message: "Koinonia Bible là phần mềm miễn phí.",

      copyright: "Copyright © 2026 Koinonia Bible",
    },
  },
});

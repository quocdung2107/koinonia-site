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
            {
              text: "Giới thiệu",
              link: "/guide/getting-started",
            },

            {
              text: "Đọc Kinh Thánh",
              link: "/guide/reader",
            },

            {
              text: "Tìm kiếm",
              link: "/guide/search",
            },

            {
              text: "Trình chiếu",
              link: "/guide/presentation",
            },
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

import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "vi-VN",

  title: "Koinonia Bible",
  base: "/koinonia-site/",
  head: [["link", { rel: "icon", href: "/koinonia-site/favicon.ico" }]],
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

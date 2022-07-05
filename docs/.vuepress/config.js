module.exports = {
  title: "Hello VuePress",
  description: "Just playing around",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  themeConfig: {
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      { text: "Config", link: "/config/doc1" },
      {
        text: "github",
        link: "https://github.com/mewcoder",
        target: "_blank",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          collapsable: false,
          children: [""],
        },
      ],
      "/config/": [
        {
          title: "Config",
          collapsable: false,
          children: ["doc1", "doc2"],
        },
      ],
    },
  },
  // https://docs.chenjianhui.site/vuepress-plugin-demo-container/zh/
  plugins: ["@vuepress/plugin-back-to-top", "demo-container"],
};

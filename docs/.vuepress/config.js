module.exports = {
  title: "Hello VuePress",
  description: "Just playing around",
  port: "3000",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  themeConfig: {
    logo: "/logo.png",
    nav: [
      {
        text: "引导",
        link: "/guide/",
      },
      { text: "配置", link: "/config/doc1" },
      {
        text: "github",
        link: "https://github.com/mewcoder",
        target: "_blank",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "引导",
          collapsable: false,
          children: [""],
        },
      ],
      "/config/": [
        {
          title: "配置",
          collapsable: false,
          children: ["doc1", "doc2"],
        },
      ],
    },
  },
  // https://docs.chenjianhui.site/vuepress-plugin-demo-container/zh/
  plugins: ["@vuepress/plugin-back-to-top", "demo-container"],
};

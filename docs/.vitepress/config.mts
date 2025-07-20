import { defineConfig } from "vitepress";
import { defineTeekConfig } from "vitepress-theme-teek/config";

const teekBlogCommonConfig = {};

// Teek 主题配置
const teekConfig = defineTeekConfig({
  teekHome: true,
  vpHome: false,
  wallpaper: {
    enabled: true,
  },
  banner: {
    name: "",
    bgStyle: "partImg",
    imgSrc: [
      "/blog/bg1.webp",
      // "/blog/bg2.webp",
      // "/blog/bg3.webp",
      // "/blog/bg4.webp",
      // "/blog/bg5.webp",
      // "/blog/bg6.webp",
      // "/blog/bg7.webp",
    ],
    description: [
      "上善若水。水善利万物而不争，处众人之所恶，故几于道。",
      "昔者庄周梦为胡蝶，栩栩然胡蝶也...不知周之梦为胡蝶与？胡蝶之梦为周与？",
      "红楼隔雨相望冷，珠箔飘灯独自归。",
    ],

    descStyle: "types",
  },
  author: { name: "Aico", link: "" },
  blogger: {
    avatar: "/avatar.png",
    shape: "circle-rotate",
    name: "Aico",
    slogan: "不是Bug，是隐藏彩蛋…",
  },

  //vite插件
  vitePlugins: {
    sidebarOption: {
      initItems: false,
    },
    fileContentLoaderIgnore: ["**/前端基础/**", "**/vue3/**"], //忽略这列路径下的文件生成到首页的文章列表及归档页

    autoFrontmatter: false, //自动生成 frontmatter，默认关闭
    autoFrontmatterOption: {
      pattern: ["**/前端基础/**"], //匹配路径下的文件

      transform: () => {
        return {};
      },
      recoverTransform: false,
    },
  },

  //精选文章卡片
  topArticle: {
    enabled: false, // 是否启用精选文章卡片
    limit: 5, // 一页显示的数量
    autoPage: false, // 是否自动翻页
    pageSpeed: 4000, // 翻页间隔时间，单位：毫秒。autoPage 为 true 时生效
    dateFormat: "yyyy-MM-dd hh:mm:ss", // 精选文章的日期格式
  },

  //友情链接卡片
  friendLink: {
    enabled: false, // 是否启用友情链接卡片
    limit: 5, // 一页显示的数量
    autoScroll: false, // 是否自动滚动
    scrollSpeed: 2500, // 滚动间隔时间，单位：毫秒。autoScroll 为 true 时生效
    autoPage: false, // 是否自动翻页
    pageSpeed: 4000, // 翻页间隔时间，单位：毫秒。autoPage 为 true 时生效
  },

  //代码块复制成功提示
  codeBlock: {
    copiedDone: (TkMessage) => TkMessage.success("复制成功！"),
  },

  //文章列表是否限速摘要
  post: {
    showCapture: true,
  },

  //文章分享按钮是否显示
  articleShare: { enabled: true },
});

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: teekConfig,
  title: "递归裂缝",
  description: "aico的小站",
  base: "/vboke/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      {
        text: "索引",
        items: [
          { text: "分类页", link: "/categories" },
          { text: "标签页", link: "/tags" },
          { text: "归档页", link: "/archives" },
        ],
      },
      {
        text: "文档",
        items: [
          {
            text: "前端基础",
            link: "/前端基础/目录.md",
          },
          {
            text: "vue3",
            link: "/vue3/01. vite原理.md",
          },
        ],
      },
      {
        text: "更多",
        link: "/more",
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/aicoflow" }],

    search: {
      provider: "local",
    },
  },
  head: [
    [
      "link",
      { rel: "icon", type: "image/svg+xml", href: "/teek-logo-mini.svg" },
    ],
    [
      "link",
      { rel: "apple-touch-icon", type: "image/svg+xml", href: "/avatar.png" },
    ],
  ],
});

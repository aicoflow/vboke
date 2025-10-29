# 递归裂缝 - 前端技术知识库

<div align="center">

一个基于 **VitePress** 构建的现代化前端技术知识库，涵盖 HTML、CSS、JavaScript、Vue3、浏览器、工程化、网络等前端开发的核心知识。

[![VitePress](https://img.shields.io/badge/VitePress-1.6.3-646cff?logo=vite)](https://vitepress.dev/)
[![Node](https://img.shields.io/badge/Node-%3E%3D18-339933?logo=node.js)](https://nodejs.org/)
[![pnpm](https://img.shields.io/badge/pnpm-8+-f69220?logo=pnpm)](https://pnpm.io/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

[在线预览](#) | [快速开始](#快速开始) | [项目特点](#-项目特点)

</div>

---

## 📖 项目简介

**递归裂缝**是一个系统化的前端技术文档网站，采用 VitePress 静态站点生成器和 vitepress-theme-teek 精美主题构建。项目收录了大量精心整理的前端技术文章，适合前端开发者学习、复习和查阅。

## ✨ 项目特点

### 🎯 智能化侧边栏

- **完全自动化** - 自动扫描文章目录，零配置生成侧边栏
- **路径隔离** - 不同专题自动生成独立的导航结构
- **智能排序** - 自动移除文件名数字前缀，保持整洁美观
- **实时更新** - 新增文章后自动更新，无需手动维护

### 🎨 现代化设计

- **精美主题** - 采用 vitepress-theme-teek 主题，界面美观大方
- **响应式布局** - 完美适配桌面、平板、手机等各种设备
- **暗黑模式** - 支持明暗主题切换，保护眼睛
- **平滑滚动** - 优化的滚动体验和导航交互

### 🚀 极致性能

- **极速构建** - 基于 Vite 的开发服务器，毫秒级热更新
- **按需加载** - 智能代码分割，首屏加载快速
- **全文搜索** - VitePress 内置搜索，快速定位内容
- **SEO 友好** - 静态网站生成，搜索引擎友好

## 🚀 快速开始

### 环境要求

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0

### 安装依赖

```bash
# 克隆项目
git clone <your-repo-url>
cd vboke

# 安装依赖
pnpm install
```

### 本地开发

启动开发服务器，默认运行在 `http://localhost:5173`

```bash
pnpm docs:dev
```

开发服务器支持：
- ⚡️ 毫秒级热更新
- 🔍 实时全文搜索
- 📱 响应式预览

### 构建生产版本

```bash
# 构建静态文件
pnpm docs:build

# 预览构建结果
pnpm docs:preview
```

构建产物位于 `docs/.vitepress/dist` 目录。

## 🛠️ 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| [VitePress](https://vitepress.dev/) | 1.6.3 | 基于 Vite 的静态站点生成器 |
| [vitepress-theme-teek](https://vp.teek.top/) | 1.3.5 | 现代化 VitePress 主题 |
| [vitepress-sidebar](https://www.npmjs.com/package/vitepress-sidebar) | 1.33.0 | 自动生成侧边栏导航 |
| [pnpm](https://pnpm.io/) | 8+ | 快速、节省磁盘空间的包管理器 |

## 📁 项目结构

```
vboke/
├── docs/                          # 文档根目录
│   ├── .vitepress/                # VitePress 配置
│   │   ├── components/            # 自定义组件
│   │   ├── theme/                 # 主题配置
│   │   │   ├── index.ts           # 主题入口
│   │   │   └── style.css          # 自定义样式
│   │   ├── config.mts             # 核心配置文件
│   │   └── utils.ts               # 工具函数（自动生成侧边栏）
│   ├── articles/                  # 文章内容
│   │   ├── vue3/                  # Vue3 专题
│   │   ├── 前端基础/               # 前端基础知识
│   │   │   ├── 01.HTML/
│   │   │   ├── 02.CSS/
│   │   │   ├── 03.JavaScript/
│   │   │   ├── 04.浏览器/
│   │   │   ├── 05.工程化/
│   │   │   └── 06.网络/
│   │   └── fragment/              # 技术碎片（已排除）
│   ├── pages/                     # 功能页面
│   ├── public/                    # 静态资源
│   └── index.md                   # 首页
├── package.json                   # 项目配置
├── pnpm-lock.yaml                # 依赖锁定文件
└── README.md                      # 项目说明
```

## 🔧 核心配置

### 自动生成侧边栏

项目使用自定义工具函数 `getArticlesDirectories()` 自动扫描文章目录：

```typescript
// docs/.vitepress/utils.ts
export function getArticlesDirectories(excludeDirs = ["fragment"]) {
  // 自动扫描 articles 目录
  // 为每个子目录生成独立的侧边栏配置
  // 自动移除文件名数字前缀（如 "01. ", "02. "）
}
```

**特性：**
- ✅ 零配置，新增专题目录自动识别
- ✅ 自动排除指定目录（如 fragment）
- ✅ 智能移除文件名前缀，保持导航整洁
- ✅ 支持多级目录结构

### 添加新专题

只需 3 步：

1. 在 `docs/articles/` 下创建新目录（如 `react/`）
2. 在新目录下添加 Markdown 文件
3. 刷新浏览器 - **完成！**

侧边栏会自动生成，无需修改任何配置文件。

## 📝 内容贡献

欢迎贡献内容！如果您想添加新的文章或改进现有内容：

### 贡献流程

1. **Fork** 本仓库
2. **创建分支** - `git checkout -b feature/AmazingArticle`
3. **添加内容** - 在 `docs/articles/` 对应目录下添加或修改 Markdown 文件
4. **提交更改** - `git commit -m 'Add some AmazingArticle'`
5. **推送分支** - `git push origin feature/AmazingArticle`
6. **提交 PR** - 开启一个 Pull Request

### 内容规范

- 文件名使用数字前缀排序（会自动隐藏）：`01. 标题.md`
- 文章使用 Markdown 格式
- 建议包含代码示例和图示说明
- 保持内容准确性和时效性

## 🎯 开发特性

### 智能功能

- **自动侧边栏** - 基于文件系统自动生成导航
- **文章大纲** - 自动提取标题生成目录导航
- **全文搜索** - 支持中文分词的快速搜索
- **代码高亮** - 支持多种编程语言语法高亮
- **响应式图片** - 图片自动适配不同设备

### 主题功能

- **首页 Banner** - 支持渐变背景和图片背景
- **文章分析** - 自动统计字数、阅读时间
- **文章分享** - 一键分享到社交平台
- **暗黑模式** - 平滑的主题切换动画
- **博主卡片** - 展示个人信息和社交链接

## 🌐 部署

### GitHub Pages

```bash
# 构建
pnpm docs:build

# 部署到 GitHub Pages
# 将 dist 目录推送到 gh-pages 分支
```

### Vercel / Netlify

直接连接 GitHub 仓库，配置：

- **Build Command**: `pnpm docs:build`
- **Output Directory**: `docs/.vitepress/dist`
- **Install Command**: `pnpm install`

### 自定义服务器

将 `docs/.vitepress/dist` 目录部署到任何静态文件服务器。

## 📄 开源协议

本项目采用 [MIT](LICENSE) 协议开源。

## 🙏 鸣谢

- [VitePress](https://vitepress.dev/) - Vue 驱动的静态站点生成器
- [vitepress-theme-teek](https://vp.teek.top/) - 优秀的 VitePress 主题
- [vitepress-sidebar](https://github.com/jooy2/vitepress-sidebar) - 自动侧边栏插件

## 📧 联系方式

如有问题或建议，欢迎：

- 提交 [Issue](../../issues)
- 发起 [Pull Request](../../pulls)
- 关注更新获取最新内容

---

<div align="center">

**持续学习，不断进步** 💪

Made with ❤️ by aico

</div>


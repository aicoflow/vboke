# VBoke - 前端技术博客

<div align="center">

一个基于 VitePress 构建的前端技术知识库，涵盖 HTML、CSS、JavaScript、Vue3、浏览器、工程化、网络等前端开发的方方面面。

</div>

## 📚 项目简介

VBoke 是一个系统化的前端技术文档网站，使用 VitePress 和 vitepress-theme-teek 主题构建。项目收录了大量精心整理的前端技术文章，适合前端开发者学习、复习和查阅。

## ✨ 特性

- 📖 **系统化分类** - 按技术栈和主题精心分类组织
- 🎨 **现代化主题** - 使用 vitepress-theme-teek 主题，界面美观
- 🚀 **快速构建** - 基于 Vite 的极速开发体验
- 📱 **响应式设计** - 完美适配各种设备
- 🔍 **全文搜索** - VitePress 内置搜索功能

## 📂 内容结构

### 前端基础

#### 01. HTML
- 文档声明、语义化、W3C标准组织
- SEO、iframe、微格式
- 替换元素、页面可见性

#### 02. CSS
- CSS单位、居中方式、隐藏元素方式
- 浮动、定位、BFC
- CSS属性计算过程、层叠继承规则
- CSS3新特性：calc函数、媒介查询、变形、遮罩
- 过渡和动画事件、渐进增强和优雅降级
- 渐进式渲染、CSS渲染性能优化、堆叠上下文

#### 03. JavaScript
- 基础语法：let/var/const、值和引用、包装类型
- 核心概念：原型链、执行上下文、作用域、闭包
- DOM操作：事件注册、事件传播、默认行为
- 高级特性：递归、属性描述符、Class
- 常用技术：防抖节流、深浅拷贝、函数柯里化
- 特殊类型：WeakSet、WeakMap
- 运行机制：垃圾回收、内存泄漏、Node事件循环

#### 04. 浏览器
- 浏览器渲染流程、组成部分
- 离线存储：WebSQL、IndexedDB
- File API、浏览器缓存
- 跨标签页通信、Web Worker

#### 05. 工程化
- 模块化：CMJ和ESM
- 包管理：npx、npm模块安装机制
- 代码质量：ESLint
- 构建工具：webpack相关、webpack5更新、scope hoisting
- 高级特性：模块联邦

#### 06. 网络
- 基础知识：五层网络模型、TCP协议
- HTTP：请求方法、缓存协议、各版本差异
- 数据存储：cookie、storage、session
- 安全相关：加密、jwt、同源策略、CSRF、XSS
- 跨域解决：代理、CORS、JSONP
- 文件操作：上传、下载、断点续传
- 进阶技术：WebSocket及实战
- 性能优化：网络性能优化
- 其他：域名和DNS、SSL/TLS/HTTPS、输入URL后发生了什么

### Vue3 专题

- Vite原理、效率提升
- API和数据响应式变化
- 模板和组件的变化
- Reactivity API、Composition API
- 共享数据
- Pinia：基本概念、快速入门、添加插件、最佳实践、源码解析

### 技术碎片

- ChatGPT 的打字效果原理
- JavaScript中Symbol类型
- Promise相关面试题
- 大文件上传：分片、续传、秒传

## 🚀 快速开始

### 环境要求

- Node.js >= 18
- pnpm >= 8

### 安装依赖

```bash
pnpm install
```

### 本地开发

启动开发服务器，默认运行在 `http://localhost:5173`

```bash
pnpm docs:dev
```

### 构建生产版本

```bash
pnpm docs:build
```

### 预览构建结果

```bash
pnpm docs:preview
```

## 🛠️ 技术栈

- [VitePress](https://vitepress.dev/) - 基于 Vite 的静态站点生成器
- [vitepress-theme-teek](https://www.npmjs.com/package/vitepress-theme-teek) - VitePress 主题
- [pnpm](https://pnpm.io/) - 快速、节省磁盘空间的包管理器

## 📁 项目结构

```
vboke/
├── docs/                          # 文档目录
│   ├── articles/                  # 文章内容
│   │   ├── fragment/              # 技术碎片
│   │   ├── vue3/                  # Vue3专题
│   │   └── 前端基础/               # 前端基础知识专题
│   │       ├── 01.HTML/
│   │       ├── 02.CSS/
│   │       ├── 03.JavaScript/
│   │       ├── 04.浏览器/
│   │       ├── 05.工程化/
│   │       └── 06.网络/
│   ├── pages/                     # 页面配置
│   ├── public/                    # 静态资源
│   └── index.md                   # 首页
├── package.json                   # 项目配置
├── pnpm-lock.yaml                # 依赖锁定文件
└── README.md                      # 项目说明
```

## 📝 内容贡献

欢迎贡献内容！如果您想添加新的文章或改进现有内容：

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingArticle`)
3. 在 `docs/articles/` 相应目录下添加或修改 Markdown 文件
4. 提交您的更改 (`git commit -m 'Add some AmazingArticle'`)
5. 推送到分支 (`git push origin feature/AmazingArticle`)
6. 开启一个 Pull Request

## 📄 License

本项目文档内容采用知识共享许可协议。

## 🔗 相关链接

- [VitePress 官方文档](https://vitepress.dev/)
- [vitepress-theme-teek](https://www.npmjs.com/package/vitepress-theme-teek)

---

<div align="center">
  
**持续学习，不断进步** 💪

</div>


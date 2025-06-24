---
date: 2023-06-22 20:36:51
title: ChatGPT 的打字效果原理
categories:
  - 应用笔记
tags:
  - SSE
---

# ChatGPT 的打字效果原理

## 前言

当下圈内比较火的非 ChatGPT 莫属了。

相信使用过 ChatGPT 的朋友，都会看到，当你提问一个问题时，ChatGPT 会一字一字地给你展示出来，而不是一次性给你返回，如下图：

![chatgpt_01.baa454e4](https://raw.githubusercontent.com/aicoflow/relevant/main/img/chatgpt_01.baa454e4.gif)

这样做的好处，我想应该是节省性能吧，并且应该也是因为 AI 需要一边学习，一边把学习到的结果返回到前端，所以需要这样持续输出。

## 演示环境

- 电脑 - Windows 10
- Node - v16.15.0
- Npm - 9.4.0
- Express - 4.18.2

## 请求分析

大部分人会联想到 WebSocket，因为它能做到跟前端建立长连接，不断向前端输送东西。

但当我们打开 Network 界面，看到用的不是 WebSocket，而是 EventSource。

![chatgpt_02.1565f2f8](https://raw.githubusercontent.com/aicoflow/relevant/main/img/chatgpt_02.1565f2f8.png)

### 服务器发送事件

- [服务器发送事件](https://developer.mozilla.org/zh-CN/docs/Web/API/Server-sent_events) (Server-Sent Events)常用于 Web 页面推送数据和信息。

而 [EventSource](https://developer.mozilla.org/zh-CN/docs/Web/API/EventSource) 接口是 web 内容与[服务器发送事件](https://developer.mozilla.org/zh-CN/docs/Web/API/Server-sent_events)通信的接口。

一个 EventSource 实例会对 HTTP 服务器开启一个持久化的连接，以 `text/event-stream` 格式发送事件，此连接会一直保持开启直到通过调用 `EventSource.close()` 关闭。

与 WebSocket 不同的是，服务器发送事件是单向的。数据信息只能从服务端到发送到客户端（如用户的浏览器）。

## 初级版本 - EventSource

接下来带大家来简单实现以下吧！

### 后端服务

1. `npm init` 初始化项目
2. 安装项目依赖 `npm i express cors`。
3. 添加响应头：`'Content-Type': 'text/event-stream'`

以下为参考代码：

```js
const express = require("express");
const cors = require("cors");

// 主机
const host = "http://localhost";
// 端口
const port = 3000;

// 创建 express 实例
const app = express();

// 允许跨域
app.use(cors());

// 返回的内容
const article = `当有人拒绝你时，不要对此感到个人冒犯。假设他们和你一样：忙碌，占据，分心。你只要稍后再请求一次。你会惊讶地发现第二次尝试通常会奏效。`;

// 路由接口
app.get("/chat_typing", (req, res) => {
  // 开启 Server-sent events
  res.setHeader("Content-Type", "text/event-stream");

  let index = 0;
  let timerId = 0;

  // 模拟每隔 0.1s 向前端推送一次
  timerId = setInterval(() => {
    // 获取文字
    const data = article[index];
    console.log(data);

    // 下标累加
    index++;

    // 响应结果
    if (data) {
      // data：表示数据内容，\n\n 表示结尾。
      res.write(`data: ${data}\n\n`);
    } else {
      res.end();
      clearInterval(timerId);
    }
  }, 100);
});

// 启动服务器
app.listen(port, () => {
  console.log(`服务器启动成功 ${host}:${port}`);
});
```

**思考**

`axios` 无法发送 `EventSource` 或 `WebScoket` 的请求，是因为 `axios` 基于哪个对象封装的？

## 进阶版本 - fetch

使用 EventSource 很方便，但并不完美，有以下的局限性：

- 只能发送 GET 请求，[传参受限](https://stackoverflow.com/questions/417142/what-is-the-maximum-length-of-a-url-in-different-browsers)
- 无法设置请求头

ChatGPT 其实是使用的 fetch 实现的，满足更复杂的需求，接下来就来看看 fetch 是如何实现的。

### 后端

- 后端调整为了 `POST` 请求，可接收更多数据
- 通过 `app.use(express.json())` 解析请求体的 JSON 数据
- 通过 `req.body` 获取解析后的请求体数据
- `res.write(data)` 可自定义返回内容格式

```js
const express = require("express");
const cors = require("cors");

// 主机
const host = "http://localhost";
// 端口
const port = 3000;

// 创建 express 实例
const app = express();

// 允许跨域
app.use(cors());

// 返回的内容
const article = `当有人拒绝你时，不要对此感到个人冒犯。假设他们和你一样：忙碌，占据，分心。你只要稍后再请求一次。你会惊讶地发现第二次尝试通常会奏效。`;

// 解析请求体的 JSON 数据到 req.body
app.use(express.json());

// 路由接口 POST
app.post("/chat_typing_fetch", (req, res) => {
  console.log("前端参数-->", req.body);
  // 开启 Server-sent events
  res.setHeader("Content-Type", "text/event-stream");

  let index = 0;
  let timerId = 0;

  // 模拟每隔 0.1s 向前端推送一次
  timerId = setInterval(() => {
    // 获取文字
    const data = article[index];
    console.log(data);

    // 下标累加
    index++;

    // 响应结果
    if (data) {
      res.write(data);
    } else {
      res.end();
      clearInterval(timerId);
    }
  }, 100);

  // 断开连接
  res.on("close", () => {
    res.end();
    clearInterval(timerId);
  });
});
```

### 前端通过 `fetch` 发送 `POST` 请求并传参

- 通过 `AbortController` 中断请求
- 通过 `TextDecoder` 解码文本

```vue
<script setup lang="ts">
import { ref } from "vue";

// 存储文章内容
const article = ref("");

// 表示是否连接 SSE
const isConnect = ref(false);

// 请求中止控制器
let controller: AbortController;

// 建立 SSE 连接
const connectSSE = async () => {
  // 将 isConnect 设置为 true，表示正在连接 SSE
  isConnect.value = true;
  // 创建一个新的请求中止控制器
  controller = new AbortController();
  // 发送 POST 请求到服务器
  const res = await fetch("http://localhost:3000/chat_typing_fetch", {
    // 请求中止标识
    signal: controller.signal,
    // 使用 POST 方法发送请求
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user: "itheima" }),
  });

  // 获取响应内容的 ReadableStream
  const reader = res.body?.getReader();
  // 创建一个解码器，用来解码文本
  const decoder = new TextDecoder();
  while (reader) {
    // 读取响应内容
    const { done, value } = await reader.read();
    if (done) {
      // 如果请求已经完成，中止请求
      closeSSE();
      // 退出循环
      break;
    }
    // 将解码后的文本添加到文章内容中
    article.value += decoder.decode(value);
  }
};

// 关闭 SSE 连接
const closeSSE = () => {
  // 将 isConnect 设置为 false，表示已经关闭 SSE 连接
  isConnect.value = false;
  // 中止请求
  controller.abort();
};
</script>

<template>
  <h1>ChatGPT打字效果 - fetch & POST</h1>
  <button :disabled="isConnect" @click="connectSSE()">建立 SSE 连接</button>
  <button :disabled="!isConnect" @click="closeSSE()">关闭 SSE 连接</button>
  <div class="box">
    {{ article }}
  </div>
</template>

<style scoped>
.box {
  width: 300px;
  height: 300px;
  background-color: pink;
  border: 1px solid #f00;
}
</style>
```

## 总结

SSE 是一种由服务器向浏览器实时主动推送数据的技术，ChatGPT 的打字机效果的原理其实就是通过 SSE 技术实现的。

由于并不是传统请求，使用时需前后端共同配合实现

- 后端: 需添加响应头：`'Content-Type': 'text/event-stream'`
- 前端: 通过 EventSource 或 fetch 实现请求

## 拓展阅读[](https://megasu.atomgit.net/front-end-solutions/solutions/chatgpt.html#拓展阅读)

- [服务器发送事件](https://developer.mozilla.org/zh-CN/docs/Web/API/Server-sent_events)
- [EventSource](https://developer.mozilla.org/zh-CN/docs/Web/API/EventSource)
- [使用 Fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)
- [ChatGPT 掘金热门文章](https://juejin.cn/search?query=ChatGPT&type=0&sort=2)

如果想**快速部署**一个私人 ChatGPT 网站，不受访问限制，可参考以下开源仓库。

- [ChatGPT-Next-Web 官方 30.8k](https://github.com/Yidadaa/ChatGPT-Next-Web)
- [Vercel 部署教程](https://rptzik3toh.feishu.cn/docx/KKQOdjlq3o95HwxiWFBcMkqMnlb)

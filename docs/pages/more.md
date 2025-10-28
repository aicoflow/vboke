---
permalink: /more
layout: page
pageTitle: 更多
desc: 关于博主的个人介绍、照片墙和资源分享
sidebar: false
article: false
---

<script setup>
import AboutAuthor from '../.vitepress/components/AboutAuthor.vue'
import PhotoGallery from '../.vitepress/components/PhotoGallery.vue'
import ResourceShare from '../.vitepress/components/ResourceShare.vue'
</script>

<div class="more-page">

<AboutAuthor />

<PhotoGallery />

<ResourceShare />

</div>

<style scoped>
.more-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* 响应式设计 - 平板 */
@media (max-width: 1024px) {
  .more-page {
    padding: 15px;
  }
}

/* 响应式设计 - 手机 */
@media (max-width: 768px) {
  .more-page {
    padding: 10px;
  }
}
</style>

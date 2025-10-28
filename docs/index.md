---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
---

<style>

.name{
   color: transparent !important;
    background: -webkit-linear-gradient(10deg, rgb(189, 52, 254) 5%, rgb(228, 52, 152) 15%) text !important;
}
  .slogan{
    text-align:center;
  }

/* 文章标题样式 */
.VPDoc h1 {
    color: transparent !important;
    background: -webkit-linear-gradient(10deg, rgb(189, 52, 254) 5%, rgb(228, 52, 152) 15%) text !important;
}


:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);


  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

/* 彩虹动画 */
:root {
  animation: rainbow 12s linear infinite;
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>

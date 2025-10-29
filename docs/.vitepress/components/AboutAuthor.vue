<script setup>
import { ref } from 'vue'

const email = 'theafncc@gmail.com'
const copyText = ref('邮件')

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email)
    copyText.value = '已复制!'
    setTimeout(() => {
      copyText.value = '邮件'
    }, 2000)
  } catch (err) {
    console.error('复制失败:', err)
    // 降级方案：打开邮件客户端
    window.location.href = `mailto:${email}`
  }
}
</script>

<template>
  <section class="about-section">
    <div class="section-header">
      <h2>👨‍💻 关于我</h2>
    </div>
    <div class="about-content">
      <div class="avatar-wrapper">
        <img src="/avatar.png" alt="Aico" class="avatar" />
      </div>
      <div class="info-card">
        <h3>aico</h3>
        <p class="slogan">不是Bug，是隐藏彩蛋…</p>
        <div class="bio">
          <p>🎯 前端工程师 | 技术爱好者 | INFP</p>
          <p>💻 专注于 Vue.js、React、前端工程化</p>
          <p>📚 热爱学习新技术，分享技术心得</p>
          <p>🌱 持续成长中...</p>
        </div>
        <div class="social-links">
          <a href="https://github.com/aicoflow/vboke" target="_blank" class="social-link">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
            </svg>
            GitHub
          </a>
          <button @click="copyEmail" class="social-link email-btn">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            {{ copyText }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 通用区块头部 */
.section-header {
  text-align: center;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-header h2 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  line-height: 1.3;
  padding: 0.2em 0;
  display: inline-block;
  background: linear-gradient(120deg, #bd34fe 30%, #41d1ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

/* 关于博主区块 */
.about-section {
  margin-bottom: 80px;
}

.about-content {
  display: flex;
  gap: 40px;
  align-items: center;
  background: var(--vp-c-bg-soft);
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.avatar-wrapper {
  flex-shrink: 0;
}

.avatar {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--vp-c-brand);
  box-shadow: 0 4px 20px rgba(189, 52, 254, 0.3);
  transition: transform 0.3s ease;
}

.avatar:hover {
  transform: scale(1.05) rotate(5deg);
}

.info-card h3 {
  font-size: 2rem;
  margin-bottom: 10px;
  color: var(--vp-c-text-1);
}

.slogan {
  font-size: 1.1rem;
  color: var(--vp-c-brand);
  font-style: italic;
  margin-bottom: 20px;
}

.bio p {
  margin: 10px 0;
  font-size: 1rem;
  color: var(--vp-c-text-2);
  line-height: 1.8;
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 25px;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  border-color: var(--vp-c-brand);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(189, 52, 254, 0.2);
}

/* 邮件按钮样式 */
.email-btn {
  cursor: pointer;
  font-family: inherit;
}

.email-btn:active {
  transform: scale(0.95);
}

/* 响应式设计 - 手机 */
@media (max-width: 768px) {
  .section-header {
    margin-bottom: 30px;
  }

  .section-header h2 {
    font-size: 1.8rem;
    line-height: 1.3;
    padding: 0.2em 0;
  }

  .about-section {
    margin-bottom: 50px;
  }

  .about-content {
    flex-direction: column;
    text-align: center;
    padding: 25px 15px;
    gap: 25px;
  }

  .avatar {
    width: 120px;
    height: 120px;
    border-width: 3px;
  }

  .info-card h3 {
    font-size: 1.5rem;
  }

  .slogan {
    font-size: 1rem;
  }

  .bio p {
    font-size: 0.9rem;
    line-height: 1.6;
  }

  .social-links {
    justify-content: center;
    flex-wrap: wrap;
  }

  .social-link {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
}

/* 小屏手机优化 */
@media (max-width: 480px) {
  .section-header h2 {
    font-size: 1.5rem;
    line-height: 1.3;
    padding: 0.2em 0;
  }

  .about-content {
    padding: 20px 12px;
  }

  .avatar {
    width: 100px;
    height: 100px;
  }

  .info-card h3 {
    font-size: 1.3rem;
  }

  .bio p {
    font-size: 0.85rem;
  }

  .social-links {
    width: 100%;
  }

  .social-link {
    flex: 1;
    justify-content: center;
    min-width: 0;
  }
}

/* 优化触摸设备的交互 */
@media (hover: none) and (pointer: coarse) {
  .social-link:active {
    transform: scale(0.95);
  }
}
</style>


<template>
  <section class="resources-section">
    <div class="section-header">
      <h2>🔗 资源分享</h2>
      <p class="subtitle">推荐一些优质的学习资源和工具网站</p>
    </div>
    
    <div class="resources-grid">
      <!-- 前端框架 -->
      <div class="resource-category">
        <h3>🎨 前端框架</h3>
        <div class="resource-list">
          <a href="https://cn.vuejs.org/" target="_blank" class="resource-item">
            <div class="resource-icon">V</div>
            <div class="resource-info">
              <h4>Vue.js</h4>
              <p>渐进式 JavaScript 框架</p>
            </div>
          </a>
          <a href="https://react.dev/" target="_blank" class="resource-item">
            <div class="resource-icon">R</div>
            <div class="resource-info">
              <h4>React</h4>
              <p>用于构建用户界面的库</p>
            </div>
          </a>
          <a href="https://www.solidjs.com/" target="_blank" class="resource-item">
            <div class="resource-icon">S</div>
            <div class="resource-info">
              <h4>Solid.js</h4>
              <p>高性能的响应式框架</p>
            </div>
          </a>
        </div>
      </div>

      <!-- 开发工具 -->
      <div class="resource-category">
        <h3>🛠️ 开发工具</h3>
        <div class="resource-list">
          <a href="https://vitejs.dev/" target="_blank" class="resource-item">
            <div class="resource-icon">⚡</div>
            <div class="resource-info">
              <h4>Vite</h4>
              <p>下一代前端构建工具</p>
            </div>
          </a>
          <a href="https://www.typescriptlang.org/" target="_blank" class="resource-item">
            <div class="resource-icon">TS</div>
            <div class="resource-info">
              <h4>TypeScript</h4>
              <p>JavaScript 的超集</p>
            </div>
          </a>
          <a href="https://eslint.org/" target="_blank" class="resource-item">
            <div class="resource-icon">ES</div>
            <div class="resource-info">
              <h4>ESLint</h4>
              <p>代码质量检查工具</p>
            </div>
          </a>
        </div>
      </div>

      <!-- UI 组件库 -->
      <div class="resource-category">
        <h3>🎭 UI 组件库</h3>
        <div class="resource-list">
          <a href="https://element-plus.org/" target="_blank" class="resource-item">
            <div class="resource-icon">E+</div>
            <div class="resource-info">
              <h4>Element Plus</h4>
              <p>Vue 3 组件库</p>
            </div>
          </a>
          <a href="https://ant.design/" target="_blank" class="resource-item">
            <div class="resource-icon">A</div>
            <div class="resource-info">
              <h4>Ant Design</h4>
              <p>企业级 UI 设计语言</p>
            </div>
          </a>
          <a href="https://tailwindcss.com/" target="_blank" class="resource-item">
            <div class="resource-icon">TW</div>
            <div class="resource-info">
              <h4>Tailwind CSS</h4>
              <p>实用优先的 CSS 框架</p>
            </div>
          </a>
        </div>
      </div>

      <!-- 学习资源 -->
      <div class="resource-category">
        <h3>📚 学习资源</h3>
        <div class="resource-list">
          <a href="https://developer.mozilla.org/" target="_blank" class="resource-item">
            <div class="resource-icon">MD</div>
            <div class="resource-info">
              <h4>MDN</h4>
              <p>Web 开发者文档</p>
            </div>
          </a>
          <a href="https://javascript.info/" target="_blank" class="resource-item">
            <div class="resource-icon">JS</div>
            <div class="resource-info">
              <h4>现代 JavaScript</h4>
              <p>从基础到高阶的教程</p>
            </div>
          </a>
          <a href="https://www.patterns.dev/" target="_blank" class="resource-item">
            <div class="resource-icon">📐</div>
            <div class="resource-info">
              <h4>Patterns.dev</h4>
              <p>现代 Web 应用设计模式</p>
            </div>
          </a>
        </div>
      </div>

      <!-- 实用工具 -->
      <div class="resource-category">
        <h3>⚙️ 实用工具</h3>
        <div class="resource-list">
          <a href="https://caniuse.com/" target="_blank" class="resource-item">
            <div class="resource-icon">🔍</div>
            <div class="resource-info">
              <h4>Can I Use</h4>
              <p>浏览器兼容性查询</p>
            </div>
          </a>
          <a href="https://regex101.com/" target="_blank" class="resource-item">
            <div class="resource-icon">.*</div>
            <div class="resource-info">
              <h4>Regex101</h4>
              <p>正则表达式测试工具</p>
            </div>
          </a>
          <a href="https://devdocs.io/" target="_blank" class="resource-item">
            <div class="resource-icon">📖</div>
            <div class="resource-info">
              <h4>DevDocs</h4>
              <p>API 文档聚合平台</p>
            </div>
          </a>
        </div>
      </div>

      <!-- 设计资源 -->
      <div class="resource-category">
        <h3>🎨 设计资源</h3>
        <div class="resource-list">
          <a href="https://www.figma.com/" target="_blank" class="resource-item">
            <div class="resource-icon">F</div>
            <div class="resource-info">
              <h4>Figma</h4>
              <p>协作设计工具</p>
            </div>
          </a>
          <a href="https://undraw.co/" target="_blank" class="resource-item">
            <div class="resource-icon">🎨</div>
            <div class="resource-info">
              <h4>unDraw</h4>
              <p>免费插图资源</p>
            </div>
          </a>
          <a href="https://www.iconfont.cn/" target="_blank" class="resource-item">
            <div class="resource-icon">🔤</div>
            <div class="resource-info">
              <h4>Iconfont</h4>
              <p>阿里巴巴图标库</p>
            </div>
          </a>
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

.subtitle {
  color: var(--vp-c-text-2);
  font-size: 1rem;
}

/* 资源分享 */
.resources-section {
  margin-bottom: 80px;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.resource-category {
  background: var(--vp-c-bg-soft);
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.resource-category h3 {
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: var(--vp-c-text-1);
  border-bottom: 2px solid var(--vp-c-brand);
  padding-bottom: 10px;
}

.resource-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.resource-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.resource-item:hover {
  border-color: var(--vp-c-brand);
  transform: translateX(5px);
  box-shadow: 0 4px 12px rgba(189, 52, 254, 0.15);
}

.resource-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #bd34fe, #41d1ff);
  color: white;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  flex-shrink: 0;
}

.resource-info h4 {
  margin: 0;
  font-size: 1rem;
  color: var(--vp-c-text-1);
}

.resource-info p {
  margin: 4px 0 0;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

/* 响应式设计 - 平板 */
@media (max-width: 1024px) {
  .resources-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
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

  .subtitle {
    font-size: 0.9rem;
  }

  .resources-section {
    margin-bottom: 50px;
  }

  /* 资源区块优化 */
  .resources-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .resource-category {
    padding: 20px 15px;
  }

  .resource-category h3 {
    font-size: 1.1rem;
    margin-bottom: 15px;
  }

  .resource-list {
    gap: 10px;
  }

  .resource-item {
    padding: 12px;
    gap: 12px;
  }

  /* 增大触摸区域 */
  .resource-item:active {
    background: var(--vp-c-bg-soft);
  }

  .resource-icon {
    width: 36px;
    height: 36px;
    font-size: 0.9rem;
  }

  .resource-info h4 {
    font-size: 0.95rem;
  }

  .resource-info p {
    font-size: 0.8rem;
  }
}

/* 小屏手机优化 */
@media (max-width: 480px) {
  .section-header h2 {
    font-size: 1.5rem;
    line-height: 1.3;
    padding: 0.2em 0;
  }

  .resource-category {
    padding: 15px 12px;
  }
}

/* 优化触摸设备的交互 */
@media (hover: none) and (pointer: coarse) {
  /* 增强点击反馈 */
  .resource-item:active {
    transform: scale(0.98);
    background: var(--vp-c-bg-mute);
  }
}
</style>


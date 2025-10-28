<script setup>
import { ref } from 'vue'
import { withBase } from 'vitepress'

// 照片数据数组
const photos = ref([
  {
    id: 1,
    src: withBase('/photo-gallery/1.png'),
    alt: '照片1',
    description: ''
  },
  {
    id: 2,
    src:  withBase('/photo-gallery/2.png'),
    alt: '照片2',
    description: ''
  },
  {
    id: 3,
    src: withBase('/photo-gallery/3.png'),
    alt: '照片3',
    description: ''
  },
  {
    id: 4,
    src: withBase('/photo-gallery/4.png'),
    alt: '照片4',
    description: ''
  },
  {
    id: 5,
    src: withBase('/photo-gallery/5.png'),
    alt: '照片5',
    description: ''
  },
  {
    id: 6,
    src: withBase('/photo-gallery/6.png'),
    alt: '照片6',
    description: ''
  }
])
</script>

<template>
  <section class="gallery-section">
    <div class="section-header">
      <h2>📸 照片墙</h2>
      <p class="subtitle">记录生活中的美好瞬间</p>
    </div>
    <div class="photo-gallery">
      <div 
        v-for="photo in photos" 
        :key="photo.id" 
        class="photo-item"
      >
        <img :src="photo.src" :alt="photo.alt" />
        <div class="photo-overlay">
          <span>{{ photo.description }}</span>
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

/* 照片墙 */
.gallery-section {
  margin-bottom: 80px;
}

.photo-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.photo-item {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  aspect-ratio: 4/3;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.photo-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.photo-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  color: white;
  padding: 20px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.photo-item:hover img {
  transform: scale(1.1);
}

.photo-item:hover .photo-overlay {
  transform: translateY(0);
}

.photo-overlay span {
  font-size: 1rem;
  font-weight: 500;
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

  .gallery-section {
    margin-bottom: 50px;
  }

  /* 照片墙优化 */
  .photo-gallery {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .photo-item {
    border-radius: 8px;
  }

  /* 移动端始终显示照片描述 */
  .photo-overlay {
    transform: translateY(0);
    padding: 12px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  }

  .photo-overlay span {
    font-size: 0.85rem;
  }
}

/* 小屏手机优化 */
@media (max-width: 480px) {
  .section-header h2 {
    font-size: 1.5rem;
    line-height: 1.3;
    padding: 0.2em 0;
  }

  /* 照片墙单列显示 */
  .photo-gallery {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}

/* 优化触摸设备的交互 */
@media (hover: none) and (pointer: coarse) {
  /* 移除悬停效果，直接显示 */
  .photo-overlay {
    transform: translateY(0);
  }

  .photo-item img {
    transform: none;
  }
}
</style>


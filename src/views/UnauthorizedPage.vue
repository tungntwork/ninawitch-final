<template>
  <div class="unauth-wrapper">
    <div class="unauth-content">
      <h1 class="unauth-title">🚫 {{ t.title }}</h1>
      <p class="unauth-message">{{ t.message }}</p>
      <router-link to="/" class="unauth-link">← {{ t.backHome }}</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useLanguageStore } from '@/store/languague'

const languageStore = useLanguageStore()

const t = computed(() => {
  const vi = {
    title: 'Không có quyền truy cập',
    message: 'Bạn cần đăng nhập với quyền quản trị viên để truy cập trang này.',
    backHome: 'Quay về trang chủ'
  }

  const en = {
    title: 'Unauthorized Access',
    message: 'You must be logged in as an administrator to access this page.',
    backHome: 'Back to Home'
  }

  return languageStore.currentLang === 'vi' ? vi : en
})
</script>

<style scoped>
.unauth-wrapper {
  background: linear-gradient(to bottom right, #1e1e1e, #111);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "JosefinNormal", sans-serif;
  padding: 0 2vw;
  text-align: center;
  color: white;
}

.unauth-content {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 3vw 4vw;
  border-radius: 1vw;
  backdrop-filter: blur(0.8vw);
  box-shadow: 0 0 2vw rgba(255, 255, 255, 0.08);
}

.unauth-title {
  font-size: 2.4vw;
  font-weight: bold;
  margin-bottom: 1vw;
  color: #ffffff;
  text-shadow: 0 0 0.5vw rgba(255, 255, 255, 0.3);
}

.unauth-message {
  font-size: 1.1vw;
  margin-bottom: 2vw;
  color: #dddddd;
}

.unauth-link {
  font-size: 1vw;
  color: #8ab4f8;
  text-decoration: underline;
  transition: color 0.3s ease;
}

.unauth-link:hover {
  color: #aaccff;
}
</style>

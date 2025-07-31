import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "../src/assets/tailwind.css";
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'
import { createI18n } from 'vue-i18n'
import { messages } from '../src/i18n/index.js';

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'vi',
  fallbackLocale: 'en',
  messages
})

createApp(App)
.provide('isMobile', window.innerWidth <= 768)
.use(createPinia())
.use(i18n)
.use(Antd)
.use(router)
.mount('#app')

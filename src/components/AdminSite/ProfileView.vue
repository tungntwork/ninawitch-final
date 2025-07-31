<template>
  <div class="px-[8vw] pt-[10vw] min-h-screen bg-[#171717] text-white">
    <h2 class="text-[2vw] font-bold mb-[2vw]">
      {{ lang === 'vi' ? 'Thông tin cá nhân' : 'Profile Information' }}
    </h2>
    <div class="text-[1.1vw] space-y-[1vw] bg-[#1e1e1e] p-[2vw] rounded-[1vw]">
      <div><strong>{{ t('name') }}:</strong> {{ auth.user.name }}</div>
      <div><strong>{{ t('email') }}:</strong> {{ auth.user.email }}</div>
      <div><strong>{{ t('role') }}:</strong> {{ auth.user.role }}</div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '../../store/auth'
import { useLanguageStore } from '../../store/languague'

const auth = useAuthStore()
const lang = useLanguageStore().language

const t = (key) => {
  const vi = { name: 'Tên', email: 'Email', role: 'Vai trò' }
  const en = { name: 'Name', email: 'Email', role: 'Role' }
  return lang === 'vi' ? vi[key] : en[key]
}
</script>

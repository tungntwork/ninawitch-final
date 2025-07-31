<template>
  <div class="px-[8vw] pt-[10vw] text-white min-h-screen bg-[#171717]">
    <h2 class="text-[2vw] font-bold mb-[2vw]">
      {{ lang === 'vi' ? 'Đổi mật khẩu' : 'Change Password' }}
    </h2>

    <div class="max-w-[40vw] space-y-[1.5vw]">
      <div>
        <label class="block mb-[0.5vw]">{{ t('old') }}</label>
        <input v-model="oldPassword" type="password" class="input" />
      </div>
      <div>
        <label class="block mb-[0.5vw]">{{ t('new') }}</label>
        <input v-model="newPassword" type="password" class="input" />
      </div>
      <button
        @click="changePassword"
        class="bg-blue-600 px-[2vw] py-[0.8vw] rounded text-white text-[1vw]"
      >
        {{ t('submit') }}
      </button>
      <p v-if="message" class="mt-[1vw] text-[1vw] text-green-400">{{ message }}</p>
      <p v-if="error" class="mt-[1vw] text-[1vw] text-red-400">{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from '../../utils/axios'
import { useLanguageStore } from '../../store/languague'

const oldPassword = ref('')
const newPassword = ref('')
const message = ref('')
const error = ref('')
const lang = useLanguageStore().language

const t = (key) => {
  const vi = {
    old: 'Mật khẩu cũ',
    new: 'Mật khẩu mới (tối thiểu 8 ký tự)',
    submit: 'Đổi mật khẩu'
  }
  const en = {
    old: 'Old Password',
    new: 'New Password (min 8 characters)',
    submit: 'Change Password'
  }
  return lang === 'vi' ? vi[key] : en[key]
}

const changePassword = async () => {
  message.value = ''
  error.value = ''
  try {
    const token = localStorage.getItem('token')
    const res = await axios.put('/api/users/change-password', {
      oldPassword: oldPassword.value,
      newPassword: newPassword.value
    }, {
      headers: { Authorization: `Bearer ${token}` }
    })
    message.value = res.data.message
  } catch (err) {
    error.value = err.response?.data?.message || 'Có lỗi xảy ra'
  }
}
</script>

<style scoped>
.input {
  width: 100%;
  padding: 0.7vw;
  font-size: 1vw;
  background-color: #2b2b2b;
  border: 1px solid white;
  border-radius: 0.5vw;
  color: white;
}
</style>

<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-[#1e1e1e] text-white rounded p-[2vw] w-[35vw]">
      <h2 class="text-[1.5vw] font-bold mb-[1vw]">Cập nhật người dùng</h2>
      <div class="mb-[1vw]">
        <label class="block mb-[0.5vw]">Tên</label>
        <input v-model="form.name" class="input" />
      </div>
      <div class="mb-[1vw]">
        <label class="block mb-[0.5vw]">Email</label>
        <input v-model="form.email" type="email" class="input" />
      </div>
      <div class="mb-[1vw]">
        <label class="block mb-[0.5vw]">Vai trò</label>
        <select v-model="form.role" class="input">
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>
      <div class="flex justify-end gap-[1vw]">
        <button @click="$emit('close')" class="bg-gray-600 px-[1.5vw] py-[0.6vw] rounded">Huỷ</button>
        <button @click="submit" class="bg-blue-600 px-[1.5vw] py-[0.6vw] rounded">Cập nhật</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import axios from '../../utils/axios'
// @ts-ignore
// eslint-disable-next-line no-undef
const props = defineProps({ user: Object })
// @ts-ignore
// eslint-disable-next-line no-undef
const emit = defineEmits(['close', 'saved'])

const form = ref({
  name: '',
  email: '',
  role: ''
})

watch(() => props.user, (newVal) => {
  if (newVal) {
    form.value = { ...newVal }
  }
}, { immediate: true })

const submit = async () => {
  await axios.put(`/api/users/${props.user._id}`, form.value)
  emit('saved')
  emit('close')
}
</script>

<style scoped>
.input {
  width: 100%;
  padding: 0.6vw;
  background: #2b2b2b;
  border: 1px solid white;
  border-radius: 0.5vw;
  color: white;
  font-size: 1vw;
}
</style>

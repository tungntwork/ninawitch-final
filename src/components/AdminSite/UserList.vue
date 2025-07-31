<template>
  <div class="px-[8vw] pt-[10vw] text-white min-h-screen bg-[#171717]">
    <div class="flex justify-between items-center mb-[2vw]">
      <h2 class="text-[1.5vw] font-bold">
        {{ t('title') }}
      </h2>
      <button
        class="bg-blue-600 text-white px-[1.5vw] py-[0.8vw] text-[1vw] rounded"
        @click="openAdd"
      >
        {{ t('add') }}
      </button>
    </div>

    <table class="w-full border-collapse">
      <thead>
        <tr class="bg-gray-800 text-left text-[1vw]">
          <th class="border border-white px-[1vw] py-[0.7vw]">{{ t('name') }}</th>
          <th class="border border-white px-[1vw] py-[0.7vw]">{{ t('email') }}</th>
          <th class="border border-white px-[1vw] py-[0.7vw]">{{ t('role') }}</th>
          <th class="border border-white px-[1vw] py-[0.7vw]">{{ t('action') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in paginatedUsers"
          :key="user._id"
          class="hover:bg-gray-700 transition-colors text-[1vw]"
        >
          <td class="border border-white px-[1vw] py-[0.6vw]">{{ user.name }}</td>
          <td class="border border-white px-[1vw] py-[0.6vw]">{{ user.email }}</td>
          <td class="border border-white px-[1vw] py-[0.6vw]">{{ user.role }}</td>
          <td class="border border-white px-[1vw] py-[0.6vw]">
            <button
              v-if="user.role === 'admin'"
              class="text-blue-400 hover:underline"
              @click="editUser(user)"
            >
              {{ t('edit') }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination -->
    <div class="flex justify-end mt-[2vw] text-white text-[1vw]">
      <button
        @click="prevPage"
        :disabled="page === 1"
        class="px-[1vw] py-[0.6vw] bg-gray-600 rounded mr-[1vw]"
      >
        {{ t('prev') }}
      </button>
      <span>{{ page }} / {{ totalPages }}</span>
      <button
        @click="nextPage"
        :disabled="page === totalPages"
        class="px-[1vw] py-[0.6vw] bg-gray-600 rounded ml-[1vw]"
      >
        {{ t('next') }}
      </button>
    </div>

    <!-- Modals -->
    <AddUser v-if="showAddModal" @close="closeAdd" @saved="fetchUsers" />
    <UpdateUser v-if="showEditModal" :user="editingUser" @close="closeEdit" @saved="fetchUsers" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from '../../utils/axios'
import AddUser from './AddUser.vue'
import UpdateUser from './UpdateUser.vue'
import { useLanguageStore } from '../../store/languague'

const users = ref([])
const page = ref(1)
const limit = 5
const showAddModal = ref(false)
const showEditModal = ref(false)
const editingUser = ref(null)
const language = useLanguageStore()

const t = (key) => {
  const vi = {
    title: 'Danh sách người dùng',
    name: 'Tên',
    email: 'Email',
    role: 'Vai trò',
    action: 'Hành động',
    edit: 'Sửa',
    add: 'Thêm người dùng',
    prev: 'Trước',
    next: 'Sau'
  }
  const en = {
    title: 'User List',
    name: 'Name',
    email: 'Email',
    role: 'Role',
    action: 'Action',
    edit: 'Edit',
    add: 'Add User',
    prev: 'Prev',
    next: 'Next'
  }
  return language.language === 'vi' ? vi[key] : en[key]
}

const fetchUsers = async () => {
  const res = await axios.get('/api/users')
  users.value = res.data
}

const totalPages = computed(() =>
  Math.ceil(users.value.length / limit)
)

const paginatedUsers = computed(() =>
  users.value.slice((page.value - 1) * limit, page.value * limit)
)

const nextPage = () => {
  if (page.value < totalPages.value) page.value++
}
const prevPage = () => {
  if (page.value > 1) page.value--
}

const openAdd = () => {
  showAddModal.value = true
}
const closeAdd = () => {
  showAddModal.value = false
}

const editUser = (user) => {
  editingUser.value = user
  showEditModal.value = true
}
const closeEdit = () => {
  showEditModal.value = false
}

onMounted(fetchUsers)
</script>

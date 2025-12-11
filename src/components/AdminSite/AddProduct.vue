<template>
  <div v-if="visible" class="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
    <div class="bg-[#1e1e1e] text-white rounded w-[600px] max-h-[90vh]">
      <div class="p-6 overflow-y-auto max-h-[85vh]">
        <h2 class="text-lg font-semibold mb-4">Thêm sản phẩm</h2>

        <!-- Tên -->
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label class="block mb-1">Tên (VI)</label>
            <input v-model="form.name.vi" type="text" class="input" />
          </div>
          <div>
            <label class="block mb-1">Tên (EN)</label>
            <input v-model="form.name.en" type="text" class="input" />
          </div>
        </div>

        <!-- Subcription -->
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label class="block mb-1">Subcription (VI)</label>
            <input v-model="form.subcription.vi" type="text" class="input" />
          </div>
          <div>
            <label class="block mb-1">Subcription (EN)</label>
            <input v-model="form.subcription.en" type="text" class="input" />
          </div>
        </div>

        <!-- Description -->
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label class="block mb-1">Mô tả (VI)</label>
            <textarea v-model="form.description.vi" class="input" rows="2" />
          </div>
          <div>
            <label class="block mb-1">Mô tả (EN)</label>
            <textarea v-model="form.description.en" class="input" rows="2" />
          </div>
        </div>

        <!-- Giá -->
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label class="block mb-1">Giá</label>
            <!-- .number để Vue convert số, tránh string formatted -->
            <input v-model.number="form.price" type="number" class="input" />
          </div>
          <div>
            <label class="block mb-1">Giá khuyến mãi</label>
            <input v-model.number="form.salePrice" type="number" class="input" />
          </div>
        </div>

        <!-- Category -->
        <div class="mb-4">
          <label class="block mb-1">Loại sản phẩm</label>
          <select v-model="form.category" class="input">
            <option value="">-- Chọn loại --</option>
            <option v-for="cat in categories" :key="cat._id" :value="cat._id">
              {{ cat.name.vi }} / {{ cat.name.en }}
            </option>
          </select>
        </div>

        <!-- Need -->
        <div class="mb-4">
          <label class="block mb-1">Nhu cầu (Need)</label>
          <select v-model="form.need" class="input">
            <option value="">-- Chọn nhu cầu --</option>
            <option v-for="n in needs" :key="n._id" :value="n._id">
              {{ n.name.vi }} / {{ n.name.en }}
            </option>
          </select>
        </div>

        <!-- Image -->
        <div class="mb-4">
          <label class="block mb-1">Ảnh</label>
          <input type="file" @change="handleFileChange" class="text-white" />
        </div>

        <!-- Actions -->
        <div class="flex justify-end gap-3">
          <button class="px-3 py-1 bg-gray-500 rounded" @click="emit('close')">Huỷ</button>
          <button
            class="px-3 py-1 bg-blue-500 rounded disabled:opacity-50"
            :disabled="isSubmitting"
            @click="submit"
          >
            <span v-if="!isSubmitting">Thêm</span>
            <span v-else>Đang gửi...</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineEmits, defineProps } from 'vue'
import axios from '../../utils/axios'

const emit = defineEmits(['close'])
defineProps({ visible: Boolean })

const form = ref({
  name: { vi: '', en: '' },
  subcription: { vi: '', en: '' },
  description: { vi: '', en: '' },
  price: null,
  salePrice: null,
  category: '',
  need: '',
  image: null
})

const categories = ref([])
const needs = ref([])

async function fetchCategories() {
  try {
    const res = await axios.get('/api/categories')
    categories.value = res.data
  } catch (err) {
    console.error('Lỗi lấy danh sách categories:', err)
  }
}

async function fetchNeeds() {
  try {
    const res = await axios.get('/api/needs')
    needs.value = res.data
  } catch (err) {
    console.error('Lỗi lấy danh sách needs:', err)
  }
}

function handleFileChange(e) {
  form.value.image = e.target.files[0]
}

// helper to ensure numeric values are plain numbers/strings of digits
const isSubmitting = ref(false);

const normalizeForFormData = (v) => {
  if (v === null || v === undefined) return '';
  return String(v);
}

async function submit() {
  if (isSubmitting.value) return;
  isSubmitting.value = true;

  try {
    const fd = new FormData();
    fd.append('name', JSON.stringify(form.value.name));
    fd.append('subcription', JSON.stringify(form.value.subcription));
    fd.append('description', JSON.stringify(form.value.description));
    fd.append('price', normalizeForFormData(form.value.price));
    fd.append('salePrice', normalizeForFormData(form.value.salePrice));
    fd.append('category', form.value.category);
    fd.append('need', form.value.need);
    if (form.value.image) fd.append('image', form.value.image);

    // Debug: list entries (xóa khi production)
    for (const pair of fd.entries()) console.log(pair[0], pair[1]);

    // Don't assign to unused variable or log if you want
    await axios.post('/api/products', fd, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });

    alert('Thêm sản phẩm thành công!');
    emit('close');
  } catch (err) {
    console.error('Error creating product:', err);
    if (err?.response) {
      console.error('Server response:', err.response.status, err.response.data);
      alert('Server error: ' + (err.response.data?.message || JSON.stringify(err.response.data)));
    } else if (err?.request) {
      console.error('No response received:', err.request);
      alert('No response from server. Check network/CORS/server logs.');
    } else {
      alert('Error: ' + (err.message || 'Unknown error'));
    }
  } finally {
    isSubmitting.value = false;
  }
}

onMounted(() => {
  fetchCategories()
  fetchNeeds()
})
</script>

<style scoped>
.input {
  width: 100%;
  padding: 0.5rem;
  background-color: #2b2b2b;
  border: 1px solid white;
  border-radius: 0.25rem;
  color: white;
}
</style>

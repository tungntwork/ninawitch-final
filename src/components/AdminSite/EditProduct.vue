<template>
  <div class="px-[8vw] pt-[5vw] bg-[#171717] min-h-screen text-white">
    <h2 class="text-[1.5vw] font-bold mb-6">Edit Product</h2>

    <!-- Tên -->
    <div class="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label>Tên (vi)</label>
        <input v-model="form.name.vi" class="input" />
      </div>
      <div>
        <label>Tên (en)</label>
        <input v-model="form.name.en" class="input" />
      </div>
    </div>

    <!-- Subcription -->
    <div class="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label>Subcription (vi)</label>
        <input v-model="form.subcription.vi" class="input" />
      </div>
      <div>
        <label>Subcription (en)</label>
        <input v-model="form.subcription.en" class="input" />
      </div>
    </div>

    <!-- Category -->
    <div class="mb-4">
      <label>Category</label>
      <select v-model="form.category" class="input">
        <option v-for="cat in categories" :key="cat._id" :value="cat._id">
          {{ cat.name.vi }}
        </option>
      </select>
    </div>

    <!-- SubCategory -->
    <select v-model="form.need" class="input">
  <option value="">-- Chọn nhu cầu --</option>
  <option v-for="n in needs" :key="n._id" :value="n._id">
    {{ n.name.vi }} / {{ n.name.en }}
  </option>
</select>

    <!-- Pricing Option -->
    <div class="mb-4">
      <label>Pricing Option</label>
      <select v-model="pricingOption" class="input">
        <option value="contact">Liên hệ báo giá</option>
        <option value="custom">Chọn giá</option>
      </select>
    </div>

    <!-- Price Inputs -->
    <div v-if="pricingOption === 'custom'" class="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label>Giá (price)</label>
        <input type="number" v-model="form.price" class="input" />
      </div>
      <div>
        <label>Giá khuyến mãi (sale price)</label>
        <input type="number" v-model="form.salePrice" class="input" />
      </div>
    </div>

    <!-- Description -->
    <div class="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label>Mô tả (vi)</label>
        <textarea v-model="form.description.vi" class="input" rows="3"></textarea>
      </div>
      <div>
        <label>Mô tả (en)</label>
        <textarea v-model="form.description.en" class="input" rows="3"></textarea>
      </div>
    </div>

    <!-- Ảnh -->
    <div class="mb-6">
      <label>Change Image</label>
      <input type="file" @change="handleImage" class="mt-2" />
      <img v-if="form.productImageUrl" :src="form.productImageUrl" class="mt-2 max-w-[150px] rounded" />
    </div>

    <!-- Actions -->
    <div class="flex gap-4">
      <button @click="confirmUpdate" class="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
      <button @click="confirmDelete" class="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from '../../utils/axios'

const route = useRoute()
const router = useRouter()

const form = ref({
  name: { vi: '', en: '' },
  subcription: { vi: '', en: '' },
  description: { vi: '', en: '' },
  price: 0,
  salePrice: 0,
  productImageUrl: '',
  rated: 5,
  sold: 5,
  category: '',
  need: '',
})

const categories = ref([])
const needs = ref([])
const imageFile = ref(null)
const pricingOption = ref('custom') // default: chọn giá

function safeParse(value) {
  if (typeof value === 'string') {
    try {
      return JSON.parse(value)
    } catch {
      return { vi: '', en: '' }
    }
  }
  return value || { vi: '', en: '' }
}

async function fetchProduct() {
  const { data } = await axios.get(`/api/products/${route.params.id}`)

  form.value = {
    ...data,
    name: safeParse(data.name),
    subcription: safeParse(data.subcription),
    description: safeParse(data.description),
    category: data.category?._id || '',
    need: data.need?._id || ''
  }

  // Tự động set pricing option nếu không có giá
  if (!data.price || data.price === 0) {
    pricingOption.value = 'contact'
  } else {
    pricingOption.value = 'custom'
  }
}

async function fetchNeeds() {
  const { data } = await axios.get('/api/needs')
  needs.value = data
}

async function fetchCategories() {
  const { data } = await axios.get('/api/categories')
  categories.value = data
}

function handleImage(e) {
  imageFile.value = e.target.files[0]
  const reader = new FileReader()
  reader.onload = () => {
    form.value.productImageUrl = reader.result
  }
  reader.readAsDataURL(imageFile.value)
}

async function confirmUpdate() {
  if (pricingOption.value === 'custom') {
    const price = parseFloat(form.value.price)
    const salePrice = parseFloat(form.value.salePrice)

    if (!isNaN(price) && !isNaN(salePrice) && salePrice > price) {
      alert('Giá khuyến mãi không được lớn hơn giá gốc!')
      return
    }
  }

  const confirmed = window.confirm("Bạn có chắc muốn cập nhật sản phẩm này?")
  if (!confirmed) return

  const formData = new FormData()
  // formData.append('name', JSON.stringify(form.value.name))
  // formData.append('subcription', JSON.stringify(form.value.subcription))
  // formData.append('description', JSON.stringify(form.value.description))
  formData.append('name[vi]', form.value.name.vi)
  formData.append('name[en]', form.value.name.en)

  formData.append('subcription[vi]', form.value.subcription.vi)
  formData.append('subcription[en]', form.value.subcription.en)

  formData.append('description[vi]', form.value.description.vi)
  formData.append('description[en]', form.value.description.en)
  formData.append('price', pricingOption.value === 'custom' ? form.value.price : 0)
  formData.append('salePrice', pricingOption.value === 'custom' ? form.value.salePrice : 0)
  formData.append('sold', form.value.sold)
  formData.append('rated', form.value.rated)
  formData.append('category', form.value.category)
  formData.append('need', form.value.need) 
  if (imageFile.value) formData.append('file', imageFile.value)

  try {
    await axios.put(`/api/products/${route.params.id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    alert('Đã cập nhật thành công!')
    router.push('/admin/products')
  } catch (err) {
    alert('Lỗi cập nhật sản phẩm!')
    console.error(err)
  }
}

async function confirmDelete() {
  const confirmed = window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")
  if (!confirmed) return

  try {
    await axios.delete(`/api/products/${route.params.id}`)
    alert('Đã xóa thành công!')
    router.push('/admin/products')
  } catch (err) {
    alert('Lỗi khi xóa sản phẩm!')
    console.error(err)
  }
}

onMounted(() => {
  fetchProduct()
  fetchCategories()
  fetchNeeds() 
})
</script>

<style scoped>
.input {
  display: block;
  width: 100%;
  margin-top: 0.4vw;
  margin-bottom: 1.2vw;
  padding: 0.5vw;
  background: #2b2b2b;
  border: 1px solid white;
  border-radius: 4px;
  color: white;
}
</style>

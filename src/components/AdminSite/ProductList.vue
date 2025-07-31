<template>
  <div class="px-[8vw] pt-[5vw] bg-[#171717] min-h-screen text-white">
    <div class="flex justify-between items-center mb-[2vw]">
      <h2 class="text-[1.5vw] font-bold">
        {{ t('productList.title') }}
      </h2>
      <div class="flex gap-[1vw] items-center">
        <select v-model="selectedCategory" @change="handleFilter"
          class="bg-gray-800 border border-white text-white px-4 py-2 rounded">
          <option value="">{{ t('productList.allCategories') }}</option>
          <option v-for="cat in categories" :key="cat._id" :value="cat._id">
            {{ cat.name[languageStore.currentLang] || cat.name.en }}
          </option>
        </select>
        <button class="bg-blue-500 text-white px-4 py-2 rounded" @click="showAddProductModal">
  {{ t('productList.add') }}
</button>
      </div>
    </div>

    <table class="custom-dark-table w-full border-collapse">
      <thead>
        <tr>
          <th class="border border-white px-4 py-2">{{ t('productList.name') }}</th>
          <th class="border border-white px-4 py-2">{{ t('productList.price') }}</th>
          <th class="border border-white px-4 py-2">{{ t('productList.salePrice') }}</th>
          <th class="border border-white px-4 py-2">{{ t('productList.sold') }}</th>
          <th class="border border-white px-4 py-2">{{ t('productList.category') }}</th>
          <th class="border border-white px-4 py-2">{{ t('productList.action') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product._id">
          <td class="border border-white px-4 py-2">
            {{ product.name[languageStore.currentLang] || product.name.en }}
          </td>
          <td class="border border-white px-4 py-2">{{ product.price }}</td>
          <td class="border border-white px-4 py-2">{{ product.salePrice }}</td>
          <td class="border border-white px-4 py-2">{{ product.sold }}</td>
          <td class="border border-white px-4 py-2">
            {{ product.category?.name[languageStore.currentLang] || product.category?.name.en || '-' }}
          </td>
          <td class="border border-white px-4 py-2">
            <button class="text-blue-400 hover:underline" @click="$router.push(`/admin/products/${product._id}/edit`)">
              {{ t('productList.edit') }}
            </button>
            <button class="text-red-400 hover:underline ml-2" @click="confirmDelete(product._id)">
              {{ t('productList.delete') }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="flex justify-left mt-[2vw]">
      <button class="px-4 py-2 bg-gray-700 text-white rounded mr-2" :disabled="currentPage === 1"
        @click="handlePageChange(currentPage - 1)">
        {{ t('productList.previous') }}
      </button>
      <span class="px-4 py-2">{{ currentPage }}</span>
      <button class="px-4 py-2 bg-gray-700 text-white rounded ml-2" :disabled="currentPage * pageSize >= total"
        @click="handlePageChange(currentPage + 1)">
        {{ t('productList.next') }}
      </button>
    </div>

    <AddProduct :visible="isModalVisible" @close="isModalVisible = false" />
  </div>
</template>

<script>
import AddProduct from './AddProduct.vue'
import axios from '../../utils/axios'
import { useLanguageStore } from '../../store/languague'
import { useI18n } from 'vue-i18n'

export default {
  name: 'ProductList',
  components: { AddProduct },
  data() {
    const { t } = useI18n()
    return {
      t,
      products: [],
      categories: [],
      selectedCategory: '',
      isModalVisible: false,
      currentPage: 1,
      pageSize: 5,
      total: 0,
      languageStore: useLanguageStore(),
    }
  },
  methods: {
    async fetchCategories() {
      try {
        const res = await axios.get('/api/categories')
        this.categories = res.data
      } catch (err) {
        console.error('Error fetching categories:', err)
      }
    },
    async fetchProducts() {
      try {
        const res = await axios.get('/api/products/filter', {
          params: {
            page: this.currentPage,
            limit: this.pageSize,
            category: this.selectedCategory || undefined
          }
        })
        this.products = res.data.products
        this.total = res.data.total
      } catch (err) {
        console.error('Error fetching products:', err)
      }
    },
    handlePageChange(page) {
      this.currentPage = page
      this.fetchProducts()
    },
    handleFilter() {
      this.currentPage = 1
      this.fetchProducts()
    },
    showAddProductModal() {
      this.isModalVisible = true
    },
    editProduct(product) {
      console.log('Edit product:', product)
    },
    confirmDelete(id) {
      if (window.confirm(
        this.languageStore.currentLang === 'vi'
          ? 'Bạn có chắc chắn muốn xoá sản phẩm này không?'
          : 'Are you sure you want to delete this product?'
      )) {
        this.deleteProduct(id)
      }
    },
    async deleteProduct(id) {
      try {
        await axios.delete(`/api/products/${id}`)
        this.fetchProducts()
      } catch (err) {
        console.error('Error deleting product:', err)
      }
    }
  },
  mounted() {
    this.fetchCategories()
    this.fetchProducts()
  }
}
</script>

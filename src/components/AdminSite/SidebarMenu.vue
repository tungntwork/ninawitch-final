<template>
  <div class="sidebar-menu">
    <div
      :class="['menu-item', isActive('/admin/products') ? 'active' : '']"
      @click="$router.push('/admin/products')"
    >
      Product List
    </div>
    <div
      :class="['menu-item', isActive('/admin/users') ? 'active' : '']"
      @click="$router.push('/admin/users')"
    >
      User List
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

function isActive(path) {
  return route.path.startsWith(path)
}
</script>

<style scoped>
.sidebar-menu {
  display: flex;
  flex-direction: column;
  padding-top: 2vw;
}

.menu-item {
  padding: 1vw 2vw;
  color: #bbbbbb;
  font-size: 1.1vw;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 0.5vw;
  margin-bottom: 0.5vw;
}

.menu-item:hover {
  background-color: #2b2b2b;
  color: white;
}

.menu-item.active {
  background-color: white;
  color: black;
  font-weight: bold;
}
</style>

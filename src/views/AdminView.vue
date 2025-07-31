<template>
  <div class="min-h-screen flex bg-[#171717] text-white">
    <!-- Sidebar -->
    <a-layout-sider class="!bg-[#1e1e1e] text-white w-[15vw] pt-[12vw]">
      <SidebarMenu />
    </a-layout-sider>

    <!-- Content -->
    <a-layout class="flex-1 bg-[#171717] px-[4vw] py-[0vw]">
      <a-layout-header class="!bg-transparent text-[1.5vw] font-bold pt-[8vw] text-white">
        Admin Panel
      </a-layout-header>

      <a-layout-content class="text-white">
        <router-view />
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script setup>
import SidebarMenu from '../components/AdminSite/SidebarMenu.vue';
</script>
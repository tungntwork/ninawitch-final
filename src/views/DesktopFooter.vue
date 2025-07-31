<template>
    <div class="w-full h-[26.25vw] relative bg-[#0D0D0D] flex justify-center">
        <!-- Elip 1 -->
         <img src="../assets/img/Desktop/Footer/backfooter.webp" alt="" class="w-full h-auto">
        <!-- Contact by mail -->
        <div class="w-full h-[16.2vw] absolute top-0 left-0 flex items-center flex-col">
            <div class="text-white mt-[2vw] z-30 text-[3.33vw] font-lemajor glow-effect">
                {{ $t('desktopFooter.title') }}
            </div>
            <div class="text-white mt-[1vw] font-light font-josefin-normal text-[1.1vw]">{{ $t('desktopFooter.description') }}</div>
            <!-- Email -->
            <div class="w-auto h-auto flex flex-row space-x-[1vw] mt-[1.8vw]">
                <input  v-model="email" type="email"
                    class="w-[20vw] h-[2.4vw] text-[1.1vw] font-josefin-normal pl-[1vw] pt-[0.05vw] font-normal bg-[#f6f2f220] rounded-[0.5vw] outline-none text-white"
                    :placeholder="$t('desktopFooter.placeholder')">
                <div
                     @click="handleSubscribe"
                    class="button-subcribe w-[6.2vw] h-[2.4vw] hover:cursor-pointer rounded-[0.5vw] text-[1.1vw] font-josefin-normal hover:text-[#0D0D0D] text-center flex items-center justify-center hover:bg-[white] text-white border-[1px] border-white">
                    <p class="mt-[0.3vw] font-light">{{ $t('desktopFooter.button') }}</p>
                </div>
            </div>
        </div>
        <!-- Footer Infor -->
        <div class="w-full h-[10vw] bg-[#1C1C1C] absolute bottom-0 flex justify-center">
            <div class="w-[82.5vw] h-full flex items-center">
                <!-- Logo -->
                <img src="../assets/img/Desktop/Home/Footer/Nina-logo.webp" alt="" class="w-[6.65vw] h-auto">
                <!-- Combo contact -->
                <div class="w-auto h-[80%] ml-[2.25vw] mt-[1vw]">
                    <div class="font-bon-fayoge font-extralight text-[3vw] text-white glow-effect">
                        {{ $t('desktopFooter.museumName') }}
                    </div>
                    <div class="w-auto h-auto flex flex-row translate-y-[-0.5vw]">
                        <img src="../assets/img/Desktop/Home/Footer/Nina-ico-facebook.webp" alt="" class="w-[1.3vw] mr-[0.8vw] hover:scale-[1.3] hover:cursor-pointer transition-all duration-300" @click="openFacebook">
                        <img src="../assets/img/Desktop/Home/Footer/Nina-ico-tiktok.webp" alt="" class="w-[1.3vw] mr-[0.8vw] hover:scale-[1.3] hover:cursor-pointer transition-all duration-300">
                        <img src="../assets/img/Desktop/Home/Footer/Nina-ico-youtube.webp" alt="" class="w-[1.3vw] mr-[0.8vw] hover:scale-[1.3] hover:cursor-pointer transition-all duration-300">
                        <img src="../assets/img/Desktop/Home/Footer/Nina-ico-instagram.webp" alt="" class="w-[1.3vw] mr-[0.8vw] hover:scale-[1.3] hover:cursor-pointer transition-all duration-300">
                    </div>
                </div>
                <!-- Service -->
                 <div class="flex flex-col ml-[8vw]">
                    <a href="/" class="font-josefin-normal font-light text-white text-[1.1vw]  hover:cursor-pointer">{{ $t('desktopFooter.nav.service') }}</a>
                    <a href="/shop" class="font-josefin-normal font-light text-white text-[1.1vw]  hover:cursor-pointer" @click="router.push('/shop')">{{ $t('desktopFooter.nav.shop') }}</a>
                    <!-- <a href="/" class="font-josefin-normal font-light text-white text-[1.1vw]  hover:cursor-pointer">Action</a> -->
                 </div>
                 <!-- About -->
                  <div class="flex flex-col ml-[8vw]">
                    <a href="/" class="font-josefin-normal font-light text-white text-[1.1vw]  hover:cursor-pointer">{{ $t('desktopFooter.nav.about') }}</a>
                    <p class="font-josefin-normal font-light text-white text-[1.1vw]  hover:cursor-pointer" @click="openFacebook">{{ $t('desktopFooter.nav.contact') }}</p>
                    <a href="/" class="font-josefin-normal font-light text-white text-[1.1vw]  hover:cursor-pointer">{{ $t('desktopFooter.nav.vip') }}</a>
                 </div>
                  <!-- Contact -->
                   <div class="flex flex-col ml-[8vw]">
                    <p class="font-josefin-normal font-light text-white text-[1.1vw] hover:cursor-pointer">{{ $t('desktopFooter.nav.contactWork') }}</p>
                    <a href="mailto:wonderlandhiding@gmail.com" class="font-josefin-normal hover:cursor-pointer font-light text-white text-[1.1vw]">Email: wonderlandhiding@gmail.com</a>
                    <p class="font-josefin-normal font-light text-white text-[1.1vw] hover:cursor-pointer" @click="openFacebook">Facebook.com/bupbegeisha000</p>
                 </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from '../utils/axios'
import router from '@/router'

const email = ref('')

const openFacebook = () => {
  window.open('https://www.facebook.com/bupbegeisha000', '_blank')
}

async function handleSubscribe() {
  if (!email.value || !email.value.includes('@')) {
    alert('Vui lòng nhập email hợp lệ!')
    return
  }

  try {
    await axios.post('/api/subcribes', { subscribeEmail: email.value })
    alert('Cảm ơn bạn đã đăng ký!')
    email.value = ''
  } catch (err) {
    if (err.response?.data?.message?.includes('duplicate')) {
      alert('Email này đã đăng ký rồi!')
    } else {
      alert('Đã xảy ra lỗi. Vui lòng thử lại sau.')
      console.error(err)
    }
  }
}
</script>

<style scoped>
.font-lemajor {
    font-family: "TP Le Major", sans-serif;
}

.font-josefin-normal {
    font-family: "JosefinNormal", sans-serif;
}

.font-bon-fayoge {
    font-family: "BonFoyage", sans-serif;
}

.button-subcribe:hover {
    box-shadow: 0 0 0.7vw rgba(255, 255, 255, 0.8);
    transition: all 0.3s ease-in-out;
}

.glow-effect {
  text-shadow: 0 0 0.05vw rgba(255, 255, 255, 0.8), 0 0 0.15vw rgba(255, 255, 255, 0.3), 0 0 0.6vw rgba(255, 255, 255, 0.2);
}
</style>
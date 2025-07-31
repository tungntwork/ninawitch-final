<template>
    <div class="w-full h-auto flex flex-col items-center bg-[#1C1C1C]">
        <div class="w-full h-[60vw] relative flex flex-col items-center overflow-hidden">
            <div class="absolute bottom-0 w-full h-[30vw] bg-[#FFFFFF50] rounded-[50%] blur-[10vw] translate-y-[15vw]">
            </div>
            <div class="absolute top-0 bg-[#E164E690] w-full h-[20vw] rounded-[50%] translate-y-[-10vw] blur-[17vw]">
            </div>
            <p class="text-[6.5vw] font-lemajor text-white text-glow mt-[5vw]">
                {{ t('mobileFooter.newsletterTitle') }}
            </p>
            <p class="text-white text-[3.82vw] font-josefin-normal text-center">{{ t('mobileFooter.newsletterDescription') }}</p>
            <input type="text" :placeholder="t('mobileFooter.newsletterPlaceholder')"
                class="w-[95vw] h-[8vw] text-[3.82vw] font-josefin-normal text-center rounded-full bg-[#e5e2e975] text-[#B7B4BB] outline-none mt-[5vw]">
            <div
                class="w-[25vw] h-[10vw] border-white border-[0.3vw] text-white rounded-[3vw] mt-[3vw] flex items-center justify-center text-[3.72vw]  font-josefin-normal">
                {{ t('mobileFooter.newsletterButton') }}
            </div>
            <div class="absolute top-0 w-full h-[0.5vw] bg-gradient-to-r from-transparent to-transparent via-white">
            </div>
        </div>
        <!-- Back -->
        <div class="w-[95vw] justify-between flex bg-[#1C1C1C] items-center pt-[5vw]">
            <img src="../../assets/img/Desktop/Home/Footer/Nina-logo.webp" alt="" class="w-[30vw] h-[31vw]">
            <p class="text-white text-[9.3vw] font-lemajor font-light text-glow leading-[10vw]" v-html="t('mobileFooter.brandTitle')">
            </p>
        </div>
        <!-- social -->
        <div class="w-[66vw] h-[9.3vw] flex justify-between mt-[5vw]">
            <img src="../../assets/img/Desktop/Home/Footer/Nina-ico-facebook.webp" alt="" class="w-[9.3vw] h-[9.3vw]" @click="openFacebook">
            <img src="../../assets/img/Desktop/Home/Footer/Nina-ico-tiktok.webp" alt="" class="w-[9.3vw] h-[9.3vw]">
            <img src="../../assets/img/Desktop/Home/Footer/Nina-ico-youtube.webp" alt="" class="w-[9.3vw] h-[9.3vw]">
            <img src="../../assets/img/Desktop/Home/Footer/Nina-ico-instagram.webp" alt="" class="w-[9.3vw] h-[9.3vw]">
        </div>
        <!-- menu -->
        <div class="w-[95vw] ml-[10vw] mt-[16.3vw] flex flex-col items-start justify-start">
            <div class="space-y-[5vw] flex flex-col items-start">
                <p class="text-white text-[7vw] font-josefin-normal" @click="$router.push('/booking')">{{ t('mobileFooter.menuService') }}</p>
                <p class="text-white text-[7vw] font-josefin-normal" @click="$router.push('/shop')">{{ t('mobileFooter.menuShop') }}</p>
            </div>
            <div class="space-y-[5vw] flex flex-col items-start mt-[7vw]">
                <p class="text-white text-[7vw] font-josefin-normal" @click="$router.push('/present')">{{ t('mobileFooter.menuAbout') }}</p>
                <p class="text-white text-[7vw] font-josefin-normal" @click="openFacebook">{{ t('mobileFooter.menuContact') }}</p>
                <p class="text-white text-[7vw] font-josefin-normal" @click="$router.push('/vip')">{{ t('mobileFooter.menuVip') }}</p>
            </div>
            <div class="space-y-[53w] flex flex-col items-start mt-[5vw] pb-[5vw]">
                <p class="text-white text-[4.65vw] font-josefin-normal">{{ t('mobileFooter.contactWork') }}</p>
                <p class="text-white text-[4.65vw] font-josefin-normal">Email: wonderlandhiding@gmail.com</p>
                <p class="text-white text-[4.65vw] font-josefin-normal" @click="openFacebook">Facebook.com/bupbegeisha000 </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const openFacebook = () => {
  window.open('https://www.facebook.com/bupbegeisha000', '_blank')
}
const { t } = useI18n()
</script>

<style scoped>
.font-lemajor {
    font-family: "TP Le Major", sans-serif;
}

.font-josefin-normal {
    font-family: "JosefinNormal", sans-serif;
}

.font-josefin-italic {
    font-family: "JosefinItalic", sans-serif;
}

.text-glow {
    text-shadow: 0px 0px 4vw rgba(255, 255, 255, 0.50);
}
</style>
<template>
    <div class="w-full h-[330vw] relative overflow-hidden">
        <div class="w-full h-auto flex justify-center">
            <img src="../../assets/img/Mobile/Vip/back vip.webp" alt="" class="w-full h-auto">
            <p class="absolute top-[64vw] text-white text-[9.3vw] font-lemajor text-glow text-center" v-html="t('vipMobile.vipMobile.title')">
            </p>
            <div class="w-full h-[20vw] bg-gradient-to-r from-[#F6F6F600] to-[#F6F6F600] items-center via-[#7CB5D5] absolute top-[100vw] flex justify-center">
                <p class="text-center text-[3.82vw] text-white font-josefin-normal" v-html="t('vipMobile.vipMobile.subtitle')">
                </p>
            </div>
            <img src="../../assets/img/Mobile/Vip/back vip 2.webp" alt="" class="w-full h-auto absolute top-[134vw]">
            <div class="rounded-[7vw] absolute w-[95vw] h-[79vw] top-[200vw] flex flex-col justify-evenly items-center bg-[#00000025] backdrop-blur-[0.65vw]">
                <p class="text-end text-[7.8vw] text-white font-lemajor" v-html="t('vipMobile.vipMobile.pandoraTitle')">
                </p>
                <p class="text-white text-center text-[3.72vw] font-josefin-normal font-thin" v-html="t('vipMobile.vipMobile.pandoraDesc')">
                </p>
            </div>
        </div>
        
    </div>
    <FooterMobile />
</template>

<script setup>
import FooterMobile from './FooterMobile.vue';
import { useI18n } from 'vue-i18n'
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
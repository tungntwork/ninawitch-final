<template>
    <div class="w-full h-[350vw] relative flex justify-center overflow-hidden z-20">
        <img src="../../../assets/img/Mobile/Shop/line back shop.webp" alt="" class="w-full h-auto absolute top-0">
        <img src="../../../assets/img/Mobile/Shop/back shop gift box.webp" alt=""
            class="w-full h-auto absolute bottom-0">
        <div class="absolute top-[145vw] w-full h-[40vw] bg-gradient-to-t from-[#0D0C0F] to-transparent"></div>
        <div class="absolute top-[145vw] w-full h-[40vw] bg-gradient-to-t from-[#0D0C0F] to-transparent"></div>
        <div class="text-white w-[90vw] absolute top-[25vw] flex flex-col">
            <p class="text-white font-lemajor text-[6.7vw] tracking-[-0.2vw]" v-html="t('shopMagicGiftMobile.title')" >
            </p>
            <br />
            <br />
            <div class="text-white text-[4.18vw] font-josefin-normal font-light leading-[5.2vw]">
                <!-- ENG -->
                <p class="text-start tracking-[-0.2vw]" v-html="t('shopMagicGiftMobile.paragraphs[0]')" >
                </p>

                <p class="text-justify leading-[6vw] w-[90vw] pt-[5vw]" v-html="t('shopMagicGiftMobile.paragraphs[1]')">
                </p>

                <p class="text-start leading-[5.2vw] w-[90vw] pt-[5vw]" v-html="t('shopMagicGiftMobile.paragraphs[2]')">
                </p>

                <p class="pt-[5vw] font-lemajor text-[6.5vw] text-white">_NiNawitch_</p>
            </div>
        </div>
    </div>
</template>

<script setup>
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
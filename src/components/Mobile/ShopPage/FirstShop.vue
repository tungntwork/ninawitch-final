<template>
    <div class="w-full h-auto relative flex flex-col items-center">
        <img src="../../../assets/img/Mobile/Shop/back shop 1.webp" alt="" class="w-full h-auto">
        <p class="absolute text-center top-[59vw] text-white text-[11vw] font-lemajor text-glow" v-html="t('firstShop.firstShop.title')">
        </p>
        <div class="w-full h-auto border-t-[1px] border-b-[1px] border-[#FFFFFF60] px-[8vw] py-[6vw] text-center font-light flex justify-center items-center bg-[#FFFFFF08] text-white text-[4.96vw] font-josefin-normal" >
            {{ t('firstShop.firstShop.description') }}
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
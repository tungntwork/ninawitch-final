<template>
    <div class="w-full h-auto relative flex justify-center">
        <img src="../../../assets/img/Desktop/Shop/desktop_nina_shop_bg1.webp" alt="" class="w-full h-auto">
        <div class="w-full h-[4.2vw] bg-[#ffffff27] absolute bottom-[5.05vw] border-t-[1px] border-b-[1px] border-[#FFFFFF60] backdrop-blur-[1vw]"></div>
        <div class="absolute bottom-[5.3vw] w-[62.5vw] h-auto text-white text-[1.146vw] text-center font-thin font-josefin-normal [text-shadow:_3px_3px_rgba(0,0,0,0.3)]">
            {{ t('homeShop.row1') }}<br/>
            {{ t('homeShop.row2') }}
        </div>
        <div class="absolute w-full h-[0.1vw] bottom-0 bg-gradient-to-r from-transparent to-transparent via-white"></div>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'BookingPage',
  setup() {
    const { t } = useI18n();
    return { t };
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
</style>
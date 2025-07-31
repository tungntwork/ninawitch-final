

<template>
    <div class="w-full h-[390vw] relative flex flex-col items-center">
        <img src="../../assets/img/Mobile/Rituals/back ritual.webp" alt="" class="w-full h-auto">
        <div class="absolute top-[70vw] w-full flex flex-col items-center">
            <p class="text-white text-[15vw] font-lemajor leading-[18.6vw] text-center text-glow" v-html="t('ninaRitualMobile.title')">
            </p>
            <div
                class="mt-[11.6vw] w-full h-[13vw] flex justify-center items-center
                bg-gradient-to-r backdrop-blur-[2vw] tracking-[0.5vw] from-[#f6f6c600] to-[#f6f6c600] via-[#767153] text-[4.18vw] font-josefin-normal text-white" v-html="$t('ninaRitualMobile.subtitle')">
            </div>
            <div @click="openFacebook"
                class="mt-[10vw] w-[60.46vw] h-[10.58vw] rounded-[2.3vw] flex justify-center items-center border-[0.4vw] border-white">
                <p class="text-white text-[4.65vw] font-josefin-normal" v-html="$t('ninaRitualMobile.bookingButton')"></p>
            </div>
            <div class="mt-[7.5vw] text-white text-[4.18vw] text-center font-josefin-normal font-light" v-html="$t('ninaRitualMobile.priceNotice')">
            </div>
            <div class="mt-[7vw] w-full h-[0.5vw] bg-gradient-to-r from-transparent to-transparent via-white"></div>
            <div
                class="mt-[6.5vw] w-full h-[33vw] bg-gradient-to-r from-[#F6F6C600] to-[#F6F6C600] via-[#9E8152] backdrop-blur-[2px]
                    text-white text-center font-josefin-normal text-[3.81vw] font-light flex justify-center items-center" v-html="$t('ninaRitualMobile.note')">
            </div>
            <div
                class="content-inner w-[95vw] h-[147.2vw] flex flex-col items-center relative mt-[8.4vw] bg-[#55555533] rounded-[2.6vw] border-[0.5px] border-[#FFFFFF38] backdrop-blur-[2.55vw]">
                <div class="pt-[3.6vw] flex flex-row items-center justify-between">
                    <img src="../../assets/img/Desktop/Products/Rituals/ObjectDecor.webp" alt="" class="w-[70vw]">
                </div>
                <!-- Section 1 -->
                <div class="w-full h-auto flex flex-col items-center mt-[3.6vw] text-white">
                    <p class="text-[4.18vw] font-lemajor">{{ t('ninaRitualMobile.section1title') }}</p>
                    <p class="font-josefin-normal text-[3.72vw] font-light text-center mt-[3.53vw]" v-html="$t('ninaRitualMobile.section1content')">
                    </p>
                </div>
                <div class="w-full h-[33.2vw] bg-[#2B2B2B4D] flex flex-col items-center justify-around">
                    <p class="text-white font-josefin-normal font-light text-[3.72vw] text-center" v-html="$t('ninaRitualMobile.section1bottom')">
                    </p>
                    <div @click="openFacebook"
                        class="w-[85vw] h-[8.6vw] rounded-[1.86vw] border-[0.1vw] border-white text-center justify-center items-center flex text-white text-[3.72vw] font-josefin-normal" v-html="$t('ninaRitualMobile.section1button')">
                    </div>
                </div>
                <!-- Section 2 -->
                <div class="mt-[10vw] w-full h-auto flex flex-col items-center text-white">
                    <p class="text-[4.18vw] font-lemajor">{{ t('ninaRitualMobile.section2title') }}</p>
                    <p class="font-josefin-normal text-[3.72vw] font-light text-center mt-[3.53vw]" v-html="$t('ninaRitualMobile.section2content')">
                    </p>
                </div>
                <!-- Section 3 -->
                <div class="mt-[10vw] w-full h-auto flex flex-col items-center text-white">
                    <p class="text-[4.18vw] font-lemajor">{{ t('ninaRitualMobile.section3title') }}</p>
                    <p class="font-josefin-normal text-[3.72vw] font-light text-center mt-[3.53vw]" v-html="$t('ninaRitualMobile.section3content')">
                    </p>
                </div>
                <!-- Section 4 -->
                <div class="mt-[14vw] w-full h-auto flex flex-col items-center text-white">
                    <p class="text-[4.18vw] font-lemajor">{{ t('ninaRitualMobile.section4title') }}</p>
                    <p class="font-josefin-normal text-[3.72vw] font-light text-center mt-[3.53vw]" v-html="$t('ninaRitualMobile.section3content')">
                    </p>
                </div>
                <!-- Section 5 -->
                <div class="w-[87.7vw] h-auto bg-[#2B2B2B4D] flex flex-col items-center text-white mt-[10vw] pb-[8.6vw] rounded-[2vw]">
                    <p class="text-[4.18vw] font-lemajor pt-[5vw]">{{ t('ninaRitualMobile.section5title') }}</p>
                    <div class="w-[80vw] mt-[4.4vw] flex flex-col">
                        <p class="text-white font-josefin-normal text-[4.18vw]" v-html="$t('ninaRitualMobile.section5formTitle')"></p>
                        <p class="text-white font-josefin-normal text-[4.18vw] pt-[4vw]" v-html="$t('ninaRitualMobile.section5fullName')"></p>
                        <input type="text" class="w-[80vw] h-[5.5vw] bg-[#FFFFFF20] rounded-[1.55vw] border-[0.1vw] border-[#D9D9D920] pl-[0.6vw] outline-none font-josefin-normal text-[0.83vw] text-white">
                        <p class="text-white font-josefin-normal text-[4.18vw] pt-[4vw]" v-html="$t('ninaRitualMobile.section5dob')"></p>
                        <input type="text" class="w-[80vw] h-[5.5vw] bg-[#FFFFFF20] rounded-[1.55vw] border-[0.1vw] border-[#D9D9D920] pl-[0.6vw] outline-none font-josefin-normal text-[0.83vw] text-white">
                        <p class="text-white font-josefin-normal text-[4.18vw] pt-[4vw]" v-html="$t('ninaRitualMobile.section5question1')"></p>
                         <textarea class="w-full h-[14.2vw] bg-[#FFFFFF20] rounded-[1.55vw] border-[0.1vw] border-[#D9D9D920] p-[0.6vw] outline-none font-josefin-normal text-[3.72vw] text-white resize-none"></textarea>
                         <p class="text-white font-josefin-normal text-[4.18vw] pt-[4vw]" v-html="$t('ninaRitualMobile.section5question2')"></p>
                         <textarea class="w-full h-[14.2vw] bg-[#FFFFFF20] rounded-[1.55vw] border-[0.1vw] border-[#D9D9D920] p-[0.6vw] outline-none font-josefin-normal text-[3.72vw] text-white resize-none"></textarea>
                         <div class="w-[80vw] h-[8.2vw] mt-[8vw] border-[0.2vw] border-white rounded-[1.75vw] flex justify-center items-center font-josefin-normal text-[3.5vw]" v-html="$t('ninaRitualMobile.section5button')"></div>
                    </div>
                </div>
                <!-- Section 6 -->
                <div class="w-full h-auto flex flex-col items-center text-white mt-[10vw]">
                    <p class="text-[4.18vw] font-lemajor">{{ t('ninaRitualMobile.section6title') }}</p>
                    <p class="font-josefin-normal text-[3.72vw] font-light text-center mt-[3.53vw]" v-html="$t('ninaRitualMobile.section6content')">
                    </p>
                 </div>
                <div class="pt-[5vw] pb-[5vw] flex flex-row items-center justify-between">
                    <img src="../../assets/img/Desktop/Products/Rituals/ObjectDecor.webp" alt="" class="w-[70vw]">
                </div>
            </div>
        </div>
    </div>
    <FooterMobile />
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const openFacebook = () => {
  window.open("https://www.facebook.com/bupbegeisha000", "_blank")
}

import FooterMobile from './FooterMobile.vue'
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
    text-shadow: 0px 2vw 5vw rgba(255, 255, 255, 0.50);
}

.content-inner {
  overflow-y: auto;
  max-height: 147.2vw;

  /* iOS Safari, Android Chrome */
  -webkit-overflow-scrolling: touch;
}
.content-inner::-webkit-scrollbar {
  display: none;
}

/* Firefox */
.content-inner {
  scrollbar-width: none; /* Firefox */
}

</style>
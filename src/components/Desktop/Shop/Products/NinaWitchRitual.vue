<template>

  <div class="w-full h-auto NinaWitchRitual relative">
    <img src="../../../../assets/img/Desktop/Products/Rituals/NinaRitualBG.webp" alt="" class="w-full h-auto">

    <!-- Content left center -->
    <div class="absolute top-[15vw] left-[5vw] w-[52vw] flex flex-col items-center">
      <p class="font-lemajor text-white text-[5.2vw] text-glow translate-x-[-1vw]">{{ t('ritualDesktop.title') }}</p>
      <!-- bar of text -->
      <div
        class="w-full h-[3vw] bg-gradient-to-r from-[#f6f6c600] to-[#F6F6C600] via-[#767153] relative flex flex-col items-center justify-center">
        <div class="text-white text-[1.36vw] font-josefin-normal font-normal tracking-[0.2vw] translate-y-[0.1vw]">
          {{ t('ritualDesktop.subtitle') }}</div>
      </div>

      <!-- button -->
      <div class="flex items-center mt-[2vw]" @click="openWebLink('https://www.facebook.com/bupbegeisha000')">
        <div
          class="button-translation-parent overflow-hidden w-[12vw] h-[2.3vw] rounded-[0.6vw] bg-transparent text-white border-[0.5px] border-white flex items-center justify-center text-[1.05vw] transition-all duration-500 font-josefin-normal  hover:cursor-pointer relative">
          <div
            class="absolute right-0 w-[15vw] h-[3vw] bg-[#D9D9D920] rounded-[0.9vw] translate-x-[-15vw] button-translation-child-1">
          </div>
          <div
            class="absolute right-0 w-[15vw] h-[3vw] bg-[#D9D9D960] rounded-[0.9vw] translate-x-[-17vw] button-translation-child-2">
          </div>
          <div
            class="absolute right-0 w-[15vw] h-[3vw] bg-[#D9D9D980] rounded-[0.9vw] translate-x-[-19vw] button-translation-child-3">
          </div>
          <p class=" z-10 translate-y-[0.1vw] font-light">{{ t('ritualDesktop.buttonMain') }}</p>
        </div>
      </div>

      <!-- text after -->
      <p class="text-[1.05vw] font-thin font-josefin-normal text-white mt-[1.05vw]">
        {{ t('ritualDesktop.priceNote') }}
      </p>
    </div>

    <!-- Content bottom left -->
    <p
      class="absolute bottom-[3.49vw] text-white left-[5vw] w-[52vw] text-[0.83vw] font-thin font-josefin-normal text-start" v-html="t('ritualDesktop.note')">
    </p>

    <!-- Line -->
    <div
      class="w-[0.1vw] h-[35.5vw] absolute top-[8.8vw] left-[55vw] bg-gradient-to-b from-transparent to-transparent via-white">
    </div>

    <!-- Container right -->
    <div
      class="container-right-scroll absolute top-[7.1875vw] overflow-y-auto right-[5vw] w-[38.2vw] h-[39.2vw] bg-[#55555533] backdrop-blur-[2vw] rounded-[1vw] border-[1px] border-[#FFFFFF22] flex flex-col items-center z-30" data-lenis-prevent>
      <!-- decor 1 -->
      <img src="../../../../assets/img/Desktop/Products/Rituals/ObjectDecor.webp" alt=""
        class="w-[30.05vw] h-auto mt-[1vw]">

      <!-- Section 1 -->
      <div class="flex flex-col items-center mt-[1vw] w-full">
        <p class="font-lemajor text-[1.56vw] font-thin text-[#2D2D2D]">{{ t('ritualDesktop.section1.title') }}</p>
        <div
          class="mt-[1vw] flex flex-col items-center text-[0.95vw] text-center text-[#2D2D2D] font-josefin-normal font-light">
          <p class="">
            {{ t('ritualDesktop.section1.lines[0]') }}
          </p>
          <p class="">
            {{ t('ritualDesktop.section1.lines[1]') }}
          </p>
          <p class="">
            {{ t('ritualDesktop.section1.lines[2]') }}
          </p>
          <p class="">
            {{ t('ritualDesktop.section1.lines[3]') }}
          </p>
        </div>

        <!-- container button -->
        <div class="w-full h-[9.375vw] bg-[#2B2B2B30] mt-[2vw] flex flex-col items-center">
          <p class="w-[26vw] text-center text-[#FFF] font-josefin-normal font-light text-[1.05vw] pt-[0.8vw]">
            {{ t('ritualDesktop.section1.desc') }}
          </p>
          <div class="flex items-center mt-[0.5vw]" @click="openWebLink('https://www.facebook.com/bupbegeisha000')">
            <div
              class="button-translation-parent-right overflow-hidden w-[21vw] h-[2.3vw] rounded-[0.6vw] bg-transparent text-white border-[0.5px] border-white flex items-center justify-center text-[1.05vw] transition-all duration-500 font-josefin-normal  hover:cursor-pointer relative">
              <div
                class="absolute right-0 w-[25vw] h-[3vw] bg-[#D9D9D920] rounded-[0.9vw] translate-x-[-21vw] button-translation-child-1-right">
              </div>
              <div
                class="absolute right-0 w-[25vw] h-[3vw] bg-[#D9D9D960] rounded-[0.9vw] translate-x-[-23vw] button-translation-child-2-right">
              </div>
              <div
                class="absolute right-0 w-[25vw] h-[3vw] bg-[#D9D9D980] rounded-[0.9vw] translate-x-[-25vw] button-translation-child-3-right">
              </div>
              <p class=" z-10 translate-y-[0.1vw] font-normal">{{ t('ritualDesktop.section1.button') }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 2 -->
      <div class="flex flex-col items-center mt-[3vw] w-full">
        <p class="font-lemajor text-[1.56vw] font-thin text-[#2D2D2D]">{{ t('ritualDesktop.section2.title') }}</p>
        <div
          class="mt-[1vw] flex flex-col items-center text-[0.95vw] text-center text-[#2D2D2D] font-josefin-normal font-light">
          <p class=" font-normal">
            {{ t('ritualDesktop.section2.header') }}
          </p>
          <p class="">
            {{ t('ritualDesktop.section2.points[0]') }}
          </p>
          <p class="w-[32vw]">
            {{ t('ritualDesktop.section2.points[1]') }}
          </p>
          <p class="">
            {{ t('ritualDesktop.section2.points[2]') }}
          </p>
          <p class="w-[32vw]">
            {{ t('ritualDesktop.section2.points[3]') }}
          </p>
        </div>
      </div>

      <!-- Section 3 -->
      <div class="flex flex-col items-center mt-[3vw] w-full">
        <p class="font-lemajor text-[1.56vw] font-thin text-[#2D2D2D]">{{ t('ritualDesktop.section3.title') }}</p>
        <div
          class="mt-[1vw] flex flex-col items-center text-[0.95vw] text-center text-[#2D2D2D] font-josefin-normal font-light">
          <p class=" font-normal">
            v{{ t('ritualDesktop.section3.header') }}
          </p>
          <p class="">
            {{ t('ritualDesktop.section3.points[0]') }}
          </p>
          <p class="w-[32vw]">
            {{ t('ritualDesktop.section3.points[1]') }}
          </p>
          <p class="">
            {{ t('ritualDesktop.section3.points[2]') }}
          </p>
          <p class="w-[32vw]">
            {{ t('ritualDesktop.section3.points[3]') }}
          </p>
          <p class="w-[32vw]">
            {{ t('ritualDesktop.section3.points[4]') }}
          </p>
        </div>
      </div>

      <!-- Section 4 -->
      <div class="flex flex-col items-center mt-[3vw] w-full pt-[1vw] pb-[2vw]">
        <p class="font-lemajor text-[1.56vw] font-thin text-[#2D2D2D]">{{ t('ritualDesktop.section4.title') }}</p>
        <div
          class="mt-[1vw] flex flex-col items-center text-[0.95vw] text-center text-[#2D2D2D] font-josefin-normal font-light">
          <p class=" font-normal">
            v{{ t('ritualDesktop.section3.header') }}
          </p>
          <p class="">
            {{ t('ritualDesktop.section3.points[0]') }}
          </p>
          <p class="w-[32vw]">
            {{ t('ritualDesktop.section3.points[1]') }}
          </p>
          <p class="">
            {{ t('ritualDesktop.section3.points[2]') }}
          </p>
          <p class="w-[32vw]">
            {{ t('ritualDesktop.section3.points[3]') }}
          </p>
          <p class="w-[32vw]">
            {{ t('ritualDesktop.section3.points[4]') }}
          </p>
        </div>
      </div>

      <!-- Section 5 -->
      <div class="w-full h-auto bg-[#2B2B2B30] mt-[2vw] flex flex-col items-center">
        <p class="font-lemajor text-[1.56vw] font-thin text-[#2D2D2D] mt-[1vw]">{{ t('ritualDesktop.section5.title') }}</p>
        <div
          class="w-full mt-[1vw] flex flex-col items-center text-[0.95vw] text-[#2D2D2D] font-josefin-normal font-light">
          <p class="w-full font-normal pl-[1.5vw]">{{ t('ritualDesktop.section5.formTitle') }}</p>
          <div class="w-full px-[1.5vw] mt-[0.1vw] flex flex-row justify-between items-end">
            <p class="font-normal">{{ t('ritualDesktop.section5.name') }}<span class="pl-[0.2vw] font-light">{{ t('ritualDesktop.section5.nameNote') }}</span></p>
            <input type="text" class="w-[15vw] h-[2.1vw] bg-[#FFFFFF20] rounded-[0.45vw] border-[0.1vw] border-[#D9D9D920] pl-[0.6vw] outline-none font-josefin-normal text-[0.83vw] text-white">
          </div>
          <div class="w-full px-[1.5vw] mt-[0.8vw] flex flex-row justify-between items-center">
            <p class="font-normal">Date of Birth<span class="pl-[0.2vw] font-light">{{ t('ritualDesktop.section5.dobNote') }}</span></p>
            <input type="text" class="w-[15vw] h-[2.1vw] bg-[#FFFFFF20] rounded-[0.45vw] border-[0.1vw] border-[#D9D9D920] pl-[0.6vw] outline-none font-josefin-normal text-[0.83vw] text-white">
          </div>

          <!-- textarea -->
          <div class="w-full px-[1.5vw] mt-[0.8vw] flex flex-col justify-start items-start">
            <p class="font-normal">{{ t('ritualDesktop.section5.wish') }}</p>
            <textarea class="w-full h-[5.7vw] bg-[#FFFFFF20] rounded-[0.45vw] border-[0.1vw] border-[#D9D9D920] p-[0.6vw] outline-none font-josefin-normal text-[0.83vw] text-white resize-none"></textarea>
          </div>

          <!-- textarea -->
          <div class="w-full px-[1.5vw] mt-[0.8vw] flex flex-col justify-start items-start">
            <p class="font-normal">{{ t('ritualDesktop.section5.block') }}</p>
            <textarea class="w-full h-[5.7vw] bg-[#FFFFFF20] rounded-[0.45vw] border-[0.1vw] border-[#D9D9D920] p-[0.6vw] outline-none font-josefin-normal text-[0.83vw] text-white resize-none"></textarea>
          </div>

          <!-- Button -->
          <div class="flex items-center mt-[1.5vw] mb-[1vw]">
            <div
              class="button-translation-parent-right overflow-hidden w-[21vw] h-[2.3vw] rounded-[0.6vw] bg-transparent text-white border-[0.5px] border-white flex items-center justify-center text-[1.05vw] transition-all duration-500 font-josefin-normal  hover:cursor-pointer relative">
              <div
                class="absolute right-0 w-[25vw] h-[3vw] bg-[#D9D9D920] rounded-[0.9vw] translate-x-[-21vw] button-translation-child-1-right">
              </div>
              <div
                class="absolute right-0 w-[25vw] h-[3vw] bg-[#D9D9D960] rounded-[0.9vw] translate-x-[-23vw] button-translation-child-2-right">
              </div>
              <div
                class="absolute right-0 w-[25vw] h-[3vw] bg-[#D9D9D980] rounded-[0.9vw] translate-x-[-25vw] button-translation-child-3-right">
              </div>
              <p class=" z-10 translate-y-[0.1vw] font-normal">{{ t('ritualDesktop.section5.button') }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 6 -->
      <div class="flex flex-col items-center mt-[3vw] w-full pt-[1vw] pb-[2vw]">
        <p class="font-lemajor text-[1.56vw] font-thin text-[#2D2D2D]">{{ t('ritualDesktop.section6.title') }}</p>
        <div
          class="mt-[1vw] flex flex-col items-center text-[0.95vw] text-center text-[#2D2D2D] font-josefin-normal font-light">
          <p class=" font-normal">
            {{ t('ritualDesktop.section6.header') }}
          </p>
          <p class="">
            {{ t('ritualDesktop.section6.lines[0]') }}
          </p>
          <p class="w-[32vw]">
            {{ t('ritualDesktop.section6.lines[1]') }}
          </p>
        </div>
      </div>

      <img src="../../../../assets/img/Desktop/Products/Rituals/ObjectDecor.webp" alt=""
        class="w-[30.05vw] h-auto mt-[1vw] mb-[1.5vw]">
    </div>
  </div>
</template>

<script>

export default {
  name: 'NinaWitchRitual',

  methods: {
    openWebLink(url) {
      setTimeout(() => {
        window.open(url, "_blank");
      }, 300);
    },
     t(key) {
      return this.$t(key)
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

.text-glow {
  text-shadow: 0 0 0.1vw rgba(255, 255, 255, 0.8), 0 0 0.8vw rgba(255, 255, 255, 0.6), 0 0 2vw rgba(255, 255, 255, 0.4);
}

.button-translation-parent {
  transition: all 0.8s ease-in-out;
}

.button-translation-parent:hover {
  box-shadow: 0 0 1vw rgba(255, 255, 255, 0.8);
}

.button-translation-parent:hover .button-translation-child-1 {
  transform: translateX(0);
  transition: all 0.5s ease-in-out;
}

.button-translation-parent:hover .button-translation-child-2 {
  transform: translateX(0);
  transition: all 0.8s ease-in-out;
}

.button-translation-parent:hover .button-translation-child-3 {
  transform: translateX(0);
  transition: all 1.1s ease-in-out;
}

.button-translation-child-1 {
  transform: translateX(-15vw);
  transition: all 1s ease-in-out;
}

.button-translation-child-2 {
  transform: translateX(-17vw);
  transition: all 1.6s ease-in-out;
}

.button-translation-child-3 {
  transform: translateX(-19vw);
  transition: all 2.2s ease-in-out;
}

/* Button right */
.button-translation-parent-right {
  transition: all 0.8s ease-in-out;
}

.button-translation-parent-right:hover {
  box-shadow: 0 0 1vw rgba(255, 255, 255, 0.8);
}

.button-translation-parent-right:hover .button-translation-child-1-right {
  transform: translateX(0);
  transition: all 0.5s ease-in-out;
}

.button-translation-parent-right:hover .button-translation-child-2-right {
  transform: translateX(0);
  transition: all 0.8s ease-in-out;
}

.button-translation-parent-right:hover .button-translation-child-3-right {
  transform: translateX(0);
  transition: all 1.1s ease-in-out;
}

.button-translation-child-1-right {
  transform: translateX(-21vw);
  transition: all 1s ease-in-out;
}

.button-translation-child-2-right {
  transform: translateX(-23vw);
  transition: all 1.6s ease-in-out;
}

.button-translation-child-3-right {
  transform: translateX(-25vw);
  transition: all 2.2s ease-in-out;
}

/* Scroll */
/*.container-right-scroll {
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}*/

.container-right-scroll {
  overflow-y: auto !important;
  max-height: 100%;
}

.container-right-scroll::-webkit-scrollbar {
  display: none;
}
</style>
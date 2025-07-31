<!-- src/views/Booking.vue -->
<template>
  <div class="present w-full h-auto relative bg-[#0D0D0D] overflow-hidden">
    <!-- Image QR -->
    <div class="w-full h-auto justify-end flex pt-[10vw] relative">
      <div class="w-[65vw] h-auto translate-x-[6vw]">
        <img src="../assets/img/Desktop/Present/NinaPresent _QRcode.webp" alt="" class="w-[65vw]">
      </div>
      <div class="absolute w-[65vw] h-full translate-x-[6vw]">
        <div class="absolute top-0 w-[25vw] h-[50vw] bg-gradient-to-r from-[#0D0D0D] to-transparent"></div>
        <!-- <div class="absolute top-0 w-[25vw] h-full bg-gradient-to-r from-[#0D0D0D] to-transparent"></div> -->
        <div
          class="absolute bottom-0 translate-y-[-10vw] w-full h-[25vw] bg-gradient-to-t from-[#0D0D0D] to-transparent">
        </div>
      </div>
    </div>
    <!-- Oval 2 -->'
    <div
      class="w-[22vw] h-[11.7vw] bg-[#F2A0FF] absolute top-0 left-0 rotate-[-118deg] scale-[0.9] translate-x-[-14vw] translate-y-[18vw] rounded-[50%] mix-blend-lighten z-0 blur-[5vw] opacity-40">
    </div>
    <!-- Light -->
    <img src="../assets/img/Desktop/Present/nina-anhsuong.webp" alt=""
      class="w-[44vw] mix-blend-lighten opacity-70 absolute top-0 left-0 z-10">
    <!-- Star 1 -->
    <img src="../assets/img/Desktop/Present/Nina-starlight1.webp" alt=""
      class="w-[24vw] rotate-[262deg] opacity-100 absolute top-0 right-0 translate-x-[-21vw] translate-y-[4.6vw]">
    <!-- Star 2 -->
    <img src="../assets/img/Desktop/Present/Nina-starlight1.webp" alt=""
      class="w-[15vw] rotate-[-9.66deg] opacity-40 absolute top-0 right-0 translate-x-[0vw] translate-y-[4.6vw]">
    <!-- Oval -->
    <div
      class="w-[45vw] h-[45vw] rounded-[50%] bg-[#877BF3] mix-blend-lighten opacity-40 blur-[15vw] absolute left-0 top-0 translate-x-[-15vw] z-10 translate-y-[25vw]">
    </div>
    <!-- Smoke -->
    <img src="../assets/img/Desktop/Present/Nina - khoi present.webp" alt=""
      class="absolute top-0 left-0 w-[116.7vw] translate-x-[-15vw] translate-y-[-5vw]">
    <!-- Backdrop bottom -->
    <div class="w-full h-[22vw] bg-[#0D0D0D]"></div>
    <!-- Typo -->
    <img src="../assets/img/Desktop/Present/text present.webp" alt=""
      class="absolute top-[7vw] left-[2.5vw] w-[52vw] z-30">

    <!-- Text -->
    <div class="absolute top-0 left-0 w-[56vw] h-auto ml-[5vw] translate-y-[27vw]">
      <!-- ENGLISH -->
      <p class="text-[1.04vw] text-white font-josefin-italic font-light">
        {{ $t('present.paragraphs[0]') }}
      </p>
      <p class="text-[1.04vw] text-white font-josefin-italic font-light mt-[0.88vw]">
        {{ $t('present.paragraphs[1]') }}
      </p>
      <p class="text-[1.04vw] text-white font-josefin-italic font-light mt-[0.88vw]">
        {{ $t('present.paragraphs[2]') }}
      </p>
      <p class="text-[1.04vw] text-white font-josefin-italic font-light mt-[1.6vw]">
        {{ $t('present.paragraphs[3]') }}
      </p>
      <p class="text-[1.04vw] text-white font-josefin-italic font-light mt-[0.88vw]">
        {{ $t('present.paragraphs[4]') }}
      </p>
      <p class="text-[1.04vw] text-white font-josefin-italic font-light mt-[0.88vw]">
        {{ $t('present.paragraphs[5]') }}
      </p>
      <p class="text-[1.04vw] text-white font-josefin-italic font-light">
        {{ $t('present.paragraphs[6]') }}
      </p>
      <p class="text-[1.04vw] text-white font-josefin-italic font-light">
        {{ $t('present.paragraphs[7]') }}
      </p>
      <p class="text-[1.04vw] text-white font-josefin-italic font-light mt-[0.88vw]">
        {{ $t('present.paragraphs[8]') }}
      </p>
      <p class="text-[1.04vw] text-white font-josefin-italic font-light">
        {{ $t('present.paragraphs[9]') }}
      </p>
      <p class="text-[1.04vw] text-white font-josefin-italic font-light">
        {{ $t('present.paragraphs[10]') }}
      </p>
      <p class="text-[1.04vw] text-white font-josefin-italic font-light mt-[0.88vw]">
        {{ $t('present.paragraphs[11]') }}
      </p>

    </div>
    <img src="../assets/img/Desktop/Present/_NiNawitch_.webp" alt="" class="w-[14vw] absolute top-[74vw] left-[5vw]">
    <!-- Banking information -->
    <div class="absolute top-0 right-0 w-[16vw] h-[5vw] translate-y-[40vw] translate-x-[-11vw]">
      <div class="flex flex-row items-center">
        <p ref="bankingInfo" class="text-[2.05vw] text-white font-josefin-normal font-normal banking_info">020063208011
        </p>
        <img src="../assets/img/Desktop/Present/Nina-copybutton.webp" alt=""
          class="w-[1.7vw] h-[1.7vw] translate-y-[-0.2vw] ml-[0.2vw] hover:cursor-pointer copy_button_banking"
          @click="copyBankingInfo">
      </div>
      <div class="text-[1.5692vw] text-white font-josefin-normal font-light">Le Thi Van Anh</div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'PresentPage',
  setup() {
    const bankingInfo = ref(null);

    const copyBankingInfo = () => {
      if (bankingInfo.value) {
        const textToCopy = bankingInfo.value.textContent.trim();
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            console.log('Copied: ', textToCopy);
          })
          .catch(err => {
            console.error('Copy failed: ', err);
          });
      }
    };

    return {
      bankingInfo,
      copyBankingInfo
    };
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

.font-josefin-italic {
  font-family: "JosefinItalic", sans-serif;
}

.inner-shadow {
  text-shadow: inset 0 0 0.1vw rgba(0, 0, 0, 0.8);
}

.glow-effect {
  text-shadow: 0 0 0.05vw rgba(255, 255, 255, 0.5), 0 0 0.1vw rgba(255, 255, 255, 0.3), 0 0 0.3vw rgb(255, 255, 255), 0 0 0.6vw rgba(255, 255, 255, 0.2);
}
</style>
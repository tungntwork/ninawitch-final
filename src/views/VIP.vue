<template>
  <div class="VIP bg-[#010717] w-full h-[77vw] flex flex-col items-center relative overflow-hidden">
    >
    <div class="w-full h-auto relative z-10" ref="dungYenSection">
      <img src="../assets/img/Desktop/Vip/back vip 1.webp" alt="" class="w-full h-auto">
      <p ref="magicText"
        class="absolute top-[7vw] left-[7vw] text-white font-lemajor text-[7vw] leading-[9vw] transition-all duration-300"  v-html="$t('vip.topTextLeft')">
      </p>
      <p class="absolute top-[25vw] right-[7vw] text-white font-lemajor text-[5vw] leading-[7vw] text-end" v-html="$t('vip.topTextRight')">
      </p>
    </div>

    <div class="w-full h-auto relative z-10 flex justify-center" ref="diChuyenSection">
      <img src="../assets/img/Desktop/Vip/back vip 2.webp" alt="" class="w-full h-auto">
      <div ref="magicText"
        class="w-[59vw] h-[21.5vw] rounded-[1.5625vw] bg-[#00000025] backdrop-blur-[0.65625vw] absolute top-[2vw] flex flex-col justify-center items-center">
        <p class="font-lemajor text-white text-[3.125vw]">{{ $t('vip.sectionTitle') }}</p>
        <div  class="text-white text-[1.5625vw] font-josefin-normal text-center font-thin" v-html="$t('vip.sectionContent')">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VIPPage',
  mounted() {
    this.magicText = this.$refs.magicText;
    this.diChuyenSection = this.$refs.diChuyenSection;
    this.handleScroll = this.handleScroll.bind(this);
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollY = window.scrollY;

      if (this.magicText) {
        this.magicText.style.transform = `translateY(${scrollY * 0.1}px)`;
      }

      if (this.diChuyenSection) {
        this.diChuyenSection.style.transform = `translateY(-${scrollY * 0.6}px)`;
      }
    }
  }
}
</script>

<style>
.background-radial {
  width: 100%;
  height: 100%;
  background-image:
    radial-gradient(ellipse farthest-corner at 50% 50%, white 0%, transparent 70%),
    radial-gradient(ellipse farthest-corner at 50% 50%, white 0%, transparent 70%);
  opacity: 1;
  scale: 1.3;
  pointer-events: none;
}

.glow-effect {
  text-shadow: 0 0 0.05vw rgba(255, 255, 255, 0.7), 0 0 0.07vw rgba(255, 255, 255, 0.5), 0 0 0.5vw rgb(255, 255, 255), 0 0 1vw rgba(255, 255, 255, 0.2);
}

.font-lemajor {
  font-family: "TP Le Major", sans-serif;
}

.font-josefin-normal {
  font-family: "JosefinNormal", sans-serif;
}

.font-josefin-italic {
  font-family: "JosefinItalic", sans-serif;
}
.font-lemajor {
  font-family: "TP Le Major", sans-serif;
}
.font-josefin-normal {
  font-family: "JosefinNormal", sans-serif;
}
.font-josefin-italic {
  font-family: "JosefinItalic", sans-serif;
}
.VIP {
  overflow-x: hidden;
}
</style>
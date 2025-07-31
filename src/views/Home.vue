<!-- src/views/Home.vue -->
<template>
  <div class="w-full h-auto relative bg-[#0D0D0D] overflow-hidden">
    <HomeDesktop />
    <div class="w-full h-[10vw] bg-[#000]"></div>
    <!-- Text Mystery -->
    <div class="absolute w-full h-auto flex justify-center translate-y-[-6vw] z-40">
      <img src="../assets/img/Desktop/Home/Mystery/title1.webp" alt="" class="w-[72vw] h-auto " />
    </div>
    <!-- Smoke blue-->
    <img src="../assets/img/Desktop/Home/Mystery/smoke2.webp" alt="" class="absolute w-[100%] translate-x-[32vw] translate-y-[-40vw] h-auto left-[-5vw] z-30" />
    <!-- Smoke white -->
     <img src="../assets/img/Desktop/Home/Mystery/smoke1.webp" alt="" class="absolute w-[100%] translate-x-[-27vw] translate-y-[-28.5vw] h-auto left-[-5vw] z-30" />
    <HomeMystery />
    <div class="w-full h-[10vw] bg-gradient-to-b from-transparent to-transparent via-black via-[50%] translate-y-[-5vw] z-20 absolute"></div>
    <!-- Smoke -->
     <img src="../assets/img/Desktop/Home/Recommend/smoke3.webp" alt="" class="w-full h-auto absolute z-20 translate-y-[-25vw]">
    <HomeRecommend />
    <HomeScriptQuestion />
    <HomeFeedback/>
    <!-- Footer -->
     <!-- <HomeFooter/> -->
  </div>
</template>

<script>
import Lenis from '@studio-freight/lenis'

import HomeMystery from "@/components/Desktop/Home/HomeMystery.vue";
import HomeDesktop from "../components/Desktop/Home/HomeDesktop.vue";
import HomeRecommend from "@/components/Desktop/Home/HomeRecommend.vue";
import HomeFeedback from "@/components/Desktop/Home/HomeFeedback.vue";
import HomeScriptQuestion from "@/components/Desktop/Home/HomeScriptQuestion.vue";
// import HomeFooter from "@/components/Desktop/Home/HomeFooter.vue";

export default {
  name: 'HomePage',
  components: {
    HomeDesktop,
    HomeMystery,
    HomeRecommend,
    HomeFeedback,
    HomeScriptQuestion,
  },
  mounted() {
    this.lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true
    })

    const raf = (time) => {
      this.lenis.raf(time)
      this._lenisRaf = requestAnimationFrame(raf)
    }
    this._lenisRaf = requestAnimationFrame(raf)
  },
  beforeUnmount() {
    if (this.lenis) {
      this.lenis.destroy?.()
    }
    cancelAnimationFrame(this._lenisRaf)
  }
}
</script>

<style></style>
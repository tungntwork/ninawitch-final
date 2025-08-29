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
    <img src="../assets/img/Desktop/Home/Mystery/smoke2.webp" alt=""
      class="absolute w-[100%] translate-x-[32vw] translate-y-[-40vw] h-auto left-[-5vw] z-30" />
    <!-- Smoke white -->
    <img src="../assets/img/Desktop/Home/Mystery/smoke1.webp" alt=""
      class="absolute w-[100%] translate-x-[-27vw] translate-y-[-28.5vw] h-auto left-[-5vw] z-30" />
    <HomeMystery />
    <div
      class="w-full h-[10vw] bg-gradient-to-b from-transparent to-transparent via-black via-[50%] translate-y-[-5vw] z-20 absolute">
    </div>
    <!-- Smoke -->
    <img src="../assets/img/Desktop/Home/Recommend/smoke3.webp" alt=""
      class="w-full h-auto absolute z-20 translate-y-[-25vw]">
    <HomeRecommend />
    <HomeScriptQuestion />
    <HomeFeedback />
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

// import sound loop
import soundLoop from '@/assets/sounds/SpaceBackground.mp3'
import shopVoice from '@/assets/sounds/HomeVoice.mp3'

export default {
  name: 'HomePage',
  components: {
    HomeDesktop,
    HomeMystery,
    HomeRecommend,
    HomeFeedback,
    HomeScriptQuestion,
  },
  data() {
    return {
      // audio
      audio1: null,
      audio2: null,
      twoMinTimer: null,
      audioUnlocked: false,
    }
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

    // HTML Audio Element
    this.audio1 = new Audio(soundLoop)
    this.audio1.loop = true
    this.audio1.preload = 'auto'
    this.audio1.muted = true
    this.audio1.volume = 0.6
    // this.audio1.play()
    setTimeout(() => { this.audio1.muted = false }, 1)

    this.audio2 = new Audio(shopVoice)
    this.audio2.preload = 'auto'
    this.audio2.volume = 0.9

    // listen behavior to unlock audio
    const unlock = this.unlockAudioPlayback
    const opts = { passive: true, once: true }
    window.addEventListener('click', unlock, opts)
    window.addEventListener('pointerdown', unlock, opts)
    window.addEventListener('keydown', unlock, opts)
    window.addEventListener('wheel', unlock, opts)
    window.addEventListener('touchstart', unlock, opts)

    document.addEventListener('visibilitychange', this.handleVisibility)
  },
  beforeUnmount() {
    if (this.lenis) {
      this.lenis.destroy?.()
    }
    cancelAnimationFrame(this._lenisRaf)

    // clear interval 2 phút
    if (this.twoMinTimer) clearInterval(this.twoMinTimer)

    // clear listener
    window.removeEventListener('click', this.unlockAudioPlayback)
    window.removeEventListener('touchstart', this.unlockAudioPlayback)
    window.removeEventListener('keydown', this.unlockAudioPlayback)
    window.removeEventListener('wheel', this.unlockAudioPlayback)
    window.removeEventListener('scroll', this.unlockAudioPlayback)
    document.removeEventListener('visibilitychange', this.handleVisibility)

    // pause audio
    try { this.audio1?.pause(); this.audio1 = null }
    catch (_e) { void 0 }

    try { this.audio2?.pause(); this.audio2 = null }
    catch (_e) { void 0 }
  },
  methods: {
    unlockAudioPlayback() {
      if (this.audioUnlocked) return
      this.audioUnlocked = true

      window.removeEventListener('click', this.unlockAudioPlayback)
      window.removeEventListener('touchstart', this.unlockAudioPlayback)
      window.removeEventListener('keydown', this.unlockAudioPlayback)
      window.removeEventListener('wheel', this.unlockAudioPlayback)
      window.removeEventListener('scroll', this.unlockAudioPlayback)

      this.audio1?.play().catch(() => { return })

      this.playSound2()
      this.twoMinTimer = setInterval(this.playSound2, 120000)
    },
    playSound2() {
      if (!this.audioUnlocked || !this.audio2) return
      this.audio2.currentTime = 0
      this.audio2.play().catch(() => { return })
    },
    handleVisibility() {
      if (document.hidden) {
        this.audio1?.pause()
      } else {
        if (this.audioUnlocked) {
          this.audio1?.play().catch(() => { return })
        }
      }
    }
  }
}
</script>

<style></style>
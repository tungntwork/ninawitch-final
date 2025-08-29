<template>
  <div class="shop-page-container w-full min-h-screen bg-[#0D0D0D] overflow-x-hidden">
    <div class="home-shop-background-layer sticky top-0 h-screen z-0">
      <HomeShop class="w-full h-full object-cover" />
    </div>

    <div class="main-content-foreground relative z-10">
      <HomeRecommend />
      <HighRecommened />
      <NinaLight />
      <EnchantedSpell />
      <MysticalArrival />
      <EmbraceYourMagic />
      <MysticalExperience />
      <ShopMagicGift />
    </div>

  </div>
</template>

<script>
import HomeRecommend from '@/components/Desktop/Home/HomeRecommend.vue';
import HighRecommened from '@/components/Desktop/Shop/HighRecommened.vue';
import HomeShop from '@/components/Desktop/Shop/HomeShop.vue';
import ShopMagicGift from '@/components/Desktop/Shop/ShopMagicGift.vue';
import NinaLight from '@/components/Desktop/Shop/NinaLight.vue';
import EnchantedSpell from '@/components/Desktop/Shop/EnchantedSpell.vue';
import MysticalArrival from '@/components/Desktop/Shop/MysticalArrival.vue';
import EmbraceYourMagic from '@/components/Desktop/Shop/EmbraceYourMagic.vue';
import MysticalExperience from '@/components/Desktop/Shop/MysticalExperience.vue';

import shopLoop from '@/assets/sounds/SpaceBackground.mp3'
import soundShop from '@/assets/sounds/ShopVoice.mp3'

export default {
  name: 'ShopPage',
  components: {
    HomeRecommend,
    ShopMagicGift,
    HomeShop,
    HighRecommened,
    NinaLight,
    EnchantedSpell,
    MysticalArrival,
    EmbraceYourMagic,
    MysticalExperience
  },
  data() {
    return {
      audio1: null,
      audio2: null,
      twoMinTimer: null,
      audioUnlocked: false
    }
  },
  mounted() {
    this.audio1 = new Audio(shopLoop)
    this.audio1.loop = true
    this.audio1.preload = 'auto'
    this.audio1.volume = 0.6

    this.audio2 = new Audio(soundShop)
    this.audio2.preload = 'auto'
    this.audio2.volume = 0.9

    const unlock = this.unlockAudioPlayback
    const opts = { passive: true, once: true }
    window.addEventListener('pointerdown', unlock, opts)
    window.addEventListener('keydown', unlock, opts)
    window.addEventListener('wheel', unlock, opts)
    window.addEventListener('touchstart', unlock, opts)

    document.addEventListener('visibilitychange', this.handleVisibility)
  },
  beforeUnmount() {
    if (this.twoMinTimer) clearInterval(this.twoMinTimer)

    window.removeEventListener('pointerdown', this.unlockAudioPlayback)
    window.removeEventListener('keydown', this.unlockAudioPlayback)
    window.removeEventListener('wheel', this.unlockAudioPlayback)
    window.removeEventListener('touchstart', this.unlockAudioPlayback)
    document.removeEventListener('visibilitychange', this.handleVisibility)

    try { this.audio1?.pause(); this.audio1 = null } catch (_e) { void 0 }
    try { this.audio2?.pause(); this.audio2 = null } catch (_e) { void 0 }
  },
  methods: {
    unlockAudioPlayback() {
      if (this.audioUnlocked) return
      this.audioUnlocked = true

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
        try { this.audio1?.pause() } catch (_e) { void 0 }
      } else if (this.audioUnlocked) {
        this.audio1?.play().catch(() => { return })
      }
    }
  }
}
</script>

<style scoped></style>
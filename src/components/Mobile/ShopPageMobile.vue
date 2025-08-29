<template>
    <div class="w-full h-auto">
        <FirstShop />
        <HighRecommended />
        <HighRecommendItem />
        <NinaLightMobile />
        <EnchantedSpellMobile />
        <MysticalArrival />
        <EmbraceYourMagicMobile />
        <MysticalExperience />
        <MagicNinawitch />
        <FooterMobile />
    </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

// import FooterMobile from './FooterMobile.vue';
import FirstShop from './ShopPage/FirstShop.vue';
import HighRecommended from './ShopPage/HighRecommended.vue';
import HighRecommendItem from './ShopPage/HighRecommendItem.vue';
import NinaLightMobile from './ShopPage/NinaLightMobile.vue';
import EnchantedSpellMobile from './ShopPage/EnchantedSpellMobile.vue';
import MysticalArrival from './ShopPage/MysticalArrival.vue';
import MysticalExperience from './ShopPage/MysticalExperience.vue';
import MagicNinawitch from './ShopPage/MagicNinawitch.vue';
import FooterMobile from './FooterMobile.vue';
import EmbraceYourMagicMobile from './ShopPage/EmbraceYourMagicMobile.vue';

import shopLoop from '@/assets/sounds/SpaceBackground.mp3'
import soundShop from '@/assets/sounds/ShopVoice.mp3'

// ==== AUDIO state ====
let audio1 = null
let audio2 = null
let twoMinTimer = null
const audioUnlocked = ref(false)

function unlockAudioPlayback() {
    if (audioUnlocked.value) return
    audioUnlocked.value = true

    audio1?.play().catch(() => { return })

    playSound2()
    twoMinTimer = setInterval(playSound2, 120000)
}

function playSound2() {
    if (!audioUnlocked.value || !audio2) return
    audio2.currentTime = 0
    audio2.play().catch(() => { return })
}

function handleVisibility() {
    if (document.hidden) {
        try { audio1?.pause() } catch (_e) { void 0 }
    } else if (audioUnlocked.value) {
        audio1?.play().catch(() => { return })
    }
}

onMounted(() => {
    audio1 = new Audio(shopLoop)
    audio1.loop = true
    audio1.preload = 'auto'
    audio1.volume = 0.6

    audio2 = new Audio(soundShop)
    audio2.preload = 'auto'
    audio2.volume = 0.9

    const opts = { passive: true, once: true, capture: true }
    document.addEventListener('pointerdown', unlockAudioPlayback, opts)
    document.addEventListener('touchstart', unlockAudioPlayback, opts)
    document.addEventListener('click', unlockAudioPlayback, opts)
    document.addEventListener('wheel', unlockAudioPlayback, opts)
    document.addEventListener('scroll', unlockAudioPlayback, opts)
    document.addEventListener('keydown', unlockAudioPlayback, { once: true, capture: true })

    document.addEventListener('visibilitychange', handleVisibility)
})

onBeforeUnmount(() => {
    if (twoMinTimer) clearInterval(twoMinTimer)

    document.removeEventListener('pointerdown', unlockAudioPlayback, { capture: true })
    document.removeEventListener('touchstart', unlockAudioPlayback, { capture: true })
    document.removeEventListener('click', unlockAudioPlayback, { capture: true })
    document.removeEventListener('wheel', unlockAudioPlayback, { capture: true })
    document.removeEventListener('scroll', unlockAudioPlayback, { capture: true })
    document.removeEventListener('keydown', unlockAudioPlayback, { capture: true })
    document.removeEventListener('visibilitychange', handleVisibility)

    try { audio1?.pause(); audio1 = null } catch (_e) { void 0 }
    try { audio2?.pause(); audio2 = null } catch (_e) { void 0 }
})
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
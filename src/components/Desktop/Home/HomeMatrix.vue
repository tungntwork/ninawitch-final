<template>
  <div class="w-full h-[100vw] bg-[#0D0D0D] relative overflow-hidden">
    <img src="../../../assets/img/Desktop/Home/Matrix/StarGalaxy.webp" alt="" class="absolute top-[15vw] w-full h-auto mix-blend-screen">
    <div class="absolute top-0 w-full h-[32.8125vw] bg-gradient-to-b from-[#0D0D0D] to-transparent"></div>
    

    <!-- MAIN -->
    <div class="w-full h-[63vw] absolute top-[17vw] overflow-hidden">
      <div class="w-[80vw] h-[63vw] absolute top-0 left-[10vw] trans-section" ref="wrap">
        <!-- Card1 -->
        <img src="../../../assets/img/Desktop/Home/Matrix/FRAME_RESOURCE/1.webp" alt="" class="card-transition w-[10vw] absolute top-[3vw] left-[0vw] opacity-70">
        <!-- Card2 -->
        <img src="../../../assets/img/Desktop/Home/Matrix/FRAME_RESOURCE/2.webp" alt="" class="card-transition w-[12vw] absolute top-[3vw] left-[22vw] opacity-80">
        <!-- Card3 -->
        <img src="../../../assets/img/Desktop/Home/Matrix/FRAME_RESOURCE/4.webp" alt="" class="card-transition w-[8vw] absolute top-[2vw] left-[45vw] opacity-60">
        <!-- Card4 -->
        <img src="../../../assets/img/Desktop/Home/Matrix/FRAME_RESOURCE/6.webp" alt="" class="card-transition w-[10vw] absolute top-[5vw] left-[65vw] opacity-75">
        <!-- Card5 -->
        <img src="../../../assets/img/Desktop/Home/Matrix/FRAME_RESOURCE/5.webp" alt="" class="card-transition w-[14vw] absolute top-[21vw] left-[2vw] opacity-100">
        <!-- Card6 -->
        <img src="../../../assets/img/Desktop/Home/Matrix/FRAME_RESOURCE/10.webp" alt="" class="card-transition w-[16vw] absolute top-[24vw] left-[22vw] opacity-100">
        <!-- Card7 -->
        <img src="../../../assets/img/Desktop/Home/Matrix/FRAME_RESOURCE/12.webp" alt="" class="card-transition w-[15vw] absolute top-[18vw] left-[40vw] opacity-100">
        <!-- Card8 -->
        <img src="../../../assets/img/Desktop/Home/Matrix/FRAME_RESOURCE/14.webp" alt="" class="card-transition w-[18vw] absolute top-[22vw] left-[59vw] opacity-100">
        <!-- Card9 -->
        <img src="../../../assets/img/Desktop/Home/Matrix/FRAME_RESOURCE/42.webp" alt="" class="card-transition w-[10vw] absolute top-[45vw] left-[0vw] opacity-80">
        <!-- Card10 -->
        <img src="../../../assets/img/Desktop/Home/Matrix/FRAME_RESOURCE/24.webp" alt="" class="card-transition w-[14vw] absolute top-[50vw] left-[19vw] opacity-70">
        <!-- Card11 -->
        <img src="../../../assets/img/Desktop/Home/Matrix/FRAME_RESOURCE/23.webp" alt="" class="card-transition w-[13vw] absolute top-[45vw] left-[42vw] opacity-80">
        <!-- Card12 -->
        <img src="../../../assets/img/Desktop/Home/Matrix/FRAME_RESOURCE/36.webp" alt="" class="card-transition w-[14vw] absolute top-[52vw] left-[61vw] opacity-60">
      </div>
      <div class="w-full h-[10vw] absolute bg-gradient-to-b from-[#0D0D0D] to-transparent"></div>
      <div class="w-full h-[10vw] absolute bottom-0 bg-gradient-to-t from-[#0D0D0D] to-transparent z-20"></div>
    </div>

    <div class="absolute bottom-0 w-full h-[32.8125vw] bg-gradient-to-t from-[#0D0D0D] to-transparent"></div>
    <img src="../../../assets/img/Desktop/Home/Matrix/TopHeaderPage.webp" alt="" class="absolute top-[-6vw] w-full h-auto">
    <img src="../../../assets/img/Desktop/Home/Matrix/BottomPage.webp" alt="" class="absolute bottom-[-17vw] w-full h-auto">
    <div class="absolute w-full h-[1px] bg-gradient-to-r from-transparent to-transparent via-white top-0"></div>
    <div class="absolute flex flex-col items-center justify-center top-[8vw] w-full h-auto">
      <p class="font-lemajor text-white text-[3.65vw] glow-effect">Lời thì thầm vũ trụ</p>
      <div class="font-josefin-normal text-[1.05vw] text-[#fff] font-light mb-[1vw]">Hãy để đôi tai và trực giác của bạn mở lối</div>
      <div class="flex flex-row space-x-[2vw]">
        <a href="https://www.facebook.com/bupbegeisha000" target="_blank" rel="noopener noreferrer">
          <img src="../../../assets/img/Desktop/Booking/ic_baseline-facebook.webp" alt="Facebook"
              class="w-[2.2vw] h-[2.2vw] hover:cursor-pointer hover:scale-[1.2] transition-all duration-500 ease-in-out">
        </a>
        <a href="https://www.tiktok.com/@ninawitch.magic?lang=vi-VN" target="_blank" rel="noopener noreferrer">
          <img src="../../../assets/img/Desktop/Booking/ic_baseline-tiktok.webp" alt=""
            class="w-[2.2vw] h-[2.2vw] hover:cursor-pointer hover:scale-[1.2] transition-all duration-500 ease-in-out">
        </a>
        <a href="https://www.youtube.com/@Ninawitch01" target="_blank" rel="noopener noreferrer">
          <img src="../../../assets/img/Desktop/Booking/bi_youtube.webp" alt=""
            class="w-[2.2vw] h-[2.2vw] hover:cursor-pointer hover:scale-[1.2] transition-all duration-500 ease-in-out">
        </a>
        <a href="https://www.instagram.com/akitatarot/?utm_source=qr" target="_blank" rel="noopener noreferrer">
          <img src="../../../assets/img/Desktop/Booking/bi_instagram.webp" alt=""
            class="w-[2.2vw] h-[2.2vw] hover:cursor-pointer hover:scale-[1.2] transition-all duration-500 ease-in-out">
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const wrap = ref(null)

onMounted(() => {
  if (!wrap.value) return
  const cards = wrap.value.querySelectorAll('.card-transition')
  cards.forEach((el, i) => {
    // biên độ cố định
    el.style.setProperty('--amp', '5vw')

    // thời lượng ngẫu nhiên (số nguyên dạng seconds)
    const durSec = 5 + Math.random() * 4 // 5 -> 9
    const dur = durSec.toFixed(2) + 's'
    el.style.setProperty('--d', dur)

    // jitter nhỏ (độ trễ ngẫu nhiên) để tránh đồng bộ hoàn toàn, khoảng [-0.8s, 0.8s]
    const jitter = (Math.random() * 1.6 - 0.8).toFixed(2) // ±0.8
    // phase offset: nếu i lẻ thì dịch nửa chu kỳ (ngược pha)
    const halfPhase = (i % 2 === 0) ? 0 : -(durSec / 2)
    // tổng delay = halfPhase + jitter
    const totalDelaySec = (halfPhase + parseFloat(jitter)).toFixed(2)
    el.style.setProperty('--delay', `${totalDelaySec}s`)

    // scale nhẹ
    const scale = (0.985 + Math.random() * 0.03).toFixed(3)
    el.style.setProperty('--scale', scale)

    // expect smooth rendering
    el.style.willChange = 'transform, opacity'
  })
})
</script>
<style scoped>
.font-lemajor {
    font-family: "TP Le Major", sans-serif;
}

.font-josefin-normal {
    font-family: "JosefinNormal", sans-serif;
}

.inner-shadow {
    text-shadow: inset 0 0 0.1vw rgba(0, 0, 0, 0.8);
}

.glow-effect {
    text-shadow: 0 0 0.05vw rgba(255, 255, 255, 0.7), 0 0 0.07vw rgba(255, 255, 255, 0.5), 0 0 0.5vw rgb(255, 255, 255), 0 0 1vw rgba(255, 255, 255, 0.2);
}

@keyframes float-vertical {
  from { transform: translateY(calc(var(--amp, 5vw) * -1)) scale(var(--scale, 1)); }
  to   { transform: translateY(calc(var(--amp, 5vw) * 1))  scale(var(--scale, 1)); }
}

.card-transition {
  transform-origin: center;
  animation-name: float-vertical;
  animation-duration: var(--d, 6s);
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-delay: var(--delay, 0s);
  animation-fill-mode: both;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  will-change: transform, opacity;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transition: filter 400ms ease, opacity 400ms ease;
}

.trans-section .card-transition:nth-child(2) { --d: 7.2s; }
.trans-section .card-transition:nth-child(3) { --d: 5.4s; }
.trans-section .card-transition:nth-child(4) { --d: 6.6s; }
.trans-section { overflow: visible; }
</style>
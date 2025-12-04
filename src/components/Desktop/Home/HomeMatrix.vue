<template>
  <div class="w-full h-[100vw] bg-[#0D0D0D] relative overflow-hidden">
    <img
      :src="imageMap['StarGalaxy.webp'] ? imageMap['StarGalaxy.webp'] : '../../../assets/img/Desktop/Home/Matrix/StarGalaxy.webp'"
      :alt="t('homeMatrix.topHeaderAlt')"
      class="absolute top-[15vw] w-full h-auto mix-blend-screen"
    />
    <div class="absolute top-0 w-full h-[32.8125vw] bg-gradient-to-b from-[#0D0D0D] to-transparent"></div>
    <div class="absolute top-[13vw] w-full h-[16vw] bg-gradient-to-b from-transparent via-[20%] via-[#0D0D0D] to-transparent z-20"></div>

    <!-- MAIN (80vw centered: left 10vw, right 10vw) -->
    <div class="w-full h-[63vw] absolute top-[17vw] overflow-hidden">
      <!-- confined area: relative + overflow hidden -->
      <div class="trans-section relative w-[80vw] h-[63vw] absolute top-0 left-[10vw]">
        <template v-for="card in cards" :key="card.id">
          <img
            :src="card.src"
            :alt="t('homeMatrix.imageAlt', { id: card.id })"
            class="card-transition absolute"
            :style="card.styleObject"
            draggable="false"
            loading="lazy"
          />
        </template>
      </div>

      <div class="w-full h-[10vw] absolute bg-gradient-to-b from-[#0D0D0D] to-transparent"></div>
      <div class="w-full h-[10vw] absolute bottom-0 bg-gradient-to-t from-[#0D0D0D] to-transparent z-20"></div>
    </div>

    <div class="absolute bottom-0 w-full h-[32.8125vw] bg-gradient-to-t from-[#0D0D0D] to-transparent"></div>
    <img
      src="../../../assets/img/Desktop/Home/Matrix/TopHeaderPage.webp"
      :alt="t('homeMatrix.topHeaderAlt')"
      class="absolute top-[-6vw] w-full h-auto"
    />
    <img
      src="../../../assets/img/Desktop/Home/Matrix/BottomPage.webp"
      :alt="t('homeMatrix.bottomPageAlt')"
      class="absolute bottom-[-17vw] w-full h-auto"
    />

    <div class="absolute w-full h-[1px] bg-gradient-to-r from-transparent to-transparent via-white top-0"></div>

    <div
      class="absolute flex flex-col items-center justify-center top-[8vw] w-full h-auto"
      :aria-label="t('homeMatrix.social.ariaLabel')"
    >
      <p class="font-lemajor text-white text-[3.65vw] glow-effect">{{ t('homeMatrix.title') }}</p>
      <div class="font-josefin-normal text-[1.05vw] text-[#fff] font-light mb-[1vw]">{{ t('homeMatrix.subtitle') }}</div>

      <div class="flex flex-row space-x-[2vw] z-30">
        <a
          href="https://www.facebook.com/bupbegeisha000"
          target="_blank"
          rel="noopener noreferrer"
          :title="t('homeMatrix.social.facebook')"
        >
          <img
            src="../../../assets/img/Desktop/Booking/ic_baseline-facebook.webp"
            :alt="t('homeMatrix.social.facebook')"
            class="w-[2.2vw] h-[2.2vw] hover:scale-[1.2] transition-all"
          />
        </a>

        <a
          href="https://www.tiktok.com/@ninawitch.magic?lang=vi-VN"
          target="_blank"
          rel="noopener noreferrer"
          :title="t('homeMatrix.social.tiktok')"
        >
          <img
            src="../../../assets/img/Desktop/Booking/ic_baseline-tiktok.webp"
            :alt="t('homeMatrix.social.tiktok')"
            class="w-[2.2vw] h-[2.2vw] hover:scale-[1.2] transition-all"
          />
        </a>

        <a
          href="https://www.youtube.com/@Ninawitch01"
          target="_blank"
          rel="noopener noreferrer"
          :title="t('homeMatrix.social.youtube')"
        >
          <img
            src="../../../assets/img/Desktop/Booking/bi_youtube.webp"
            :alt="t('homeMatrix.social.youtube')"
            class="w-[2.2vw] h-[2.2vw] hover:scale-[1.2] transition-all"
          />
        </a>

        <a
          href="https://www.instagram.com/akitatarot/?utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          :title="t('homeMatrix.social.instagram')"
        >
          <img
            src="../../../assets/img/Desktop/Booking/bi_instagram.webp"
            :alt="t('homeMatrix.social.instagram')"
            class="w-[2.2vw] h-[2.2vw] hover:scale-[1.2] transition-all"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const totalImages = 50
const shownCount = 12
const gridCols = 4
let gridRows = Math.ceil(shownCount / gridCols)

function uniqueRandoms(n, max) {
  const arr = Array.from({ length: max }, (_, i) => i + 1)
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr.slice(0, n)
}

function uniqueCells(n, cols, rows) {
  const cells = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) cells.push({ r, c })
  }
  for (let i = cells.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[cells[i], cells[j]] = [cells[j], cells[i]]
  }
  return cells.slice(0, n)
}

let imageMap = {}
try {
  const req = require.context('../../../assets/img/Desktop/Home/Matrix/FRAME_RESOURCE', false, /\.webp$/)
  req.keys().forEach((k) => {
    const name = k.replace('./', '')
    imageMap[name] = req(k)
  })
} catch (e) {
  imageMap = {}
}

const cards = ref([])

onMounted(() => {
  gridRows = Math.ceil(shownCount / gridCols)
  const ids = uniqueRandoms(shownCount, totalImages)
  const cells = uniqueCells(shownCount, gridCols, gridRows)

  const containerWidthVw = 80
  const containerHeightVw = 63
  const cellW = containerWidthVw / gridCols
  const baseCellH = containerHeightVw / gridRows
  const verticalSpacing = 1.35
  const cellH = baseCellH * verticalSpacing

  const centerY = containerHeightVw / 2
  const baseDuration = 9
  const durVariance = 0.3
  const minWidth = 11
  const maxWidth = 16

  const newCards = ids.map((id, i) => {
    const cell = cells[i]

    const jitterX = (Math.random() * (cellW * 0.18) - cellW * 0.09)
    const jitterY = (Math.random() * (cellH * 0.25) - cellH * 0.125)

    const widthVw = minWidth + Math.random() * (maxWidth - minWidth)
    const widthVwFixed = widthVw.toFixed(2)

    const paddingInside = cellW * 0.05

    let leftVw = (cell.c * cellW) + paddingInside + jitterX
    const leftMax = containerWidthVw - widthVw - paddingInside
    if (leftVw < 0) leftVw = 0
    if (leftVw > leftMax) leftVw = leftMax

    let topVw = (cell.r * cellH) + (cellH * 0.15) + jitterY
    if (topVw < 0) topVw = 0
    const topMax = containerHeightVw - (cellH * 0.3)
    if (topVw > topMax) topVw = topMax

    const elemCenterY = topVw + (cellH / 2)
    const distToCenter = Math.abs(elemCenterY - centerY)
    const norm = Math.min(1, distToCenter / centerY)
    const opacity = (1 - norm * 0.65).toFixed(2)

    const durSec = (baseDuration + (Math.random() * durVariance * 2 - durVariance)).toFixed(2)
    const delay = (Math.random() * 1 - 0.5).toFixed(2)

    const amp = 20

    const filename = `${id}.webp`
    const src = imageMap[filename] ? imageMap[filename] : `../../../assets/img/Desktop/Home/Matrix/FRAME_RESOURCE/${filename}`

    return {
      id,
      src,
      styleObject: {
        width: `${widthVwFixed}vw`,
        left: `${leftVw}vw`,
        top: `${topVw}vw`,
        opacity,
        '--start': `${amp}vw`,
        '--end': `${-amp}vw`,
        '--d': `${durSec}s`,
        '--delay': `${delay}s`,
        '--scale': (0.98 + Math.random() * 0.03).toFixed(3),
      }
    }
  })

  cards.value = newCards
})
</script>

<style scoped>
.font-lemajor { font-family: "TP Le Major", sans-serif; }
.font-josefin-normal { font-family: "JosefinNormal", sans-serif; }

.glow-effect {
  text-shadow: 0 0 0.05vw rgba(255,255,255,0.7), 0 0 0.07vw rgba(255,255,255,0.5),
               0 0 0.5vw white, 0 0 1vw rgba(255,255,255,0.2);
}

.trans-section {
  overflow: hidden;
  pointer-events: none;
}

@keyframes float-up-continous {
  from { transform: translateY(var(--start)) scale(var(--scale,1)); }
  to   { transform: translateY(var(--end))   scale(var(--scale,1)); }
}

.card-transition {
  position: absolute;
  transform-origin: center;
  animation-name: float-up-continous;
  animation-duration: var(--d, 9s);
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-delay: var(--delay, 0s);
  will-change: transform, opacity;
  transition: filter 400ms ease, opacity 400ms ease;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  user-select: none;
  -webkit-user-drag: none;
  pointer-events: none;
}

.card-transition img { display: block; }

@media (max-width: 900px) {
  .trans-section { width: 92vw; left: 4vw; }
  .card-transition { opacity: .95; }
}
</style>

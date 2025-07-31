<template>
  <div class="w-full h-auto relative bg-[#000]">
    <!-- Video Background -->
    <div class="video-background">
      <video autoplay loop muted class="video-element w-full h-auto">
        <source src="../../../assets/img/Desktop/Home/home_bg.webm" type="video/webm">
      </video>
    </div>

    <!-- Content bottom -->
    <div class="absolute bottom-[7vw] left-[5vw] z-20">
      <p class="text-[2.083vw] font-normal text-white font-josefin-normal">
        <!-- Welcome to the -->
         {{ $t('homeDesktop.welcome') }}
      </p>
      <p class="text-[4.3vw] text-white font-lemajor glow-effect">
        {{ $t('homeDesktop.temple') }}
      </p>
      <p class="text-[1.05vw] font-normal text-white font-josefin-normal leading-[1.2vw]"  v-html="$t('homeDesktop.guide')">
      </p>
    </div>
    <!-- Button bottom -->
    <div class="absolute bottom-[5.5vw] w-full flex justify-center overflow-hidden z-40">
      <div
        class="w-[16vw] h-[2.3vw] rounded-[0.5vw] bg-[#0D0D0D] flex justify-center  items-center border-t-[0.07vw] border-l-[0.07vw] border-r-[0.07vw] border-b-[0.07vw] hover:border-[#D9D9D940] border-[#D9D9D960] hover:border-b-[0.07vw] button-bottom-etique"
        @click="showManifesto = true">
        <p class="text-white text-[1.1vw] font-josefin-normal font-light z-30 translate-y-[0.17vw]">{{ $t('homeDesktop.manifestoBtn') }}</p>
        <div
          class="absolute w-[6vw] h-[2vw] bottom-[-0.8vw] translate-x-[2.2vw] bg-[#DE3BFF] rounded-[50%] blur-[0.7vw] oval-1">
        </div>
        <div
          class="absolute w-[6vw] h-[2vw] bottom-[-0.8vw] translate-x-[-2.2vw] bg-[#6A00FF] rounded-[50%] blur-[0.7vw] oval-2">
        </div>
        <div
          class="absolute w-[8vw] h-[3vw] bottom-[-0.8vw] translate-y-[4vw] bg-[#fff] rounded-[50%] blur-[0.7vw] oval-3">
        </div>
      </div>
    </div>

    <transition name="manifesto-slide">
      <div v-if="showManifesto" class="fixed bottom-0 w-full h-auto z-[999] flex justify-center"
        @click.self="showManifesto = false">
        <div ref="manifestoRef" class="w-[80vw] h-auto manifesto-glow rounded-t-[2.5vw] overflow-y-auto"
          :style="{ transform: `translateY(${dragOffsetY}px)` }" @mousedown="handleMouseDown" @dragstart.prevent>
          <!-- Background -->
          <img src="../../../assets/img/Desktop/Home/Manifesto/Nina_TuyenNgon.webp" alt=""
            class="w-full h-auto rounded-t-[2.2vw] ">
          <!-- button -->
          <div class="w-[80vw] h-auto absolute top-0 flex items-center flex-col">
            <img src="../../../assets/img/Desktop/Home/Mystery/arrow.webp" alt=""
              class="w-[1.5vw] mt-[1.2vw] z-[999] hover:cursor-pointer button-scroll-down"
              @click="closeManifestoWithScroll" >
            <!-- Content -->
            <div class=" w-[60vw] h-auto mt-[4vw]">
              <div class="text-end font-lemajor text-white text-[4.2vw] inner-shadow glow-effect">NinaWitch</div>
              <div class="text-start font-josefin-normal text-white text-[1.15vw] mt-[1.5vw]">
                <p class="font-normal">{{ $t('homeDesktop.manifesto.title') }}</p>
                <p class="font-thin mt-[1vw]">{{ $t('homeDesktop.manifesto.p1') }}</p>
                <p class="font-thin mt-[1vw]">{{ $t('homeDesktop.manifesto.p2') }}
                </p>
                <p class="font-thin mt-[1vw]">{{ $t('homeDesktop.manifesto.p3') }}
                </p>
                <p class="font-thin mt-[1vw]">{{ $t('homeDesktop.manifesto.p4') }}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </transition>
    <!-- Text bottom -->
    <div class="absolute bottom-[0vw] w-full flex justify-center z-20 flex-col items-center ">
      <p class="font-josefin-normal text-gray-400 text-[0.8vw] font-extralight tracking-[0.03vw]">{{ $t('homeDesktop.scroll') }}</p>
      <img src="../../../assets/img/Desktop/Home/Mystery/arrow.webp" alt=""
        class="mt-[1vw] w-[1.5vw] z-20 translate-y-[0.5vw] arrow-up-down" />
    </div>

    <!-- Overlay -->
    <div class="absolute w-full h-[12vw] bottom-0  bg-gradient-to-t blur-[0vw] from-[#000000] to-transparent z-10 "></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";

const showManifesto = ref(false);
const manifestoRef = ref(null);
const dragOffsetY = ref(0);

watch(showManifesto, (val) => {
  if (val === true) {
    dragOffsetY.value = 0;
  }
});


const closeManifestoWithScroll = () => {
  if (manifestoRef.value) {
    manifestoRef.value.scrollTo({
      top: manifestoRef.value.scrollHeight,
      behavior: 'smooth'
    });
    setTimeout(() => {
      showManifesto.value = false;
    }, 100);
  }
}

let startY = 0;
let isDragging = false;

const handleMouseDown = (e) => {
  startY = e.clientY;
  isDragging = true;
};

const handleMouseMove = (e) => {
  if (!isDragging) return;
  const deltaY = e.clientY - startY;
  dragOffsetY.value = Math.max(deltaY, 0);
};

const handleMouseUp = () => {
  isDragging = false;
  if (dragOffsetY.value > 100) {
    showManifesto.value = false;
  } else {
    // reset position
    dragOffsetY.value = 0;
  }
};

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("mouseup", handleMouseUp);
});
</script>

<style scoped>
.font-lemajor {
  font-family: "TP Le Major", sans-serif;
}

.font-josefin-normal {
  font-family: "JosefinNormal", sans-serif;
}

.button-bottom-etique {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  /* transition: background-color 0.3s ease-in-out; */
}

.oval-3 {
  transform: scale(1) translateY(4vw);
  transition: transform 0.7s ease-in-out;
}

.oval-1 {
  transform: scale(1) translateX(2.2vw);
  transition: transform 0.7s ease-in-out;
}

.oval-2 {
  transform: scale(1) translateX(-2.2vw);
  transition: transform 0.7s ease-in-out;
}

.button-bottom-etique:hover .oval-1 {
  transform: scale(2) translateX(2.7vw);
  transition: transform 0.7s ease-in-out;
}

.button-bottom-etique:hover .oval-2 {
  transform: scale(2) translateX(-2.7vw);
  transition: transform 0.7s ease-in-out;
}

.button-bottom-etique:hover .oval-3 {
  transform: scale(1.2) translateY(2vw);
  transition: transform 0.7s ease-in-out;
}

@keyframes moveUpDown {
  0% {
    transform: translateY(0.5);
  }

  50% {
    transform: translateY(1vw);
  }

  100% {
    transform: translateY(0.5vw);
  }
}

.manifesto-slide-enter-active,
.manifesto-slide-leave-active {
  transition: all 0.5s ease;
}

.manifesto-slide-enter-from,
.manifesto-slide-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.manifesto-slide-enter-to,
.manifesto-slide-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.arrow-up-down {
  animation: moveUpDown 2s ease-in-out infinite;
}

.inner-shadow {
  text-shadow: inset 0 0 0.1vw rgba(0, 0, 0, 0.8);
}

.glow-effect {
  text-shadow: 0 0 0.05vw rgba(255, 255, 255, 0.5), 0 0 0.1vw rgba(255, 255, 255, 0.3), 0 0 0.3vw rgb(255, 255, 255), 0 0 0.6vw rgba(255, 255, 255, 0.2);
}

.manifesto-glow {
  box-shadow: 0 0 1vw rgba(255, 255, 255, 0.3),
    0 0 1.25vw rgba(255, 255, 255, 0.3),
    0 0 1.5vw rgba(255, 255, 255, 0.4),
    0 0 2vw rgba(255, 255, 255, 0.5);
}
</style>

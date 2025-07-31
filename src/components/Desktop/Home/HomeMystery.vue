<template>
    <div class="w-full h-auto relative bg-[#000] overflow-hidden">
        <!-- Overlay -->
        <div class="absolute w-full h-[20vw] top-0 left-0 bg-gradient-to-b from-[#000] to-[#00000000] z-20"></div>
        <!-- Video Background -->
        <div class="video-background z-0 ">
            <video autoplay loop muted class="video-element">
                <source src="../../../assets/img/Desktop/Home/back2.webm" type="video/webm">
            </video>
        </div>


        <!-- Text Left -->
        <div class="absolute top-[22.5vw] left-[5vw] z-30">
            <p class="font-lemajor text-[2.6vw] text-white">
                {{ $t('homeMystery.title') }}
            </p>
            <p class="font-josefin-normal text-[1.05vw] font-light w-[30.9vw] text-white">
                {{ $t('homeMystery.left') }}
            </p>
        </div>
        <!-- Text right -->
        <div class="absolute top-[20vw] right-[5vw] z-30 flex flex-col items-end">
            <p class="font-lemajor w-[30.5vw] text-[2.6vw] text-white text-start">
                {{ $t('homeMystery.title') }}
            </p>
            <p class="font-josefin-normal text-[1.05vw] font-light w-[30.9vw] text-white text-end">
                {{ $t('homeMystery.right.p1') }}
            </p>
            <p class="font-josefin-normal text-[1.04vw] font-light w-[30vw] items-end text-white text-justify mt-[1vw]">
                {{ $t('homeMystery.right.p2') }}
            </p>
        </div>
        <!-- Overlay bottom-->
        <div
            class="absolute w-full h-[35vw] bottom-[-1.5vw] bg-gradient-to-t blur-[0vw] from-[#000000] to-transparent z-10 hidden">
        </div>

        <!-- Blink 1 -->
        <img src="../../../assets/img/Desktop/Home/Mystery/lineblink.webp" alt=""
            class="absolute top-[5vw] left-[-5vw] w-[30vw] opacity-50 h-auto mix-blend-screen" />
    </div>
</template>

<style scoped>
.font-lemajor {
    font-family: "TP Le Major", sans-serif;
}

.font-josefin-normal {
    font-family: "JosefinNormal", sans-serif;
}
.mix-blend-screen {
  mix-blend-mode: screen; 
}

@keyframes moveUpDown {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-0.5vw);
    }
    100% {
        transform: translateY(0vw);
    }
}
.arrow-up-down {
    animation: moveUpDown 2s ease-in-out infinite;
}

.text-title {
    font-weight: lighter !important;
}

</style>
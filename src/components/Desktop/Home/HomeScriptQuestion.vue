<template>
    <div class="w-full h-[72.5vw] relative bg-[#0D0D0D] flex flex-col items-center overflow-hidden">
        <!-- Video Background -->
        <div class="video-background absolute top-0 left-0 w-full h-full">
            <video autoplay loop muted class="video-element w-full h-auto">
                <source src="../../../assets/img/Desktop/Home/Question/back4.webm" type="video/webm">
            </video>
        </div>
        <div class="absolute top-0 left-0 w-full h-[0.1vw] bg-gradient-to-r from-transparent to-transparent via-white">
        </div>
        <div
            class="absolute top-[44vw] left-0 w-full h-[10vw] bg-gradient-to-b from-transparent to-transparent via-[#0D0D0D]">
        </div>
        <img src="../../../assets/img/Desktop/Home/Question/lineback4.webp" alt=""
            class="w-full h-auto absolute bottom-[0] left-0">
        <div class="absolute top-0 w-[50vw] h-[1.25vw] bg-[#622BA8] rounded-[50%] blur-[1vw] translate-y-[-0.5vw]">
        </div>
        <div class="absolute top-0 w-[50vw] h-[9.74vw] bg-[#FFF] rounded-[50%] translate-y-[-5vw] blur-[10vw]"></div>
        <div
            class="absolute left-[5.208vw] top-[10.47vw] w-[45.73vw] text-[2.67vw] text-white font-lemajor text-start tracking-[0.82vw] leading-[3.2vw]">
            {{ $t('homeScript.question') }}</div>
        <div
            class="absolute left-[5.208vw] top-[17.76vw] w-[40.42vw] text-[1.04vw] text-white font-josefin-normal text-start font-thin text-you-hold">
            {{ $t('homeScript.power') }}
        </div>
        <div
            class="absolute left-[5.208vw] top-[26vw] w-[35.8vw] text-[1.04vw] text-white font-josefin-normal text-start font-thin flex flex-row items-end">
            <span class="text-white text-[2.04125vw] font-lemajor">{{ $t('homeScript.nina1') }}</span>
            <p class="text-white text-[1.05vw] leading-[1.2vw]">
                {{ $t('homeScript.nina2') }}
            </p>
        </div>
        <div
            class="absolute left-[5.208vw] top-[29vw] w-[35.8vw] text-[1.04vw] text-white font-josefin-normal text-start font-thin flex flex-row items-end">
            <p class="text-white text-[1.05vw] leading-[1.2vw] font-thin">{{ $t('homeScript.nina3') }}</p>
        </div>
        <div
            class="absolute left-[5.208vw] top-[34.5vw] font-thin w-[35.8vw] text-[1.04vw] text-white font-josefin-normal text-start">
            <p class="">{{ $t('homeScript.roles') }}</p>
            <p class="translate-y-[-0.5vw]">{{ $t('homeScript.self') }}</p>
        </div>
        <div
            class="absolute left-[5.208vw] top-[38vw] w-[34vw] text-[1.04vw] text-white font-josefin-normal text-start font-thin">
            <p class="leading-[1.2vw]">{{ $t('homeScript.medium') }}</p>
        </div>
    </div>
</template>

<style scoped>
.font-lemajor {
    font-family: "TP Le Major", sans-serif;
}

.font-josefin-normal {
    font-family: "JosefinNormal", sans-serif;
}

.text-you-hold {
    font-weight: 50;
}
</style>
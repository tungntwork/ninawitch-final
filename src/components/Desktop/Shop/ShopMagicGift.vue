<template>
    <div class="w-full h-[54vw] bg-[#0D0D0D] relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-auto flex justify-center items-center">
            <div class="w-[90vw] h-[0.15vw] bg-gradient-to-r from-transparent to-transparent via-white z-30"></div>
        </div>
        <!-- Image -->
        <img src="../../../assets/img/Desktop/Shop/Nina_back_gift.webp" alt="" class="bottom-0 absolute z-0">
        <!-- Overlay -->
        <div class="absolute top-0 left-0 w-full h-[50vw] bg-gradient-to-b from-[#0D0D0D] to transparent z-10"></div>
        <div class="absolute top-0 left-0 w-full h-[50vw] bg-gradient-to-b from-[#0D0D0D] to transparent z-10"></div>

        <!-- Text -->
        <div class="z-20 w-[71.3vw] h-[20vw] absolute top-[12.36vw] left-[5.3vw]">
            <p class="text-[2.083vw] text-white font-lemajor">{{ $t('shopMagicGift.title') }}</p>

            <!-- ENGLISH -->
            <p class="text-white font-josefin-normal text-[1.05vw] font-thin mt-[0.5vw]">
                {{ $t('shopMagicGift.paragraph1') }}
            </p>
            <p class="text-white font-josefin-normal text-[1.05vw] font-thin mt-[0.5vw]">
                {{ $t('shopMagicGift.paragraph2') }}
            </p>
            <p class="text-white font-josefin-normal text-[1.05vw] font-thin mt-[0.5vw]">
               {{ $t('shopMagicGift.paragraph3') }}
            </p>
            <p
                class="ml-[2.3vw] text-white font-josefin-italic text-[1.05vw] font-thin mt-[2.5vw] w-[53vw] text-center">
                {{ $t('shopMagicGift.quote') }}
            </p>
            <p class="text-white font-josefin-normal text-[1.05vw] w-[58.3vw] font-thin mt-[2.5vw]">
                {{ $t('shopMagicGift.paragraph4') }}
            </p>

            <div class="flex flex-row">
                <span class="font-lemajor text-white text-[2.1875vw]">_N</span>
                <span class="font-lemajor text-white text-[1.98vw]">i</span>
                <span class="font-lemajor text-white text-[2.1875vw]">N</span>
                <span class="font-lemajor text-white text-[1.98vw]">a</span>
                <span class="font-lemajor text-white text-[1.98vw]">witch</span>
                <span class="font-lemajor text-white text-[2.1875vw]">_</span>
            </div>
        </div>
        <div class="absolute bottom-0 left-0 w-full h-auto flex justify-center items-center">
            <div class="w-[90vw] h-[0.15vw] bg-gradient-to-r from-transparent to-transparent via-white z-30"></div>
        </div>
    </div>
</template>

<style>
.font-lemajor {
    font-family: "TP Le Major", sans-serif;
}

.font-josefin-normal {
    font-family: "JosefinNormal", sans-serif;
}

.font-josefin-italic {
    font-family: "JosefinItalic", sans-serif;
}
</style>
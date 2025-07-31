<template>
    <div class="w-full h-[500vw] relative flex justify-center">
        <img src="../../../assets/img/Mobile/Shop/back shop thác.webp" alt="" class="w-full h-auto absolute top-0">
        <div class="absolute top-[38.14vw] right-[5.5vw] flex flex-col justify-start">
            <p class="text-white text-[8.51vw] leading-[8vw] font-lemajor">{{ t('ninaLightMobile.title.line1') }}</p>
            <p class="text-white text-[22.9vw] leading-[20vw] font-lemajor text-glow">{{ t('ninaLightMobile.title.line2') }}</p>
        </div>
        <div
            class="absolute top-[115vw] w-[95vw] h-[37vw]  flex flex-row justify-center items-center">
            <img src="../../../assets/img/Desktop/Shop/Ninalight.webp" alt="" class="w-full h-auto">
            <div class="w-[94vw] absolute h-[36vw] bg-gradient-to-r from-[#FFFFFF00] to-[#999999] backdrop-blur-[12vw] flex flex-row items-center justify-center opacity-85">
                
            </div>
            <p class="text-[3.82vw] w-[86vw] leading-[6vw] absolute text-white font-thin text-start font-josefin-normal"  v-html="t('ninaLightMobile.intro')"></p>
        </div>

        <img src="../../../assets/img/Mobile/Shop/back shop nến.webp" alt="" class="w-full h-auto absolute bottom-0">

        <!-- product -->
        <div class="absolute top-[158.6vw] w-[90vw] flex flex-col">
            <!-- Row 1 -->
            <div class="w-[90vw] h-[75vw] flex flex-row justify-between">
                <!-- Product 1 -->
                <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/68480d4b4f5c0116dbc64dfe')">
                    <div class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                        <img src="../../../assets/img/NINAPRODUCT/LilithCandle.webp" alt="" class="w-full h-full">
                        <div class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                            <p class="text-white text-[3.85vw] font-lemajor text-center">Lilith Candle</p>
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                        </div>
                    </div>
                    <div class="w-[42vw] flex flex-col justify-start relative">
                        <p class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                            {{ truncateWords(t('ninaLightMobile.products[0].desc')) }}
                        </p>
                        <div
                            class="flex text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                            2.222.000
                            <p class="text-[3vw] pl-[0.5vw] translate-y-[-0.5vw]">vnd</p>
                        </div>
                        <div
                            class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                            <p class="w-[42vw]">{{ t('ninaLightMobile.detail') }}</p>
                        </div>
                    </div>
                </div>
                <!-- Product 2 -->
                <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/6848433a56e40f56a3d11244')">
                    <div class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                        <img src="../../../assets/img/NINAPRODUCT/HekateCandle.webp" alt="" class="w-full h-full">
                        <div class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                            <p class="text-white text-[3.85vw] font-lemajor">Hekate Candle</p>
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                        </div>
                    </div>
                    <div class="w-[42vw] flex flex-col justify-start relative">
                        <p class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                            {{ truncateWords(t('ninaLightMobile.products[1].desc')) }}
                        </p>
                        <div
                            class="flex text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                            2.000.000
                            <p class="text-[3vw] pl-[0.5vw] translate-y-[-0.5vw]">vnd</p>
                        </div>
                        <div
                            class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                            <p class="w-[42vw]">{{ t('ninaLightMobile.detail') }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Row 2 -->
            <div class="w-[90vw] h-[75vw] flex flex-row justify-between">
                <!-- Product -->
                <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/68480e4e4f5c0116dbc64e02')">
                    <div class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                        <img src="../../../assets/img/NINAPRODUCT/MEDUSACANDLE.webp" alt="" class="w-full h-full">
                        <div
                            class="absolute top-0 right-0 w-[20vw] h-[5vw] bg-gradient-to-r from-[#D9D9D9] to-[#5D5D5D] flex justify-center items-center text-[2.3vw] rounded-bl-[2vw] text-black font-lemajor">
                            {{ t('ninaLightMobile.products[2].label') }}
                        </div>
                        <div class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                            <p class="text-white text-[3.85vw] font-lemajor">Medusa Candle</p>
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                        </div>
                    </div>
                    <div class="w-[42vw] flex flex-col justify-start relative">
                        <p class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                            {{ truncateWords(t('ninaLightMobile.products[2].desc')) }}
                        </p>
                        <p
                            class="text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                            {{ t('ninaLightMobile.products[2].price') }}
                        </p>
                        <div
                            class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                            <p class="w-[42vw]">{{ t('ninaLightMobile.detail') }}</p>
                        </div>
                    </div>
                </div>
                <!-- Product 2 -->
                <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/684853ce56e40f56a3d11252')">
                    <div class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                        <img src="../../../assets/img/NINAPRODUCT/PHOENIX CANDLE.webp" alt="" class="w-full h-full">
                        <div class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                            <p class="text-white text-[3.85vw] font-lemajor">Phoenix Candle</p>
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                        </div>
                    </div>
                    <div class="w-[42vw] flex flex-col justify-start relative">
                        <p class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                            {{ truncateWords(t('ninaLightMobile.products[3].desc')) }}
                        </p>
                        <div
                            class="flex text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                            {{ t('ninaLightMobile.products[2].price') }}
                        </div>
                        <div
                            class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                            <p class="w-[42vw]">{{ t('ninaLightMobile.detail') }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Row 3 -->
            <div class="w-[90vw] h-[75vw] flex flex-row justify-between">
                <!-- Product 1 -->
                <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/6848d4c756e40f56a3d1127a')">
                    <div class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                        <img src="../../../assets/img/NINAPRODUCT/gaiaCandle.webp" alt="" class="w-full h-full">
                        <div class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                            <p class="text-white text-[3.85vw] font-lemajor text-center">Gaia Candle</p>
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                        </div>
                    </div>
                    <div class="w-[42vw] flex flex-col justify-start relative">
                        <p class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                            {{ truncateWords(t('ninaLightMobile.products[4].desc')) }}
                        </p>
                        <div
                            class="flex text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                            1.600.000
                            <p class="text-[3vw] pl-[0.5vw] translate-y-[-0.5vw]">vnd</p>
                        </div>
                        <div
                            class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                            <p class="w-[42vw]">{{ t('ninaLightMobile.detail') }}</p>
                        </div>
                    </div>
                </div>
                <!-- Product 2 -->
                <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/6848d63856e40f56a3d1127e')">
                    <div class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                        <img src="../../../assets/img/NINAPRODUCT/lighting angle candle.webp" alt=""
                            class="w-full h-full">
                        <div class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                            <p class="text-white text-[3.85vw] font-lemajor text-center">Lighting Angel<br />Candle</p>
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                        </div>
                    </div>
                    <div class="w-[42vw] flex flex-col justify-start relative">
                        <p class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                            {{ truncateWords(t('ninaLightMobile.products[5].desc')) }}
                        </p>
                        <div
                            class="flex text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                            1.300.000
                            <p class="text-[3vw] pl-[0.5vw] translate-y-[-0.5vw]">vnd</p>
                        </div>
                        <div
                            class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                            <p class="w-[42vw]">{{ t('ninaLightMobile.detail') }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Row 4 -->
            <div class="w-[90vw] h-[75vw] flex flex-row justify-between">
                <!-- Product 1 -->
                <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/6848d93256e40f56a3d11286')">
                    <div class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                        <img src="../../../assets/img/NINAPRODUCT/pandora candle.webp" alt="" class="w-full h-full">
                        <div class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                            <p class="text-white text-[3.7vw] font-lemajor text-center">Pandora Candle</p>
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                        </div>
                    </div>
                    <div class="w-[42vw] flex flex-col justify-start relative">
                        <p class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                            {{ truncateWords(t('ninaLightMobile.products[6].desc')) }}
                        </p>
                        <div
                            class="flex text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                            {{ t('ninaLightMobile.products[2].price') }}
                        </div>
                        <div
                            class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                            <p class="w-[42vw]">{{ t('ninaLightMobile.detail') }}</p>
                        </div>
                    </div>
                </div>
                <!-- Product 2 -->
                <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/6848e03a56e40f56a3d1128a')">
                    <div class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                        <img src="../../../assets/img/NINAPRODUCT/bastetCandle.webp" alt=""
                            class="w-full h-full">
                        <div class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                            <p class="text-white text-[3.85vw] font-lemajor text-center">Bastet Candle</p>
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                        </div>
                    </div>
                    <div class="w-[42vw] flex flex-col justify-start relative">
                        <p class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                            {{ truncateWords(t('ninaLightMobile.products[7].desc')) }}
                        </p>
                        <div
                            class="flex text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                            {{ t('ninaLightMobile.products[2].price') }}
                        </div>
                        <div
                            class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                            <p class="w-[42vw]">{{ t('ninaLightMobile.detail') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

function truncateWords(text) {
  return text.split(' ').slice(0, 9).join(' ') + '...'
}
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

.bg-div-trangtraitrenphaiduoi::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image:
        radial-gradient(ellipse farthest-corner at 0% 0%, white 0%, transparent 70%),
        radial-gradient(ellipse farthest-corner at 100% 100%, white 0%, transparent 70%);
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
    pointer-events: none;
    z-index: 1;
}
</style>
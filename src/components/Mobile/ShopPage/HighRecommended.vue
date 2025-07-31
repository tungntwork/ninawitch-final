<template>
    <div class="w-full h-[295vw] relative flex justify-center">
        <div class="video-background z-0">
            <video autoplay loop muted playsinline="" class="video-element">
                <source v-if="isIOS" src="../../../assets/img/Mobile/Home/back home 3.mp4" type="video/mp4" />
                <source v-else src="../../../assets/img/Mobile/Home/back home 3.webm" type="video/webm" />
            </video>
        </div>
        <div class="absolute top-0 w-full h-[30vw] bg-gradient-to-b from-[#0D0D0D] to-transparent"></div>
        <div class="absolute top-0 w-full h-[30vw] bg-gradient-to-b from-[#0D0D0D] to-transparent"></div>

        <!-- Text -->
        <div class="w-full h-auto flex flex-col items-center absolute top-[17.3vw] z-20">
            <p class="text-[8.22vw] text-white font-lemajor w-full text-center">
                {{ t('highRecommendedMobile.title') }}
            </p>
            <p class="text-[4.2vw] pt-[6.6vw] text-white font-josefin-normal w-[90vw] text-center font-light">
                <span v-html="t('highRecommendedMobile.description')"></span>
            </p>
            <div @click="openFacebook"
                class="w-[37.6vw] h-[6.6vw] bg-transparent rounded-[1.5vw] border-white border-[0.1vw] flex justify-center items-center mt-[4vw]">
                <p class="text-white text-[2.86vw] font-josefin-normal">{{ t('highRecommendedMobile.button') }}</p>
            </div>

            <div class="w-[90vw] absolute top-[80vw]">
                <!-- Row items -->
                <div class="w-[90vw] h-[41.4vw] justify-between flex">
                    <!-- Items 1 -->
                    <div class="w-[41.4vw] h-[41.4vw]  rounded-[4vw]  flex justify-center items-center bg-gradient-to-b from-[#FFF] to-transparent"
                    @click="$router.push('/shop/6889e0568cfd586f340f0ec2')">
                        <div class="w-[41vw] h-[41vw] rounded-[4vw] bg-black overflow-hidden flex justify-center relative" @click="$router.push('/shop/medusacandlepreview')">
                            <img src="../../../assets/img/NINAPRODUCT/LuckyWallpaper.webp" alt="" class="">
                            <div class="absolute bottom-[5vw] w-[35vw] flex flex-col items-center">
                                <div class="w-[30vw] flex flex-row justify-between items-center">
                                    <img src="../../../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt="" class="w-[4vw] h-[4vw]">
                                    <p class="text-white text-[3.73vw] text-center font-lemajor">Lucky Wallpaper</p>
                                    <img src="../../../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt="" class="w-[4vw] h-[4vw]">
                                </div>
                                <div class="w-[25vw] h-[5vw] rounded-[1vw] border-white text-white text-[2.32vw] pt-[1vw] mt-[2vw] font-josefin-normal border-[0.3vw] flex justify-center items-center">
                                    {{ t('highRecommendedMobile.products[0].cta') }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Items 2 -->
                    <div class="w-[41.4vw] h-[41.4vw]  rounded-[4vw]  flex justify-center items-center bg-gradient-to-b from-[#FFF] to-transparent"
                    @click="$router.push('/shop/68480d4b4f5c0116dbc64dfe')">
                        <div class="w-[41vw] h-[41vw] rounded-[4vw] bg-black overflow-hidden flex justify-center relative">
                            <img src="../../../assets/img/NINAPRODUCT/LilithCandle.webp" alt="" class="">
                            <div class="absolute bottom-[5vw] w-[35vw] flex flex-col items-center">
                                <div class="w-[35vw] flex flex-row justify-between items-center">
                                    <img src="../../../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt="" class="w-[4vw] h-[4vw]">
                                    <p class="text-white text-[3.73vw] text-center font-lemajor">Lilith Candle</p>
                                    <img src="../../../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt="" class="w-[4vw] h-[4vw]">
                                </div>
                                <div class="w-[25vw] h-[5vw] rounded-[1vw] border-white text-white text-[2.32vw] pt-[1vw] mt-[2vw] font-josefin-normal border-[0.3vw] flex justify-center items-center">
                                    {{ t('highRecommendedMobile.products[0].cta') }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Row items 2-->
                <div class="w-[90vw] h-[41.4vw] justify-between flex mt-[9vw]">
                    <!-- Items 1 -->
                    <div class="w-[41.4vw] h-[41.4vw]  rounded-[4vw]  flex justify-center items-center bg-gradient-to-b from-[#FFF] to-transparent"
                    @click="$router.push('/shop/68480e4e4f5c0116dbc64e02')">
                        <div class="w-[41vw] h-[41vw] rounded-[4vw] bg-black overflow-hidden flex relative justify-center">
                            <img src="../../../assets/img/NINAPRODUCT/MEDUSACANDLE.webp" alt="" class="">
                            <div class="absolute bottom-[2vw] w-[35vw] flex flex-col items-center">
                                <div class="w-[40vw] flex flex-row justify-between items-center">
                                    <img src="../../../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt="" class="w-[4vw] h-[4vw]">
                                    <p class="text-white text-[3.73vw] text-center font-lemajor">Medusa Candle</p>
                                    <img src="../../../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt="" class="w-[4vw] h-[4vw]">
                                </div>
                                <div class="w-[25vw] h-[5vw] rounded-[1vw] border-white text-white text-[2.32vw] pt-[1vw] mt-[2vw] font-josefin-normal border-[0.3vw] flex justify-center items-center">
                                    {{ t('highRecommendedMobile.products[0].cta') }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Items 2 -->
                    <div class="w-[41.4vw] h-[41.4vw]  rounded-[4vw]  flex justify-center items-center bg-gradient-to-b from-[#FFF] to-transparent"
                    @click="$router.push('/shop/6848433a56e40f56a3d11244')">
                        <div class="w-[41vw] h-[41vw] rounded-[4vw] bg-black overflow-hidden flex justify-center relative">
                            <img src="../../../assets/img/NINAPRODUCT/HekateCandle.webp" alt="" class="">
                            <div class="absolute bottom-[3vw] w-[35vw] flex flex-col items-center">
                                <div class="w-[40vw] flex flex-row justify-between items-center">
                                    <img src="../../../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt="" class="w-[4vw] h-[4vw]">
                                    <p class="text-white text-[3.73vw] text-center font-lemajor">Hetake Candle</p>
                                    <img src="../../../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt="" class="w-[4vw] h-[4vw]">
                                </div>
                                <div class="w-[25vw] h-[5vw] rounded-[1vw] border-white text-white text-[2.32vw] pt-[1vw] mt-[2vw] font-josefin-normal border-[0.3vw] flex justify-center items-center">
                                    {{ t('highRecommendedMobile.products[0].cta') }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Row items 3-->
                <div class="w-[90vw] h-[41.4vw] justify-between flex mt-[9vw]">
                    <!-- Items 1 -->
                    <div class="w-[41.4vw] h-[41.4vw]  rounded-[4vw]  flex justify-center items-center bg-gradient-to-b from-[#FFF] to-transparent"
                    @click="$router.push('/shop/684851d756e40f56a3d11248')">
                        <div class="w-[41vw] h-[41vw] rounded-[4vw] bg-black overflow-hidden flex justify-center relative">
                            <img src="../../../assets/img/NINAPRODUCT/Spell.webp" alt="" class="">
                            <div class="absolute bottom-[3vw] w-[35vw] flex flex-col items-center">
                                <div class="w-[30vw] flex flex-row justify-between items-center">
                                    <img src="../../../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt="" class="w-[4vw] h-[4vw]">
                                    <p class="text-white text-[3.73vw] text-center font-lemajor">Spell</p>
                                    <img src="../../../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt="" class="w-[4vw] h-[4vw]">
                                </div>
                                <div class="w-[25vw] h-[5vw] rounded-[1vw] border-white text-white text-[2.32vw] pt-[1vw] mt-[2vw] font-josefin-normal border-[0.3vw] flex justify-center items-center">
                                    {{ t('highRecommendedMobile.products[0].cta') }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Items 2 -->
                    <div class="w-[41.4vw] h-[41.4vw]  rounded-[4vw]  flex justify-center items-center bg-gradient-to-b from-[#FFF] to-transparent"
                    @click="$router.push('/shop/6848533f56e40f56a3d1124e')">
                        <div class="w-[41vw] h-[41vw] rounded-[4vw] bg-black overflow-hidden flex relative justify-center">
                            <img src="../../../assets/img/NINAPRODUCT/potion.webp" alt="" class="">
                            <div class="absolute bottom-[3vw] w-[35vw] flex flex-col items-center">
                                <div class="w-[30vw] flex flex-row justify-between items-center">
                                    <img src="../../../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt="" class="w-[4vw] h-[4vw]">
                                    <p class="text-white text-[3.73vw] text-center font-lemajor">Potion</p>
                                    <img src="../../../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt="" class="w-[4vw] h-[4vw]">
                                </div>
                                <div class="w-[25vw] h-[5vw] rounded-[1vw] border-white text-white text-[2.32vw] pt-[1vw] mt-[2vw] font-josefin-normal border-[0.3vw] flex justify-center items-center">
                                    {{ t('highRecommendedMobile.products[0].cta') }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Row items -->
                <div class="w-[90vw] h-[41.4vw] justify-between flex mt-[9vw]">
                    <!-- Items 1 -->
                    <div class="w-[41.4vw] h-[41.4vw]  rounded-[4vw]  flex justify-center items-center bg-gradient-to-b from-[#FFF] to-transparent"
                    @click="$router.push('/shop/684853ce56e40f56a3d11252')">
                        <div class="w-[41vw] h-[41vw] rounded-[4vw] bg-black overflow-hidden flex justify-center">
                            <img src="../../../assets/img/NINAPRODUCT/PHOENIX CANDLE.webp" alt="" class="">
                            <div class="absolute bottom-[3vw] w-[35vw] flex flex-col items-center">
                                <div class="w-[40vw] flex flex-row justify-between items-center">
                                    <img src="../../../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt="" class="w-[4vw] h-[4vw]">
                                    <p class="text-white text-[3.73vw] text-center font-lemajor">Phoenix Candle</p>
                                    <img src="../../../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt="" class="w-[4vw] h-[4vw]">
                                </div>
                                <div class="w-[25vw] h-[5vw] rounded-[1vw] border-white text-white text-[2.32vw] pt-[1vw] mt-[2vw] font-josefin-normal border-[0.3vw] flex justify-center items-center">
                                    {{ t('highRecommendedMobile.products[0].cta') }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Items 2 -->
                    <div class="w-[41.4vw] h-[41.4vw]  rounded-[4vw]  flex justify-center items-center bg-gradient-to-b from-[#FFF] to-transparent"
                    @click="$router.push('/nina-rituals')">
                        <div class="w-[41vw] h-[41vw] rounded-[4vw] bg-black overflow-hidden flex justify-center">
                            <img src="../../../assets/img/Desktop/Home/Recommend/NINAWITCH RITUAL.webp" alt="" class="">
                            <div class="absolute bottom-[3vw] w-[35vw] flex flex-col items-center">
                                <div class="w-[30vw] flex flex-row justify-between items-center">
                                    <img src="../../../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt="" class="w-[4vw] h-[4vw]">
                                    <p class="text-white text-[3.73vw] text-center font-lemajor">NinaWitch Ritual</p>
                                    <img src="../../../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt="" class="w-[4vw] h-[4vw]">
                                </div>
                                <div class="w-[25vw] h-[5vw] rounded-[1vw] border-white text-white text-[2.32vw] pt-[1vw] mt-[2vw] font-josefin-normal border-[0.3vw] flex justify-center items-center">
                                    {{ t('highRecommendedMobile.products[0].cta') }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer side -->
        <div class="w-full h-[0.4vw] bg-gradient-to-r from-transparent to-transparent via-white absolute bottom-0">
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
const openFacebook = () => {
  window.open("https://www.facebook.com/bupbegeisha000", "_blank")
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
</style>
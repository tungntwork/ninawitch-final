<template>
    <div class="w-full h-auto relative flex flex-col itcems-center">
        <img src="../../../assets/img/Mobile/Shop/back shop núi.webp" alt="" class="w-full h-auto">
        <div class="absolute w-full flex flex-col items-center top-[5vw] text-white">
            <p class="text-[8.22vw] text-white font-lemajor text-center" v-html="t('highRecommendedItemMobile.title')"></p>
            <p class="text-white font-josefin-normal text-[3.82vw] text-center font-josefin-normal font-light pt-[5vw]" v-html="t('highRecommendedItemMobile.description')">
            </p>

            <!-- products -->
            <div class="w-[90vw] h-auto flex flex-col mt-[8vw]">
                <!-- Row 1 -->
                <div class="w-[90vw] h-[75vw] flex flex-row justify-between">
                    <!-- Product -->
                    <div class="w-[42vw] h-auto" @click="$router.push('/shop/68480e4e4f5c0116dbc64e02')">
                        <div class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                            <img src="../../../assets/img/NINAPRODUCT/MEDUSACANDLE.webp" alt="" class="w-full h-full">
                            <div class="absolute top-0 right-0 w-[20vw] h-[5vw] bg-gradient-to-r from-[#D9D9D9] to-[#5D5D5D] flex justify-center items-center text-[2.3vw] rounded-bl-[2vw] text-black font-lemajor">
                                {{ t('highRecommendedItemMobile.products[0].tag') }}
                            </div>
                            <div class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt="" class="w-[4vw] h-[4vw]">
                                <p class="text-white text-[3.85vw] font-lemajor">Medusa Candle</p>
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt="" class="w-[4vw] h-[4vw]">
                            </div>
                        </div>
                        <div class="w-[42vw] flex flex-col justify-start relative">
                            <p class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                                {{ truncateWords(t('highRecommendedItemMobile.products[0].desc')) }}
                            </p>
                            <p class="text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                                {{ t('highRecommendedItemMobile.products[2].price') }}
                            </p>
                            <div class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                                <p class="w-[42vw]">{{ t('highRecommendedItemMobile.products[0].detail') }}</p>
                            </div>
                        </div>
                    </div>
                    <!-- Product 2 -->
                    <div class="w-[42vw] h-[10vw]">
                        <div class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center"
                        @click="$router.push('/shop/68480d4b4f5c0116dbc64dfe')">
                            <img src="../../../assets/img/NINAPRODUCT/LilithCandle.webp" alt="" class="w-full h-full">
                            <div class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt="" class="w-[4vw] h-[4vw]">
                                <p class="text-white text-[3.85vw] font-lemajor">Lilith Candle</p>
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt="" class="w-[4vw] h-[4vw]">
                            </div>
                        </div>
                        <div class="w-[42vw] flex flex-col justify-start relative">
                            <p class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                                {{ truncateWords(t('highRecommendedItemMobile.products[1].desc')) }}
                            </p>
                            <div class="flex text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                                2.222.000
                                <p class="text-[3vw] pl-[0.5vw] translate-y-[-0.5vw]">vnd</p>
                            </div>
                            <div class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                                <p class="w-[42vw]">{{ t('highRecommendedItemMobile.products[0].detail') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Row 2 -->
                <div class="w-[90vw] h-[75vw] flex flex-row justify-between">
                    <!-- Product -->
                    <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/6848433a56e40f56a3d11244')">
                        <div class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                            <img src="../../../assets/img/NINAPRODUCT/HekateCandle.webp" alt="" class="w-full h-full">
                            <div class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt="" class="w-[4vw] h-[4vw]">
                                <p class="text-white text-[3.85vw] font-lemajor">Hekate Candle</p>
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt="" class="w-[4vw] h-[4vw]">
                            </div>
                        </div>
                        <div class="w-[42vw] flex flex-col justify-start relative">
                            <p class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                                {{ truncateWords(t('highRecommendedItemMobile.products[2].desc')) }}
                            </p>
                            <p class="text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                                {{ t('highRecommendedItemMobile.products[2].price') }}
                            </p>
                            <div class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                                <p class="w-[42vw]">{{ t('highRecommendedItemMobile.products[0].detail') }}</p>
                            </div>
                        </div>
                    </div>
                    <!-- Product 2 -->
                    <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/6889e0568cfd586f340f0ec2')">
                        <div class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                            <img src="../../../assets/img/NINAPRODUCT/LuckyWallpaper.webp" alt="" class="w-full h-full">
                            <div class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt="" class="w-[4vw] h-[4vw]">
                                <p class="text-white text-[3.85vw] font-lemajor text-center">Lucky<br/>Wallpaper</p>
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt="" class="w-[4vw] h-[4vw]">
                            </div>
                        </div>
                        <div class="w-[42vw] flex flex-col justify-start relative">
                            <p class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                                {{ truncateWords(t('highRecommendedItemMobile.products[3].desc')) }}
                            </p>
                            <div class="flex text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                                1.500.000
                                <p class="text-[3vw] pl-[0.5vw] translate-y-[-0.5vw]">vnd</p>
                            </div>
                            <div class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                                <p class="w-[42vw]">{{ t('highRecommendedItemMobile.products[0].detail') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Row 3 -->
                <div class="w-[90vw] h-[75vw] flex flex-row justify-between">
                    <!-- Product 2 -->
                    <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/6848547a56e40f56a3d11256')">
                        <div class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                            <img src="../../../assets/img/NINAPRODUCT/SpecialPotion.webp" alt="" class="w-full h-full">
                            <div class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt="" class="w-[4vw] h-[4vw]">
                                <p class="text-white text-[3.85vw] font-lemajor text-center">Special Potion</p>
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt="" class="w-[4vw] h-[4vw]">
                            </div>
                        </div>
                        <div class="w-[42vw] flex flex-col justify-start relative">
                            <p class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]" v-html="truncateWords(t('highRecommendedItemMobile.products[4].desc'))">
                            </p>
                            <div class="flex text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                                3.000.000
                                <p class="text-[3vw] pl-[0.5vw] translate-y-[-0.5vw]">vnd</p>
                            </div>
                            <div class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                                <p class="w-[42vw]">{{ t('highRecommendedItemMobile.products[0].detail') }}</p>
                            </div>
                        </div>
                    </div>
                    <!-- Product -->
                    <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/6848d17856e40f56a3d1126c')">
                        <div class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                            <img src="../../../assets/img/NINAPRODUCT/Success Ritual.webp" alt="" class="w-full h-full">
                            <div class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt="" class="w-[4vw] h-[4vw]">
                                <p class="text-white text-[3.85vw] font-lemajor">Success Ritual</p>
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt="" class="w-[4vw] h-[4vw]">
                            </div>
                        </div>
                        <div class="w-[42vw] flex flex-col justify-start relative">
                            <p class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                                {{ truncateWords(t('highRecommendedItemMobile.products[5].desc')) }}
                            </p>
                            <p class="text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                                {{ t('highRecommendedItemMobile.products[2].price') }}
                            </p>
                            <div class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                                <p class="w-[42vw]">{{ t('highRecommendedItemMobile.products[0].detail') }}</p>
                            </div>
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
</style>
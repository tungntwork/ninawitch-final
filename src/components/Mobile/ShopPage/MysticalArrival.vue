<template>
    <div class="w-full h-[340vw] relative flex justify-center">
        <img src="../../../assets/img/Mobile/Shop/back shop cổng time.webp" alt="" class=" absolute top-0 w-full h-auto">
        <div class="absolute top-[37.2vw] w-[95vw]">
            <p class="text-white text-[9.5vw] font-lemajor text-glow text-center w-[95vw]" v-html="t('mysticalArrival.title')"></p>
            <p class="w-[90vw] text-end text-white text-[3.82vw] font-josefin-normal font-light" v-html="t('mysticalArrival.description_1')">
            </p>
            <p class="w-[90vw] text-center text-white text-[3.82vw] font-josefin-normal font-light">
                {{ t('mysticalArrival.description_2') }}
            </p>
        </div>
        <div class="absolute top-[157vw] w-[90vw] flex flex-col justify-center">
            <!-- Row 1 -->
            <div class="w-[90vw] h-[75vw] flex flex-row justify-between mt-[10vw]">
                <!-- Product 1 -->
                <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/6849502156e40f56a3d112a3')">
                    <div class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                        <img src="../../../assets/img/NINAPRODUCT/magic keychain.webp" alt="" class="w-full h-full">
                        <div class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                            <p class="text-white text-[3.85vw] font-lemajor text-center">Magic Keychain</p>
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                        </div>
                    </div>
                    <div class="w-[42vw] flex flex-col justify-start relative">
                        <p class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                            {{ truncateWords(t('mysticalArrivalMobile.products[0].desc')) }}
                        </p>
                        <div
                            class="flex text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                            {{ t('mysticalArrivalMobile.products[0].price') }}
                        </div>
                        <div
                            class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                            <p class="w-[42vw]">{{ t('mysticalArrivalMobile.itemDetail') }}</p>
                        </div>
                    </div>
                </div>
                <!-- Product 2 -->
                <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/684950c456e40f56a3d112a7')">
                    <div class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                        <img src="../../../assets/img/NINAPRODUCT/magical perfume.webp" alt="" class="w-full h-full">
                        <div class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                            <p class="text-white text-[3.6vw] font-lemajor text-center">Magical Perfume</p>
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                        </div>
                    </div>
                    <div class="w-[42vw] flex flex-col justify-start relative">
                        <p class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                            {{ truncateWords(t('mysticalArrivalMobile.products[1].desc')) }}
                        </p>
                        <div
                            class="flex text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                            {{ t('mysticalArrivalMobile.products[0].price') }}
                        </div>
                        <div
                            class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                            <p class="w-[42vw]">{{ t('mysticalArrivalMobile.itemDetail') }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Row 2 -->
            <div class="w-[90vw] h-[75vw] flex flex-row justify-between mt-[10vw]">
                <!-- Product 1 -->
                <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/6849516456e40f56a3d112a9')">
                    <div class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                        <img src="../../../assets/img/NINAPRODUCT/super_magic_charm_bag.webp" alt="" class="w-full h-full">
                        <div class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                            <p class="text-white text-[2.85vw] font-lemajor text-center">
                                Super Magic'
                                <br/>
                                <span class="text-[3.85vw]">Charm Bag</span>
                            </p>
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                        </div>
                    </div>
                    <div class="w-[42vw] flex flex-col justify-start relative">
                        <p class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                           {{ truncateWords(t('mysticalArrivalMobile.products[2].desc')) }}
                        </p>
                        <div
                            class="flex text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                            {{ t('mysticalArrivalMobile.products[0].price') }}
                        </div>
                        <div
                            class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                            <p class="w-[42vw]">{{ t('mysticalArrivalMobile.itemDetail') }}</p>
                        </div>
                    </div>
                </div>
                <!-- Product 2 -->
                <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/684951ef56e40f56a3d112ad')">
                    <div class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                        <img src="../../../assets/img/NINAPRODUCT/crystal bracelet random.webp" alt="" class="w-full h-full">
                        <div class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                            <p class="text-white text-[2.85vw] text-center font-lemajor">
                                Crystal Bracelet
                                <br/>
                                <span class="">Random</span>
                            </p>
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                        </div>
                    </div>
                    <div class="w-[42vw] flex flex-col justify-start relative">
                        <p class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                            {{ truncateWords(t('mysticalArrivalMobile.products[3].desc')) }}
                        </p>
                        <div
                            class="flex text-white text-[3.4vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                            {{ t('mysticalArrivalMobile.products[3].price') }}
                        </div>
                        <div
                            class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                            <p class="w-[42vw]">{{ t('mysticalArrivalMobile.itemDetail') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute hidden bottom-0 w-full h-[1vw] bg-gradient-to-r from-transparent to-transparent via-white"></div>
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
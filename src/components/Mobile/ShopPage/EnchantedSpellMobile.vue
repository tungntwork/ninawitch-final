<template>
    <div class="w-full h-[385vw] relative flex justify-center">
        <img src="../../../assets/img/Mobile/Shop/back shop line.webp" alt="" class="w-full h-full">
        <div class="absolute top-0 w-[100vw] h-auto bg-gradient-to-b from-[0D0D0D] to-[0D0D0D00]"></div>
        <div class="w-[95vw] flex flex-col items-center absolute top-[10vw]">
            <p class="text-[9vw] text-white text-center font-lemajor text-glow" v-html="t('enchantedSpellMobile.title')">
            </p>
            <p class="text-[4.18vw] text-white font-light font-josefin-normal text-center mt-[5vw]" v-html="t('enchantedSpellMobile.description')">
            </p>
            <!-- Row 1 -->
            <div class="w-[90vw] h-[75vw] flex flex-row justify-between mt-[10vw]">
                <!-- Product 1 -->
                <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/684851d756e40f56a3d11248')">
                    <div class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                        <img src="../../../assets/img/NINAPRODUCT/Spell.webp" alt="" class="w-full h-full">
                        <div class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                            <p class="text-white text-[3.85vw] font-lemajor text-center">Spell</p>
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                        </div>
                    </div>
                    <div class="w-[42vw] flex flex-col justify-start relative">
                        <p class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                            {{ truncateWords(t('enchantedSpellMobile.products[0].desc')) }}
                        </p>
                        <div
                            class="flex text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                            830.000
                            <p class="text-[3vw] pl-[0.5vw] translate-y-[-0.5vw]">vnd</p>
                        </div>
                        <div
                            class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                            <p class="w-[42vw]">{{ t('enchantedSpellMobile.itemDetail') }}</p>
                        </div>
                    </div>
                </div>
                <!-- Product 2 -->
                <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/6848e42256e40f56a3d11295')">
                    <div class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                        <img src="../../../assets/img/NINAPRODUCT/spell gaia.webp" alt="" class="w-full h-full">
                        <div class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                            <p class="text-white text-[3.85vw] font-lemajor">Spell Gaia</p>
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                        </div>
                    </div>
                    <div class="w-[42vw] flex flex-col justify-start relative">
                        <p class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                            {{ truncateWords(t('enchantedSpellMobile.products[1].desc')) }}
                        </p>
                        <div
                            class="flex text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                            1.111.000
                            <p class="text-[3vw] pl-[0.5vw] translate-y-[-0.5vw]">vnd</p>
                        </div>
                        <div
                            class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                            <p class="w-[42vw]">{{ t('enchantedSpellMobile.itemDetail') }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Row 2 -->
            <div class="w-[90vw] h-[75vw] flex flex-row justify-between">
                <!-- Product -->
                <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/6848e4b856e40f56a3d11297')">
                    <div class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                        <img src="../../../assets/img/NINAPRODUCT/special spell.webp" alt="" class="w-full h-full">
                        <div class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                            <p class="text-white text-[3.85vw] font-lemajor">Special Spell</p>
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                        </div>
                    </div>
                    <div class="w-[42vw] flex flex-col justify-start relative">
                        <p class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                            {{ truncateWords(t('enchantedSpellMobile.products[2].desc')) }}
                        </p>
                        <div
                            class="flex text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                            1.600.000 - 1.800.000
                            <p class="text-[3vw] pl-[0.5vw] translate-y-[-0.5vw]">vnd</p>
                        </div>
                        <div
                            class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                            <p class="w-[42vw]">{{ t('enchantedSpellMobile.itemDetail') }}</p>
                        </div>
                    </div>
                </div>
                <!-- Product 2 -->
                <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/6848e32656e40f56a3d11291')">
                    <div class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                        <img src="../../../assets/img/NINAPRODUCT/travel spell.webp" alt="" class="w-full h-full">
                        <div class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                            <p class="text-white text-[3.85vw] font-lemajor">Travel Spell</p>
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                        </div>
                    </div>
                    <div class="w-[42vw] flex flex-col justify-start relative">
                        <p class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                            {{ truncateWords(t('enchantedSpellMobile.products[3].desc')) }}
                        </p>
                        <div
                            class="flex text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                            {{ t('enchantedSpellMobile.products[3].price') }}
                        </div>
                        <div
                            class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                            <p class="w-[42vw]">{{ t('enchantedSpellMobile.itemDetail') }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Row 3 -->
            <div class="w-[90vw] h-[75vw] flex flex-row justify-between">
                <!-- Product 1 -->
                <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/6848533f56e40f56a3d1124e')">
                    <div class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                        <img src="../../../assets/img/NINAPRODUCT/potion.webp" alt="" class="w-full h-full">
                        <div class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                            <p class="text-white text-[3.85vw] font-lemajor text-center">Potion</p>
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                        </div>
                    </div>
                    <div class="w-[42vw] flex flex-col justify-start relative">
                        <p class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                            {{ truncateWords(t('enchantedSpellMobile.products[4].desc')) }}
                        </p>
                        <div
                            class="flex text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                            1.300.000
                            <p class="text-[3vw] pl-[0.5vw] translate-y-[-0.5vw]">vnd</p>
                        </div>
                        <div
                            class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                            <p class="w-[42vw]">{{ t('enchantedSpellMobile.itemDetail') }}</p>
                        </div>
                    </div>
                </div>
                <!-- Product 2 -->
                <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/6848e5be56e40f56a3d1129b')">
                    <div class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                        <img src="../../../assets/img/NINAPRODUCT/potion gaia.webp" alt=""
                            class="w-full h-full">
                        <div class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                            <p class="text-white text-[3.85vw] font-lemajor text-center">Potion Gaia</p>
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                        </div>
                    </div>
                    <div class="w-[42vw] flex flex-col justify-start relative">
                        <p class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                            {{ truncateWords(t('enchantedSpellMobile.products[5].desc')) }}
                        </p>
                        <div
                            class="flex text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                            1.600.000
                            <p class="text-[3vw] pl-[0.5vw] translate-y-[-0.5vw]">vnd</p>
                        </div>
                        <div
                            class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                            <p class="w-[42vw]">{{ t('enchantedSpellMobile.itemDetail') }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Row 4 -->
            <div class="w-[90vw] h-[75vw] flex flex-row justify-between">
                <!-- Product 1 -->
                <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/6848547a56e40f56a3d11256')">
                    <div class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                        <img src="../../../assets/img/NINAPRODUCT/SpecialPotion.webp" alt="" class="w-full h-full">
                        <div class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                            <p class="text-white text-[3.7vw] font-lemajor text-center">Special Potion</p>
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[4vw] h-[4vw]">
                        </div>
                    </div>
                    <div class="w-[42vw] flex flex-col justify-start relative">
                        <p class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]" v-html="truncateWords(t('enchantedSpellMobile.products[6].desc'))">
                        </p>
                        <div
                            class="flex text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                            3.000.000
                            <p class="text-[3vw] pl-[0.5vw] translate-y-[-0.5vw]">vnd</p>
                        </div>
                        <div
                            class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                            <p class="w-[42vw]">{{ t('enchantedSpellMobile.itemDetail') }}</p>
                        </div>
                    </div>
                </div>
                <!-- Product 2 -->
                <div class="w-[42vw] h-[10vw]">
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
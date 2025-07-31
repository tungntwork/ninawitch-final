<template>
    <div class="w-full h-[390vw] relative flex justify-center z-10">
        <img src="../../../assets/img/Mobile/Shop/line back shop.webp" alt="" class="w-full h-auto">
        <div class="absolute w-[95vw] top-[20vw] flex flex-col items-center">
            <p class="text-white text-[8.37vw] font-lemajor w-[95vw] text-center" v-html="t('mysticalExperienceMobile.title')"></p>
            <p class="text-white text-[4.18vw] leading-[6.5vw] font-josefin-normal mt-[10vw] text-center font-light" v-html="t('mysticalExperienceMobile.description')">
            </p>
            <div class="pt-[0vw] w-[95vw] flex flex-col items-center">
                <!-- Row 1 -->
                <div class="w-[90vw] h-[75vw] flex flex-row justify-between mt-[10vw]">
                    <!-- Product 1 -->
                    <div class="w-[42vw] h-[64vw] relative flex justify-center items-center" @click="$router.push('/shop/6889ef218cfd586f340f0f34')">
                        <div class="w-[42vw] h-[64vw] thumb-layer-bottom-1 absolute"></div>
                        <div class="absolute w-[41vw] h-[63vw] rounded-[2vw] flex justify-center items-center">
                            <img src="../../../assets/img/NINAPRODUCT/Magical/1.webp" alt="" class="w-full h-auto">
                            <div class="absolute w-[41vw] h-[63vw] top-0 flex justify-center">
                                <div class="absolute top-[32vw]">
                                    <p class="text-white text-[3.62vw] text-center font-lemajor">
                                        Candle Reading
                                    </p>
                                    <div class="w-[41vw] justify-center items-center flex">
                                        <div class="w-[35vw] flex flex-row justify-between items-center pt-[1vw]">
                                            <div class="w-[0.8vw] h-[0.8vw] bg-white rotate-[45deg]"></div>
                                            <div class="w-[35vw] h-[0.1vw] bg-white"></div>
                                            <div class="w-[0.8vw] h-[0.8vw] bg-white rotate-[45deg]"></div>
                                        </div>
                                    </div>
                                    <p class="text-white text-[2.35vw] w-[40vw] font-josefin-normal text-center font-thin pt-[1vw]"  v-html="truncateWords(t('mysticalExperienceMobile.products[0].desc'))">
                                    </p>
                                </div>
                                <div class="absolute w-[35vw] top-[50vw] flex flex-row justify-start text-white font-josefin-normal">
                                    <p class="text-[3.62vw]">600.000</p>
                                    <p class="text-[2.8vw] pl-[0.8vw]">vnd</p>
                                </div>
                                <div class="absolute bottom-[1vw] right-[2vw] text-white font-josefin-normal text-[2.2vw] font-light">
                                    {{ t('mysticalExperienceMobile.itemDetail') }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Product 2 -->
                    <div class="w-[42vw] h-[64vw] relative flex justify-center items-center" @click="$router.push('/shop/6889f0298cfd586f340f0f44')">
                        <div class="w-[42vw] h-[64vw] thumb-layer-bottom-1 absolute"></div>
                        <div class="absolute w-[41vw] h-[63vw] rounded-[2vw] flex justify-center items-center">
                            <img src="../../../assets/img/NINAPRODUCT/Magical/2.webp" alt="" class="w-full h-auto">
                            <div class="absolute w-[41vw] h-[63vw] top-0 flex justify-center">
                                <div class="absolute top-[32vw]">
                                    <p class="text-white text-[3.62vw] text-center font-lemajor">
                                        Flower Reading
                                    </p>
                                    <div class="w-[41vw] justify-center items-center flex">
                                        <div class="w-[35vw] flex flex-row justify-between items-center pt-[1vw]">
                                            <div class="w-[0.8vw] h-[0.8vw] bg-white rotate-[45deg]"></div>
                                            <div class="w-[35vw] h-[0.1vw] bg-white"></div>
                                            <div class="w-[0.8vw] h-[0.8vw] bg-white rotate-[45deg]"></div>
                                        </div>
                                    </div>
                                    <p class="text-white text-[2.35vw] w-[40vw] font-josefin-normal text-center font-thin pt-[1vw]" v-html="truncateWords(t('mysticalExperienceMobile.products[1].desc'))">
                                    </p>
                                </div>
                                <div class="absolute w-[35vw] top-[50vw] flex flex-row justify-start text-white font-josefin-normal">
                                    <p class="text-[3.62vw]">700.000</p>
                                    <p class="text-[2.8vw] pl-[0.8vw]">vnd</p>
                                </div>
                                <div class="absolute bottom-[1vw] right-[2vw] text-white font-josefin-normal text-[2.2vw] font-light">
                                    {{ t('mysticalExperienceMobile.itemDetail') }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Row 2 -->
                <div class="w-[90vw] h-[75vw] flex flex-row justify-between mt-[3vw]">
                    <!-- Product 1 -->
                    <div class="w-[42vw] h-[64vw] relative flex justify-center items-center" @click="$router.push('/shop/6889f0df8cfd586f340f0f54')">
                        <div class="w-[42vw] h-[64vw] thumb-layer-bottom-1 absolute"></div>
                        <div class="absolute w-[41vw] h-[63vw] rounded-[2vw] flex justify-center items-center">
                            <img src="../../../assets/img/NINAPRODUCT/Magical/3.webp" alt="" class="w-full h-auto">
                            <div class="absolute w-[41vw] h-[63vw] top-0 flex justify-center">
                                <div class="absolute top-[28vw]">
                                    <p class="text-white text-[3.62vw] leading-[4vw] text-center font-lemajor">
                                        Crystal Ball<br/>
                                        Reading
                                    </p>
                                    <div class="w-[41vw] justify-center items-center flex">
                                        <div class="w-[35vw] flex flex-row justify-between items-center pt-[1vw]">
                                            <div class="w-[0.8vw] h-[0.8vw] bg-white rotate-[45deg]"></div>
                                            <div class="w-[35vw] h-[0.1vw] bg-white"></div>
                                            <div class="w-[0.8vw] h-[0.8vw] bg-white rotate-[45deg]"></div>
                                        </div>
                                    </div>
                                    <p class="text-white text-[2.35vw] w-[40vw] font-josefin-normal text-center font-thin pt-[1vw]" v-html="truncateWords(t('mysticalExperienceMobile.products[2].desc'))">
                                    </p>
                                </div>
                                <div class="absolute w-[35vw] top-[50vw] flex flex-row justify-start text-white font-josefin-normal">
                                    <p class="text-[3.62vw]">888.000</p>
                                    <p class="text-[2.8vw] pl-[0.8vw]">vnd</p>
                                </div>
                                <div class="absolute bottom-[1vw] right-[2vw] text-white font-josefin-normal text-[2.2vw] font-light">
                                    {{ t('mysticalExperienceMobile.itemDetail') }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Product 2 -->
                    <div class="w-[42vw] h-[64vw] relative flex justify-center items-center" @click="$router.push('/shop/6889f1708cfd586f340f0f58')">
                        <div class="w-[42vw] h-[64vw] thumb-layer-bottom-1 absolute"></div>
                        <div class="absolute w-[41vw] h-[63vw] rounded-[2vw] flex justify-center items-center">
                            <img src="../../../assets/img/NINAPRODUCT/Magical/4.webp" alt="" class="w-full h-auto">
                            <div class="absolute w-[41vw] h-[63vw] top-0 flex justify-center">
                                <div class="absolute top-[28vw]">
                                    <p class="text-white text-[3.62vw] leading-[4vw] text-center font-lemajor">
                                        Connection to<br/>
                                        Akashic
                                    </p>
                                    <div class="w-[41vw] justify-center items-center flex">
                                        <div class="w-[35vw] flex flex-row justify-between items-center pt-[1vw]">
                                            <div class="w-[0.8vw] h-[0.8vw] bg-white rotate-[45deg]"></div>
                                            <div class="w-[35vw] h-[0.1vw] bg-white"></div>
                                            <div class="w-[0.8vw] h-[0.8vw] bg-white rotate-[45deg]"></div>
                                        </div>
                                    </div>
                                    <p class="text-white text-[2.35vw] w-[40vw] font-josefin-normal text-center font-thin pt-[1vw]" v-html="truncateWords(t('mysticalExperienceMobile.products[3].desc'))">
                                    </p>
                                </div>
                                <div class="absolute w-[35vw] top-[50vw] flex flex-row justify-start text-white font-josefin-normal">
                                    <p class="text-[3.62vw]">999.000</p>
                                    <p class="text-[2.8vw] pl-[0.8vw]">vnd</p>
                                </div>
                                <div class="absolute bottom-[1vw] right-[2vw] text-white font-josefin-normal text-[2.2vw] font-light">
                                    {{ t('mysticalExperienceMobile.itemDetail') }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Row 3 -->
                <div class="w-[90vw] h-[75vw] flex flex-row justify-between mt-[3vw]">
                    <!-- Product 1 -->
                    <div class="w-[42vw] h-[64vw] relative flex justify-center items-center" @click="$router.push('/shop/6889f1eb8cfd586f340f0f5c')">
                        <div class="w-[42vw] h-[64vw] thumb-layer-bottom-1 absolute"></div>
                        <div class="absolute w-[41vw] h-[63vw] rounded-[2vw] flex justify-center items-center">
                            <img src="../../../assets/img/NINAPRODUCT/Magical/5.webp" alt="" class="w-full h-auto">
                            <div class="absolute w-[41vw] h-[63vw] top-0 flex justify-center">
                                <div class="absolute top-[32vw]">
                                    <p class="text-white text-[3.62vw] leading-[4vw] text-center font-lemajor">
                                        Medium Reading
                                    </p>
                                    <div class="w-[41vw] justify-center items-center flex">
                                        <div class="w-[35vw] flex flex-row justify-between items-center pt-[1vw]">
                                            <div class="w-[0.8vw] h-[0.8vw] bg-white rotate-[45deg]"></div>
                                            <div class="w-[35vw] h-[0.1vw] bg-white"></div>
                                            <div class="w-[0.8vw] h-[0.8vw] bg-white rotate-[45deg]"></div>
                                        </div>
                                    </div>
                                    <p class="text-white text-[2.35vw] w-[40vw] font-josefin-normal text-center font-thin pt-[1vw]" v-html="truncateWords(t('mysticalExperienceMobile.products[4].desc'))">
                                    </p>
                                </div>
                                <div class="absolute w-[35vw] top-[50vw] flex flex-row justify-start text-white font-josefin-normal">
                                    <p class="text-[3.62vw]">3.000.000</p>
                                    <p class="text-[2.8vw] pl-[0.8vw]">vnd</p>
                                </div>
                                <div class="absolute bottom-[1vw] right-[2vw] text-white font-josefin-normal text-[2.2vw] font-light">
                                    {{ t('mysticalExperienceMobile.itemDetail') }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Product 2 -->
                    <div class="w-[42vw] h-[64vw] relative flex justify-center items-center" @click="$router.push('/shop/6889f29a8cfd586f340f0f60')">
                        <div class="w-[42vw] h-[64vw] thumb-layer-bottom-1 absolute"></div>
                        <div class="absolute w-[41vw] h-[63vw] rounded-[2vw] flex justify-center items-center">
                            <img src="../../../assets/img/NINAPRODUCT/Magical/6.webp" alt="" class="w-full h-auto">
                            <div class="absolute w-[41vw] h-[63vw] top-0 flex justify-center">
                                <div class="absolute top-[28vw]">
                                    <p class="text-white text-[3.62vw] leading-[4vw] text-center font-lemajor">
                                        Aura Reading<br/>
                                        & Cleanes
                                    </p>
                                    <div class="w-[41vw] justify-center items-center flex">
                                        <div class="w-[35vw] flex flex-row justify-between items-center pt-[1vw]">
                                            <div class="w-[0.8vw] h-[0.8vw] bg-white rotate-[45deg]"></div>
                                            <div class="w-[35vw] h-[0.1vw] bg-white"></div>
                                            <div class="w-[0.8vw] h-[0.8vw] bg-white rotate-[45deg]"></div>
                                        </div>
                                    </div>
                                    <p class="text-white text-[2.35vw] w-[40vw] font-josefin-normal text-center font-thin pt-[1vw]" v-html="truncateWords(t('mysticalExperienceMobile.products[5].desc'))">
                                    </p>
                                </div>
                                <div class="absolute w-[35vw] top-[50vw] flex flex-row justify-start text-white font-josefin-normal">
                                    {{ t('mysticalExperienceMobile.products[5].price') }}
                                </div>
                                <div class="absolute bottom-[1vw] right-[2vw] text-white font-josefin-normal text-[2.2vw] font-light">
                                    {{ t('mysticalExperienceMobile.itemDetail') }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Row 4 -->
                <div class="w-[90vw] h-[75vw] flex flex-row justify-between mt-[3vw]">
                    <!-- Product 1 -->
                    <div class="w-[42vw] h-[64vw] relative flex justify-center items-center" @click="$router.push('/shop/6889f3158cfd586f340f0f64')">
                        <div class="w-[42vw] h-[64vw] thumb-layer-bottom-1 absolute"></div>
                        <div class="absolute w-[41vw] h-[63vw] rounded-[2vw] flex justify-center items-center">
                            <img src="../../../assets/img/NINAPRODUCT/Magical/7.webp" alt="" class="w-full h-auto">
                            <div class="absolute w-[41vw] h-[63vw] top-0 flex justify-center">
                                <div class="absolute top-[32vw]">
                                    <p class="text-white text-[3.62vw] leading-[4vw] text-center font-lemajor">
                                        Aura Reading
                                    </p>
                                    <div class="w-[41vw] justify-center items-center flex">
                                        <div class="w-[35vw] flex flex-row justify-between items-center pt-[1vw]">
                                            <div class="w-[0.8vw] h-[0.8vw] bg-white rotate-[45deg]"></div>
                                            <div class="w-[35vw] h-[0.1vw] bg-white"></div>
                                            <div class="w-[0.8vw] h-[0.8vw] bg-white rotate-[45deg]"></div>
                                        </div>
                                    </div>
                                    <p class="text-white text-[2.35vw] w-[40vw] font-josefin-normal text-center font-thin pt-[1vw]" v-html="truncateWords(t('mysticalExperienceMobile.products[6].desc'))">
                                    </p>
                                </div>
                                <div class="absolute w-[35vw] top-[50vw] flex flex-row justify-start text-white font-josefin-normal">
                                    {{ t('mysticalExperienceMobile.products[6].price') }}
                                </div>
                                <div class="absolute bottom-[1vw] right-[2vw] text-white font-josefin-normal text-[2.2vw] font-light">
                                    {{ t('mysticalExperienceMobile.itemDetail') }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Product 2 -->
                    <div class="w-[42vw] h-[64vw] relative flex justify-center items-center" @click="$router.push('/shop/6889f3c98cfd586f340f0f68')">
                        <div class="w-[42vw] h-[64vw] thumb-layer-bottom-1 absolute"></div>
                        <div class="absolute w-[41vw] h-[63vw] rounded-[2vw] flex justify-center items-center">
                            <img src="../../../assets/img/NINAPRODUCT/Magical/8.webp" alt="" class="w-full h-auto">
                            <div class="absolute w-[41vw] h-[63vw] top-0 flex justify-center">
                                <div class="absolute top-[28vw]">
                                    <p class="text-white text-[3.62vw] leading-[4vw] text-center font-lemajor">
                                        Full Aura<br/>
                                        Cleanse Ritual
                                    </p>
                                    <div class="w-[41vw] justify-center items-center flex">
                                        <div class="w-[35vw] flex flex-row justify-between items-center pt-[1vw]">
                                            <div class="w-[0.8vw] h-[0.8vw] bg-white rotate-[45deg]"></div>
                                            <div class="w-[35vw] h-[0.1vw] bg-white"></div>
                                            <div class="w-[0.8vw] h-[0.8vw] bg-white rotate-[45deg]"></div>
                                        </div>
                                    </div>
                                    <p class="text-white text-[2.35vw] w-[40vw] font-josefin-normal text-center font-thin pt-[1vw]" v-html="truncateWords(t('mysticalExperienceMobile.products[7].desc'))">
                                    </p>
                                </div>
                                <div class="absolute w-[35vw] top-[50vw] flex flex-row justify-start text-white font-josefin-normal">
                                    {{ t('mysticalExperienceMobile.products[7].price') }}
                                </div>
                                <div class="absolute bottom-[1vw] right-[2vw] text-white font-josefin-normal text-[2.2vw] font-light">
                                    {{ t('mysticalExperienceMobile.itemDetail') }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute w-full h-[20vw] bg-gradient-to-t from-[#171717] to-transparent hidden"></div>
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

.text-you-hold {
    font-weight: 50;
}

.text-glow-2 {
    text-shadow: 0 0 0.1vw rgba(255, 255, 255, 0.8), 0 0 0.5vw rgba(255, 255, 255, 0.6), 0 0 3vw rgba(255, 255, 255, 0.4);
}

.thumb-layer-bottom-1 {
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
    border-radius: 3vw;
    pointer-events: none;
    z-index: 0;
}
</style>
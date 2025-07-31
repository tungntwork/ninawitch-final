<template>
    <div class="w-full h-[73vw] relative overflow-hidden">
        <img ref="skyafterEl" src="../../../assets/img/Desktop/Shop/HighRecommened/sky.webp" alt="Sky"
            class="skyafter absolute top-0 translate-y-[-10vw] w-full h-auto">
        <img ref="mountain1El" src="../../../assets/img/Desktop/Shop/HighRecommened/núi2.webp" alt="Mountain 1"
            class="mountain2 absolute bottom-0 translate-y-[48vw] w-full h-auto">
        <img ref="mountain2El" src="../../../assets/img/Desktop/Shop/HighRecommened/núi1.webp" alt="Mountain 2"
            class="mountain1 absolute bottom-0 translate-y-[180vw] w-full h-auto scale-[0.6] origin-bottom-left">
        <div class="absolute top-0 w-full h-[40vw] bg-gradient-to-b from-[#0D0D0D] to-transparent"></div>
        <div
            class="absolute top-0 h-[0.1vw] w-[80vw] translate-x-[10vw] bg-gradient-to-r from-transparent to-transparent via-white">
        </div>
        <!-- Content -->
        <div class="absolute top-0 h-auto w-full flex flex-col items-center">
            <div class="w-[55vw] flex flex-col text-white items-center pt-[6vw]">
                <p class="text-[3.125vw] font-lemajor">
                    {{ t('highRecommended.title') }}
                </p>
                <p class="text-[1.04vw] font-light text-center font-josefin-normal mt-[0.25vw]">
                    {{ t('highRecommended.description') }}
                </p>
            </div>

            <!-- Products -->
            <div class="w-[89vw] h-auto flex flex-col mt-[3vw]">
                <!-- ROW 1 -->
                <div class="w-full h-auto  flex flex-row justify-around">
                    <!-- Items 1 -->
                    <div class="h-[25vw] w-[15.2vw] items-1 overflow-hidden relative">
                        <div class="h-[15.2vw] w-[15.2vw] thumb-layer-bottom-1 absolute">
                            <div
                                class="relative w-[15.1vw] h-[15.1vw] translate-x-[0.05vw] translate-y-[0.05vw] rounded-[0.8vw] flex justify-center overflow-hidden">
                                <img src="../../../assets/img/Desktop/Shop/HighRecommened/MEDUSACANDLE.webp" alt=""
                                    class="w-full h-auto">
                                <div class="absolute top-0 right-0 w-[7vw] h-[1.4vw] rounded-bl-[0.8vw] flex items-center justify-center"
                                    style="background: linear-gradient(90deg, #ece9e6 0%, #fff 25%, #bcbcbc 50%, #e0e0e0 75%, #a7a7a7 100%);">
                                    <p class="font-lemajor text-[0.85vw] font-normal">{{ t('highRecommended.items[0].tag') }}</p>
                                </div>
                                <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                    style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                                <div
                                    class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                                    <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                    <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                        style="transform: scaleY(0.95); letter-spacing: 0.01vw">Medusa Candle</div>
                                    <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                </div>
                                <!-- Layer on top -->
                                <div
                                    class="w-[8vw] h-[8vw] bg-[#C05140] absolute rounded-[50%] top-[6vw] left-0 translate-x-[-10vw] blur-[5vw] layer-on-top">
                                </div>
                            </div>
                        </div>

                        <p class="w-full text-start font-josefin-normal text-[0.87vw] text-white font-thin mt-[1vw]">
                            {{ t('highRecommended.items[0].desc') }}
                        </p>
                        <p
                            class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                            {{ t('highRecommended.items[0].price') }}
                        </p>

                        <!-- {{ t('highRecommended.items[0].addToCart') }} -->
                        <div class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw]">
                            <div @click="$router.push('/shop/68480e4e4f5c0116dbc64e02')"
                                class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                    {{ t('highRecommended.items[0].details') }}
                                </p>
                                <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                    class="w-[1vw] h-[1vw]">
                            </div>
                            <div
                                class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                                <p class="translate-y-[0.1vw]">{{ t('highRecommended.items[0].addToCart') }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Items 2 -->
                    <div class="h-[25vw] w-[15.2vw] items-1 overflow-hidden relative">
                        <div class="h-[15.2vw] w-[15.2vw] thumb-layer-bottom-1 absolute">
                            <div
                                class="relative w-[15.1vw] h-[15.1vw] translate-x-[0.05vw] translate-y-[0.05vw] rounded-[0.8vw] flex justify-center overflow-hidden">
                                <img src="../../../assets/img/Desktop/Shop/HighRecommened/LilithCandle.webp" alt=""
                                    class="w-full h-auto">
                                <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                    style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                                <div
                                    class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                                    <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                    <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                        style="transform: scaleY(0.95); letter-spacing: 0.01vw">Lilith Candle</div>
                                    <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                </div>
                                <!-- Layer on top -->
                                <div
                                    class="w-[8vw] h-[8vw] bg-[#C05140] absolute rounded-[50%] top-[6vw] left-0 translate-x-[-10vw] blur-[5vw] layer-on-top">
                                </div>
                            </div>
                        </div>

                        <p class="w-full text-start font-josefin-normal text-[0.87vw] text-white font-thin mt-[1vw]">
                            {{ t('highRecommended.items[1].desc') }}
                        </p>
                        <div
                            class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white flex flex-row">
                            <p class="mr-[0.2vw]">
                                2.222.000
                            </p>
                            <p class="translate-y-[-0.04vw] text-[1vw]">vnd</p>
                        </div>

                        <!-- {{ t('highRecommended.items[0].addToCart') }} -->
                        <div class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw]">
                            <div @click="$router.push('/shop/68480d4b4f5c0116dbc64dfe')"
                                class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                    {{ t('highRecommended.items[1].details') }}
                                </p>
                                <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                    class="w-[1vw] h-[1vw]">
                            </div>
                            <div
                                class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                                <p class="translate-y-[0.1vw]">{{ t('highRecommended.items[1].addToCart') }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Items 3 -->
                    <div class="h-[25vw] w-[15.2vw] items-1 overflow-hidden relative">
                        <div class="h-[15.2vw] w-[15.2vw] thumb-layer-bottom-1 absolute">
                            <div
                                class="relative w-[15.1vw] h-[15.1vw] translate-x-[0.025vw] translate-y-[0.05vw] rounded-[0.8vw] flex justify-center overflow-hidden">
                                <img src="../../../assets/img/Desktop/Shop/HighRecommened/HekateCandle.webp" alt=""
                                    class="w-full h-auto">
                                <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                    style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                                <div
                                    class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                                    <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                    <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                        style="transform: scaleY(0.95); letter-spacing: 0.01vw">Hekate Candle</div>
                                    <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                </div>
                                <!-- Layer on top -->
                                <div
                                    class="w-[8vw] h-[8vw] bg-[#C05140] absolute rounded-[50%] top-[6vw] left-0 translate-x-[-10vw] blur-[5vw] layer-on-top">
                                </div>
                            </div>
                        </div>

                        <p class="w-full text-start font-josefin-normal text-[0.87vw] text-white font-thin mt-[1vw]">
                            {{ t('highRecommended.items[2].desc') }}
                        </p>
                        <p
                            class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                            {{ t('highRecommended.items[2].price') }}
                        </p>

                        <!-- {{ t('highRecommended.items[0].addToCart') }} -->
                        <div class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw]">
                            <div @click="$router.push('/shop/6848433a56e40f56a3d11244')"
                                class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                    {{ t('highRecommended.items[0].details') }}
                                </p>
                                <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                    class="w-[1vw] h-[1vw]">
                            </div>
                            <div
                                class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                                <p class="translate-y-[0.1vw]">{{ t('highRecommended.items[0].addToCart') }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ROW 2 -->
                <div class="w-full h-auto flex flex-row justify-around mt-[2vw]">
                    <!-- Items 4 -->
                    <div class="h-[25vw] w-[15.2vw] items-1 overflow-hidden relative">
                        <div class="h-[15.2vw] w-[15.2vw] thumb-layer-bottom-1 absolute">
                            <div
                                class="relative w-[15.1vw] h-[15.1vw] translate-x-[0.025vw] translate-y-[0.025vw] rounded-[0.8vw] flex justify-center overflow-hidden">
                                <img src="../../../assets/img/Desktop/Shop/HighRecommened/LuckyWallpaper.webp" alt=""
                                    class="w-full h-auto">
                                <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                    style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                                <div
                                    class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-[10vw]">
                                    <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                    <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                        style="transform: scaleY(0.95); letter-spacing: 0.01vw">Lucky Wallpaper</div>
                                    <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                </div>
                                <!-- Layer on top -->
                                <div
                                    class="w-[8vw] h-[8vw] bg-[#C05140] absolute rounded-[50%] top-[6vw] left-0 translate-x-[-10vw] blur-[5vw] layer-on-top">
                                </div>
                            </div>
                        </div>

                        <p class="w-full text-start font-josefin-normal text-[0.87vw] text-white font-thin mt-[1vw]">
                            {{ t('highRecommended.items[3].desc') }}
                        </p>
                        <div
                        @click="$router.push('/shop/6889e0568cfd586f340f0ec2')"
                            class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white flex flex-row">
                            <p class="mr-[0.2vw]">
                                1.500.000
                            </p>
                            <p class="translate-y-[-0.04vw] text-[1vw]">vnd</p>
                        </div>

                        <!-- {{ t('highRecommended.items[0].addToCart') }} -->
                        <div class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw]">
                            <div
                                class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                <p @click="$router.push('/shop/6889e0568cfd586f340f0ec2')" class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                    {{ t('highRecommended.items[0].details') }}
                                </p>
                                <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                    class="w-[1vw] h-[1vw]">
                            </div>
                            <div
                                class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                                <p class="translate-y-[0.1vw]">{{ t('highRecommended.items[0].addToCart') }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Items 5 -->
                    <div class="h-[25vw] w-[15.2vw] items-1 overflow-hidden relative">
                        <div class="h-[15.2vw] w-[15.2vw] thumb-layer-bottom-1 absolute">
                            <div
                                class="relative w-[15.1vw] h-[15.1vw] translate-x-[0.025vw] translate-y-[0.05vw] rounded-[0.8vw] flex justify-center overflow-hidden">
                                <img src="../../../assets/img/Desktop/Shop/HighRecommened/SpecialPotion.webp" alt=""
                                    class="w-full h-auto">
                                <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                    style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                                <div
                                    class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                                    <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                    <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                        style="transform: scaleY(0.95); letter-spacing: 0.01vw">Special Potion</div>
                                    <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                </div>
                                <!-- Layer on top -->
                                <div
                                    class="w-[8vw] h-[8vw] bg-[#C05140] absolute rounded-[50%] top-[6vw] left-0 translate-x-[-10vw] blur-[5vw] layer-on-top">
                                </div>
                            </div>
                        </div>

                        <p class="w-full text-start font-josefin-normal text-[0.87vw] text-white font-thin mt-[1vw]">
                            {{ t('highRecommended.items[4].desc') }}
                        </p>
                        <div
                            class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white flex flex-row">
                            <p class="mr-[0.2vw]">
                                3.000.000
                            </p>
                            <p class="translate-y-[-0.04vw] text-[1vw]">vnd</p>
                        </div>

                        <!-- {{ t('highRecommended.items[0].addToCart') }} -->
                        <div class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw]">
                            <div
                                @click="$router.push('/shop/6848547a56e40f56a3d11256')"
                                class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                    {{ t('highRecommended.items[0].details') }}
                                </p>
                                <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                    class="w-[1vw] h-[1vw]">
                            </div>
                            <div
                                class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                                <p class="translate-y-[0.1vw]">{{ t('highRecommended.items[0].addToCart') }}</p>
                            </div>
                        </div>
                    </div>
                    <!-- Items 6 -->
                    <div class="h-[25vw] w-[15.2vw] items-1 overflow-hidden relative">
                        <div class="h-[15.2vw] w-[15.2vw] thumb-layer-bottom-1 absolute">
                            <div
                                class="relative w-[15.1vw] h-[15.1vw] translate-x-[0.025vw] translate-y-[0.05vw] rounded-[0.8vw] flex justify-center overflow-hidden">
                                <img src="../../../assets/img/Desktop/Shop/HighRecommened/SuccessRitual.webp" alt=""
                                    class="w-full h-auto">
                                <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                    style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                                <div
                                    class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                                    <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                    <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                        style="transform: scaleY(0.95); letter-spacing: 0.01vw">Success Ritual</div>
                                    <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                </div>
                                <!-- Layer on top -->
                                <div
                                    class="w-[8vw] h-[8vw] bg-[#C05140] absolute rounded-[50%] top-[6vw] left-0 translate-x-[-10vw] blur-[5vw] layer-on-top">
                                </div>
                            </div>
                        </div>
                        <p class="w-full text-start font-josefin-normal text-[0.87vw] text-white font-thin mt-[1vw]">
                            {{ t('highRecommended.items[5].desc') }}
                        </p>
                        <div
                            class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white flex flex-row">
                            <p class="mr-[0.2vw]">
                                {{ t('highRecommended.items[0].price') }}
                            </p>
                        </div>

                        <!-- {{ t('highRecommended.items[0].addToCart') }} -->
                        <div class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw]">
                            <div
                                @click="$router.push('/shop/6848d17856e40f56a3d1126c')"
                                class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                    {{ t('highRecommended.items[0].details') }}
                                </p>
                                <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                    class="w-[1vw] h-[1vw]">
                            </div>
                            <div
                                class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                                <p class="translate-y-[0.1vw]">{{ t('highRecommended.items[0].addToCart') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom -->
        <div class="w-[100vw] h-[10vw] bg-white rounded-[50%] absolute bottom-0 translate-y-[8vw] blur-[3vw]"></div>
        <div class="w-[100vw] h-[1vw] bg-black rounded-[50%] absolute bottom-0 translate-y-[0.5vw] blur-[0.7vw]"></div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const skyafterEl = ref(null);
const mountain1El = ref(null);
const mountain2El = ref(null);

const initialSkyOffsetVw = -10;
const initialMountain1OffsetVw = 10;
const initialMountain2OffsetVw = 225;

const mountain2UpRate = 0.85;
const mountain1UpRate = 0.1;
const skyDownRate = 0.35;

let ticking = false;

const updateElementPositions = () => {
    const scrollY = window.scrollY;
    if (skyafterEl.value) {
        skyafterEl.value.style.transform = `translateY(calc(${initialSkyOffsetVw}vw - ${scrollY * skyDownRate}px))`;
    }
    if (mountain1El.value) {
        mountain1El.value.style.transform = `translateY(calc(${initialMountain1OffsetVw}vw + ${scrollY * mountain1UpRate}px))`;
    }
    if (mountain2El.value) {
        mountain2El.value.style.transform = `translateY(calc(${initialMountain2OffsetVw}vw - ${scrollY * mountain2UpRate}px))`;
    }
    ticking = false;
};

const handleScroll = () => {
    if (!ticking) {
        window.requestAnimationFrame(updateElementPositions);
        ticking = true;
    }
};

onMounted(() => {
    updateElementPositions();
    window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.skyafter,
.mountain1,
.mountain2 {
    will-change: transform;
}

.font-lemajor {
    font-family: "TP Le Major", sans-serif;
}

.font-josefin-normal {
    font-family: "JosefinNormal", sans-serif;
}

.layer-on-top {
    transform: translateX(-9vw);
    transition: all 0.5s ease-in-out;
}

.items-details {
    transform: translateX(9.7vw);
    transition: all 0.5s ease-in-out;
}

.items-1:hover .layer-on-top {
    transform: translateX(10vw);
    transition: all 0.5s ease-in-out;
}

.items-1:hover .items-details {
    transform: translateX(0);
    transition: all 0.5s ease-in-out;
}

.button-redirect:hover {
    background-color: white;
    color: black;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    box-shadow: 0 0 0.1vw rgba(255, 255, 255, 0.8);
}

.layer-drop {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

.items-1:hover .layer-drop {
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
}

.thumb-layer-bottom-1 {
    position: relative;
    border-radius: 0.8vw;
    overflow: hidden;
    z-index: 1;
}

.thumb-layer-bottom-1::after {
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
    z-index: -1;
}

.thumb-layer-bottom-1::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image:
        radial-gradient(ellipse farthest-corner at 100% 0%, white 0%, transparent 70%),
        radial-gradient(ellipse farthest-corner at 0% 100%, white 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    pointer-events: none;
    z-index: -1;
}

.items-1:hover .thumb-layer-bottom-1::after {
    opacity: 0;
}

.items-1:hover .thumb-layer-bottom-1::before {
    opacity: 1;
}

.thumb-layer-bottom-1>div {
    position: relative;
    z-index: 2;
}
</style>
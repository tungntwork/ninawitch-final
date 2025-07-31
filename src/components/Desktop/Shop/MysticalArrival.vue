<template>
    <div class="w-full h-auto relative">
        <img src="../../../assets/img/Desktop/Shop/MysticalArrival/back mystical.webp" alt="" class="w-full h-auto">
        <img src="../../../assets/img/Desktop/Shop/MysticalArrival/smoke 2 1.webp" alt=""
            class="absolute top-0 left-0 w-full h-auto">
        <div class="flex flex-col justify-end items-end absolute top-[9.5875vw] right-[5vw]">
            <p class="font-lemajor text-white text-[5vw]">
                {{ t('mysticalArrival.title') }}
            </p>
            <p class="font-josefin-normal text-[1.05vw] font-thin text-white">{{ t('mysticalArrival.descriptionLine1') }}</p>
            <p class="font-josefin-normal text-[1.05vw] font-thin text-white">{{ t('mysticalArrival.descriptionLine2') }}</p>
            
            <!-- Row products -->
            <div class="w-[72vw] flex flex-row justify-between mt-[4.4vw]">
                <!-- Items 1 -->
                <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                    <div class="h-[15vw] w-[15vw] thumb-layer-bottom-1 absolute">
                        <div
                            class="relative w-[14.9vw] h-[14.9vw] translate-x-[0.05vw] translate-y-[0.05vw] rounded-[0.8vw] flex justify-center overflow-hidden">
                            <img src="../../../assets/img/Desktop/Shop/MysticalArrival/magic keychain.webp" alt=""
                                class="w-full h-auto">
                            <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                            <div
                                class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.2vw] h-auto">
                                <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                    style="transform: scaleY(0.95); letter-spacing: 0.01vw">magic keychain</div>
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
                        {{ t('mysticalArrival.items[0].description') }}
                    </p>
                    <div class="flex flex-row items-start absolute top-[20vw]">
                        <p
                            class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                            {{ t('mysticalArrival.items[0].price') }}
                        </p>
                    </div>

                    <!-- Add to Cart -->
                    <div class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw] absolute top-[22vw]">
                        <div
                            @click="$router.push('/shop/6849502156e40f56a3d112a3')"
                            class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                            <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                               {{ t('mysticalArrival.button.details') }}
                            </p>
                            <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                class="w-[1vw] h-[1vw]">
                        </div>
                        <div
                            class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                            <p class="translate-y-[0.1vw]">{{ t('mysticalArrival.button.addToCart') }}</p>
                        </div>
                    </div>
                </div>

                <!-- Items 2 -->
                <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                    <div class="h-[15vw] w-[15vw] thumb-layer-bottom-1 absolute">
                        <div
                            class="relative w-[14.9vw] h-[14.9vw] translate-x-[0.05vw] translate-y-[0.05vw] rounded-[0.8vw] flex justify-center overflow-hidden">
                            <img src="../../../assets/img/Desktop/Shop/MysticalArrival/magical perfume.webp" alt=""
                                class="w-full h-auto">
                            <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                            <div
                                class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.2vw] h-auto">
                                <div class="font-lemajor text-[1.3vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                    style="transform: scaleY(0.95); letter-spacing: 0.01vw">Magical Perfume</div>
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
                        {{ t('mysticalArrival.items[1].description') }}
                    </p>
                    <div class="flex flex-row items-start absolute top-[20vw]">
                        <p
                            class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                            {{ t('mysticalArrival.items[0].price') }}
                        </p>
                    </div>

                    <!-- Add to Cart -->
                    <div class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw] absolute top-[22vw]">
                        <div
                            @click="$router.push('/shop/684950c456e40f56a3d112a7')"
                            class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                            <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                {{ t('mysticalArrival.button.details') }}
                            </p>
                            <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                class="w-[1vw] h-[1vw]">
                        </div>
                        <div
                            class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                            <p class="translate-y-[0.1vw]">{{ t('mysticalArrival.button.addToCart') }}</p>
                        </div>
                    </div>
                </div>

                <!-- Items 3 -->
                <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                    <div class="h-[15vw] w-[15vw] thumb-layer-bottom-1 absolute">
                        <div
                            class="relative w-[14.9vw] h-[14.9vw] translate-x-[0.05vw] translate-y-[0.05vw] rounded-[0.8vw] flex justify-center overflow-hidden">
                            <img src="../../../assets/img/Desktop/Shop/MysticalArrival/super_magic_charm_bag.webp" alt=""
                                class="w-full h-auto">
                            <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                            <div
                                class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.2vw] h-auto">
                                <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                    style="transform: scaleY(0.95); letter-spacing: 0.01vw">
                                    <p class="text-[1vw]">Super Magic</p>
                                    <p class="text-[1.4vw]">Charm Bag</p>
                                </div>
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
                        {{ t('mysticalArrival.items[2].description') }}
                    </p>
                    <div class="flex flex-row items-start absolute top-[20vw]">
                        <p
                            class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                            {{ t('mysticalArrival.items[0].price') }}
                        </p>
                    </div>

                    <!-- Add to Cart -->
                    <div class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw] absolute top-[22vw]">
                        <div
                            @click="$router.push('/shop/6849516456e40f56a3d112a9')"
                            class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                            <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                {{ t('mysticalArrival.button.details') }}
                            </p>
                            <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                class="w-[1vw] h-[1vw]">
                        </div>
                        <div
                            class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                            <p class="translate-y-[0.1vw]">{{ t('mysticalArrival.button.addToCart') }}</p>
                        </div>
                    </div>
                </div>

                <!-- Items 4 -->
                <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                    <div class="h-[15vw] w-[15vw] thumb-layer-bottom-1 absolute">
                        <div
                            class="relative w-[14.9vw] h-[14.9vw] translate-x-[0.05vw] translate-y-[0.05vw] rounded-[0.8vw] flex justify-center overflow-hidden">
                            <img src="../../../assets/img/Desktop/Shop/MysticalArrival/crystal bracelet random.webp" alt=""
                                class="w-full h-auto">
                            <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                            <div
                                class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.2vw] h-auto">
                                <div class="font-lemajor text-[1.25vw] text-center font-thin text-white font-thin-force px-[0.1vw]"
                                    style="transform: scaleY(0.95); letter-spacing: 0.01vw">Crystal Bracelet<br/>Random</div>
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
                        {{ t('mysticalArrival.items[3].description') }}
                    </p>
                    <div class="flex flex-row items-start absolute top-[20vw]">
                        <p
                            class="w-[25vw] text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                            {{ t('mysticalArrival.items[3].price') }}
                        </p>
                    </div>

                    <!-- Add to Cart -->
                    <div class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw] absolute top-[22vw]">
                        <div
                            @click="$router.push('/shop/684951ef56e40f56a3d112ad')"
                            class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                            <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                {{ t('mysticalArrival.button.details') }}
                            </p>
                            <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                class="w-[1vw] h-[1vw]">
                        </div>
                        <div
                            class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                            <p class="translate-y-[0.1vw]">{{ t('mysticalArrival.button.addToCart') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'BookingPage',
  setup() {
    const { t } = useI18n();
    return { t };
  }
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
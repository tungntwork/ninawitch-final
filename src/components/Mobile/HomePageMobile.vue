<template>
    <div class="w-full h-auto relative flex justify-center">
        <img src="../../assets/img/Mobile/Home/backhome1.webp" alt="" class="w-full h-auto" />
        <div class="absolute bottom-0 left-0 w-full h-[91vw] bg-gradient-to-t from-[#0D0D0D] to-transparent"></div>
        <p class="text-white text-[8.3vw] font-lemajor absolute bottom-[58vw] left-[2.5vw] text-glow"
            v-html="t('homepageMobile.templeTitle')">
        </p>
        <p class="text-white text-[3.72vw] font-josefin-normal absolute bottom-[40vw] px-[2.5vw] font-light">
            {{ t('homepageMobile.templeDesc') }}
        </p>
        <div class="w-[68vw] h-[10vw] bg-[#171717] bottom-[24vw] absolute rounded-[2.3vw] flex border-[#FFFFFF50] border-[0.5vw] justify-center items-center overflow-hidden"
            @click="toggleManifesto">
            <div class="absolute w-[25vw] h-[10vw] bg-[#6A00FF] top-[5vw] rounded-[50%] blur-[7vw] translate-x-[-10vw]">
            </div>
            <div class="absolute w-[25vw] h-[10vw] bg-[#DE3BFF] top-[5vw] rounded-[50%] blur-[7vw] translate-x-[10vw]">
            </div>
            <p class="text-white text-[4.18vw] font-josefin-normal translate-y-[0.5vw] z-20">{{
                t('homepageMobile.manifestoBtn') }}
            </p>
        </div>
        <transition name="slide-up">
            <div v-if="showManifesto"
                class="fixed bottom-0 left-0 w-full h-[85vh] rounded-t-[5vw] bg-gradient-to-t border-t-white border-t-[0.5vw] from-[#ae00ff] to-[#FFFFFF20] z-[999] px-[5vw] py-[8vw] overflow-y-auto backdrop-blur-[1.5vw]"
                @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd"
                :class="{ dragging: dragging }" :style="dragStyle">
                <!-- Close button -->
                <div class="flex justify-center">
                    <div class="text-white text-[5vw]" @click="toggleManifesto">
                        <img src="../../assets/img/Desktop/Home/Mystery/arrow.webp" alt="" class="w-[4vw] h-[4vw]">
                    </div>
                </div>

                <!-- Manifesto Content -->
                <div
                    class="text-white flex flex-col items-center text-[4.2vw] font-josefin-normal leading-[6vw] mt-[14vw]">
                    <p class="text-white text-[13.72vw] font-lemajor text-center">NinaWitch</p>
                    <div class="flex flex-col items-start pt-[8vw]">
                        <p class="text-white text-[3.82vw]">{{ t('homePageMobile.manifestoTitle') }}</p>
                        <p class="text-white text-[3.82vw] font-light">
                            {{ t('homepageMobile.manifestoP1') }}
                        </p>
                        <p class="text-white text-[3.82vw] font-light pt-[4vw]"
                            v-html="t('homepageMobile.manifestoP2')">
                        </p>
                        <p class="text-white text-[3.82vw] font-light pt-[4vw] text-left">
                            <span class="pl-[5vw]">{{ t('homepageMobile.manifestoP3') }}</span>
                        </p>
                        <p class="text-white text-[3.82vw] font-light">
                            <span class="pl-[5vw]">{{ t('homepageMobile.manifestoP4') }}</span>
                        </p>
                        <p class="text-white text-[3.82vw] font-light">
                            <span class="pl-[5vw]">{{ t('homepageMobile.manifestoP5') }}</span>
                        </p>
                        <p class="text-white text-[3.82vw] font-light pt-[4vw]">
                            {{ t('homepageMobile.manifestoP6') }}
                        </p>
                    </div>
                </div>
            </div>
        </transition>
        <p class="absolute bottom-[10vw] text-white text-[3.72vw] font-thin font-josefin-normal text-center"
            v-html="t('homepageMobile.scrollHint')"></p>
        <img src="../../assets/img/Desktop/Home/Mystery/arrow.webp" alt=""
            class="w-[5.2vw] h-[5.2vw] absolute bottom-[1vw]">
    </div>
    <!-- Mystery -->
    <div class="w-full h-[368vw] object-contain relative flex justify-center">
        <div class="video-background z-0 absolute top-[16vw] w-full left-0 object-cover">
            <video autoplay loop muted playsinline class="video-element w-full h-full object-cover">
                <source v-if="isIOS" src="../../assets/img/Mobile/Home/back home 2 mobile.mp4" type="video/mp4" />
                <source v-else src="../../assets/img/Mobile/Home/back home 2 mobile.webm" type="video/webm" />
            </video>
        </div>
        <div class="w-full h-[63vw] absolute top-0 bg-gradient-to-b from-[#0D0D0D] to-transparent z-10"></div>
        <div class="w-full h-[20vw] absolute top-0 bg-gradient-to-b from-[#0D0D0D] to-transparent z-20"></div>
        <!-- smoke -->
        <img src="../../assets/img/Mobile/Home/smoke1.webp" alt="" class="absolute top-0 w-full h-auto z-10">
        <!-- smoke 2 -->
        <img src="../../assets/img/Mobile/Home/SmokeHomeMobile.webp" alt="" class="w-full h-auto absolute top-[200vw]">
        <!-- Mystery text -->
        <div class="w-full h-auto flex flex-col items-center absolute top-[10vw] z-20">
            <p class="text-[18.4vw] font-lemajor"
                style="background: linear-gradient(to bottom, white, transparent); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                Mystery
            </p>
            <p class="text-white text-[3.72vw] font-josefin-normal font-thin">We must DO in order to BE, create your
                ART, be the Magic!⁣</p>
        </div>

        <div class="flex flex-col items-center absolute bottom-[0vw] overflow-hidden">
            <p class="text-white text-[7vw] font-lemajor">The Art of Magic⁣</p>
            <p class="text-white text-[3.72vw] font-josefin-normal text-center font-josefin-normal font-light w-[95vw]">
                {{ t('homepageMobile.mysteryP1') }}
            </p>
            <p
                class="text-white text-[3.72vw] font-josefin-normal text-center font-josefin-normal w-[95vw] font-light pt-[3vw]">
                {{ t('homepageMobile.mysteryP2') }}⁣</p>
            <p
                class="text-white text-[3.72vw] font-josefin-normal text-center font-josefin-normal w-[95vw] font-light pt-[3vw]">
                {{ t('homepageMobile.mysteryP3') }}⁣</p>

            <!-- <p
                class="text-white text-[3.72vw] font-josefin-normal text-center font-josefin-normal w-[95vw] font-light pt-[3vw]"  v-html="t('homepageMobile.mysteryP4')">
            </p> -->

            <p
                class="text-white text-[3.72vw] font-josefin-normal text-center font-josefin-normal w-[95vw] font-light pt-[3vw]">
                {{ t('homepageMobile.mysteryP5') }}⁣</p>
            <p
                class="text-white text-[3.72vw] font-josefin-normal text-center font-josefin-normal w-[95vw] font-light pt-[3vw] pb-[10vw]">
                {{ t('homepageMobile.mysteryP6') }}⁣</p>
            <div class="absolute bottom-0 w-full h-[10vw] flex justify-center">
                <div class="absolute w-[80vw] h-[4vw] bg-[#C368FF] rounded-[50%] blur-[7vw] translate-y-[10vw]"></div>
                <div class="absolute w-[30vw] h-[2vw] bg-[#FFF] rounded-[50%] blur-[5vw] translate-y-[9vw]"></div>
            </div>
        </div>
    </div>
    <!-- Recommend - pending-->
    <div class="w-full h-[295vw] relative flex justify-center">
        <div class="video-background z-0">
            <video autoplay loop muted playsinline class="video-element">
                <source v-if="isIOS" src="../../assets/img/Mobile/Home/back home 3.mp4" type="video/mp4" />
                <source v-else src="../../assets/img/Mobile/Home/back home 3.webm" type="video/webm" />
            </video>
        </div>
        <div class="absolute top-0 w-full h-[30vw] bg-gradient-to-b from-[#0D0D0D] to-transparent"></div>
        <div class="absolute top-0 w-full h-[30vw] bg-gradient-to-b from-[#0D0D0D] to-transparent"></div>

        <!-- Text -->
        <div class="w-full h-auto flex flex-col items-center absolute top-[17.3vw] z-20">
            <p class="text-[8.22vw] text-white font-lemajor w-full text-center">
                {{ t('homepageMobile.recommendTitle') }}
            </p>
            <p class="text-[4.2vw] pt-[6.6vw] text-white font-josefin-normal w-[90vw] text-center font-light">
                {{ t('homepageMobile.recommendDesc') }}
            </p>
            <div @click="openFacebook"
                class="w-[37.6vw] h-[6.6vw] bg-transparent rounded-[1.5vw] border-white border-[0.1vw] flex justify-center items-center mt-[4vw]">
                <p class="text-white text-[2.86vw] font-josefin-normal">{{ t('homepageMobile.recommendCta') }}</p>
            </div>

            <div class="w-[90vw] absolute top-[80vw]">
                <!-- Row items -->
                <div class="w-[90vw] h-[41.4vw] justify-between flex">
                    <!-- Items 1 -->
                    <div class="w-[41.4vw] h-[41.4vw]  rounded-[4vw]  flex justify-center items-center bg-gradient-to-b from-[#FFF] to-transparent"
                        @click="$router.push('/shop/6889e0568cfd586f340f0ec2')">
                        <div
                            class="w-[41vw] h-[41vw] rounded-[4vw] bg-black overflow-hidden flex justify-center relative">
                            <img src="../../assets/img/NINAPRODUCT/LuckyWallpaper.webp" alt="" class="">
                            <div class="absolute bottom-[5vw] w-[35vw] flex flex-col items-center">
                                <div class="w-[30vw] flex flex-row justify-between items-center">
                                    <img src="../../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt=""
                                        class="w-[4vw] h-[4vw]">
                                    <p class="text-white text-[3.73vw] text-center font-lemajor">Lucky Wallpaper</p>
                                    <img src="../../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt=""
                                        class="w-[4vw] h-[4vw]">
                                </div>
                                <div
                                    class="w-[25vw] h-[5vw] rounded-[1vw] border-white text-white text-[2.32vw] pt-[1vw] mt-[2vw] font-josefin-normal border-[0.3vw] flex justify-center items-center">
                                    {{ t('homepageMobile.ctaShopNow') }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Items 2 -->
                    <div class="w-[41.4vw] h-[41.4vw]  rounded-[4vw]  flex justify-center items-center bg-gradient-to-b from-[#FFF] to-transparent"
                        @click="$router.push('/shop/68480d4b4f5c0116dbc64dfe')">
                        <div
                            class="w-[41vw] h-[41vw] rounded-[4vw] bg-black overflow-hidden flex justify-center relative">
                            <img src="../../assets/img/NINAPRODUCT/LilithCandle.webp" alt="" class="">
                            <div class="absolute bottom-[5vw] w-[35vw] flex flex-col items-center">
                                <div class="w-[35vw] flex flex-row justify-between items-center">
                                    <img src="../../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt=""
                                        class="w-[4vw] h-[4vw]">
                                    <p class="text-white text-[3.73vw] text-center font-lemajor">Lilith Candle</p>
                                    <img src="../../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt=""
                                        class="w-[4vw] h-[4vw]">
                                </div>
                                <div
                                    class="w-[25vw] h-[5vw] rounded-[1vw] border-white text-white text-[2.32vw] pt-[1vw] mt-[2vw] font-josefin-normal border-[0.3vw] flex justify-center items-center">
                                    {{ t('homepageMobile.ctaShopNow') }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Row items 2-->
                <div class="w-[90vw] h-[41.4vw] justify-between flex mt-[9vw]">
                    <!-- Items 1 -->
                    <div class="w-[41.4vw] h-[41.4vw]  rounded-[4vw]  flex justify-center items-center bg-gradient-to-b from-[#FFF] to-transparent"
                        @click="$router.push('/shop/')">
                        <div class="w-[41vw] h-[41vw] rounded-[4vw] bg-black overflow-hidden flex relative justify-center"
                            @click="$router.push('/shop/68480e4e4f5c0116dbc64e02')">
                            <img src="../../assets/img/NINAPRODUCT/MEDUSACANDLE.webp" alt="" class="">
                            <div class="absolute bottom-[2vw] w-[35vw] flex flex-col items-center">
                                <div class="w-[40vw] flex flex-row justify-between items-center">
                                    <img src="../../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt=""
                                        class="w-[4vw] h-[4vw]">
                                    <p class="text-white text-[3.73vw] text-center font-lemajor">Medusa Candle</p>
                                    <img src="../../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt=""
                                        class="w-[4vw] h-[4vw]">
                                </div>
                                <div
                                    class="w-[25vw] h-[5vw] rounded-[1vw] border-white text-white text-[2.32vw] pt-[1vw] mt-[2vw] font-josefin-normal border-[0.3vw] flex justify-center items-center">
                                    {{ t('homepageMobile.ctaShopNow') }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Items 2 -->
                    <div class="w-[41.4vw] h-[41.4vw]  rounded-[4vw]  flex justify-center items-center bg-gradient-to-b from-[#FFF] to-transparent"
                        @click="$router.push('/shop/6848433a56e40f56a3d11244')">
                        <div
                            class="w-[41vw] h-[41vw] rounded-[4vw] bg-black overflow-hidden flex justify-center relative">
                            <img src="../../assets/img/NINAPRODUCT/HekateCandle.webp" alt="" class="">
                            <div class="absolute bottom-[3vw] w-[35vw] flex flex-col items-center">
                                <div class="w-[40vw] flex flex-row justify-between items-center">
                                    <img src="../../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt=""
                                        class="w-[4vw] h-[4vw]">
                                    <p class="text-white text-[3.73vw] text-center font-lemajor">Hetake Candle</p>
                                    <img src="../../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt=""
                                        class="w-[4vw] h-[4vw]">
                                </div>
                                <div
                                    class="w-[25vw] h-[5vw] rounded-[1vw] border-white text-white text-[2.32vw] pt-[1vw] mt-[2vw] font-josefin-normal border-[0.3vw] flex justify-center items-center">
                                    {{ t('homepageMobile.ctaShopNow') }}
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
                        <div
                            class="w-[41vw] h-[41vw] rounded-[4vw] bg-black overflow-hidden flex justify-center relative">
                            <img src="../../assets/img/NINAPRODUCT/Spell.webp" alt="" class="">
                            <div class="absolute bottom-[3vw] w-[35vw] flex flex-col items-center">
                                <div class="w-[30vw] flex flex-row justify-between items-center">
                                    <img src="../../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt=""
                                        class="w-[4vw] h-[4vw]">
                                    <p class="text-white text-[3.73vw] text-center font-lemajor">Spell</p>
                                    <img src="../../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt=""
                                        class="w-[4vw] h-[4vw]">
                                </div>
                                <div
                                    class="w-[25vw] h-[5vw] rounded-[1vw] border-white text-white text-[2.32vw] pt-[1vw] mt-[2vw] font-josefin-normal border-[0.3vw] flex justify-center items-center">
                                    {{ t('homepageMobile.ctaShopNow') }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Items 2 -->
                    <div class="w-[41.4vw] h-[41.4vw]  rounded-[4vw]  flex justify-center items-center bg-gradient-to-b from-[#FFF] to-transparent"
                        @click="$router.push('/shop/6848533f56e40f56a3d1124e')">
                        <div
                            class="w-[41vw] h-[41vw] rounded-[4vw] bg-black overflow-hidden flex relative justify-center">
                            <img src="../../assets/img/NINAPRODUCT/potion.webp" alt="" class="">
                            <div class="absolute bottom-[3vw] w-[35vw] flex flex-col items-center">
                                <div class="w-[30vw] flex flex-row justify-between items-center">
                                    <img src="../../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt=""
                                        class="w-[4vw] h-[4vw]">
                                    <p class="text-white text-[3.73vw] text-center font-lemajor">Potion</p>
                                    <img src="../../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt=""
                                        class="w-[4vw] h-[4vw]">
                                </div>
                                <div
                                    class="w-[25vw] h-[5vw] rounded-[1vw] border-white text-white text-[2.32vw] pt-[1vw] mt-[2vw] font-josefin-normal border-[0.3vw] flex justify-center items-center">
                                    {{ t('homepageMobile.ctaShopNow') }}
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
                            <img src="../../assets/img/NINAPRODUCT/PHOENIX CANDLE.webp" alt="" class="">
                            <div class="absolute bottom-[3vw] w-[35vw] flex flex-col items-center">
                                <div class="w-[40vw] flex flex-row justify-between items-center">
                                    <img src="../../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt=""
                                        class="w-[4vw] h-[4vw]">
                                    <p class="text-white text-[3.73vw] text-center font-lemajor">Phoenix Candle</p>
                                    <img src="../../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt=""
                                        class="w-[4vw] h-[4vw]">
                                </div>
                                <div
                                    class="w-[25vw] h-[5vw] rounded-[1vw] border-white text-white text-[2.32vw] pt-[1vw] mt-[2vw] font-josefin-normal border-[0.3vw] flex justify-center items-center">
                                    {{ t('homepageMobile.ctaShopNow') }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Items 2 -->
                    <div class="w-[41.4vw] h-[41.4vw]  rounded-[4vw]  flex justify-center items-center bg-gradient-to-b from-[#FFF] to-transparent"
                        @click="$router.push('/nina-rituals')">
                        <div class="w-[41vw] h-[41vw] rounded-[4vw] bg-black overflow-hidden flex justify-center">
                            <img src="../../assets/img/Desktop/Home/Recommend/NINAWITCH RITUAL.webp" alt="" class="">
                            <div class="absolute bottom-[3vw] w-[35vw] flex flex-col items-center">
                                <div class="w-[30vw] flex flex-row justify-between items-center">
                                    <img src="../../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt=""
                                        class="w-[4vw] h-[4vw]">
                                    <p class="text-white text-[3.73vw] text-center font-lemajor">NinaWitch Ritual</p>
                                    <img src="../../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt=""
                                        class="w-[4vw] h-[4vw]">
                                </div>
                                <div
                                    class="w-[25vw] h-[5vw] rounded-[1vw] border-white text-white text-[2.32vw] pt-[1vw] mt-[2vw] font-josefin-normal border-[0.3vw] flex justify-center items-center">
                                    {{ t('homepageMobile.ctaShopNow') }}
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
    <!-- Change life -->
    <div class="w-full h-auto relative flex justify-center">
        <img src="../../assets/img/Mobile/Home/back home 4.webp" alt="" class="w-full h-auto" />
        <div class="w-[95vw] h-auto absolute top-[18.4vw] flex flex-col items-start">
            <p class="text-[7vw] text-white font-lemajor tracking-[0.7vw] leading-[7vw]">{{
                t('homepageMobile.changeLifeTitle') }}</p>
            <p class="text-[3.5vw] text-white font-josefin-normal font-thin pt-[3vw] leading-[4.5vw]">{{
                t('homepageMobile.changeLifeDesc') }}</p>
            <p class="text-[3.72vw] text-white font-josefin-normal font-light pt-[6vw] leading-[4.5vw]">
                <span class="text-[6vw] font-lemajor">Nina</span>{{ t('homepageMobile.changeLifeDetail') }}
            </p>
            <p class="text-[3.72vw] w-[95vw] text-white font-josefin-normal font-light text-center leading-[4.5vw]"
                v-html="t('homepageMobile.changeLifeRole')">
            </p>
            <p class="text-[3.72vw] text-white font-josefin-normal font-light pt-[2vw] leading-[4.5vw]">
                {{ t('homepageMobile.changeLifeMedium') }}
            </p>
        </div>
        <!-- Footer side -->
        <div class="w-full h-[0.4vw] bg-gradient-to-r from-transparent to-transparent via-white absolute bottom-0">
        </div>
    </div>
    <!-- Word of gratitude -->
    <div class="w-full h-auto relative flex justify-center">
        <img src="../../assets/img/Mobile/Home/back home 5.webp" alt="" class="w-full h-auto" />
        <p class="text-white text-[7.8vw] font-lemajor absolute top-[45vw] text-center w-full text-glow"
            v-html="t('homepageMobile.gratitudeTitle')">
        </p>
        <div class="absolute w-full flex flex-col items-center top-[93vw] justify-center">
            <p class="w-[90vw] mx-[5vw] text-[6vw] text-white font-josefin-italic">{{ t('homepageMobile.gratitudeQuote')
            }}</p>
            <p class="w-[90vw] mx-[5vw] text-[3.42vw] text-white font-josefin-normal font-light text-center"
                v-html="t('homepageMobile.gratitudeDesc')">
            </p>
            <div @click="openFacebook"
                class="w-[63vw] rounded-[2vw] h-[8.4vw] border-white mt-[4vw] border-[0.5vw] flex justify-center items-center">
                <p class="text-white text-[3.82vw] font-josefin-normal">{{ t('homepageMobile.gratitudeCta') }}</p>
            </div>
        </div>
    </div>

    <FooterMobile />
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import FooterMobile from './FooterMobile.vue';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const touchStartY = ref(0)
// const touchEndY = ref(0)
const dragging = ref(false)
const translateY = ref(0)

const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

import soundLoop from '@/assets/sounds/SpaceBackground.mp3'
import shopVoice from '@/assets/sounds/HomeVoice.mp3'
const showManifesto = ref(false);

// ===== Audio state (Mobile) =====
let audio1 = null
let audio2 = null
let twoMinTimer = null
const audioUnlocked = ref(false)

function toggleManifesto() {
    showManifesto.value = !showManifesto.value;
}

function handleTouchStart(event) {
    touchStartY.value = event.touches[0].clientY
}

const openFacebook = () => {
    window.open("https://www.facebook.com/bupbegeisha000", "_blank")
}

function handleTouchMove(event) {
    const currentY = event.touches[0].clientY
    const deltaY = currentY - touchStartY.value

    if (deltaY > 0) {
        dragging.value = true
        translateY.value = deltaY
    }
}

function handleTouchEnd(event) {
    const deltaY = translateY.value
    const popupEl = event.currentTarget

    const scrollTop = popupEl.scrollTop

    if (deltaY > 100 && scrollTop === 0) {
        dragging.value = false
        translateY.value = 0
        toggleManifesto()
    } else {
        dragging.value = false
        translateY.value = 0
    }
}

const dragStyle = computed(() => {
    return dragging.value
        ? {
            transform: `translateY(${translateY.value}px)`,
            transition: 'none'
        }
        : {}
})

// ===== AUDIO ==========
function unlockAudioPlayback() {
    if (audioUnlocked.value) return
    audioUnlocked.value = true

    audio1?.play().catch(() => { return })

    playSound2()
    twoMinTimer = setInterval(playSound2, 120000)
}

// ===== AUDIO =====
function playSound2() {
    if (!audioUnlocked.value || !audio2) return
    audio2.currentTime = 0
    audio2.play().catch(() => { return })
}

// ===== AUDIO =====
function handleVisibility() {
    if (document.hidden) {
        try { audio1?.pause() } catch (_e) { void 0 }
    } else if (audioUnlocked.value) {
        audio1?.play().catch(() => { return })
    }
}

onMounted(() => {
    audio1 = new Audio(soundLoop)
    audio1.loop = true
    audio1.preload = 'auto'
    audio1.volume = 0.6

    audio2 = new Audio(shopVoice)
    audio2.preload = 'auto'
    audio2.volume = 0.9

    // const opts = { passive: true, once: true }
    // window.addEventListener('pointerdown', unlockAudioPlayback, opts)
    // window.addEventListener('keydown', unlockAudioPlayback, opts)
    // window.addEventListener('wheel', unlockAudioPlayback, opts)
    // window.addEventListener('touchstart', unlockAudioPlayback, opts)

    // document.addEventListener('visibilitychange', handleVisibility)

    // Catch gesture
    const opts = { passive: true, once: true, capture: true }
    const unlock = unlockAudioPlayback

    document.addEventListener('pointerdown', unlock, opts)
    document.addEventListener('touchstart', unlock, opts)
    document.addEventListener('click', unlock, opts)
    document.addEventListener('wheel', unlock, opts)
    document.addEventListener('keydown', unlock, { once: true, capture: true })
    document.addEventListener('scroll', unlock, opts)

    document.addEventListener('visibilitychange', handleVisibility)
})

onBeforeUnmount(() => {
    if (twoMinTimer) clearInterval(twoMinTimer)

    // window.removeEventListener('pointerdown', unlockAudioPlayback)
    // window.removeEventListener('keydown', unlockAudioPlayback)
    // window.removeEventListener('wheel', unlockAudioPlayback)
    // window.removeEventListener('touchstart', unlockAudioPlayback)
    // document.removeEventListener('visibilitychange', handleVisibility)

    document.removeEventListener('pointerdown', unlockAudioPlayback, { capture: true })
    document.removeEventListener('touchstart', unlockAudioPlayback, { capture: true })
    document.removeEventListener('click', unlockAudioPlayback, { capture: true })
    document.removeEventListener('wheel', unlockAudioPlayback, { capture: true })
    document.removeEventListener('keydown', unlockAudioPlayback, { capture: true })
    document.removeEventListener('scroll', unlockAudioPlayback, { capture: true })
    document.removeEventListener('visibilitychange', handleVisibility)


    try { audio1?.pause(); audio1 = null } catch (_e) { void 0 }
    try { audio2?.pause(); audio2 = null } catch (_e) { void 0 }
})
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

.slide-up-enter-active,
.slide-up-leave-active {
    transition: transform 0.4s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
    transform: translateY(100%);
}

.slide-up-enter-to,
.slide-up-leave-from {
    transform: translateY(0%);
}
</style>
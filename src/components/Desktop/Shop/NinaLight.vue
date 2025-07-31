<template>
    <div class="w-full h-auto relative flex flex-col items-center">
        <!-- Back 1 -->
        <div class="video-background relative">
            <video autoplay loop muted class="video-element w-full h-auto">
                <source src="../../../assets/img/Desktop/Shop/NinaLight/SHOP_3_1.webm" type="video/webm">
            </video>
            <div class="absolute top-[14vw] left-[7vw]">
                <p class="font-lemajor text-white text-[6.5vw] text-glow leading-[8vw]">
                    {{ t('ninaLight.title1') }}
                </p>
                <p
                    class="font-lemajor text-white text-[15vw] leading-[9vw] tracking-[2vw] translate-x-[-1vw] text-glow-2">
                    {{ t('ninaLight.title2') }}
                </p>
            </div>
            <div class="absolute top-[35vw] left-[7vw] w-[48vw] h-[6.7vw] bg-gradient-to-r from-[#FFFFFF07] to -[#99999907] backdrop-blur-[1.1vw]"></div>
            <div class="absolute top-[35vw] left-[7vw] w-[48vw]">
                <img src="../../../assets/img/Desktop/Shop/NinaLight/Rectangle text.webp" alt="" class="">
            </div>
            <p class="text-[1.05vw] font-thin font-josefin-normal text-white absolute top-[35.5vw] left-[8.3vw] w-[46vw]">
                {{ t('ninaLight.intro') }}
            </p>
        </div>
        <!-- Back2 -->
        <div class="w-full h-auto relative overflow-hidden">
            <img src="../../../assets/img/Desktop/Shop/NinaLight/back candle.webp" alt=""
                class="w-full h-auto translate-y-[-10vw]">
            <img src="../../../assets/img/Desktop/Shop/NinaLight/glowshadow.webp" alt=""
                class="absolute top-0 left-0 w-full h-auto">
        </div>

        <!-- Products -->
        <div class="w-[86vw] h-auto absolute top-[50vw]">
            <!-- row 1 -->
            <div class="w-[86vw] h-auto flex flex-row justify-between">
                <!-- Items 1 -->
                <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                    <div class="h-[15vw] w-[15vw] thumb-layer-bottom-1 absolute">
                        <div
                            class="relative w-[14.9vw] h-[14.9vw] translate-x-[0.05vw] translate-y-[0.05vw] rounded-[0.8vw] flex justify-center overflow-hidden">
                            <img src="../../../assets/img/Desktop/Shop/NinaLight/LilithCandle.webp" alt=""
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
                        {{ t('ninaLight.products.lilith.desc') }}
                    </p>
                    <div class="flex flex-row items-start absolute top-[20vw]">
                        <p
                            class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                            2.222.000
                        </p>
                        <p
                            class="w-full text-start font-josefin-normal text-[1vw] font-normal mt-[0.2vw] text-white">
                            vnd</p>
                    </div>

                    <!-- {{ t('ninaLight.addToCart') }} -->
                    <div class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw] absolute top-[22vw]">
                        <div
                            @click="$router.push('/shop/68480d4b4f5c0116dbc64dfe')"
                            class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                            <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                {{ t('ninaLight.itemDetails') }}
                            </p>
                            <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                class="w-[1vw] h-[1vw]">
                        </div>
                        <div
                            class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                            <p class="translate-y-[0.1vw]">{{ t('ninaLight.addToCart') }}</p>
                        </div>
                    </div>
                </div>

                <!-- Items 2 -->
                <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                    <div class="h-[15vw] w-[15vw] thumb-layer-bottom-1 absolute">
                        <div
                            class="relative w-[14.9vw] h-[14.9vw] translate-x-[0.05vw] translate-y-[0.05vw] rounded-[0.8vw] flex justify-center overflow-hidden">
                            <img src="../../../assets/img/Desktop/Shop/NinaLight/HekateCandle.webp" alt=""
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
                         {{ t('ninaLight.products.hekate.desc') }}
                    </p>
                    <div class="flex flex-row items-start absolute top-[20vw]">
                        <p
                            class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                            2.000.000
                        </p>
                        <p
                            class="w-full text-start font-josefin-normal text-[1vw] font-normal mt-[0.2vw] text-white">
                            vnd</p>
                    </div>

                    <!-- {{ t('ninaLight.addToCart') }} -->
                    <div class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw] absolute top-[22vw]">
                        <div
                            @click="$router.push('/shop/6848433a56e40f56a3d11244')"
                            class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                            <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                {{ t('ninaLight.itemDetails') }}
                            </p>
                            <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                class="w-[1vw] h-[1vw]">
                        </div>
                        <div
                            class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                            <p class="translate-y-[0.1vw]">{{ t('ninaLight.addToCart') }}</p>
                        </div>
                    </div>
                </div>

                <!-- Items 3 -->
                <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                    <div class="h-[15vw] w-[15vw] thumb-layer-bottom-1 absolute">
                        <div
                            class="relative w-[14.9vw] h-[14.9vw] translate-x-[0.05vw] translate-y-[0.05vw] rounded-[0.8vw] flex justify-center overflow-hidden">
                            <img src="../../../assets/img/Desktop/Shop/NinaLight/MEDUSACANDLE.webp" alt=""
                                class="w-full h-auto">
                            <div class="absolute top-0 right-0 w-[7vw] h-[1.4vw] rounded-bl-[0.8vw] flex items-center justify-center"
                                style="background: linear-gradient(90deg, #ece9e6 0%, #fff 25%, #bcbcbc 50%, #e0e0e0 75%, #a7a7a7 100%);">
                                <p class="font-lemajor text-[0.85vw] font-normal">Recommended</p>
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
                        {{ t('ninaLight.products.medusa.desc') }}
                    </p>
                    <p class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                        {{ t('ninaLight.products.bastet.price') }}
                    </p>

                    <!-- {{ t('ninaLight.addToCart') }} -->
                    <div class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw]">
                        <div class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out"
                            @click="$router.push('/shop/68480e4e4f5c0116dbc64e02')">
                            <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                {{ t('ninaLight.itemDetails') }}
                            </p>
                            <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                class="w-[1vw] h-[1vw]">
                        </div>
                        <div
                            class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                            <p class="translate-y-[0.1vw]">{{ t('ninaLight.addToCart') }}</p>
                        </div>
                    </div>
                </div>

                <!-- Items 4 -->
                <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                    <div class="h-[15vw] w-[15vw] thumb-layer-bottom-1 absolute">
                        <div
                            class="relative w-[14.9vw] h-[14.9vw] translate-x-[0.05vw] translate-y-[0.05vw] rounded-[0.8vw] flex justify-center overflow-hidden">
                            <img src="../../../assets/img/Desktop/Shop/NinaLight/PHOENIX CANDLE.webp" alt=""
                                class="w-full h-auto">
                            <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                            <div
                                class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.2vw] h-auto">
                                <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                    style="transform: scaleY(0.95); letter-spacing: 0.01vw">Phoenix Candle</div>
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.2vw] h-auto">
                            </div>
                            <!-- Layer on top -->
                            <div
                                class="w-[8vw] h-[8vw] bg-[#C05140] absolute rounded-[50%] top-[6vw] left-0 translate-x-[-10vw] blur-[5vw] layer-on-top">
                            </div>
                        </div>
                    </div>

                    <p class="w-full text-start font-josefin-normal text-[0.87vw] text-white font-thin mt-[1vw] ">
                        {{ t('ninaLight.products.phoenix.desc') }}
                    </p>
                    <p class="w-full text-start font-josefin-normal text-[1.39vw] font-normal text-white absolute top-[20vw]">
                         {{ t('ninaLight.products.bastet.price') }}
                    </p>

                    <!-- {{ t('ninaLight.addToCart') }} -->
                    <div class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw] absolute top-[22vw]">
                        <div
                            @click="$router.push('/shop/684853ce56e40f56a3d11252')"
                            class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                            <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                {{ t('ninaLight.itemDetails') }}
                            </p>
                            <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                class="w-[1vw] h-[1vw]">
                        </div>
                        <div
                            class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                            <p class="translate-y-[0.1vw]">{{ t('ninaLight.addToCart') }}</p>
                        </div>
                    </div>
                </div>

                <!-- Items 5  -->
                <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                    <div class="h-[15vw] w-[15vw] thumb-layer-bottom-1 absolute">
                        <div
                            class="relative w-[14.9vw] h-[14.9vw] translate-x-[0.05vw] translate-y-[0.05vw] rounded-[0.8vw] flex justify-center overflow-hidden">
                            <img src="../../../assets/img/Desktop/Shop/NinaLight/gaia candle.webp" alt=""
                                class="w-full h-auto">
                            <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                            <div
                                class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.2vw] h-auto">
                                <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                    style="transform: scaleY(0.95); letter-spacing: 0.01vw">Gaia Candle</div>
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
                        {{ t('ninaLight.products.gaia.desc') }}
                    </p>
                    <div class="flex flex-row items-start absolute top-[20vw]">
                        <p
                            class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                            1.600.000
                        </p>
                        <p
                            class="w-full text-start font-josefin-normal text-[1vw] font-normal mt-[0.2vw] text-white">
                            vnd</p>
                    </div>


                    <!-- {{ t('ninaLight.addToCart') }} -->
                    <div class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw] absolute top-[22vw]">
                        <div
                            @click="$router.push('/shop/6848d4c756e40f56a3d1127a')"
                            class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                            <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                {{ t('ninaLight.itemDetails') }}
                            </p>
                            <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                class="w-[1vw] h-[1vw]">
                        </div>
                        <div
                            class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                            <p class="translate-y-[0.1vw]">{{ t('ninaLight.addToCart') }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Row 2 -->
            <div class="w-[86vw] h-auto flex flex-row justify-between mt-[2vw]">
                <!-- Items 1 -->
                <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                    <div class="h-[15vw] w-[15vw] thumb-layer-bottom-1 absolute">
                        <div class="relative w-[14.9vw] h-[14.9vw] translate-x-[0.05vw] translate-y-[0.05vw] rounded-[0.8vw] flex justify-center overflow-hidden">
                        <img src="../../../assets/img/Desktop/Shop/NinaLight/lighting angle candle.webp" alt=""
                            class="w-full h-auto">
                        <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                            style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                        <div class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[1.2vw] h-auto">
                            <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                style="transform: scaleY(0.95); letter-spacing: 0.01vw">Lighting Angel Candle</div>
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
                        {{ t('ninaLight.products.angel.desc') }}
                    </p>
                    <div class="flex flex-row items-start">
                        <p
                            class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                            1.300.000
                        </p>
                        <p
                            class="w-full text-start font-josefin-normal text-[1vw] font-normal translate-x-[-1.2vw] mt-[0.2vw] text-white">
                            vnd</p>
                    </div>

                    <!-- {{ t('ninaLight.addToCart') }} -->
                    <div class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw]">
                        <div
                            @click="$router.push('/shop/6848d63856e40f56a3d1127e')"
                            class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                            <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                {{ t('ninaLight.itemDetails') }}
                            </p>
                            <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                class="w-[1vw] h-[1vw]">
                        </div>
                        <div
                            class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                            <p class="translate-y-[0.1vw]">{{ t('ninaLight.addToCart') }}</p>
                        </div>
                    </div>
                </div>

                <!-- Items 2 -->
                <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                    <div class="h-[15vw] w-[15vw] thumb-layer-bottom-1 absolute">
                        <div class="relative w-[14.9vw] h-[14.9vw] translate-x-[0.05vw] translate-y-[0.05vw] rounded-[0.8vw] flex justify-center overflow-hidden">
                        <img src="../../../assets/img/Desktop/Shop/NinaLight/aphrodite candle.webp" alt=""
                            class="w-full h-auto">
                        <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                            style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                        <div
                            class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-[12vw]">
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[1.2vw] h-auto">
                            <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                style="transform: scaleY(0.95); letter-spacing: 0.01vw">Aphrodite Candle</div>
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
                        {{ t('ninaLight.products.aphrodite.desc') }}
                    </p>
                    <div class="flex flex-row items-start">
                        <p
                            class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                            2.444.000
                        </p>
                        <p
                            class="w-full text-start font-josefin-normal text-[1vw] font-normal translate-x-[-1.2vw] mt-[0.2vw] text-white">
                            vnd</p>
                    </div>

                    <!-- {{ t('ninaLight.addToCart') }} -->
                    <div class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw]">
                        <div
                            @click="$router.push('/shop/6848d70456e40f56a3d11282')"
                            class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                            <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                {{ t('ninaLight.itemDetails') }}
                            </p>
                            <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                class="w-[1vw] h-[1vw]">
                        </div>
                        <div
                            class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                            <p class="translate-y-[0.1vw]">{{ t('ninaLight.addToCart') }}</p>
                        </div>
                    </div>
                </div>

                <!-- Items 3 -->
                <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                    <div class="h-[15vw] w-[15vw] thumb-layer-bottom-1 absolute">
                        <div class="relative w-[14.9vw] h-[14.9vw] translate-x-[0.05vw] translate-y-[0.05vw] rounded-[0.8vw] flex justify-center overflow-hidden">
                        <img src="../../../assets/img/Desktop/Shop/NinaLight/wish candle burning.webp" alt=""
                            class="w-full h-auto">
                        <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                            style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                        <div
                            class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-[13vw]">
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[1.2vw] h-auto">
                            <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                style="transform: scaleY(0.95); letter-spacing: 0.01vw">Wish candle burning</div>
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
                        {{ t('ninaLight.products.wish.desc') }}
                    </p>
                    <div class="flex flex-row items-start absolute top-[20vw]">
                        <p
                            class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                            400.000
                        </p>
                        <p
                            class="w-full text-start font-josefin-normal text-[1vw] font-normal mt-[0.2vw] text-white">
                            vnd</p>
                    </div>

                    <!-- {{ t('ninaLight.addToCart') }} -->
                    <div class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw] absolute top-[22vw]">
                        <div
                            @click="$router.push('/shop/6848d84856e40f56a3d11284')"
                            class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                            <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                {{ t('ninaLight.itemDetails') }}
                            </p>
                            <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                class="w-[1vw] h-[1vw]">
                        </div>
                        <div
                            class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                            <p class="translate-y-[0.1vw]">{{ t('ninaLight.addToCart') }}</p>
                        </div>
                    </div>
                </div>

                <!-- Items 4 -->
                <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                    <div class="h-[15vw] w-[15vw] thumb-layer-bottom-1 absolute">
                        <div class="relative w-[14.9vw] h-[14.9vw] translate-x-[0.05vw] translate-y-[0.05vw] rounded-[0.8vw] flex justify-center overflow-hidden">
                        <img src="../../../assets/img/Desktop/Shop/NinaLight/pandora candle.webp" alt=""
                            class="w-full h-auto">
                        <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                            style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                        <div
                            class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-[12vw]">
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[1.2vw] h-auto">
                            <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                style="transform: scaleY(0.95); letter-spacing: 0.01vw">Pandora Candle</div>
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
                        {{ t('ninaLight.products.pandora.desc') }}
                    </p>
                    <p class="w-full text-start font-josefin-normal text-[1.39vw] font-normal text-white">
                         {{ t('ninaLight.products.bastet.price') }}
                    </p>

                    <!-- {{ t('ninaLight.addToCart') }} -->
                    <div class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw]">
                        <div
                            @click="$router.push('/shop/6848d93256e40f56a3d11286')"
                            class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                            <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                {{ t('ninaLight.itemDetails') }}
                            </p>
                            <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                class="w-[1vw] h-[1vw]">
                        </div>
                        <div
                            class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                            <p class="translate-y-[0.1vw]">{{ t('ninaLight.addToCart') }}</p>
                        </div>
                    </div>
                </div>

                <!-- Items 5  -->
                <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                    <div class="h-[15vw] w-[15vw] thumb-layer-bottom-1 absolute">
                        <div class="relative w-[14.9vw] h-[14.9vw] translate-x-[0.05vw] translate-y-[0.05vw] rounded-[0.8vw] flex justify-center overflow-hidden">
                        <img src="../../../assets/img/Desktop/Shop/NinaLight/bastet candle.webp" alt=""
                            class="w-full h-auto">
                        <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                            style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                        <div class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                            <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                class="w-[1.2vw] h-auto">
                            <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                style="transform: scaleY(0.95); letter-spacing: 0.01vw">Bastet Candle</div>
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
                        {{ t('ninaLight.products.bastet.desc') }}
                    </p>
                    <p class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                         {{ t('ninaLight.products.bastet.price') }}
                    </p>

                    <!-- {{ t('ninaLight.addToCart') }} -->
                    <div class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw]">
                        <div
                            @click="$router.push('/shop/6848e03a56e40f56a3d1128a')"
                            class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                            <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                {{ t('ninaLight.itemDetails') }}
                            </p>
                            <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                class="w-[1vw] h-[1vw]">
                        </div>
                        <div
                            class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                            <p class="translate-y-[0.1vw]">{{ t('ninaLight.addToCart') }}</p>
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

.text-glow {
    text-shadow: 0 0 0.1vw rgba(255, 255, 255, 0.8), 0 0 0.8vw rgba(255, 255, 255, 0.6), 0 0 2vw rgba(255, 255, 255, 0.4);
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
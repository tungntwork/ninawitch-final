<template>
    <div ref="parentContainerRef"
        class="w-full min-h-screen h-[110vw] relative bg-[#0D0D0D] flex justify-center overflow-hidden">
        <img src="../../../assets/img/Desktop/Shop/EmbraceYourMagic/purpleGlow.webp" alt=""
            class="absolute top-0 left-0">
        <div class="absolute top-0 left-0 w-full h-[10vw] bg-gradient-to-b from-[#0D0D0D] to-transparent"></div>
        <p class="absolute text-white text-[5.05vw] font-lemajor left-[5.2vw] top-[7.8125vw] text-glow z-10">{{
            t('embraceMagic.title') }}</p>
        <div class="absolute top-0 left-0 w-full h-[0.1vw] bg-gradient-to-r from-transparent to-transparent via-white">
        </div>
        <div class="absolute top-0 left-0 w-full h-[20vw] hover-side"></div>
        <div class="absolute w-[40vw] h-[10vw] bg-white rounded-[50%] blur-[8vw] translate-y-[-15vw] oval-scroll"></div>
        <div class="absolute bottom-[10vw] w-[64vw] h-[64vw] rounded-[50%] bg-[#D9D9D930] blur-[26vw] right-[-32vw]">
        </div>
        <div class="absolute top-[26vw] left-[-37.5vw] w-[75vw] h-[75vw] rounded-[50%] bg-[#FEDACE30] blur-[26vw]">
        </div>
        <div class="absolute bottom-0 w-full h-[10vw] bg-gradient-to-t from-[#0D0D0D] to-transparent"></div>
        <!-- product -->
        <div v-if="!isFiltering" class="absolute w-[74vw] top-[20vw] right-[5vw] opacity-1">
            <!-- Comp 1 -->
            <div class="w-full h-auto flex flex-col items-start">
                <p class="text-white text-[1.45vw] font-josefin-normal">
                    {{ t('embraceMagic.items.enchantedOils.title') }}
                </p>
                <div class="w-[10vw] h-[0.1vw] bg-gradient-to-r from-[#FFF] to-transparent"></div>
                <div class="w-full h-auto flex flex-row justify-between mt-[1vw]">
                    <!-- items 1 -->
                    <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                        <div class="h-[15vw] w-[15vw] thumb-layer-bottom-1 absolute">
                            <div
                                class="relative w-[14.9vw] h-[14.9vw] translate-x-[0.05vw] translate-y-[0.05vw]  rounded-[0.8vw] flex justify-center overflow-hidden">
                                <img src="../../../assets/img/Desktop/Shop/EmbraceYourMagic/ritual_oil.webp" alt=""
                                    class="w-full h-auto">
                                <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                    style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                                <div
                                    class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                                    <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                    <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                        style="transform: scaleY(0.95); letter-spacing: 0.01vw">Ritual oils</div>
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
                            {{ t('embraceMagic.items.enchantedOils.list[0].desc') }}
                        </p>
                        <div class="flex flex-row items-start absolute top-[20vw]">
                            <p
                                class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                                {{ t('embraceMagic.items.enchantedOils.list[0].price') }}
                            </p>
                        </div>

                        <!-- {{ t('embraceMagic.buttons.addToCart') }} -->
                        <div
                            class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw] absolute top-[22vw]">
                            <div @click="$router.push('/shop/684953d856e40f56a3d112b5')"
                                class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                    {{ t('embraceMagic.buttons.details') }}
                                </p>
                                <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                    class="w-[1vw] h-[1vw]">
                            </div>
                            <div
                                class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                                <p class="translate-y-[0.1vw]">{{ t('embraceMagic.buttons.addToCart') }}</p>
                            </div>
                        </div>
                    </div>
                    <!-- items 2 -->
                    <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                        <div class="h-[15vw] w-[15vw] thumb-layer-bottom-1 absolute">
                            <div
                                class="relative w-[14.9vw] h-[14.9vw] translate-x-[0.05vw] translate-y-[0.05vw]  rounded-[0.8vw] flex justify-center overflow-hidden">
                                <img src="../../../assets/img/Desktop/Shop/EmbraceYourMagic/patchouli_oil.webp" alt=""
                                    class="w-full h-auto">
                                <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                    style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                                <div
                                    class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                                    <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                    <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                        style="transform: scaleY(0.95); letter-spacing: 0.01vw">Patchouli Oil</div>
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
                            {{ t('embraceMagic.items.enchantedOils.list[1].desc') }}
                        </p>
                        <div class="flex flex-row items-start absolute top-[20vw]">
                            <p
                                class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                                {{ t('embraceMagic.items.enchantedOils.list[0].price') }}
                            </p>
                        </div>

                        <!-- {{ t('embraceMagic.buttons.addToCart') }} -->
                        <div
                            class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw] absolute top-[22vw]">
                            <div @click="$router.push('/shop/684954f256e40f56a3d112b9')"
                                class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                    {{ t('embraceMagic.buttons.details') }}
                                </p>
                                <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                    class="w-[1vw] h-[1vw]">
                            </div>
                            <div
                                class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                                <p class="translate-y-[0.1vw]">{{ t('embraceMagic.buttons.addToCart') }}</p>
                            </div>
                        </div>
                    </div>
                    <!-- items 3 -->
                    <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                        <div class="h-[15vw] w-[15vw] thumb-layer-bottom-1 absolute">
                            <div
                                class="relative w-[14.9vw] h-[14.9vw] translate-x-[0.05vw] translate-y-[0.05vw]  rounded-[0.8vw] flex justify-center overflow-hidden">
                                <img src="../../../assets/img/Desktop/Shop/EmbraceYourMagic/dragon_blood_oil.webp"
                                    alt="" class="w-full h-auto">
                                <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                    style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                                <div
                                    class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                                    <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                    <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                        style="transform: scaleY(0.95); letter-spacing: 0.01vw">Dragon Blood Oil</div>
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
                            {{ t('embraceMagic.items.enchantedOils.list[2].desc') }}
                        </p>
                        <div class="flex flex-row items-start absolute top-[20vw]">
                            <p
                                class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                                {{ t('embraceMagic.items.enchantedOils.list[0].price') }}
                            </p>
                        </div>

                        <!-- {{ t('embraceMagic.buttons.addToCart') }} -->
                        <div
                            class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw] absolute top-[22vw]">
                            <div @click="$router.push('/shop/6849556356e40f56a3d112bb')"
                                class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                    {{ t('embraceMagic.buttons.details') }}
                                </p>
                                <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                    class="w-[1vw] h-[1vw]">
                            </div>
                            <div
                                class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                                <p class="translate-y-[0.1vw]">{{ t('embraceMagic.buttons.addToCart') }}</p>
                            </div>
                        </div>
                    </div>
                    <!-- items 4 -->
                    <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                        <div class="h-[15vw] w-[15vw] thumb-layer-bottom-1 absolute">
                            <div
                                class="relative w-[14.9vw] h-[14.9vw] translate-x-[0.05vw] translate-y-[0.05vw]  rounded-[0.8vw] flex justify-center overflow-hidden">
                                <img src="../../../assets/img/Desktop/Shop/EmbraceYourMagic/aphrodite_oil.webp" alt=""
                                    class="w-full h-auto">
                                <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                    style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                                <div
                                    class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                                    <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                    <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                        style="transform: scaleY(0.95); letter-spacing: 0.01vw">Aphrodite Oil</div>
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
                            {{ t('embraceMagic.items.enchantedOils.list[3].desc') }}
                        </p>
                        <div class="flex flex-row items-start absolute top-[20vw]">
                            <p
                                class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                                {{ t('embraceMagic.items.enchantedOils.list[0].price') }}
                            </p>
                        </div>
                        <!-- {{ t('embraceMagic.buttons.addToCart') }} -->
                        <div
                            class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw] absolute top-[22vw]">
                            <div @click="$router.push('/shop/684955b856e40f56a3d112bd')"
                                class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                    {{ t('embraceMagic.buttons.details') }}
                                </p>
                                <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                    class="w-[1vw] h-[1vw]">
                            </div>
                            <div
                                class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                                <p class="translate-y-[0.1vw]">{{ t('embraceMagic.buttons.addToCart') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Comp 2 -->
            <div class="w-full h-auto flex flex-col justify-start mt-[5vw]">
                <p class="text-white text-[1.45vw] font-josefin-normal">
                    {{ t('embraceMagic.items.calling.title') }}
                </p>
                <div class="w-[17vw] h-[0.1vw] bg-gradient-to-r from-[#FFF] to-transparent"></div>
                <!-- Row 1 -->
                <div class="w-full h-auto flex flex-row justify-between mt-[1vw]">
                    <!-- items 1 -->
                    <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                        <div class="h-[15vw] w-[15vw] thumb-layer-bottom-1 absolute">
                            <div
                                class="relative w-[14.9vw] h-[14.9vw] translate-x-[0.05vw] translate-y-[0.05vw]  rounded-[0.8vw] flex justify-center overflow-hidden">
                                <img src="../../../assets/img/Desktop/Shop/EmbraceYourMagic/POTION.webp" alt=""
                                    class="w-full h-auto">
                                <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                    style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                                <div
                                    class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                                    <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                    <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                        style="transform: scaleY(0.95); letter-spacing: 0.01vw">potion</div>
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
                            {{ t('embraceMagic.items.calling.list[0].desc') }}
                        </p>
                        <div class="flex flex-row items-start absolute top-[20vw]">
                            <p
                                class="w-auto text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                                1.300.000
                            </p>
                            <span class="font-josefin-normal text-[1vw] font-normal mt-[0.2vw] text-white">vnd</span>
                        </div>

                        <!-- {{ t('embraceMagic.buttons.addToCart') }} -->
                        <div
                            class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw] absolute top-[22vw]">
                            <div @click="$router.push('/shop/6848533f56e40f56a3d1124e')"
                                class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                    {{ t('embraceMagic.buttons.details') }}
                                </p>
                                <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                    class="w-[1vw] h-[1vw]">
                            </div>
                            <div
                                class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                                <p class="translate-y-[0.1vw]">{{ t('embraceMagic.buttons.addToCart') }}</p>
                            </div>
                        </div>
                    </div>
                    <!-- items 2 -->
                    <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                        <div class="h-[15vw] w-[15vw] thumb-layer-bottom-1 absolute">
                            <div
                                class="relative w-[14.9vw] h-[14.9vw] translate-x-[0.05vw] translate-y-[0.05vw]  rounded-[0.8vw] flex justify-center overflow-hidden">
                                <img src="../../../assets/img/Desktop/Shop/EmbraceYourMagic/LUCKY WALLPAPER.webp" alt=""
                                    class="w-full h-auto">
                                <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                    style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                                <div
                                    class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
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
                            {{ t('embraceMagic.items.calling.list[1].desc') }}
                        </p>
                        <div class="flex flex-row items-start absolute top-[20vw]">
                            <p
                                class="w-auto text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                                1.500.000
                            </p>
                            <span class="font-josefin-normal text-[1vw] font-normal mt-[0.2vw] text-white">vnd</span>
                        </div>

                        <!-- {{ t('embraceMagic.buttons.addToCart') }} -->
                        <div
                            class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw] absolute top-[22vw]">
                            <div @click="$router.push('/shop/6889e0568cfd586f340f0ec2')"
                                class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                    {{ t('embraceMagic.buttons.details') }}
                                </p>
                                <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                    class="w-[1vw] h-[1vw]">
                            </div>
                            <div
                                class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                                <p class="translate-y-[0.1vw]">{{ t('embraceMagic.buttons.addToCart') }}</p>
                            </div>
                        </div>
                    </div>
                    <!-- items 3 -->
                    <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                        <div class="h-[15vw] w-[15vw] thumb-layer-bottom-1 absolute">
                            <div
                                class="relative w-[14.9vw] h-[14.9vw] translate-x-[0.05vw] translate-y-[0.05vw]  rounded-[0.8vw] flex justify-center overflow-hidden">
                                <img src="../../../assets/img/Desktop/Shop/EmbraceYourMagic/sigil_beauty.webp" alt=""
                                    class="w-full h-auto">
                                <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                    style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                                <div
                                    class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                                    <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                    <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                        style="transform: scaleY(0.95); letter-spacing: 0.01vw">Sigil Beauty</div>
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
                            {{ t('embraceMagic.items.calling.list[2].desc') }}
                        </p>
                        <div class="flex flex-row items-start absolute top-[20vw]">
                            <p
                                class="w-auto text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                                2.500.000
                            </p>
                            <span class="font-josefin-normal text-[1vw] font-normal mt-[0.2vw] text-white">vnd</span>
                        </div>

                        <!-- {{ t('embraceMagic.buttons.addToCart') }} -->
                        <div
                            class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw] absolute top-[22vw]">
                            <div @click="$router.push('/shop/684957ef56e40f56a3d112c1')"
                                class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                    {{ t('embraceMagic.buttons.details') }}
                                </p>
                                <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                    class="w-[1vw] h-[1vw]">
                            </div>
                            <div
                                class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                                <p class="translate-y-[0.1vw]">{{ t('embraceMagic.buttons.addToCart') }}</p>
                            </div>
                        </div>
                    </div>
                    <!-- items 4 -->
                    <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                        <div class="h-[15vw] w-[15vw] thumb-layer-bottom-1 absolute">
                            <div
                                class="relative w-[14.9vw] h-[14.9vw] translate-x-[0.05vw] translate-y-[0.05vw]  rounded-[0.8vw] flex justify-center overflow-hidden">
                                <img src="../../../assets/img/Desktop/Shop/EmbraceYourMagic/sigil _grimoire.webp" alt=""
                                    class="w-full h-auto">
                                <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                    style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                                <div
                                    class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                                    <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                    <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                        style="transform: scaleY(0.95); letter-spacing: 0.01vw">Sigil Grimoire</div>
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
                            {{ t('embraceMagic.items.calling.list[3].desc') }}
                        </p>
                        <div class="flex flex-row items-start absolute top-[20vw]">
                            <p
                                class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                                3.000.000
                            </p>
                            <span class="font-josefin-normal text-[1vw] font-normal mt-[0.2vw] text-white">vnd</span>
                        </div>

                        <!-- {{ t('embraceMagic.buttons.addToCart') }} -->
                        <div
                            class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw] absolute top-[22vw]">
                            <div @click="$router.push('/shop/6849588256e40f56a3d112c3')"
                                class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                    {{ t('embraceMagic.buttons.details') }}
                                </p>
                                <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                    class="w-[1vw] h-[1vw]">
                            </div>
                            <div
                                class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                                <p class="translate-y-[0.1vw]">{{ t('embraceMagic.buttons.addToCart') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Row 2 -->
                <div class="w-full h-auto flex flex-row justify-between mt-[1vw]">
                    <!-- items 1 -->
                    <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                        <div class="h-[15vw] w-[15vw] thumb-layer-bottom-1 absolute">
                            <div
                                class="relative w-[14.9vw] h-[14.9vw] translate-x-[0.05vw] translate-y-[0.05vw]  rounded-[0.8vw] flex justify-center overflow-hidden">
                                <img src="../../../assets/img/Desktop/Shop/EmbraceYourMagic/fortune_clover.webp" alt=""
                                    class="w-full h-auto">
                                <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                    style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                                <div
                                    class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                                    <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                    <div class="font-lemajor text-[1.3vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                        style="transform: scaleY(0.95); letter-spacing: 0.01vw">Fortune Clover</div>
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
                            {{ t('embraceMagic.items.calling.list[4].desc') }}
                        </p>
                        <div class="flex flex-row items-start absolute top-[20vw]">
                            <p
                                class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                                666.000 - 999.000
                            </p>
                            <span class="font-josefin-normal text-[1vw] font-normal mt-[0.2vw] text-white">vnd</span>
                        </div>

                        <!-- {{ t('embraceMagic.buttons.addToCart') }} -->
                        <div
                            class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw] absolute top-[22vw]">
                            <div @click="$router.push('/shop/684959be56e40f56a3d112c9')"
                                class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                    {{ t('embraceMagic.buttons.details') }}
                                </p>
                                <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                    class="w-[1vw] h-[1vw]">
                            </div>
                            <div
                                class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                                <p class="translate-y-[0.1vw]">{{ t('embraceMagic.buttons.addToCart') }}</p>
                            </div>
                        </div>
                    </div>
                    <!-- items 2 -->
                    <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                        <div class="h-[15vw] w-[15vw] thumb-layer-bottom-1 absolute">
                            <div
                                class="relative w-[14.9vw] h-[14.9vw] translate-x-[0.05vw] translate-y-[0.05vw]  rounded-[0.8vw] flex justify-center overflow-hidden">
                                <img src="../../../assets/img/Desktop/Shop/EmbraceYourMagic/Nina_charms_spell.webp"
                                    alt="" class="w-full h-auto">
                                <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                    style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                                <div
                                    class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                                    <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                    <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                        style="transform: scaleY(0.95); letter-spacing: 0.01vw">NiNa's Charms Spells
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
                            {{ t('embraceMagic.items.calling.list[5].desc') }}
                        </p>
                        <div class="flex flex-row items-start absolute top-[20vw]">
                            <p
                                class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                                {{ t('embraceMagic.items.enchantedOils.list[0].price') }}
                            </p>
                        </div>

                        <!-- {{ t('embraceMagic.buttons.addToCart') }} -->
                        <div
                            class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw] absolute top-[22vw]">
                            <div @click="$router.push('/shop/68495a3856e40f56a3d112cb')"
                                class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                    {{ t('embraceMagic.buttons.details') }}
                                </p>
                                <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                    class="w-[1vw] h-[1vw]">
                            </div>
                            <div
                                class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                                <p class="translate-y-[0.1vw]">{{ t('embraceMagic.buttons.addToCart') }}</p>
                            </div>
                        </div>
                    </div>
                    <!-- items 3 -->
                    <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                        <div class="h-[15vw] w-[15vw] thumb-layer-bottom-1 absolute">
                            <div
                                class="relative w-[14.9vw] h-[14.9vw] translate-x-[0.05vw] translate-y-[0.05vw]  rounded-[0.8vw] flex justify-center overflow-hidden">
                                <img src="../../../assets/img/Desktop/Shop/EmbraceYourMagic/crystal_magic_spell.webp"
                                    alt="" class="w-full h-auto">
                                <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                    style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                                <div
                                    class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                                    <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                    <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                        style="transform: scaleY(0.95); letter-spacing: 0.01vw">Crystal<br /> Magic
                                        Spell</div>
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
                            {{ t('embraceMagic.items.calling.list[6].desc') }}
                        </p>
                        <div class="flex flex-row items-start absolute top-[20vw]">
                            <p
                                class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                                {{ t('embraceMagic.items.enchantedOils.list[0].price') }}
                            </p>
                        </div>

                        <!-- {{ t('embraceMagic.buttons.addToCart') }} -->
                        <div
                            class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw] absolute top-[22vw]">
                            <div @click="$router.push('/shop/68495a9156e40f56a3d112cd')"
                                class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                    {{ t('embraceMagic.buttons.details') }}
                                </p>
                                <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                    class="w-[1vw] h-[1vw]">
                            </div>
                            <div
                                class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                                <p class="translate-y-[0.1vw]">{{ t('embraceMagic.buttons.addToCart') }}</p>
                            </div>
                        </div>
                    </div>
                    <!-- items 4 -->
                    <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                        <div class="h-[15vw] w-[15vw] thumb-layer-bottom-1 absolute">
                            <div
                                class="relative w-[14.9vw] h-[14.9vw] translate-x-[0.05vw] translate-y-[0.05vw]  rounded-[0.8vw] flex justify-center overflow-hidden">
                                <img src="../../../assets/img/Desktop/Shop/EmbraceYourMagic/magic_lipstick.webp" alt=""
                                    class="w-full h-auto">
                                <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                    style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                                <div
                                    class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                                    <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                    <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                        style="transform: scaleY(0.95); letter-spacing: 0.01vw">Magic Lipstick</div>
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
                            {{ t('embraceMagic.items.calling.list[7].desc') }}
                        </p>
                        <div class="flex flex-row items-start absolute top-[20vw]">
                            <p
                                class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                                {{ t('embraceMagic.items.enchantedOils.list[0].price') }}
                            </p>
                        </div>

                        <!-- {{ t('embraceMagic.buttons.addToCart') }} -->
                        <div
                            class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw] absolute top-[22vw]">
                            <div @click="$router.push('/shop/68495afe56e40f56a3d112cf')"
                                class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                    {{ t('embraceMagic.buttons.details') }}
                                </p>
                                <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                    class="w-[1vw] h-[1vw]">
                            </div>
                            <div
                                class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                                <p class="translate-y-[0.1vw]">{{ t('embraceMagic.buttons.addToCart') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!-- Filter -->
        <div ref="filterSidebarRef" class="w-[12.66] top-[20vw] absolute left-[5vw] flex flex-col filter-left-side">
            <!-- Category -->
            <div class="w-full h-auto category-filter">
                <div class="w-[12.66vw] h-auto flex flex-row justify-between items-center ">
                    <p class="text-[1.25vw] font-normal text-white font-josefin-normal">{{
                        t('embraceMagic.categories.title') }}</p>
                    <img src="../../../assets/img/Desktop/Shop/EmbraceYourMagic/Arrow.webp" alt="Toggle Category"
                        class="w-[1.25vw] h-[1.25vw] hover:cursor-pointer button-open transform transition-transform duration-300"
                        :class="{ 'rotate-180': !isCategoryOpen }" @click="toggleCategory">
                </div>
                <div class="flex flex-col items-start content-inner" v-show="!isCategoryOpen">
                    <p class="text-[#8F8F8F] text-[0.83vw] font-josefin-normal hover:cursor-pointer"
                        @click="selectCategoryByIndex(0)">
                        {{ t('embraceMagic.categories.list[0]') }}
                    </p>
                    <p class="text-[#8F8F8F] text-[0.83vw] font-josefin-normal hover:cursor-pointer"
                        @click="selectCategoryByIndex(1)">
                        {{ t('embraceMagic.categories.list[1]') }}
                    </p>
                    <p class="text-[#8F8F8F] text-[0.83vw] font-josefin-normal hover:cursor-pointer"
                        @click="selectCategoryByIndex(2)">
                        {{ t('embraceMagic.categories.list[2]') }}
                    </p>
                    <p class="text-[#8F8F8F] text-[0.83vw] font-josefin-normal hover:cursor-pointer"
                        @click="selectCategoryByIndex(3)">
                        {{ t('embraceMagic.categories.list[3]') }}
                    </p>
                    <p class="text-[#8F8F8F] text-[0.83vw] font-josefin-normal hover:cursor-pointer"
                        @click="selectCategoryByIndex(4)">
                        {{ t('embraceMagic.categories.list[4]') }}
                    </p>
                </div>
                <!-- divider -->
                <div class="w-[12.66vw] h-[0.1vw] bg-white mt-[1vw]"></div>
            </div>
            <!-- Need -->
            <div class="w-full h-auto need-filter">
                <div class="w-[12.66vw] h-auto flex flex-row justify-between items-center pt-[1vw]">
                    <p class="text-[1.25vw] font-normal text-white font-josefin-normal">Need</p>
                    <img src="../../../assets/img/Desktop/Shop/EmbraceYourMagic/Arrow.webp" alt="Toggle Need"
                        class="w-[1.25vw] h-[1.25vw] hover:cursor-pointer button-open transform transition-transform duration-300"
                        :class="{ 'rotate-180': !isNeedOpen }" @click="toggleNeed">
                </div>
                <div class="flex flex-col items-start content-inner" v-show="!isNeedOpen">
                    <div class="flex flex-row mx-[0.25vw] items-center">
                        <input type="checkbox" :value="t(`embraceMagic.needs.list[0]`)" v-model="selectedNeeds"
                            class="w-[1vw] h-[1vw] appearance-none bg-transparent border border-white/50 rounded-[0.2vw] checked:bg-transparent checked:border-white checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:translate-x-[0vw] checked:before:translate-y-[-0.4vw] relative hover:cursor-pointer">
                        <p class="text-[#8F8F8F] text-[0.83vw] font-josefin-normal ml-[0.5vw]">{{
                            t('embraceMagic.needs.list[0]') }}</p>
                    </div>
                    <div class="flex flex-row mx-[0.25vw] items-center">
                        <input type="checkbox" :value="t(`embraceMagic.needs.list[1]`)" v-model="selectedNeeds"
                            class="w-[1vw] h-[1vw] appearance-none bg-transparent border border-white/50 rounded-[0.2vw] checked:bg-transparent checked:border-white checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:translate-x-[0vw] checked:before:translate-y-[-0.4vw] relative hover:cursor-pointer">
                        <p class="text-[#8F8F8F] text-[0.83vw] font-josefin-normal ml-[0.5vw]">
                            {{ t('embraceMagic.needs.list[1]') }}
                        </p>
                    </div>
                    <div class="flex flex-row mx-[0.25vw] items-center">
                        <input type="checkbox" :value="t(`embraceMagic.needs.list[2]`)" v-model="selectedNeeds"
                            class="w-[1vw] h-[1vw] appearance-none bg-transparent border border-white/50 rounded-[0.2vw] checked:bg-transparent checked:border-white checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:translate-x-[0vw] checked:before:translate-y-[-0.4vw] relative hover:cursor-pointer">
                        <p class="text-[#8F8F8F] text-[0.83vw] font-josefin-normal ml-[0.5vw]">
                            {{ t('embraceMagic.needs.list[2]') }}
                        </p>
                    </div>
                    <div class="flex flex-row mx-[0.25vw] items-center">
                        <input type="checkbox" :value="t(`embraceMagic.needs.list[3]`)" v-model="selectedNeeds"
                            class="w-[1vw] h-[1vw] appearance-none bg-transparent border border-white/50 rounded-[0.2vw] checked:bg-transparent checked:border-white checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:translate-x-[0vw] checked:before:translate-y-[-0.4vw] relative hover:cursor-pointer">
                        <p class="text-[#8F8F8F] text-[0.83vw] font-josefin-normal ml-[0.5vw]">
                            {{ t('embraceMagic.needs.list[3]') }}
                        </p>
                    </div>
                    <div class="flex flex-row mx-[0.25vw] items-center">
                        <input type="checkbox" :value="t(`embraceMagic.needs.list[4]`)" v-model="selectedNeeds"
                            class="w-[1vw] h-[1vw] appearance-none bg-transparent border border-white/50 rounded-[0.2vw] checked:bg-transparent checked:border-white checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:translate-x-[0vw] checked:before:translate-y-[-0.4vw] relative hover:cursor-pointer">
                        <p class="text-[#8F8F8F] text-[0.83vw] font-josefin-normal ml-[0.5vw]">
                            {{ t('embraceMagic.needs.list[4]') }}
                        </p>
                    </div>
                    <div class="flex flex-row mx-[0.25vw] items-center">
                        <input type="checkbox" :value="t(`embraceMagic.needs.list[5]`)" v-model="selectedNeeds"
                            class="w-[1vw] h-[1vw] appearance-none bg-transparent border border-white/50 rounded-[0.2vw] checked:bg-transparent checked:border-white checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:translate-x-[0vw] checked:before:translate-y-[-0.4vw] relative hover:cursor-pointer">
                        <p class="text-[#8F8F8F] text-[0.83vw] font-josefin-normal ml-[0.5vw]">
                            {{ t('embraceMagic.needs.list[5]') }}
                        </p>
                    </div>
                    <div class="flex flex-row mx-[0.25vw] items-center">
                        <input type="checkbox" :value="t(`embraceMagic.needs.list[6]`)" v-model="selectedNeeds"
                            class="w-[1vw] h-[1vw] appearance-none bg-transparent border border-white/50 rounded-[0.2vw] checked:bg-transparent checked:border-white checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:translate-x-[0vw] checked:before:translate-y-[-0.4vw] relative hover:cursor-pointer">
                        <p class="text-[#8F8F8F] text-[0.83vw] font-josefin-normal ml-[0.5vw]">
                            {{ t('embraceMagic.needs.list[6]') }}
                        </p>
                    </div>
                    <div class="flex flex-row mx-[0.25vw] items-center">
                        <input type="checkbox" :value="t(`embraceMagic.needs.list[7]`)" v-model="selectedNeeds"
                            class="w-[1vw] h-[1vw] appearance-none bg-transparent border border-white/50 rounded-[0.2vw] checked:bg-transparent checked:border-white checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:translate-x-[0vw] checked:before:translate-y-[-0.4vw] relative hover:cursor-pointer">
                        <p class="text-[#8F8F8F] text-[0.83vw] font-josefin-normal ml-[0.5vw]">
                            {{ t('embraceMagic.needs.list[7]') }}
                        </p>
                    </div>
                    <div class="flex flex-row mx-[0.25vw] items-center">
                        <input type="checkbox" :value="t(`embraceMagic.needs.list[8]`)" v-model="selectedNeeds"
                            class="w-[1vw] h-[1vw] appearance-none bg-transparent border border-white/50 rounded-[0.2vw] checked:bg-transparent checked:border-white checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:translate-x-[0vw] checked:before:translate-y-[-0.4vw] relative hover:cursor-pointer">
                        <p class="text-[#8F8F8F] text-[0.83vw] font-josefin-normal ml-[0.5vw]">
                            {{ t('embraceMagic.needs.list[8]') }}
                        </p>
                    </div>
                    <div class="flex flex-row mx-[0.25vw] items-center">
                        <input type="checkbox" :value="t(`embraceMagic.needs.list[9]`)" v-model="selectedNeeds"
                            class="w-[1vw] h-[1vw] appearance-none bg-transparent border border-white/50 rounded-[0.2vw] checked:bg-transparent checked:border-white checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:translate-x-[0vw] checked:before:translate-y-[-0.4vw] relative hover:cursor-pointer">
                        <p class="text-[#8F8F8F] text-[0.83vw] font-josefin-normal ml-[0.5vw]">
                            {{ t('embraceMagic.needs.list[9]') }}
                        </p>
                    </div>
                    <div class="flex flex-row mx-[0.25vw] items-center">
                        <input type="checkbox" :value="t(`embraceMagic.needs.list[10]`)" v-model="selectedNeeds"
                            class="w-[1vw] h-[1vw] appearance-none bg-transparent border border-white/50 rounded-[0.2vw] checked:bg-transparent checked:border-white checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:translate-x-[0vw] checked:before:translate-y-[-0.4vw] relative hover:cursor-pointer">
                        <p class="text-[#8F8F8F] text-[0.83vw] font-josefin-normal ml-[0.5vw]">
                            {{ t('embraceMagic.needs.list[10]') }}
                        </p>
                    </div>
                    <div class="flex flex-row mx-[0.25vw] items-center">
                        <input type="checkbox" :value="t(`embraceMagic.needs.list[11]`)" v-model="selectedNeeds"
                            class="w-[1vw] h-[1vw] appearance-none bg-transparent border border-white/50 rounded-[0.2vw] checked:bg-transparent checked:border-white checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:translate-x-[0vw] checked:before:translate-y-[-0.4vw] relative hover:cursor-pointer">
                        <p class="text-[#8F8F8F] text-[0.83vw] font-josefin-normal ml-[0.5vw]">
                            {{ t('embraceMagic.needs.list[11]') }}
                        </p>
                    </div>
                    <div class="flex flex-row mx-[0.25vw] items-center">
                        <input type="checkbox" :value="t(`embraceMagic.needs.list[12]`)" v-model="selectedNeeds"
                            class="w-[1vw] h-[1vw] appearance-none bg-transparent border border-white/50 rounded-[0.2vw] checked:bg-transparent checked:border-white checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:translate-x-[0vw] checked:before:translate-y-[-0.4vw] relative hover:cursor-pointer">
                        <p class="text-[#8F8F8F] text-[0.83vw] font-josefin-normal ml-[0.5vw]">
                            {{ t('embraceMagic.needs.list[12]') }}
                        </p>
                    </div>
                    <div class="flex flex-row mx-[0.25vw] items-center">
                        <input type="checkbox" :value="t(`embraceMagic.needs.list[13]`)" v-model="selectedNeeds"
                            class="w-[1vw] h-[1vw] appearance-none bg-transparent border border-white/50 rounded-[0.2vw] checked:bg-transparent checked:border-white checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:translate-x-[0vw] checked:before:translate-y-[-0.4vw] relative hover:cursor-pointer">
                        <p class="text-[#8F8F8F] text-[0.83vw] font-josefin-normal ml-[0.5vw]">
                            {{ t('embraceMagic.needs.list[13]') }}
                        </p>
                    </div>
                    <div class="flex flex-row mx-[0.25vw] items-center">
                        <input type="checkbox" :value="t(`embraceMagic.needs.list[14]`)" v-model="selectedNeeds"
                            class="w-[1vw] h-[1vw] appearance-none bg-transparent border border-white/50 rounded-[0.2vw] checked:bg-transparent checked:border-white checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:translate-x-[0vw] checked:before:translate-y-[-0.4vw] relative hover:cursor-pointer">
                        <p class="text-[#8F8F8F] text-[0.83vw] font-josefin-normal ml-[0.5vw]">
                            {{ t('embraceMagic.needs.list[14]') }}
                        </p>
                    </div>
                    <div class="flex flex-row mx-[0.25vw] items-center">
                        <input type="checkbox" :value="t(`embraceMagic.needs.list[15]`)" v-model="selectedNeeds"
                            class="w-[1vw] h-[1vw] appearance-none bg-transparent border border-white/50 rounded-[0.2vw] checked:bg-transparent checked:border-white checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:translate-x-[0vw] checked:before:translate-y-[-0.4vw] relative hover:cursor-pointer">
                        <p class="text-[#8F8F8F] text-[0.83vw] font-josefin-normal ml-[0.5vw]">
                            {{ t('embraceMagic.needs.list[15]') }}
                        </p>
                    </div>
                </div>

            </div>
            <!-- divider -->
            <div class="w-[12.66vw] h-[0.1vw] bg-white mt-[1vw]" v-show="isNeedOpen"></div>
            <!-- Price -->
            <div class="w-full h-auto price-filter">
                <div class="w-[12.66vw] h-auto flex flex-row justify-between items-center pb-[1vw] pt-[1vw]">
                    <p class="text-[1.25vw] font-normal text-white font-josefin-normal">Price</p>
                    <img src="../../../assets/img/Desktop/Shop/EmbraceYourMagic/Arrow.webp" alt="Toggle Price"
                        class="w-[1.25vw] h-[1.25vw] hover:cursor-pointer button-open transform transition-transform duration-300"
                        :class="{ 'rotate-180': !isPriceOpen }" @click="togglePrice">
                </div>
                <!-- Content -->
                <div class="" v-show="!isPriceOpen">
                    <div class="w-[12.66vw] h-[1vw]  flex justify-center items-center content-inner-price">
                        <div class="absolute w-full h-[0.42vw] bg-[#2F2F2F] rounded-full price-bar" ref="priceBarRef">
                        </div>
                        <div class="absolute w-[0.8vw] h-[0.8vw] bg-white left-0 rounded-full hover:cursor-pointer cursor-range-price"
                            ref="cursorRef"></div>
                    </div>

                    <div class="w-full h-[1.2vw] flex flex-row items-end justify-end mt-[0.5vw] overflow-hidden">
                        <div class="list-of-price translate-y-[6vw] scroll-value-target" ref="priceListRef">
                            <p
                                class="font-josefin-normal text-[0.83vw] text-white font-normal leading-[1.2vw] translate-x-[0.6vw]">
                                500.000
                            </p>
                            <p class="font-josefin-normal text-[0.83vw] text-white font-normal leading-[1.2vw]">
                                1.000.000
                            </p>
                            <p class="font-josefin-normal text-[0.83vw] text-white font-normal leading-[1.2vw]">
                                2.000.000
                            </p>
                            <p class="font-josefin-normal text-[0.83vw] text-white font-normal leading-[1.2vw]">
                                3.000.000
                            </p>
                            <p class="font-josefin-normal text-[0.83vw] text-white font-normal leading-[1.2vw]">
                                4.000.000
                            </p>
                            <p class="font-josefin-normal text-[0.83vw] text-white font-normal leading-[1.2vw]">
                                5.000.000
                            </p>
                        </div>
                        <p class="font-josefin-normal text-[0.83vw] text-white font-normal pl-[0.1vw]">vnd</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="isFiltering" class=" absolute top-[20vw] right-[5vw]">
            <div class="grid grid-cols-4 gap-[2vw] w-[74vw] justify-between">
                <div v-for="product in filteredProducts" :key="product._id"
                    class="h-[25vw] w-[15vw] overflow-hidden relative items-1">
                    <div class="absolute h-[15vw] w-[15vw] thumb-layer-bottom-1">
                        <div
                            class="relative w-[14.9vw] h-[14.9vw] translate-x-[0.05vw] translate-y-[0.05vw]  rounded-[0.8vw] flex justify-center overflow-hidden">
                            <img :src="product.productImageUrl" alt="" class="w-full h-auto rounded-[0.8vw]" />
                            <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                            <div
                                class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.2vw] h-auto">
                                <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                    style="transform: scaleY(0.95); letter-spacing: 0.01vw">{{ product.name[currentLang]
                                    || product.name.en }}</div>
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.2vw] h-auto">
                            </div>
                            <!-- Layer on top -->
                            <div
                                class="w-[8vw] h-[8vw] bg-[#C05140] absolute rounded-[50%] top-[6vw] left-0 translate-x-[-10vw] blur-[5vw] layer-on-top">
                            </div>
                        </div>
                    </div>
                    <p class="mt-[1vw] text-white text-[0.87vw] font-josefin-normal font-thin">
                        {{ truncateWords(product.subcription[currentLang] || product.subcription.en, 14) }}
                    </p>
                    <p class="text-white font-josefin-normal text-[1.39vw] mt-[0.5vw] absolute top-[19.5vw]">
                        {{ product.salePrice || product.price || 'Contact' }}
                    </p>
                    <div
                        class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw] absolute top-[22vw]">
                        <div @click="$router.push(`/shop/${product._id}`)"
                            class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                            <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                {{ t('embraceMagic.buttons.details') }}
                            </p>
                            <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                class="w-[1vw] h-[1vw]">
                        </div>
                        <div
                            class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                            <p class="translate-y-[0.1vw]">{{ t('embraceMagic.buttons.addToCart') }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Pagination -->
            <div class="flex justify-center items-center mt-[2vw] text-white text-[1vw]">
                <button :disabled="currentPage === 1" @click="currentPage-- && fetchFilteredProducts()">←</button>
                <span class="px-[1vw]">{{ currentPage }}</span>
                <button :disabled="currentPage * pageSize >= totalProducts"
                    @click="currentPage++ && fetchFilteredProducts()">
                    →
                </button>
            </div>
        </div>

        <div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import axios from '../../../utils/axios'

const { t, locale } = useI18n()
const currentLang = computed(() => locale.value)

// Filter state
const categoryValues = ['Candles', 'potion', 'spell', '6847da6d4f5c0116dbc64de6', '6847da8b4f5c0116dbc64de9']

const selectedCategory = ref('')
const priceRange = ref({ from: 0, to: 5000000 })
const selectedNeeds = ref([]);

// Pagination + product data
const currentPage = ref(1)
const pageSize = 12
const totalProducts = ref(0)
const filteredProducts = ref([])
const isFiltering = ref(false)

const selectCategoryByIndex = (index) => {
    selectedCategory.value = categoryValues[index]
}

const isAnyFilterActive = computed(() => {
    return selectedCategory.value !== '' || selectedNeeds.value.length > 0 || priceRange.value.to < 5000000
})

// Watch filter → trigger API
watch(
    [selectedCategory, () => priceRange.value.to, selectedNeeds],
    () => {
        currentPage.value = 1
        if (isAnyFilterActive.value) {
            fetchFilteredProducts()
            isFiltering.value = true
        } else {
            isFiltering.value = false
        }
    }
)


const priceMap = [500000, 1000000, 2000000, 3000000, 4000000, 5000000]

// API Call
// const fetchFilteredProducts = async () => {
//     try {
//         const params = {
//             priceFrom: priceRange.value.from,
//             priceTo: priceRange.value.to,
//             page: currentPage.value,
//             limit: pageSize
//         }

//         if (selectedCategory.value) {
//             params.category = selectedCategory.value
//         } else if (selectedNeeds.value.length > 1) {
//             params.need = selectedNeeds.value.join(',')
//         }

//         const res = await axios.get('/api/products/filter', { params })
//         filteredProducts.value = res.data.products
//         totalProducts.value = res.data.total
//     } catch (e) {
//         console.error('Error fetching filtered products:', e)
//     }
// }

const fetchFilteredProducts = async () => {
  try {
    const params = {
      priceFrom: priceRange.value.from,
      priceTo: priceRange.value.to,
      page: currentPage.value,
      limit: pageSize
    }

    if (selectedCategory.value) {
      params.category = selectedCategory.value
    }

    if (selectedNeeds.value.length > 0) {
      params.need = selectedNeeds.value.join(',')
    }

    const res = await axios.get('/api/products/filter', { params })
    filteredProducts.value = res.data.products
    totalProducts.value = res.data.total
  } catch (e) {
    console.error('Error fetching filtered products:', e)
  }
}


const isCategoryOpen = ref(true);
const isNeedOpen = ref(true);
const isPriceOpen = ref(true);

const toggleCategory = () => { isCategoryOpen.value = !isCategoryOpen.value; };
const toggleNeed = () => { isNeedOpen.value = !isNeedOpen.value; };
const togglePrice = () => { isPriceOpen.value = !isPriceOpen.value; };

const parentContainerRef = ref(null);
const filterSidebarRef = ref(null);

const priceBarRef = ref(null)
const cursorRef = ref(null)
const priceListRef = ref(null)

const totalSteps = 6
const currentStep = ref(0)

const stepHeight = 1.2

const truncateWords = (text, wordLimit = 18) => {
    if (!text) return ''
    const words = text.trim().split(/\s+/)
    return words.length <= wordLimit
        ? text
        : words.slice(0, wordLimit).join(' ') + '...'
}

const updatePriceUI = (step) => {
    step = Math.max(0, Math.min(totalSteps - 1, step))
    currentStep.value = step

    if (priceListRef.value) {
        priceListRef.value.style.transform = `translateY(${(totalSteps - step) * stepHeight - 1.2}vw)`
    }

    if (cursorRef.value && priceBarRef.value) {
        const barWidth = priceBarRef.value.offsetWidth
        const stepWidth = barWidth / (totalSteps - 1)
        const cursorX = step * stepWidth
        cursorRef.value.style.left = `${cursorX}px`
    }

    priceRange.value.to = priceMap[step]
}


onMounted(() => {
    let isDragging = false

    currentStep.value = 5 // <- Giá trị cuối cùng tương ứng 5.000.000
    updatePriceUI(currentStep.value)
    priceRange.value.to = priceMap[currentStep.value]

    const onMouseDown = (e) => {
        isDragging = true
        onMouseMove(e)
        document.addEventListener('mousemove', onMouseMove)
        document.addEventListener('mouseup', onMouseUp)
    }

    const onMouseUp = () => {
        isDragging = false
        document.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('mouseup', onMouseUp)
    }

    const onMouseMove = (e) => {
        if (!isDragging || !priceBarRef.value) return

        const rect = priceBarRef.value.getBoundingClientRect()
        const x = e.clientX - rect.left
        const ratio = Math.max(0, Math.min(x / rect.width, 1))
        const step = Math.round(ratio * (totalSteps - 1))
        updatePriceUI(step)
    }

    if (cursorRef.value) {
        cursorRef.value.addEventListener('mousedown', onMouseDown)
    }

    setTimeout(() => {
        updatePriceUI(currentStep.value)
    }, 100)
})
</script>

<style scoped>
.filter-left-side {
    z-index: 20;
}

.collapsible-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
}

.collapsible-content.is-open {
    max-height: 40rem;
}

.rotate-180 {
    transform: rotate(180deg);
}

.custom-checkbox-style {
    @apply w-[1vw] h-[1vw] appearance-none bg-transparent border border-white/50 rounded-[0.2vw] checked:bg-transparent checked:border-white checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:translate-x-[0.15vw] checked:before:translate-y-[-0.45vw] relative hover:cursor-pointer;
}

.rotate-180 {
    transform: rotate(180deg);
}

.font-lemajor {
    font-family: "TP Le Major", sans-serif;
}

.font-josefin-normal {
    font-family: "JosefinNormal", sans-serif;
}

.text-glow {
    text-shadow: 0px 0px 2.8px rgba(255, 255, 255, 0.87);
}

.oval-scroll {
    transition: transform 0.5s ease-in-out;
}

.hover-side:hover~.oval-scroll {
    transform: translateY(-5vw);
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

.list-of-price {
    transition: transform 0.3s ease-in-out;
}
</style>
<template>
    <div class="w-full h-auto relative flex flex-col items-center">
        <img src="../../../assets/img/Desktop/Shop/EnchanedSpell/back spell.webp" alt="" class="">
        <div class="absolute top-0 left-0 w-full h-[30vw] bg-gradient-to-b from-[#0D0D0D] to-transparent"></div>
        <div class="absolute bottom-0 left-0 w-full h-[30vw] bg-gradient-to-t from-[#0D0D0D] to-transparent"></div>
        <div class="text-white flex flex-col items-center absolute top-0">
            <p class="text-[3.125vw] font-lemajor text-glow">{{ t('enchantedSpell.title') }}</p>
            <p class="text-[1.05vw] font-thin font-josefin-normal">{{ t('enchantedSpell.description') }}</p>

            <div class="w-[90vw] h-auto  pt-[6vw] flex flex-col items-center">
                <!-- row 1 -->
                <div class="w-[90vw] h-auto flex flex-row justify-between">
                    <!-- Items 1 -->
                    <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                        <div class="h-[15vw] w-[15vw] thumb-layer-bottom-1 absolute">
                            <div
                                class="relative w-[14.9vw] h-[14.9vw] translate-x-[0.05vw] translate-y-[0.05vw] rounded-[0.8vw] flex justify-center overflow-hidden">
                                <img src="https://res.cloudinary.com/dklrmxefk/image/upload/v1749570007/nina_images/sn9skcselbol7t89v8s9.webp" alt=""
                                    class="w-full h-auto">
                                <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                    style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                                <div
                                    class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                                    <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                    <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                        style="transform: scaleY(0.95); letter-spacing: 0.01vw">Spell</div>
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
                            {{ t('enchantedSpell.items[0].description') }}
                        </p>
                        <div class="flex flex-row items-start absolute top-[20vw]">
                            <p
                                class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                                830.000
                            </p>
                            <p
                                class="w-full text-start font-josefin-normal text-[1vw] font-normal mt-[0.2vw] text-white">
                                vnd</p>
                        </div>

                        <!-- {{ t('enchantedSpell.button.addToCart') }} -->
                        <div class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw] absolute top-[22vw]">
                            <div
                                @click="$router.push('/shop/684851d756e40f56a3d11248')"
                                class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                    {{ t('enchantedSpell.button.details') }}
                                </p>
                                <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                    class="w-[1vw] h-[1vw]">
                            </div>
                            <div
                                class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                                <p class="translate-y-[0.1vw]">{{ t('enchantedSpell.button.addToCart') }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Items 2 -->
                    <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                        <div class="h-[15vw] w-[15vw] thumb-layer-bottom-1 absolute">
                            <div
                                class="relative w-[14.9vw] h-[14.9vw] translate-x-[0.05vw] translate-y-[0.05vw] rounded-[0.8vw] flex justify-center overflow-hidden">
                                <img src="../../../assets/img/Desktop/Shop/EnchanedSpell/travel spell.webp" alt=""
                                    class="w-full h-auto">
                                <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                    style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                                <div
                                    class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                                    <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                    <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                        style="transform: scaleY(0.95); letter-spacing: 0.01vw">Travel Candle</div>
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
                            {{ t('enchantedSpell.items[1].description') }}
                        </p>
                        <p
                            class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                            Contact for Pricing
                        </p>
                        <!-- {{ t('enchantedSpell.button.addToCart') }} -->
                        <div class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw]">
                            <div
                                @click="$router.push('/shop/6848e32656e40f56a3d11291')"
                                class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                    {{ t('enchantedSpell.button.details') }}
                                </p>
                                <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                    class="w-[1vw] h-[1vw]">
                            </div>
                            <div
                                class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                                <p class="translate-y-[0.1vw]">{{ t('enchantedSpell.button.addToCart') }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Items 3 -->
                    <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                        <div class="h-[15vw] w-[15vw] thumb-layer-bottom-1 absolute">
                            <div
                                class="relative w-[14.9vw] h-[14.9vw] translate-x-[0.05vw] translate-y-[0.05vw] rounded-[0.8vw] flex justify-center overflow-hidden">
                                <img src="../../../assets/img/Desktop/Shop/EnchanedSpell/spell gaia.webp" alt=""
                                    class="w-full h-auto">
                                <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                    style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                                <div
                                    class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                                    <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                    <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                        style="transform: scaleY(0.95); letter-spacing: 0.01vw">Spell Gaia</div>
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
                            {{ t('enchantedSpell.items[2].description') }}
                        </p>
                        <div class="flex flex-row items-start absolute top-[20vw]">
                            <p
                                class="text-start font-josefin-normal text-[1.39vw] font-normal text-white">
                                1.111.000
                            </p>
                            <p
                                class="text-start font-josefin-normal text-[1vw] font-normal text-white">
                                vnd</p>
                        </div>

                        <!-- {{ t('enchantedSpell.button.addToCart') }} -->
                        <div class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw] absolute top-[22vw]">
                            <div
                                @click="$router.push('/shop/6848e42256e40f56a3d11295')"
                                class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                    {{ t('enchantedSpell.button.details') }}
                                </p>
                                <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                    class="w-[1vw] h-[1vw]">
                            </div>
                            <div
                                class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                                <p class="translate-y-[0.1vw]">{{ t('enchantedSpell.button.addToCart') }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Items 4 -->
                    <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                        <div class="h-[15vw] w-[15vw] thumb-layer-bottom-1 absolute">
                            <div
                                class="relative w-[14.9vw] h-[14.9vw] translate-x-[0.05vw] translate-y-[0.05vw] rounded-[0.8vw] flex justify-center overflow-hidden">
                                <img src="../../../assets/img/Desktop/Shop/EnchanedSpell/special spell.webp" alt=""
                                    class="w-full h-auto">
                                <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                    style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                                <div
                                    class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                                    <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                    <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                        style="transform: scaleY(0.95); letter-spacing: 0.01vw">Special Spell</div>
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
                            {{ t('enchantedSpell.items[3].description') }}
                        </p>
                        <div class="flex flex-row items-start absolute top-[20vw]">
                            <p
                                class="w-full text-start font-josefin-normal text-[1.35vw] font-normal mt-[0.2vw] text-white tracking-tighter">
                                1.600.000 - 1.800.000
                            </p>
                        </div>
                        <p
                            class="w-full font-josefin-normal text-end text-[1vw] font-normal mt-[0.2vw] text-white absolute top-0 right-0 translate-y-[20vw] translate-x-[-1.5vw]">
                            vnd</p>

                        <!-- {{ t('enchantedSpell.button.addToCart') }} -->
                        <div class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw] absolute top-[22vw]">
                            <div
                                @click="$router.push('/shop/6848e4b856e40f56a3d11297')"
                                class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                    {{ t('enchantedSpell.button.details') }}
                                </p>
                                <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                    class="w-[1vw] h-[1vw]">
                            </div>
                            <div
                                class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                                <p class="translate-y-[0.1vw]">{{ t('enchantedSpell.button.addToCart') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- row 2 -->
                <div class="w-[65vw] h-auto flex flex-row justify-between mt-[3vw]">
                    <!-- Items 1 -->
                    <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                        <div class="h-[15vw] w-[15vw] thumb-layer-bottom-1 absolute">
                            <div
                                class="relative w-[14.9vw] h-[14.9vw] translate-x-[0.05vw] translate-y-[0.05vw] rounded-[0.8vw] flex justify-center overflow-hidden">
                                <img src="../../../assets/img/Desktop/Shop/EnchanedSpell/potion.webp" alt=""
                                    class="w-full h-auto">
                                <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                    style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                                <div
                                    class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                                    <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                    <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                        style="transform: scaleY(0.95); letter-spacing: 0.01vw">Potion</div>
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
                            {{ t('enchantedSpell.items[4].description') }}
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

                        <!-- {{ t('enchantedSpell.button.addToCart') }} -->
                        <div class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw]">
                            <div
                                @click="$router.push('/shop/6848533f56e40f56a3d1124e')"
                                class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                    {{ t('enchantedSpell.button.details') }}
                                </p>
                                <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                    class="w-[1vw] h-[1vw]">
                            </div>
                            <div
                                class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                                <p class="translate-y-[0.1vw]">{{ t('enchantedSpell.button.addToCart') }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Items 2 -->
                    <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                        <div class="h-[15vw] w-[15vw] thumb-layer-bottom-1 absolute">
                            <div
                                class="relative w-[14.9vw] h-[14.9vw] translate-x-[0.05vw] translate-y-[0.05vw] rounded-[0.8vw] flex justify-center overflow-hidden">
                                <img src="../../../assets/img/Desktop/Shop/EnchanedSpell/potion gaia.webp" alt=""
                                    class="w-full h-auto">
                                <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                    style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                                <div
                                    class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                                    <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                    <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                        style="transform: scaleY(0.95); letter-spacing: 0.01vw">Potion Gaia</div>
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
                            {{ t('enchantedSpell.items[5].description') }}
                        </p>
                        <div class="flex flex-row items-start mt-[1.5vw]">
                            <p
                                class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                                1.600.000
                            </p>
                            <p
                                class="w-full text-start font-josefin-normal text-[1vw] font-normal translate-x-[-1.2vw] mt-[0.2vw] text-white">
                                vnd</p>
                        </div>
                        <!-- {{ t('enchantedSpell.button.addToCart') }} -->
                        <div class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw]">
                            <div
                                @click="$router.push('/shop/6848e5be56e40f56a3d1129b')"
                                class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                    {{ t('enchantedSpell.button.details') }}
                                </p>
                                <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                    class="w-[1vw] h-[1vw]">
                            </div>
                            <div
                                class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                                <p class="translate-y-[0.1vw]">{{ t('enchantedSpell.button.addToCart') }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Items 3 -->
                    <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                        <div class="h-[15vw] w-[15vw] thumb-layer-bottom-1 absolute">
                            <div
                                class="relative w-[14.9vw] h-[14.9vw] translate-x-[0.05vw] translate-y-[0.05vw]  rounded-[0.8vw] flex justify-center overflow-hidden">
                                <img src="../../../assets/img/Desktop/Shop/EnchanedSpell/SpecialPotion.webp" alt=""
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
                            {{ t('enchantedSpell.items[5].description') }}
                        </p>
                        <div class="flex flex-row items-start mt-[1.4vw]">
                            <p
                                class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                                3.000.000
                            </p>
                            <p
                                class="w-full text-start font-josefin-normal text-[1vw] font-normal translate-x-[-1vw] mt-[0.2vw] text-white">
                                vnd</p>
                        </div>

                        <!-- {{ t('enchantedSpell.button.addToCart') }} -->
                        <div class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw]">
                            <div
                                @click="$router.push('/shop/6848547a56e40f56a3d11256')"
                                class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                    {{ t('enchantedSpell.button.details') }}
                                </p>
                                <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                    class="w-[1vw] h-[1vw]">
                            </div>
                            <div
                                class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                                <p class="translate-y-[0.1vw]">{{ t('enchantedSpell.button.addToCart') }}</p>
                            </div>
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
    text-shadow: 0px 0px 2.8px rgba(255, 255, 255, 0.87);
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
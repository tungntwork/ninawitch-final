<template>
    <div class="w-full h-[78vw] bg-[#0D0D0D] relative flex justify-center">
        <img src="../../../assets/img/Desktop/Shop/MysticalExpert/back mystical exper.webp" alt=""
            class="absolute bottom-0 w-full">
        <div class="absolute top-[4.167vw] flex flex-col justify-center">
            <p class="font-lemajor text-[3.02vw] text-white text-center">{{ $t('mysticalExperience.title') }}</p>
            <p class="font-josefin-normal text-[1.04vw] font-thin flex flex-col justify-center text-white text-center">
                {{ $t('mysticalExperience.intro') }}
            </p>

            <div class="w-[90vw] flex flex-col justify-between items-center">
                <!-- Row 1 -->
                <div class="w-[90vw] flex flex-row mt-[4.8vw] justify-between">
                    <!-- Items 1 -->
                    <div class="w-[15vw] h-[23.1vw] items-2 relative layer-above">
                        <div class="w-[15vw] h-[23.1vw] thumb-layer-bottom-1 absolute top-0 left-0">
                            <div
                                class="w-[14.9vw] h-auto absolute top-0 left-0 translate-x-[0.05vw] translate-y-[0.05vw] flex justify-center">
                                <img src="../../../assets/img/Desktop/Shop/MysticalExpert/1.webp" alt="" class="">
                                <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                    style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                                <div class="absolute top-[12vw] flex flex-col items-center justify-center">
                                    <p class="text-[1.5vw] font-lemajor text-white">Candle Reading</p>
                                    <div class="w-[12vw] h-[0.05vw] bg-white"></div>
                                    <p
                                        class="text-[0.75vw] text-white font-josefin-normal font-thin w-[14vw] text-center">
                                        {{ $t('mysticalExperience.items[0].desc') }}
                                    </p>
                                </div>
                                <div class="w-[13vw] h-auto absolute flex flex-col top-[18.5vw] overflow-hidden">
                                    <div class="flex flex-row items-start">
                                        <p
                                            class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                                            600.000
                                        </p>
                                        <p
                                            class="w-full text-start font-josefin-normal text-[1vw] font-normal translate-x-[-1.2vw] mt-[0.2vw] text-white">
                                            vnd</p>
                                    </div>
                                    <div class="w-[13vw] flex flex-row justify-between translate-x-[8.6vw] text-hover">
                                        <div
                                            class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                            <p @click="$router.push('/shop/6889ef218cfd586f340f0f34')"
                                                class="text-start font-josefin-normal text-[0.8vw] font-normal text-white pr-[0.3vw]">
                                                {{ $t('mysticalExperience.details') }}
                                            </p>
                                            <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp"
                                                alt="" class="w-[1vw] h-[1vw]">
                                        </div>
                                        <div
                                            class="button-redirect text-start font-josefin-normal text-[0.8vw] font-normal text-white border-white hover:bg-white hover:text-black hover:cursor-pointer duration-500 ease-in-out border-[0.05vw] py-[0.1vw] px-[0.8vw] rounded-[0.4vw]">
                                            <p class="translate-y-[0.1vw]">{{ $t('mysticalExperience.add') }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <!-- Items 2 -->
                    <div class="w-[15vw] h-[23.1vw] items-2 relative layer-above">
                        <div class="w-[15vw] h-[23.1vw] thumb-layer-bottom-1 absolute top-0 left-0">
                            <div
                                class="w-[14.9vw] h-auto absolute top-0 left-0 translate-x-[0.05vw] translate-y-[0.05vw] flex justify-center">
                                <img src="../../../assets/img/Desktop/Shop/MysticalExpert/2.webp" alt="" class="">
                                <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                    style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                                <div class="absolute top-[12vw] flex flex-col items-center justify-center">
                                    <p class="text-[1.5vw] font-lemajor text-white">Flower Reading </p>
                                    <div class="w-[12vw] h-[0.05vw] bg-white"></div>
                                    <p
                                        class="text-[0.75vw] text-white font-josefin-normal font-thin w-[14vw] text-center">
                                        {{ $t('mysticalExperience.items[1].desc') }}
                                    </p>
                                </div>
                                <div class="w-[13vw] h-auto absolute flex flex-col top-[18.5vw] overflow-hidden">
                                    <div class="flex flex-row items-start">
                                        <p
                                            class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                                            700.000
                                        </p>
                                        <p
                                            class="w-full text-start font-josefin-normal text-[1vw] font-normal translate-x-[-1.2vw] mt-[0.2vw] text-white">
                                            vnd</p>
                                    </div>
                                    <div class="w-[13vw] flex flex-row justify-between translate-x-[8.6vw] text-hover">
                                        <div
                                            class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                            <p @click="$router.push('/shop/6889f0298cfd586f340f0f44')"
                                                class="text-start font-josefin-normal text-[0.8vw] font-normal text-white pr-[0.3vw]">
                                                {{ $t('mysticalExperience.details') }}
                                            </p>
                                            <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp"
                                                alt="" class="w-[1vw] h-[1vw]">
                                        </div>
                                        <div
                                            class="button-redirect text-start font-josefin-normal text-[0.8vw] font-normal text-white border-white hover:bg-white hover:text-black hover:cursor-pointer duration-500 ease-in-out border-[0.05vw] py-[0.1vw] px-[0.8vw] rounded-[0.4vw]">
                                            <p class="translate-y-[0.1vw]">{{ $t('mysticalExperience.add') }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <!-- Items 3 -->
                    <div class="w-[15vw] h-[23.1vw] items-2 relative layer-above">
                        <div class="w-[15vw] h-[23.1vw] thumb-layer-bottom-1 absolute top-0 left-0">
                            <div
                                class="w-[14.9vw] h-auto absolute top-0 left-0 translate-x-[0.05vw] translate-y-[0.05vw] flex justify-center">
                                <img src="../../../assets/img/Desktop/Shop/MysticalExpert/3.webp" alt="" class="">
                                <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                    style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                                <div class="absolute top-[10vw] flex flex-col items-center justify-center">
                                    <p class="text-[1.5vw] font-lemajor text-white text-center">Crystal Ball Reading</p>
                                    <div class="w-[12vw] h-[0.05vw] bg-white"></div>
                                    <p
                                        class="text-[0.75vw] text-white font-josefin-normal font-thin w-[14vw] text-center">
                                        {{ $t('mysticalExperience.items[2].desc') }}
                                    </p>
                                </div>
                                <div class="w-[13vw] h-auto absolute flex flex-col top-[18.5vw] overflow-hidden">
                                    <div class="flex flex-row items-start">
                                        <p
                                            class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                                            888.000
                                        </p>
                                        <p
                                            class="w-full text-start font-josefin-normal text-[1vw] font-normal translate-x-[-1.2vw] mt-[0.2vw] text-white">
                                            vnd</p>
                                    </div>
                                    <div class="w-[13vw] flex flex-row justify-between translate-x-[8.6vw] text-hover">
                                        <div
                                            class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                            <p @click="$router.push('/shop/6889f0df8cfd586f340f0f54')"
                                                class="text-start font-josefin-normal text-[0.8vw] font-normal text-white pr-[0.3vw]">
                                                {{ $t('mysticalExperience.details') }}
                                            </p>
                                            <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp"
                                                alt="" class="w-[1vw] h-[1vw]">
                                        </div>
                                        <div
                                            class="button-redirect text-start font-josefin-normal text-[0.8vw] font-normal text-white border-white hover:bg-white hover:text-black hover:cursor-pointer duration-500 ease-in-out border-[0.05vw] py-[0.1vw] px-[0.8vw] rounded-[0.4vw]">
                                            <p class="translate-y-[0.1vw]">{{ $t('mysticalExperience.add') }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Items 4 -->
                    <div class="w-[15vw] h-[23.1vw] items-2 relative layer-above">
                        <div class="w-[15vw] h-[23.1vw] thumb-layer-bottom-1 absolute top-0 left-0">
                            <div
                                class="w-[14.9vw] h-auto absolute top-0 left-0 translate-x-[0.05vw] translate-y-[0.05vw] flex justify-center">
                                <img src="../../../assets/img/Desktop/Shop/MysticalExpert/4.webp" alt="" class="">
                                <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                    style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                                <div class="absolute top-[10vw] flex flex-col items-center justify-center">
                                    <p class="text-[1.5vw] font-lemajor text-white text-center">Connection to Akashic
                                    </p>
                                    <div class="w-[12vw] h-[0.05vw] bg-white"></div>
                                    <p
                                        class="text-[0.75vw] text-white font-josefin-normal font-thin w-[14vw] text-center">
                                        {{ $t('mysticalExperience.items[3].desc') }}
                                    </p>
                                </div>
                                <div class="w-[13vw] h-auto absolute flex flex-col top-[18.5vw] overflow-hidden">
                                    <div class="flex flex-row items-start">
                                        <p
                                            class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                                            999.000
                                        </p>
                                        <p
                                            class="w-full text-start font-josefin-normal text-[1vw] font-normal translate-x-[-1.2vw] mt-[0.2vw] text-white">
                                            vnd</p>
                                    </div>
                                    <div class="w-[13vw] flex flex-row justify-between translate-x-[8.6vw] text-hover">
                                        <div
                                            class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                            <p @click="$router.push('/shop/6889f1708cfd586f340f0f58')"
                                                class="text-start font-josefin-normal text-[0.8vw] font-normal text-white pr-[0.3vw]">
                                                {{ $t('mysticalExperience.details') }}
                                            </p>
                                            <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp"
                                                alt="" class="w-[1vw] h-[1vw]">
                                        </div>
                                        <div
                                            class="button-redirect text-start font-josefin-normal text-[0.8vw] font-normal text-white border-white hover:bg-white hover:text-black hover:cursor-pointer duration-500 ease-in-out border-[0.05vw] py-[0.1vw] px-[0.8vw] rounded-[0.4vw]">
                                            <p class="translate-y-[0.1vw]">{{ $t('mysticalExperience.add') }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Items 5 -->
                    <div class="w-[15vw] h-[23.1vw] items-2 relative layer-above">
                        <div class="w-[15vw] h-[23.1vw] thumb-layer-bottom-1 absolute top-0 left-0">
                            <div
                                class="w-[14.9vw] h-auto absolute top-0 left-0 translate-x-[0.05vw] translate-y-[0.05vw] flex justify-center">
                                <img src="../../../assets/img/Desktop/Shop/MysticalExpert/5.webp" alt="" class="">
                                <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                    style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                                <div class="absolute top-[12vw] flex flex-col items-center justify-center">
                                    <p class="text-[1.5vw] font-lemajor text-white text-center">Medium Reading</p>
                                    <div class="w-[12vw] h-[0.05vw] bg-white"></div>
                                    <p
                                        class="text-[0.75vw] text-white font-josefin-normal font-thin w-[14vw] text-center">
                                        {{ $t('mysticalExperience.items[4].desc') }}
                                    </p>
                                </div>
                                <div class="w-[13vw] h-auto absolute flex flex-col top-[18.5vw] overflow-hidden">
                                    <div class="flex flex-row items-start">
                                        <p
                                            class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                                            Contact for Pricing
                                        </p>
                                    </div>
                                    <div class="w-[13vw] flex flex-row justify-between translate-x-[8.6vw] text-hover">
                                        <div
                                            class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                            <p @click="$router.push('/shop/6889f1eb8cfd586f340f0f5c')"
                                                class="text-start font-josefin-normal text-[0.8vw] font-normal text-white pr-[0.3vw]">
                                                {{ $t('mysticalExperience.details') }}
                                            </p>
                                            <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp"
                                                alt="" class="w-[1vw] h-[1vw]">
                                        </div>
                                        <div
                                            class="button-redirect text-start font-josefin-normal text-[0.8vw] font-normal text-white border-white hover:bg-white hover:text-black hover:cursor-pointer duration-500 ease-in-out border-[0.05vw] py-[0.1vw] px-[0.8vw] rounded-[0.4vw]">
                                            <p class="translate-y-[0.1vw]">{{ $t('mysticalExperience.add') }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Row 2 -->
                <div class="w-[52.5vw] flex flex-row mt-[4.8vw] justify-between">
                    <!-- Items 1 -->
                    <div class="w-[15vw] h-[23.1vw] items-2 relative layer-above">
                        <div class="w-[15vw] h-[23.1vw] thumb-layer-bottom-1 absolute top-0 left-0">
                            <div
                                class="w-[14.9vw] h-auto absolute top-0 left-0 translate-x-[0.05vw] translate-y-[0.05vw] flex justify-center">
                                <img src="../../../assets/img/Desktop/Shop/MysticalExpert/6.webp" alt="" class="">
                                <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                    style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                                <div class="absolute top-[10vw] flex flex-col items-center justify-center">
                                    <p class="text-[1.5vw] font-lemajor text-white text-center">Aura Reading<br />&
                                        Cleanes</p>
                                    <div class="w-[12vw] h-[0.05vw] bg-white"></div>
                                    <p
                                        class="text-[0.75vw] text-white font-josefin-normal font-thin w-[12vw] text-center">
                                        {{ $t('mysticalExperience.items[5].desc') }}
                                    </p>
                                </div>
                                <div class="w-[13vw] h-auto absolute flex flex-col top-[18.5vw] overflow-hidden">
                                    <div class="flex flex-row items-start">
                                        <p
                                            class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                                            Contact for Pricing
                                        </p>
                                    </div>
                                    <div class="w-[13vw] flex flex-row justify-between translate-x-[8.6vw] text-hover">
                                        <div
                                            class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                            <p @click="$router.push('/shop/6889f29a8cfd586f340f0f60')"
                                                class="text-start font-josefin-normal text-[0.8vw] font-normal text-white pr-[0.3vw]">
                                                {{ $t('mysticalExperience.details') }}
                                            </p>
                                            <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp"
                                                alt="" class="w-[1vw] h-[1vw]">
                                        </div>
                                        <div
                                            class="button-redirect text-start font-josefin-normal text-[0.8vw] font-normal text-white border-white hover:bg-white hover:text-black hover:cursor-pointer duration-500 ease-in-out border-[0.05vw] py-[0.1vw] px-[0.8vw] rounded-[0.4vw]">
                                            <p class="translate-y-[0.1vw]">{{ $t('mysticalExperience.add') }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <!-- Items 2 -->
                    <div class="w-[15vw] h-[23.1vw] items-2 relative layer-above">
                        <div class="w-[15vw] h-[23.1vw] thumb-layer-bottom-1 absolute top-0 left-0">
                            <div
                                class="w-[14.9vw] h-auto absolute top-0 left-0 translate-x-[0.05vw] translate-y-[0.05vw] flex justify-center">
                                <img src="../../../assets/img/Desktop/Shop/MysticalExpert/7.webp" alt="" class="">
                                <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                    style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                                <div class="absolute top-[12vw] flex flex-col items-center justify-center">
                                    <p class="text-[1.5vw] font-lemajor text-white">Aura Reading</p>
                                    <div class="w-[12vw] h-[0.05vw] bg-white"></div>
                                    <p
                                        class="text-[0.75vw] text-white font-josefin-normal font-thin w-[12vw] text-center">
                                        {{ $t('mysticalExperience.items[6].desc') }}
                                    </p>
                                </div>
                                <div class="w-[13vw] h-auto absolute flex flex-col top-[18.5vw] overflow-hidden">
                                    <div class="flex flex-row items-start">
                                        <p
                                            class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                                            1.000.000
                                        </p>
                                        <p
                                            class="w-full text-start font-josefin-normal text-[1vw] font-normal mt-[0.2vw] text-white">
                                            vnd</p>
                                    </div>
                                    <div class="w-[13vw] flex flex-row justify-between translate-x-[8.6vw] text-hover">
                                        <div
                                            class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                            <p @click="$router.push('/shop/6889f3158cfd586f340f0f64')"
                                                class="text-start font-josefin-normal text-[0.8vw] font-normal text-white pr-[0.3vw]">
                                                {{ $t('mysticalExperience.details') }}
                                            </p>
                                            <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp"
                                                alt="" class="w-[1vw] h-[1vw]">
                                        </div>
                                        <div
                                            class="button-redirect text-start font-josefin-normal text-[0.8vw] font-normal text-white border-white hover:bg-white hover:text-black hover:cursor-pointer duration-500 ease-in-out border-[0.05vw] py-[0.1vw] px-[0.8vw] rounded-[0.4vw]">
                                            <p class="translate-y-[0.1vw]">{{ $t('mysticalExperience.add') }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <!-- Items 3 -->
                    <div class="w-[15vw] h-[23.1vw] items-2 relative layer-above">
                        <div class="w-[15vw] h-[23.1vw] thumb-layer-bottom-1 absolute top-0 left-0">
                            <div
                                class="w-[14.9vw] h-auto absolute top-0 left-0 translate-x-[0.05vw] translate-y-[0.05vw] flex justify-center">
                                <img src="../../../assets/img/Desktop/Shop/MysticalExpert/8.webp" alt="" class="">
                                <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                    style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                                <div class="absolute top-[10vw] flex flex-col items-center justify-center">
                                    <p class="text-[1.5vw] font-lemajor text-white text-center">Full Aura<br />Cleanse
                                        Ritual</p>
                                    <div class="w-[12vw] h-[0.05vw] bg-white"></div>
                                    <p
                                        class="text-[0.75vw] text-white font-josefin-normal font-thin w-[12vw] text-center">
                                        {{ $t('mysticalExperience.items[7].desc') }}
                                    </p>
                                </div>
                                <div class="w-[13vw] h-auto absolute flex flex-col top-[18.5vw] overflow-hidden">
                                    <div class="flex flex-row items-start">
                                        <p
                                            class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                                            Contact for Pricing
                                        </p>
                                    </div>
                                    <div class="w-[13vw] flex flex-row justify-between translate-x-[8.6vw] text-hover">
                                        <div
                                            class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                            <p @click="$router.push('/shop/6889f3c98cfd586f340f0f68')"
                                                class="text-start font-josefin-normal text-[0.8vw] font-normal text-white pr-[0.3vw]">
                                                {{ $t('mysticalExperience.details') }}
                                            </p>
                                            <img src="../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp"
                                                alt="" class="w-[1vw] h-[1vw]">
                                        </div>
                                        <div
                                            class="button-redirect text-start font-josefin-normal text-[0.8vw] font-normal text-white border-white hover:bg-white hover:text-black hover:cursor-pointer duration-500 ease-in-out border-[0.05vw] py-[0.1vw] px-[0.8vw] rounded-[0.4vw]">
                                            <p class="translate-y-[0.1vw]">{{ $t('mysticalExperience.add') }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.font-lemajor {
    font-family: "TP Le Major", sans-serif;
}

.font-josefin-normal {
    font-family: "JosefinNormal", sans-serif;
}

.inner-shadow {
    text-shadow: inset 0 0 0.1vw rgba(0, 0, 0, 0.8);
}

.glow-effect {
    text-shadow: 0 0 0.05vw rgba(255, 255, 255, 0.7), 0 0 0.07vw rgba(255, 255, 255, 0.5), 0 0 0.5vw rgb(255, 255, 255), 0 0 1vw rgba(255, 255, 255, 0.2);
}


.font-lemajor {
    font-family: "TP Le Major", sans-serif;
}

.font-josefin-normal {
    font-family: "JosefinNormal", sans-serif;
}

.layer-above .layer-drop {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

.layer-above:hover .layer-drop {
    opacity: 1;
}

.text-hover {
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.layer-above:hover .text-hover {
    opacity: 1;
    transform: translateX(0) translateY(0);
}

.thumb-layer-bottom-1 {
    position: relative;
    border-radius: 0.8vw;
    overflow: hidden;
    /* Đảm bảo ::after và ::before không tràn ra ngoài */
    z-index: 1;
}

.thumb-layer-bottom-1 {
    position: relative;
    border-radius: 0.8vw;
    overflow: hidden;
    /* Đảm bảo ::after và ::before không tràn ra ngoài */
    z-index: 1;
    /* Đảm bảo nội dung bên trong (z-index:2) nổi lên trên */
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

/* Áp dụng cho cả items-1 và items-2 nếu có */
.items-1:hover .thumb-layer-bottom-1::after,
.items-2:hover .thumb-layer-bottom-1::after {
    /* Thêm .items-2 vào đây */
    opacity: 0;
}

.items-1:hover .thumb-layer-bottom-1::before,
.items-2:hover .thumb-layer-bottom-1::before {
    /* Thêm .items-2 vào đây */
    opacity: 1;
}

.thumb-layer-bottom-1>div {
    /* Nội dung thực sự bên trong thumb-layer-bottom-1 */
    position: relative;
    /* Để đảm bảo nó nổi lên trên pseudo-elements */
    z-index: 2;
}
</style>

<template>
    <div class="w-full h-auto">
        <!-- Top: product content -->
        <div class="w-full h-[80vw] relative bg-[#0D0D0D]">
            <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/StarNight.webp" alt=""
                class="w-full h-auto">
            <div class="h-[68vw] w-[75vw] top-[-34vw] left-[12.5vw] bg-[#a560ff51] rounded-[50%] absolute blur-[26vw]">
            </div>
            <div class="absolute top-[8.8vw] w-full h-auto">
                <div class="ml-[5.2vw] hover:cursor-pointer text-white text-[1.05vw] font-josefin-normal flex flex-row items-center"
                    @click="$router.push('/shop')">
                    <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/ArrowLeft.webp" alt=""
                        class="w-[1.5vw] h-[1.5vw]">
                    <p class="font-thin translate-y-[0.1vw]">Back to shop</p>
                </div>

                <!-- Information -->
                <div class="mt-[1.8vw] w-full pl-[11vw] pr-[6vw] flex flex-row justify-between">
                    <!-- Main thumb -->
                    <div class="thumb-layer-bottom w-[31vw] h-[31vw] rounded-[2vw] relative overflow-hidden">
                        <div class="image-layer absolute top-0 right-0 w-[15vw] h-[3vw] z-50 text-center flex items-center justify-center rounded-bl-[2vw]"
                            style="background: linear-gradient(90deg, #ece9e6 0%, #fff 25%, #bcbcbc 50%, #e0e0e0 75%, #a7a7a7 100%);">
                            <p class="font-lemajor text-[1.7vw] font-normal">Recommend</p>
                        </div>
                        <!-- image -->
                        <div
                            class="w-[30.8vw] h-[30.8vw] absolute top-0 left-0 translate-x-[0.1vw] translate-y-[0.1vw] rounded-[2vw] overflow-hidden">
                            <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/BackDrop.webp" alt=""
                                class="">
                            <!-- <img :src="product?.productImageUrl" alt="" class=""> -->
                        </div>
                    </div>

                    <!-- Right information -->
                    <div class="flex flex-col items-start w-[44vw]">
                        <p class="text-start text-[3.65vw] font-lemajor text-white text-glow">
                            Medusa Candle
                        </p>
                        <div
                            class="flex flex-row items-start font-josefin-normal font-light text-white text-[1.05vw] mt-[0.2vw]">
                            <p class="text">4.9</p>
                            <div class="flex flex-row ml-[0.25vw]">
                                <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/Star1.webp" alt=""
                                    class="w-[1.25vw] h-[1.25vw]">
                                <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/Star1.webp" alt=""
                                    class="w-[1.25vw] h-[1.25vw]">
                                <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/Star1.webp" alt=""
                                    class="w-[1.25vw] h-[1.25vw]">
                                <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/Star1.webp" alt=""
                                    class="w-[1.25vw] h-[1.25vw]">
                            </div>
                            <p class="text-[1.5vw] ml-[1vw] translate-y-[-0.5vw]">|</p>
                            <p class="ml-[0.5vw]">5</p>
                            <p class="font-thin ml-[0.5vw]">Product Review</p>
                            <p class="text-[1.5vw] ml-[1vw] translate-y-[-0.5vw]">|</p>
                            <p class="ml-[0.5vw]">8</p>
                            <p class="font-thin ml-[0.5vw]">Sold</p>
                        </div>
                        <div class="mt-[1.2vw] flex items-center z-50 mb-[1.2vw]"
                            @click="openWebLink('https://www.facebook.com/bupbegeisha000')">
                            <div
                                class="button-translation-parent overflow-hidden w-[12vw] h-[2.3vw] rounded-[0.6vw] bg-transparent text-white border-[0.5px] border-white flex items-center justify-center text-[1.05vw] transition-all duration-500 font-josefin-normal  hover:cursor-pointer relative">
                                <div
                                    class="absolute right-0 w-[15vw] h-[3vw] bg-[#D9D9D920] rounded-[0.9vw] translate-x-[-15vw] button-translation-child-1">
                                </div>
                                <div
                                    class="absolute right-0 w-[15vw] h-[3vw] bg-[#D9D9D960] rounded-[0.9vw] translate-x-[-17vw] button-translation-child-2">
                                </div>
                                <div
                                    class="absolute right-0 w-[15vw] h-[3vw] bg-[#D9D9D980] rounded-[0.9vw] translate-x-[-19vw] button-translation-child-3">
                                </div>
                                <p class=" z-10 translate-y-[0.1vw] font-light">Contact for Pricing</p>
                                <!-- <p class=" z-10 translate-y-[0.1vw] font-light">{{ (product?.salePrice || product?.price)?.toLocaleString() }}</p> -->
                            </div>
                        </div>
                        <!-- Description -->
                        <div class="mt-[0.5vw]">
                            <p class="text-[1.05vw] text-white font-josefin-normal font-light">
                                The most powerful magical candle ever created by Ninawitch is inspired by and channels
                                the
                                energy of the most powerful gods and goddesses in mythology. We all need a spiritual
                                guardian team to support us in different aspects of life.
                            </p>
                            <p class="text-[1.05vw] text-white font-josefin-normal font-light mt-[1vw]">
                                With three times the power of the Gaia candle, this magical candle remains effective for
                                an
                                entire year. Nina customizes each candle based on individual client needs. Additionally,
                                the
                                candle naturally promotes healing. Anyone with ill intentions towards you will cease
                                their
                                actions. Nina will personally light the candle and offer prayers tailored to each
                                client’s
                                situation, with invocations and blessings uniquely designed to align with their energy.
                                All
                                client information is kept strictly confidential.
                            </p>
                            <p class="text-[1.05vw] text-white font-josefin-normal font-light mt-[1vw]">
                                Ninawitch’s candles and products are not spells or curses and have no harmful effects.
                                They
                                are completely safe and beneficial.
                            </p>
                        </div>

                        <!-- <div class="mt-[0.5vw] text-[1.05vw] text-white font-josefin-normal font-light ">
                            {{ product?.description?.en || '' }}
                        </div> -->
                        <div class="mt-[2vw] items-start font-josefin-normal text-white text-[0.83vw]">
                            <p class="">Disclaimer</p>
                            <ul class="font-thin list-disc ml-[1vw] w-[40vw]">
                                <li>All claims for metaphysical healing from esoteric sources are not tested or proven
                                    and
                                    should not be used in place of medical advice .</li>
                                <li>The weight and size can slightly differ.</li>
                                <li>Minor scratches are possible due to handmade, natural extraction of products.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute top-[55vw] w-[90vw] h-auto left-[5vw] flex flex-col items-center">
                <p class="font-lemajor text-white text-[3.125vw] text-glow">high recommend items</p>
                <div class="w-[90vw] h-[15vw] flex flex-row space-x-[1.2vw] mt-[2vw]">
                    <!-- product 1 -->
                    <div
                        class="w-[14vw] h-[14vw] rounded-[1vw] flex justify-center items-center product_1 hover:cursor-pointer relative">

                        <div
                            class="w-[13.9vw] h-[13.9vw] translate-x-[0.025vw] translate-y-[0.025vw] bg-black rounded-[1vw] overflow-hidden image-on-border_1 relative group z-40">
                            <!-- Overlay -->
                            <div
                                class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0D0D0D60] to-transparent">
                            </div>
                            <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/SPELL.webp" alt=""
                                class="w-full h-auto">
                            <div
                                class="absolute w-[15.9vw] h-[15.9vw] top-[0vw] left-0 rounded-[1vw] opacity-0 group-hover:opacity-100 transition-all duration-500 glow-center ">
                            </div>
                            <!-- Combo Text -->
                            <div
                                class="combo-text-2 flex flex-col translate-y-[9vw] absolute top-0 items-center  w-full h-auto justify-center">
                                <div class="flex flex-row justify-between bg-green items-center w-auto">
                                    <img src="../../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                    <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.5vw]"
                                        style="transform: scaleY(0.95); letter-spacing: 0.01vw">Spell</div>
                                    <img src="../../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                </div>
                                <!-- Button -->
                                <div @click="$router.push('/shop/684851d756e40f56a3d11248')"
                                    class="combo-text-button-1 w-[12vw] h-[2vw] mt-[0.7vw] border-[0.01vw] border-white text-[white] hover:text-black hover:bg-white flex justify-center items-center font-josefin-normal text-[1.05vw] font-light rounded-[0.4vw] hover:cursor-pointer transition-all duration-500">
                                    <p class="mt-[0.1vw] ">Shop now</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- product 2 -->
                    <div
                        class="w-[14vw] h-[14vw] rounded-[1vw] flex justify-center items-center product_1 hover:cursor-pointer relative">

                        <div
                            class="w-[13.9vw] h-[13.9vw] translate-x-[0.025vw] translate-y-[0.025vw] bg-black rounded-[1vw] overflow-hidden image-on-border_1 relative group z-40">
                            <!-- Overlay -->
                            <div
                                class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0D0D0D60] to-transparent">
                            </div>
                            <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/bastet candle.webp" alt=""
                                class="w-full h-auto">
                            <div
                                class="absolute w-[15.9vw] h-[15.9vw] top-[0vw] left-0 rounded-[1vw] opacity-0 group-hover:opacity-100 transition-all duration-500 glow-center ">
                            </div>
                            <!-- Combo Text -->
                            <div
                                class="combo-text-1 flex flex-col translate-y-[9vw] absolute top-0 items-center  w-full h-auto justify-center">
                                <div class="flex flex-row justify-between bg-green items-center w-[9vw]">
                                    <img src="../../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                    <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.5vw]"
                                        style="transform: scaleY(0.95); letter-spacing: 0.01vw">Bastet Candle</div>
                                    <img src="../../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                </div>
                                <!-- Button -->
                                <div @click="$router.push('/shop/684851d756e40f56a3d11248')"
                                    class="combo-text-button-1 w-[12vw] h-[2vw] mt-[0.7vw] border-[0.01vw] border-white text-[white] hover:text-black hover:bg-white flex justify-center items-center font-josefin-normal text-[1.05vw] font-light rounded-[0.4vw] hover:cursor-pointer transition-all duration-500">
                                    <p class="mt-[0.1vw] ">Shop now</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- product 3-->
                    <div
                        class="w-[14vw] h-[14vw] rounded-[1vw] flex justify-center items-center product_1 hover:cursor-pointer relative">

                        <div
                            class="w-[13.9vw] h-[13.9vw] translate-x-[-0.025vw] translate-y-[0.025vw] bg-black rounded-[1vw] overflow-hidden image-on-border_1 relative group z-40">
                            <!-- Overlay -->
                            <div
                                class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0D0D0D60] to-transparent">
                            </div>
                            <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/gaia candle.webp" alt=""
                                class="w-full h-auto">
                            <div
                                class="absolute w-[15.9vw] h-[15.9vw] top-[0vw] left-0 rounded-[1vw] opacity-0 group-hover:opacity-100 transition-all duration-500 glow-center ">
                            </div>
                            <!-- Combo Text -->
                            <div
                                class="combo-text-1 flex flex-col translate-y-[9vw] absolute top-0 items-center  w-full h-auto justify-center">
                                <div class="flex flex-row justify-between bg-green items-center w-[9vw]">
                                    <img src="../../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                    <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.5vw]"
                                        style="transform: scaleY(0.95); letter-spacing: 0.01vw">Gaia Candle</div>
                                    <img src="../../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                </div>
                                <!-- Button -->
                                <div @click="$router.push('/shop/684851d756e40f56a3d11248')"
                                    class="combo-text-button-1 w-[12vw] h-[2vw] mt-[0.7vw] border-[0.01vw] border-white text-[white] hover:text-black hover:bg-white flex justify-center items-center font-josefin-normal text-[1.05vw] font-light rounded-[0.4vw] hover:cursor-pointer transition-all duration-500">
                                    <p class="mt-[0.1vw] ">Shop now</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- product 4-->
                    <div
                        class="w-[14vw] h-[14vw] rounded-[1vw] flex justify-center items-center product_1 hover:cursor-pointer relative">

                        <div
                            class="w-[13.9vw] h-[13.9vw] translate-x-[0.025vw] translate-y-[0.025vw] bg-black rounded-[1vw] overflow-hidden image-on-border_1 relative group z-40">
                            <!-- Overlay -->
                            <div
                                class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0D0D0D60] to-transparent">
                            </div>
                            <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/HekateCandle.webp" alt=""
                                class="w-full h-auto">
                            <div
                                class="absolute w-[15.9vw] h-[15.9vw] top-[0vw] left-0 rounded-[1vw] opacity-0 group-hover:opacity-100 transition-all duration-500 glow-center ">
                            </div>
                            <!-- Combo Text -->
                             <div
                                class="combo-text-1 flex flex-col translate-y-[9vw] absolute top-0 items-center  w-full h-auto justify-center">
                                <div class="flex flex-row justify-between bg-green items-center w-[9vw]">
                                    <img src="../../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                    <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.5vw]"
                                        style="transform: scaleY(0.95); letter-spacing: 0.01vw">Hekate Candle</div>
                                    <img src="../../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                </div>
                                <!-- Button -->
                                <div @click="$router.push('/shop/684851d756e40f56a3d11248')"
                                    class="combo-text-button-1 w-[12vw] h-[2vw] mt-[0.7vw] border-[0.01vw] border-white text-[white] hover:text-black hover:bg-white flex justify-center items-center font-josefin-normal text-[1.05vw] font-light rounded-[0.4vw] hover:cursor-pointer transition-all duration-500">
                                    <p class="mt-[0.1vw] ">Shop now</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- product 5 -->
                    <div
                        class="w-[14vw] h-[14vw] rounded-[1vw] flex justify-center items-center product_1 hover:cursor-pointer relative">

                        <div
                            class="w-[13.9vw] h-[13.9vw] translate-x-[0.025vw] translate-y-[0.025vw] bg-black rounded-[1vw] overflow-hidden image-on-border_1 relative group z-40">
                            <!-- Overlay -->
                            <div
                                class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0D0D0D60] to-transparent">
                            </div>
                            <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/LilithCandle.webp" alt=""
                                class="w-full h-auto">
                            <div
                                class="absolute w-[15.9vw] h-[15.9vw] top-[0vw] left-0 rounded-[1vw] opacity-0 group-hover:opacity-100 transition-all duration-500 glow-center ">
                            </div>
                            <!-- Combo Text -->
                            <div
                                class="combo-text-1 flex flex-col translate-y-[9vw] absolute top-0 items-center  w-full h-auto justify-center">
                                <div class="flex flex-row justify-between bg-green items-center w-[9vw]">
                                    <img src="../../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                    <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.5vw]"
                                        style="transform: scaleY(0.95); letter-spacing: 0.01vw">Lilith Candle</div>
                                    <img src="../../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                </div>
                                <!-- Button -->
                                <div @click="$router.push('/shop/684851d756e40f56a3d11248')"
                                    class="combo-text-button-1 w-[12vw] h-[2vw] mt-[0.7vw] border-[0.01vw] border-white text-[white] hover:text-black hover:bg-white flex justify-center items-center font-josefin-normal text-[1.05vw] font-light rounded-[0.4vw] hover:cursor-pointer transition-all duration-500">
                                    <p class="mt-[0.1vw] ">Shop now</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- product 6 -->
                    <div
                        class="w-[14vw] h-[14vw] rounded-[1vw] flex justify-center items-center product_1 hover:cursor-pointer relative">

                        <div
                            class="w-[13.9vw] h-[13.9vw] translate-x-[0.025vw] translate-y-[0.025vw] bg-black rounded-[1vw] overflow-hidden image-on-border_1 relative group z-40">
                            <!-- Overlay -->
                            <div
                                class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0D0D0D60] to-transparent">
                            </div>
                            <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/LuckyWallpaper.webp" alt=""
                                class="w-full h-auto">
                            <div
                                class="absolute w-[15.9vw] h-[15.9vw] top-[0vw] left-0 rounded-[1vw] opacity-0 group-hover:opacity-100 transition-all duration-500 glow-center ">
                            </div>
                            <!-- Combo Text -->
                            <div
                                class="combo-text-1 flex flex-col translate-y-[9vw] absolute top-0 items-center w-full h-auto justify-center">
                                <div class="flex flex-row justify-between bg-green items-center w-[11vw]">
                                    <img src="../../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                    <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.5vw]"
                                        style="transform: scaleY(0.95); letter-spacing: 0.01vw">Lucky Wallpaper</div>
                                    <img src="../../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto">
                                </div>
                                <!-- Button -->
                                <div @click="$router.push('/shop/684851d756e40f56a3d11248')"
                                    class="combo-text-button-1 w-[12vw] h-[2vw] mt-[0.7vw] border-[0.01vw] border-white text-[white] hover:text-black hover:bg-white flex justify-center items-center font-josefin-normal text-[1.05vw] font-light rounded-[0.4vw] hover:cursor-pointer transition-all duration-500">
                                    <p class="mt-[0.1vw] ">Shop now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Before: comment and show -->
        <div class="w-full h-auto relative">
            <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/BackDrop.webp" alt=""
                class="w-full h-auto">
            <div class="absolute inset-0 bg-[#00000020] backdrop-blur-[1.25vw]"></div>
            <!-- layer overlay left -->
            <div class="w-[20vw] h-full bg-gradient-to-r from-[#0D0D0D] to-transparent absolute top-0 left-0"></div>
            <div class="absolute bottom-0 left-0 w-full h-[10vw] bg-gradient-to-t from-[#0D0D0D] to-transparent"></div>
            <!-- 2 layer transparent -->
            <div class="absolute top-0 left-0 w-full h-[10vw] bg-gradient-to-b from-[#0D0D0D] to-transparent"></div>
            <div class="absolute top-0 left-0 w-full h-[10vw] bg-gradient-to-b from-[#0D0D0D] to-transparent"></div>
            <div class="w-full h-auto absolute top-0 left-0 flex flex-row justify-center  translate-y-[2.5vw]">
                <div class="w-[28vw] h-[4vw] bg-[#D9D9D950] rounded-[50%] blur-[2vw]"></div>
            </div>
            <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/Layout_line.webp" alt=""
                class="w-full h-auto absolute top-0 left-0 translate-y-[-22vw]">

            <!-- Comment -->
            <div class="absolute w-[40vw] h-auto left-[5vw] top-[10vw]">
                <!-- title -->
                <p class="font-josefin-normal text-[1.25vw] text-white font-medium">
                    PRODUCT REVIEWS
                </p>

                <!-- cmt 1 -->
                <div class="w-full h-auto mt-[2.0315vw]">
                    <div class="flex flex-row font-josefin-normal">
                        <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/Ellipse44.webp" alt=""
                            class="w-[1.25vw] h-[1.25vw]">
                        <p class="text-[1.05vw] font-medium text-white pl-[0.5vw]">
                            Cheyenne Westervelt
                        </p>
                    </div>
                    <!-- Rate -->
                    <div class="flex flex-row font-josefin-normal text-[1.05vw] mt-[0.8vw]">
                        <p class="text-white font-medium">5</p>
                        <div class="flex flex-row space-x-[0.2vw] ml-[0.4vw]">
                            <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/Star1.webp" alt=""
                                class="w-[1.25] h-[1.25vw]">
                            <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/Star1.webp" alt=""
                                class="w-[1.25] h-[1.25vw]">
                            <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/Star1.webp" alt=""
                                class="w-[1.25] h-[1.25vw]">
                            <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/Star1.webp" alt=""
                                class="w-[1.25] h-[1.25vw]">
                        </div>
                        <p class="ml-[0.6vw] text-[#727272] font-light">
                            Product: Heat Stone
                        </p>
                    </div>

                    <!-- content comment -->
                    <div class="w-full h-auto mt-[1.05vw] font-josefin-normal text-[1.05vw] text-white font-light">
                        Magnificent box, I just had to add a little glue for one of the two tabs that was gone, but
                        nothing too serious. Very nice finishing work. I really like the colors!
                    </div>
                </div>

                <!-- cmt 2 -->
                <div class="w-full h-auto mt-[3.175vw]">
                    <div class="flex flex-row font-josefin-normal">
                        <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/Ellipse45.webp" alt=""
                            class="w-[1.25vw] h-[1.25vw]">
                        <p class="text-[1.05vw] font-medium text-white pl-[0.5vw]">
                            Marcus Gouse
                        </p>
                    </div>
                    <!-- Rate -->
                    <div class="flex flex-row font-josefin-normal text-[1.05vw] mt-[0.8vw]">
                        <p class="text-white font-medium">4</p>
                        <div class="flex flex-row space-x-[0.2vw] ml-[0.4vw]">
                            <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/Star1.webp" alt=""
                                class="w-[1.25] h-[1.25vw]">
                            <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/Star1.webp" alt=""
                                class="w-[1.25] h-[1.25vw]">
                            <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/Star1.webp" alt=""
                                class="w-[1.25] h-[1.25vw]">
                            <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/Star1.webp" alt=""
                                class="w-[1.25] h-[1.25vw] opacity-0">
                        </div>
                        <p class="ml-[0.6vw] text-[#727272] font-light">
                            Product: Heat Stone
                        </p>
                    </div>

                    <!-- content comment -->
                    <div class="w-full h-auto mt-[1.05vw] font-josefin-normal text-[1.05vw] text-white font-light">
                        Thank you for your beautiful pendant. I can feel the calming energy of this pendant . I will be
                        buying from you again .p.s thank you so much for my free gift also 😊
                    </div>
                </div>

                <!-- cmt 3 -->
                <div class="w-full h-auto mt-[3.175vw]">
                    <div class="flex flex-row font-josefin-normal">
                        <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/Ellipse46.webp" alt=""
                            class="w-[1.25vw] h-[1.25vw]">
                        <p class="text-[1.05vw] font-medium text-white pl-[0.5vw]">
                            Gretchen Saris
                        </p>
                    </div>
                    <!-- Rate -->
                    <div class="flex flex-row font-josefin-normal text-[1.05vw] mt-[0.8vw]">
                        <p class="text-white font-medium">5</p>
                        <div class="flex flex-row space-x-[0.2vw] ml-[0.4vw]">
                            <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/Star1.webp" alt=""
                                class="w-[1.25] h-[1.25vw]">
                            <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/Star1.webp" alt=""
                                class="w-[1.25] h-[1.25vw]">
                            <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/Star1.webp" alt=""
                                class="w-[1.25] h-[1.25vw]">
                            <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/Star1.webp" alt=""
                                class="w-[1.25] h-[1.25vw] opacity-1">
                        </div>
                        <p class="ml-[0.6vw] text-[#727272] font-light">
                            Product: Heat Stone
                        </p>
                    </div>

                    <!-- content comment -->
                    <div class="w-full h-auto mt-[1.05vw] font-josefin-normal text-[1.05vw] text-white font-light">
                        It's perfect 👌 as in. From the packaging to delivery, I have nothing else to say. This is the
                        first time I received a package, so well packed so professionally. I have already been ordered
                        from some sellers. And..... well, better, no comment. Please keep up the good job.
                    </div>
                </div>

                <!-- cmt 4 -->
                <div class="w-full h-auto mt-[3.175vw]">
                    <div class="flex flex-row font-josefin-normal">
                        <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/Ellipse47.webp" alt=""
                            class="w-[1.25vw] h-[1.25vw]">
                        <p class="text-[1.05vw] font-medium text-white pl-[0.5vw]">
                            Gretchen Saris
                        </p>
                    </div>
                    <!-- Rate -->
                    <div class="flex flex-row font-josefin-normal text-[1.05vw] mt-[0.8vw]">
                        <p class="text-white font-medium">5</p>
                        <div class="flex flex-row space-x-[0.2vw] ml-[0.4vw]">
                            <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/Star1.webp" alt=""
                                class="w-[1.25] h-[1.25vw]">
                            <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/Star1.webp" alt=""
                                class="w-[1.25] h-[1.25vw]">
                            <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/Star1.webp" alt=""
                                class="w-[1.25] h-[1.25vw]">
                            <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/Star1.webp" alt=""
                                class="w-[1.25] h-[1.25vw] opacity-1">
                        </div>
                        <p class="ml-[0.6vw] text-[#727272] font-light">
                            Product: Heat Stone
                        </p>
                    </div>

                    <!-- content comment -->
                    <div class="w-full h-auto mt-[1.05vw] font-josefin-normal text-[1.05vw] text-white font-light">
                        It was very nice dealing with Nina. I bought from her three beautiful items. He is a legit
                        seller and well known for selling genuine items in different platforms. I do recommend dealing
                        with the seller and buying her items. Thanks Nina for your patience with my lots of questions
                        and I appreciate your kindness. God bless you
                    </div>
                </div>

                <!-- cmt 5 -->
                <div class="w-full h-auto mt-[3.175vw]">
                    <div class="flex flex-row font-josefin-normal">
                        <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/Ellipse49.webp" alt=""
                            class="w-[1.25vw] h-[1.25vw]">
                        <p class="text-[1.05vw] font-medium text-white pl-[0.5vw]">
                            Haylie Gouse
                        </p>
                    </div>
                    <!-- Rate -->
                    <div class="flex flex-row font-josefin-normal text-[1.05vw] mt-[0.8vw]">
                        <p class="text-white font-medium">5</p>
                        <div class="flex flex-row space-x-[0.2vw] ml-[0.4vw]">
                            <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/Star1.webp" alt=""
                                class="w-[1.25] h-[1.25vw]">
                            <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/Star1.webp" alt=""
                                class="w-[1.25] h-[1.25vw]">
                            <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/Star1.webp" alt=""
                                class="w-[1.25] h-[1.25vw]">
                            <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/Star1.webp" alt=""
                                class="w-[1.25] h-[1.25vw] opacity-1">
                        </div>
                        <p class="ml-[0.6vw] text-[#727272] font-light">
                            Product: Heat Stone
                        </p>
                    </div>

                    <!-- content comment -->
                    <div class="w-full h-auto mt-[1.05vw] font-josefin-normal text-[1.05vw] text-white font-light">
                        WOW!Amazing and kind seller I bought 2 items from him and one i had to wait but he kept in
                        contact with me the whole time and answered all my questions fast i will buy again and again
                        from her.
                    </div>
                </div>

                <!-- Text area to post comment -->
                <div class="mt-[3.5vw]">
                    <p class="text-white text-start font-josefin-normal font-medium text-[1.05vw]">Leave comment</p>
                    <textarea
                        class="w-full h-[5.7vw] bg-[#202020] rounded-[0.45vw] border-[1px] border-[##FFFFFF] p-[0.6vw] outline-none font-josefin-normal text-[0.83vw] text-white resize-none"></textarea>
                    <div class="mt-[1.2vw] justify-end flex items-center z-50 mb-[1.2vw]">
                        <div
                            class="button-translation-parent overflow-hidden w-[12vw] h-[2.3vw] rounded-[0.6vw] bg-transparent text-white border-[0.5px] border-white flex items-center justify-center text-[1.05vw] transition-all duration-500 font-josefin-normal  hover:cursor-pointer relative">
                            <div
                                class="absolute right-0 w-[15vw] h-[3vw] bg-[#D9D9D920] rounded-[0.9vw] translate-x-[-15vw] button-translation-child-1">
                            </div>
                            <div
                                class="absolute right-0 w-[15vw] h-[3vw] bg-[#D9D9D960] rounded-[0.9vw] translate-x-[-17vw] button-translation-child-2">
                            </div>
                            <div
                                class="absolute right-0 w-[15vw] h-[3vw] bg-[#D9D9D980] rounded-[0.9vw] translate-x-[-19vw] button-translation-child-3">
                            </div>
                            <p class=" z-10 translate-y-[0.1vw] font-light">Post comment</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Product try -->
            <div class="absolute w-[40vw] h-auto right-[5vw] top-[10vw] flex flex-col items-end">
                <p class="text-[1.25vw] text-white font-medium font-josefin-normal">You may also be interested in</p>
                <!-- row 1 -->
                <div class=" flex flex-row justify-end w-full space-x-[3.8vw] mt-[2.6vw]">
                    <!-- Items 1 -->
                    <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                        <div class="relative w-full rounded-[0.8vw] flex justify-center overflow-hidden">
                            <img src="../../../../assets/img/Desktop/Shop/NinaLight/LilithCandle.webp" alt=""
                                class="w-full h-auto">
                            <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                            <div
                                class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                                <img src="../../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.2vw] h-auto">
                                <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                    style="transform: scaleY(0.95); letter-spacing: 0.01vw">Lilith Candle</div>
                                <img src="../../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.2vw] h-auto">
                            </div>
                            <!-- Layer on top -->
                            <div
                                class="w-[8vw] h-[8vw] bg-[#C05140] absolute rounded-[50%] top-[6vw] left-0 translate-x-[-10vw] blur-[5vw] layer-on-top">
                            </div>
                        </div>
                        <p class="w-full text-start font-josefin-normal text-[0.87vw] text-white font-thin mt-[1vw]">
                            A rare, powerful candle embodying Goddess Lilith symbol of perfection, intelligence,
                            strength, and allure.
                        </p>
                        <div class="flex flex-row items-start">
                            <p
                                class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                                2.222.000
                            </p>
                            <p
                                class="w-full text-start font-josefin-normal text-[1vw] font-normal translate-x-[-1.2vw] mt-[0.2vw] text-white">
                                vnd</p>
                        </div>

                        <!-- Add to Cart -->
                        <div class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw]">
                            <div
                                class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                    Item details
                                </p>
                                <img src="../../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                    class="w-[1vw] h-[1vw]">
                            </div>
                            <div
                                class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                                <p class="translate-y-[0.1vw]">Add to cart</p>
                            </div>
                        </div>
                    </div>

                    <!-- Items 2 -->
                    <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                        <div class="relative w-full rounded-[0.8vw] flex justify-center overflow-hidden">
                            <img src="../../../../assets/img/Desktop/Shop/NinaLight/PHOENIX CANDLE.webp" alt=""
                                class="w-full h-auto">
                            <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                            <div
                                class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                                <img src="../../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.2vw] h-auto">
                                <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                    style="transform: scaleY(0.95); letter-spacing: 0.01vw">Phoenix Candle</div>
                                <img src="../../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.2vw] h-auto">
                            </div>
                            <!-- Layer on top -->
                            <div
                                class="w-[8vw] h-[8vw] bg-[#C05140] absolute rounded-[50%] top-[6vw] left-0 translate-x-[-10vw] blur-[5vw] layer-on-top">
                            </div>
                        </div>
                        <p class="w-full text-start font-josefin-normal text-[0.87vw] text-white font-thin mt-[1vw]">
                            This ritual frees you from the old, making space for growth, creativity, and strength.
                        </p>
                        <p
                            class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[1.5vw] text-white">
                            Contact for pricing
                        </p>

                        <!-- Add to Cart -->
                        <div class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw]">
                            <div
                                class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                    Item details
                                </p>
                                <img src="../../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                    class="w-[1vw] h-[1vw]">
                            </div>
                            <div
                                class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                                <p class="translate-y-[0.1vw]">Add to cart</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- row 1 -->
                <div class=" flex flex-row justify-end w-full space-x-[3.8vw] mt-[2.6vw]">
                    <!-- Items 1 -->
                    <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                        <div class="relative w-full rounded-[0.8vw] flex justify-center overflow-hidden">
                            <img src="../../../../assets/img/Desktop/Shop/NinaLight/wish candle burning.webp" alt=""
                                class="w-full h-auto">
                            <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                            <div
                                class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-[13vw]">
                                <img src="../../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.2vw] h-auto">
                                <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                    style="transform: scaleY(0.95); letter-spacing: 0.01vw">Wish candle burning</div>
                                <img src="../../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.2vw] h-auto">
                            </div>
                            <!-- Layer on top -->
                            <div
                                class="w-[8vw] h-[8vw] bg-[#C05140] absolute rounded-[50%] top-[6vw] left-0 translate-x-[-10vw] blur-[5vw] layer-on-top">
                            </div>
                        </div>
                        <p class="w-full text-start font-josefin-normal text-[0.87vw] text-white font-thin mt-[1vw]">
                            True witcher performs a candle ritual to quickly activate your short-term wishes.
                        </p>
                        <div class="flex flex-row items-start mt-[1.5vw]">
                            <p
                                class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                                400.000
                            </p>
                            <p
                                class="w-full text-start font-josefin-normal text-[1vw] font-normal translate-x-[-2vw] mt-[0.2vw] text-white">
                                vnd</p>
                        </div>

                        <!-- Add to Cart -->
                        <div class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw]">
                            <div
                                class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                    Item details
                                </p>
                                <img src="../../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                    class="w-[1vw] h-[1vw]">
                            </div>
                            <div
                                class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                                <p class="translate-y-[0.1vw]">Add to cart</p>
                            </div>
                        </div>
                    </div>

                    <!-- Items 2 -->
                    <div class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                        <div class="relative w-full rounded-[0.8vw] flex justify-center overflow-hidden">
                            <img src="../../../../assets/img/Desktop/Shop/NinaLight/HekateCandle.webp" alt=""
                                class="w-full h-auto">
                            <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                            <div
                                class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                                <img src="../../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.2vw] h-auto">
                                <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.3vw]"
                                    style="transform: scaleY(0.95); letter-spacing: 0.01vw">Hekate Candle</div>
                                <img src="../../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.2vw] h-auto">
                            </div>
                            <!-- Layer on top -->
                            <div
                                class="w-[8vw] h-[8vw] bg-[#C05140] absolute rounded-[50%] top-[6vw] left-0 translate-x-[-10vw] blur-[5vw] layer-on-top">
                            </div>
                        </div>
                        <p class="w-full text-start font-josefin-normal text-[0.87vw] text-white font-thin mt-[1vw]">
                            This candle is lit on special occasions in the annual "witch's calendar."
                        </p>
                        <div class="flex flex-row items-start mt-[1.5vw]">
                            <p
                                class="w-full text-start font-josefin-normal text-[1.39vw] font-normal mt-[0.2vw] text-white">
                                2.000.000
                            </p>
                            <p
                                class="w-full text-start font-josefin-normal text-[1vw] font-normal translate-x-[-1.2vw] mt-[0.2vw] text-white">
                                vnd</p>
                        </div>

                        <!-- Add to Cart -->
                        <div class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw]">
                            <div
                                class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] origin-bottom-left transition-all duration-300 ease-in-out">
                                <p class="text-start font-josefin-normal text-[1vw] font-normal text-white pr-[0.3vw]">
                                    Item details
                                </p>
                                <img src="../../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                    class="w-[1vw] h-[1vw]">
                            </div>
                            <div
                                class="button-redirect text-start font-josefin-normal text-[1vw] font-normal text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                                <p class="translate-y-[0.1vw]">Add to cart</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from '../../../../utils/axios'

export default {
    name: 'MedusaCandle',
    setup() {
        const product = ref(null)
        const route = useRoute()

        const fetchProduct = async () => {
            try {
                const { id } = route.params
                const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/api/products/${id}`)
                product.value = response.data
                console.log('Fetched product:', response.data)
            } catch (err) {
                console.error('Error fetching product:', err)
            }
        }

        onMounted(() => {
            fetchProduct()
        })

        const openWebLink = (url) => {
            setTimeout(() => {
                window.open(url, "_blank")
            }, 300)
        }

        return {
            product,
            openWebLink
        }
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

.thumb-layer-bottom {
    background-image:
        radial-gradient(ellipse farthest-corner at 0% 0%, white 0%, transparent 70%),
        radial-gradient(ellipse farthest-corner at 100% 100%, white 0%, transparent 70%);
}

.product_1 {
    position: relative;
    overflow: hidden;
}

.product_1::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, #fff, transparent);
    z-index: 0;
    opacity: 1;
    transition: opacity 0.7s ease-in-out;
}

.product_1::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, #fff, transparent);
    z-index: 0;
    opacity: 0;
    transition: opacity 0.7s ease-in-out;
}

.product_1:hover::before {
    opacity: 0;
}

.product_1:hover::after {
    opacity: 1;
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

.product_1 {
    position: relative;
    overflow: hidden;
}

.product_1::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, #fff, transparent);
    z-index: 0;
    opacity: 1;
    transition: opacity 0.7s ease-in-out;
}

.product_1::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, #fff, transparent);
    z-index: 0;
    opacity: 0;
    transition: opacity 0.7s ease-in-out;
}

.product_1:hover::before {
    opacity: 0;
}

.product_1:hover::after {
    opacity: 1;
}

.product_1:hover .combo-text-1 {
    transform: translateY(7vw);
    transition: all 0.7s ease-in-out;
}

.combo-text-1 {
    transform: translateY(9.5vw);
    transition: all 0.7s ease-in-out;
}

.product_1:hover .combo-text-2 {
    transform: translateY(9vw);
    transition: all 0.7s ease-in-out;
}

.combo-text-2 {
    transform: translateY(11.5vw);
    transition: all 0.7s ease-in-out;
}

.product_1:hover .combo-text-button-1:hover {
    box-shadow: 0 0 1vw rgba(255, 255, 255, 0.8);
}
</style>
<template>
    <div class="w-full h-auto relative overflow-hidden">
        <!-- Background -->
        <div class="w-full h-auto">
            <!-- black back 1 -->
            <div class="w-full h-[15vw] bg-[#0D0D0D]"></div>
            <!-- Vid bg -->
            <div class="video-background z-0 ">
                <!-- Overlay -->
                <div
                    class="w-full h-[10vw]  absolute top-0 translate-y-[10vw] bg-gradient-to-b from-transparent to-transparent via-black via-[50%]">
                </div>
                <video autoplay loop muted class="video-element">
                    <source src="../../../assets/img/Desktop/Home/Recommend/desktop_nina_bg3.webm" type="video/webm">
                </video>
                <!-- Overlay -->
                <div
                    class="w-full h-[10vw] absolute top-0 translate-y-[35.1vw] bg-gradient-to-b from-transparent to-transparent via-black via-[50%]">
                </div>
            </div>
            <!-- black back 1 -->
            <div class="w-full h-[22vw] bg-[#0D0D0D]"></div>
        </div>

        <!-- Content -->
        <div class="w-full h-auto absolute top-[3vw] left-0 flex justify-center text-center flex-col items-center z-30">
            <p class="w-[65vw] font-lemajor text-white text-[3.65vw] glow-effect">{{ $t('homeRecommend.title') }}</p>
            <div class="font-josefin-normal text-[1.05vw] text-[#fff] w-[45vw] font-thin">{{ $t('homeRecommend.description') }}</div>
            <!-- Button -->
            <div class="mt-[1.2vw] flex items-center z-50" @click="openWebLink('https://www.facebook.com/bupbegeisha000')">
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
                    <p class=" z-10 translate-y-[0.1vw] font-light">{{ $t('homeRecommend.button') }}</p>
                </div>
            </div>
        </div>

        <!-- Grid products -->
        <div class="w-full h-[20vw] absolute top-0 left-0 translate-y-[18.5vw] flex flex-col items-center z-30 ">
            <!-- Row 1 -->
            <div class="w-[75vw] h-auto flex flex-row mx-auto justify-between">
                <!-- Product 1 -->
                <div class="w-[16vw] h-[16vw] rounded-[1vw] flex justify-center items-center product_1 relative">
                    
                    <div
                        class="w-[15.8vw] h-[15.8vw] bg-black rounded-[1vw] overflow-hidden image-on-border_1 relative group z-40">
                        <!-- Overlay -->
                        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0D0D0D60] to-transparent"></div>
                        <img src="../../../assets/img/Desktop/Home/Recommend/LUCKY WALLPAPER.webp" alt=""
                            class="w-full h-auto">
                        <div
                            class="absolute w-[15.9vw] h-[15.8vw] top-[0vw] left-0 rounded-[1vw] opacity-0 group-hover:opacity-100 transition-all duration-500 glow-center ">
                        </div>
                        <!-- Combo Text -->
                        <div
                            class="combo-text-1 flex flex-col translate-y-[11.1vw] absolute top-0 items-center  w-full h-auto justify-center">
                            <div class="flex flex-row justify-between bg-green items-center w-[12vw]">
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.6vw] h-auto pr-[0.5vw]">
                                <div class="font-lemajor text-[1.5vw] text-center font-thin text-white font-thin-force" style="transform: scaleY(0.95); letter-spacing: 0.01vw">Lucky Wallpaper</div>
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.6vw] h-auto pl-[0.5vw]">
                            </div>
                            <!-- Button -->
                            <div   
                                @click="$router.push(`/shop/6889e0568cfd586f340f0ec2`)"
                                class="combo-text-button-1 w-[12vw] h-[2vw] mt-[0.2vw] border-[0.01vw] border-white text-[white] hover:text-black hover:bg-white flex justify-center items-center font-josefin-normal text-[1.05vw] font-light rounded-[0.4vw] hover:cursor-pointer transition-all duration-500">
                                <p class="mt-[0.1vw] ">{{ $t('homeRecommend.shopNow') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Product 2 -->
                <div class="w-[16vw] h-[16vw] rounded-[1vw] flex justify-center items-center product_1 relative">
                    <div
                        class="w-[15.8vw] h-[15.8vw] bg-black rounded-[1vw] overflow-hidden image-on-border_1 relative group z-40">
                        <!-- Overlay -->
                        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0D0D0D60] to-transparent"></div>
                        <img src="../../../assets/img/Desktop/Home/Recommend/LILITH CANDLE.webp" alt=""
                            class="w-full h-auto">
                        <div
                            class="absolute w-[15.9vw] h-[15.8vw] top-[0vw] left-0 rounded-[1vw] opacity-0 group-hover:opacity-100 transition-all duration-500 glow-center ">
                        </div>
                        <!-- Combo Text -->
                        <div
                            class="combo-text-2 flex flex-col translate-y-[13vw] absolute top-0 items-center  w-full h-auto justify-center">
                            <div class="flex flex-row justify-between bg-green items-center w-auto">
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.2vw] h-auto">
                                <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force" style="transform: scaleY(0.95); letter-spacing: 0.01vw">Lilith Candle</div>
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.2vw] h-auto">
                            </div>
                            <!-- Button -->
                            <div
                                @click="$router.push(`/shop/68480d4b4f5c0116dbc64dfe`)"
                                class="combo-text-button-1 w-[12vw] h-[2vw] mt-[0.7vw] border-[0.01vw] border-white text-[white] hover:text-black hover:bg-white flex justify-center items-center font-josefin-normal text-[1.05vw] font-light rounded-[0.4vw] hover:cursor-pointer transition-all duration-500">
                                <p class="mt-[0.1vw] ">{{ $t('homeRecommend.shopNow') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Product 3 -->
                <div class="w-[16vw] h-[16vw] rounded-[1vw] flex justify-center items-center product_1 relative">
                    <div class="absolute top-0 right-0 w-[7.5vw] h-[1.5vw] z-50 text-center flex items-center justify-center rounded-bl-[0.8vw]" style="background: linear-gradient(90deg, #ece9e6 0%, #fff 25%, #bcbcbc 50%, #e0e0e0 75%, #a7a7a7 100%);">
                        <p class="font-lemajor text-[0.85vw] font-normal">{{ $t('homeRecommend.recommendLabel') }}</p>
                    </div>
                    <div
                        class="w-[15.8vw] h-[15.8vw] bg-black rounded-[1vw] overflow-hidden image-on-border_1 relative group z-40">
                        <!-- Overlay -->
                        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0D0D0D60] to-transparent"></div>
                        <img src="../../../assets/img/Desktop/Home/Recommend/MEDUSA CANDLE.webp" alt=""
                            class="w-full h-auto">
                        <div
                            class="absolute w-[15.9vw] h-[15.8vw] top-[0vw] left-0 rounded-[1vw] opacity-0 group-hover:opacity-100 transition-all duration-500 glow-center ">
                        </div>
                        <!-- Combo Text -->
                         
                        <div
                            class="combo-text-2 flex flex-col translate-y-[13vw] absolute top-0 items-center  w-full h-auto justify-center">
                            <div class="flex flex-row justify-between bg-green items-center w-auto">
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.2vw] h-auto">
                                 <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.5vw]" style="transform: scaleY(0.95); letter-spacing: 0.01vw">Medusa Candle</div>
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.2vw] h-auto">
                            </div>
                            <!-- Button -->
                            <div
                                class="combo-text-button-1 w-[12vw] h-[2vw] mt-[0.7vw] border-[0.01vw] border-white text-[white] hover:text-black hover:bg-white flex justify-center items-center font-josefin-normal text-[1.05vw] font-light rounded-[0.4vw] hover:cursor-pointer transition-all duration-500"
                                @click="$router.push('/shop/68480e4e4f5c0116dbc64e02')">
                                <p class="mt-[0.1vw]">{{ $t('homeRecommend.shopNow') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Product 4 -->
                <div class="w-[16vw] h-[16vw] rounded-[1vw] flex justify-center items-center product_1 relative">
                    <div
                        class="w-[15.8vw] h-[15.8vw] bg-black rounded-[1vw] overflow-hidden image-on-border_1 relative group z-40">
                        <!-- Overlay -->
                        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0D0D0D60] to-transparent"></div>
                        <img src="../../../assets/img/Desktop/Home/Recommend/HEKATE CANDLE.webp" alt=""
                            class="w-full h-auto">
                        <div
                            class="absolute w-[15.9vw] h-[15.8vw] top-[0vw] left-0 rounded-[1vw] opacity-0 group-hover:opacity-100 transition-all duration-500 glow-center ">
                        </div>
                        <!-- Combo Text -->
                        <div
                            class="combo-text-2 flex flex-col translate-y-[13vw] absolute top-0 items-center  w-full h-auto justify-center">
                            <div class="flex flex-row justify-between bg-green items-center w-auto">
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.2vw] h-auto">
                                 <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.5vw]" style="transform: scaleY(0.95); letter-spacing: 0.01vw">Hekate Candle</div>
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.2vw] h-auto">
                            </div>
                            <!-- Button -->
                            <div  @click="$router.push('/shop/6848433a56e40f56a3d11244')"
                                class="combo-text-button-1 w-[12vw] h-[2vw] mt-[0.7vw] border-[0.01vw] border-white text-[white] hover:text-black hover:bg-white flex justify-center items-center font-josefin-normal text-[1.05vw] font-light rounded-[0.4vw] hover:cursor-pointer transition-all duration-500">
                                <p class="mt-[0.1vw] ">{{ $t('homeRecommend.shopNow') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Row 2 -->
            <div class="w-[75vw] h-auto flex flex-row mx-auto justify-between mt-[3.75vw]">
                <!-- Product 1 -->
                <div class="w-[16vw] h-[16vw] rounded-[1vw] flex justify-center items-center product_1 relative">
                    <div
                        class="w-[15.8vw] h-[15.8vw] bg-black rounded-[1vw] overflow-hidden image-on-border_1 relative group z-40">
                        <!-- Overlay -->
                        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0D0D0D60] to-transparent"></div>
                        <img src="../../../assets/img/Desktop/Home/Recommend/SPELL.webp" alt=""
                            class="w-full h-auto">
                        <div
                            class="absolute w-[15.9vw] h-[15.8vw] top-[0vw] left-0 rounded-[1vw] opacity-0 group-hover:opacity-100 transition-all duration-500 glow-center ">
                        </div>
                        <!-- Combo Text -->
                        <div
                            class="combo-text-2 flex flex-col translate-y-[13vw] absolute top-0 items-center  w-full h-auto justify-center">
                            <div class="flex flex-row justify-between bg-green items-center w-auto">
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.2vw] h-auto">
                                 <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.5vw]" style="transform: scaleY(0.95); letter-spacing: 0.01vw">Spell</div>
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.2vw] h-auto">
                            </div>
                            <!-- Button -->
                            <div  @click="$router.push('/shop/684851d756e40f56a3d11248')"
                                class="combo-text-button-1 w-[12vw] h-[2vw] mt-[0.7vw] border-[0.01vw] border-white text-[white] hover:text-black hover:bg-white flex justify-center items-center font-josefin-normal text-[1.05vw] font-light rounded-[0.4vw] hover:cursor-pointer transition-all duration-500">
                                <p class="mt-[0.1vw] ">{{ $t('homeRecommend.shopNow') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Product 2 -->
                <div class="w-[16vw] h-[16vw] rounded-[1vw] flex justify-center items-center product_1 relative">
                    <div
                        class="w-[15.8vw] h-[15.8vw] bg-black rounded-[1vw] overflow-hidden image-on-border_1 relative group z-40">
                        <!-- Overlay -->
                        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0D0D0D60] to-transparent"></div>
                        <img src="../../../assets/img/Desktop/Home/Recommend/POTION.webp" alt=""
                            class="w-full h-auto">
                        <div
                            class="absolute w-[15.9vw] h-[15.8vw] top-[0vw] left-0 rounded-[1vw] opacity-0 group-hover:opacity-100 transition-all duration-500 glow-center ">
                        </div>
                        <!-- Combo Text -->
                        <div
                            class="combo-text-2 flex flex-col translate-y-[13vw] absolute top-0 items-center  w-full h-auto justify-center">
                            <div class="flex flex-row justify-between bg-green items-center w-auto">
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.2vw] h-auto">
                                 <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.5vw]" style="transform: scaleY(0.95); letter-spacing: 0.01vw">Potion</div>
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.2vw] h-auto">
                            </div>
                            <!-- Button -->
                            <div @click="$router.push('/shop/6848533f56e40f56a3d1124e')"
                                class="combo-text-button-1 w-[12vw] h-[2vw] mt-[0.7vw] border-[0.01vw] border-white text-[white] hover:text-black hover:bg-white flex justify-center items-center font-josefin-normal text-[1.05vw] font-light rounded-[0.4vw] hover:cursor-pointer transition-all duration-500">
                                <p class="mt-[0.1vw] ">{{ $t('homeRecommend.shopNow') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Product 3 -->
                <div class="w-[16vw] h-[16vw] rounded-[1vw] flex justify-center items-center product_1 relative">
                    <div
                        class="w-[15.8vw] h-[15.8vw] bg-black rounded-[1vw] overflow-hidden image-on-border_1 relative group z-40">
                        <!-- Overlay -->
                        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0D0D0D60] to-transparent"></div>
                        <img src="../../../assets/img/Desktop/Home/Recommend/PHOENIX CANDLE.webp" alt=""
                            class="w-full h-auto">
                        <div
                            class="absolute w-[15.9vw] h-[15.8vw] top-[0vw] left-0 rounded-[1vw] opacity-0 group-hover:opacity-100 transition-all duration-500 glow-center ">
                        </div>
                        <!-- Combo Text -->
                        <div
                            class="combo-text-2 flex flex-col translate-y-[13vw] absolute top-0 items-center  w-full h-auto justify-center">
                            <div class="flex flex-row justify-between bg-green items-center w-auto">
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.2vw] h-auto">
                                 <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.5vw]" style="transform: scaleY(0.95); letter-spacing: 0.01vw">Phoenix Candle</div>
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.2vw] h-auto">
                            </div>
                            <!-- Button -->
                            <div @click="$router.push('/shop/684853ce56e40f56a3d11252')"
                                class="combo-text-button-1 w-[12vw] h-[2vw] mt-[0.7vw] border-[0.01vw] border-white text-[white] hover:text-black hover:bg-white flex justify-center items-center font-josefin-normal text-[1.05vw] font-light rounded-[0.4vw] hover:cursor-pointer transition-all duration-500">
                                <p class="mt-[0.1vw] ">{{ $t('homeRecommend.shopNow') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Product 4 -->
                <div class="w-[16vw] h-[16vw] rounded-[1vw] flex justify-center items-center product_1 relative">
                    <div
                        class="w-[15.8vw] h-[15.8vw] bg-black rounded-[1vw] overflow-hidden image-on-border_1 relative group z-40">
                        <!-- Overlay -->
                        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0D0D0D60] to-transparent"></div>
                        <img src="../../../assets/img/Desktop/Home/Recommend/NINAWITCH RITUAL.webp" alt=""
                            class="w-full h-auto">
                        <div
                            class="absolute w-[15.9vw] h-[15.8vw] top-[0vw] left-0 rounded-[1vw] opacity-0 group-hover:opacity-100 transition-all duration-500 glow-center ">
                        </div>
                        <!-- Combo Text -->
                        <div
                            class="combo-text-1 flex flex-col translate-y-[11vw] absolute top-0 items-center  w-full h-auto justify-center">
                            <div class="flex flex-row justify-between bg-green items-center w-[11vw]">
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.2vw] h-auto">
                                 <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force" style="transform: scaleY(0.95); letter-spacing: 0.01vw">Ninawitch Ritual</div>
                                <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.2vw] h-auto">
                            </div>
                            <!-- Button -->
                            <div
                                class="combo-text-button-1 w-[12vw] h-[2vw] mt-[0.7vw] border-[0.01vw] border-white text-[white] hover:text-black hover:bg-white flex justify-center items-center font-josefin-normal text-[1.05vw] font-light rounded-[0.4vw] hover:cursor-pointer transition-all duration-500"
                                @click="$router.push('/nina-rituals')">
                                <p class="mt-[0.1vw] ">{{ $t('homeRecommend.shopNow') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Hover place -->
         <div class=" absolute translate-y-[50vw] top-0 w-full h-[15vw] flex justify-center items-center">
            <div class="hover-on-bottom w-[30vw] h-[15vw] flex justify-center items-center">
                <div class="hover-oval-scale w-[35vw] h-[4vw] bg-white rounded-[50%] blur-[1.7vw] oval translate-y-[20vw]"></div>
            </div>
         </div>
         
    </div>
</template>

<script>
export default {
  name: 'BookingPage',
  methods: {
    openWebLink(url) {
      setTimeout(() => {
        window.open(url, "_blank");
      }, 300);
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

.inner-shadow {
    text-shadow: inset 0 0 0.1vw rgba(0, 0, 0, 0.8);
}

.glow-effect {
    text-shadow: 0 0 0.05vw rgba(255, 255, 255, 0.7), 0 0 0.07vw rgba(255, 255, 255, 0.5), 0 0 0.5vw rgb(255, 255, 255), 0 0 1vw rgba(255, 255, 255, 0.2);
}

.button-translation-parent {
    transition: all 0.8s ease-in-out;
}

.button-translation-parent:hover {
    box-shadow: 0 0 1vw rgba(255, 255, 255, 0.8);
}

.button-translation-parent:hover .button-translation-child-1 {
    transform: translateX(0);
    transition: all 0.5s ease-in-out;
}

.button-translation-parent:hover .button-translation-child-2 {
    transform: translateX(0);
    transition: all 0.8s ease-in-out;
}

.button-translation-parent:hover .button-translation-child-3 {
    transform: translateX(0);
    transition: all 1.1s ease-in-out;
}

.button-translation-child-1 {
    transform: translateX(-15vw);
    transition: all 1s ease-in-out;
}
.button-translation-child-2 {
    transform: translateX(-17vw);
    transition: all 1.6s ease-in-out;
}
.button-translation-child-3 {
    transform: translateX(-19vw);
    transition: all 2.2s ease-in-out;
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
    transform: translateY(7.5vw);
    transition: all 0.7s ease-in-out;
}

.combo-text-1 {
    transform: translateY(11.1vw);
    transition: all 0.7s ease-in-out;
}

.product_1:hover .combo-text-2 {
    transform: translateY(9.7vw);
    transition: all 0.7s ease-in-out;
}

.combo-text-2 {
    transform: translateY(13vw);
    transition: all 0.7s ease-in-out;
}

.product_1:hover .combo-text-button-1:hover {
    box-shadow: 0 0 1vw rgba(255, 255, 255, 0.8);
}

.glow-center {
    background: radial-gradient(circle, transparent 0%, rgba(0, 0, 0, 0.60) 100%);
    border: 1px solid rgba(0, 0, 0, 0.9);
    pointer-events: none;
}

.font-thin-force{
    font-weight: 100 !important;
}

.hover-on-bottom:hover .oval{
  transform: scale(2) translateY(4.3vw);
  transition: transform 0.5s ease-in-out;
}
</style>
<template>
    <div class="w-full h-[200vw] relative">
        <div class="video-background z-0 absolute top-[50vw]">
            <video autoplay loop muted playsinline class="video-element">
                <source v-if="isIOS" src="../../assets/img/Mobile/Booking/back booking mobile.mp4" type="video/mp4" />
                <source v-else src="../../assets/img/Mobile/Booking/back booking mobile.webm" type="video/webm" />
            </video>
        </div>
        <img src="../../assets/img/Mobile/Booking/line back booking.webp" alt=""
            class="w-full h-auto absolute top-[110vw] z-10">
        <div class="w-full h-auto flex flex-col items-center absolute top-[35vw]">
            <p class="text-white text-[6.5vw] text-center font-lemajor text-glow"
                v-html="t('bookingMobile.headerTitle')">
            </p>
            <p class="text-white text-[3.82vw] text-center font-light font-josefin-normal"
                v-html="t('bookingMobile.headerSubtitle')">
            </p>
        </div>
        <div class="w-full h-[12vw] bottom-[28vw] absolute flex items-center justify-center z-10">
            <div @click="openFacebook"
                class="w-[50vw] h-[10vw] flex flex-row items-center justify-center rounded-[2vw] border-white border-[0.3vw]">
                <p class="text-white font-bold text-[4.2vw] font-josefin-normal">{{ t('bookingMobile.bookingNow') }}</p>
            </div>
        </div>
        <div class="w-full h-[12vw] bottom-[10vw] absolute flex justify-center text-white text-[3.82vw] font-light text-center font-josefin-normal"
            v-html="t('bookingMobile.slotsAvailable')">
        </div>

        <div class="absolute bottom-0 w-full h-[1vw] flex flex-row items-center justify-between">
            <div class="w-[1.5vw] h-[1.5vw] bg-[#694798] rotate-[45deg]"></div>
            <div class="w-full h-[0.3vw] bg-gradient-to-r from-[#694798] via-white to-[#694798]"></div>
            <div class="w-[1.5vw] h-[1.5vw] bg-[#694798] rotate-[45deg]"></div>
        </div>
    </div>

    <div class="w-full h-[70vw] relative flex flex-col items-center">
        <p class="text-white text-[3.82vw] font-josefin-normal font-light py-[6vw]">{{
            t('bookingMobile.mysticConnections') }}</p>
        <div class="w-[65vw] h-[20vw] flex flex-row justify-between">
            <img src="../../assets/img/Mobile/Home/Nina-ico-facebook.webp" alt="" class="w-[10vw] h-[10vw]">
            <img src="../../assets/img/Mobile/Home/Nina-ico-tiktok.webp" alt="" class="w-[10vw] h-[10vw]">
            <img src="../../assets/img/Mobile/Home/Nina-ico-youtube.webp" alt="" class="w-[10vw] h-[10vw]">
            <img src="../../assets/img/Mobile/Home/Nina-ico-instagram.webp" alt="" class="w-[10vw] h-[10vw]">
        </div>
        <!-- <div class="absolute top-0 w-[50vw] h-[6vw] bg-white rounded-[50%] translate-y-[38vw] blur-[7vw] z-0"></div> -->

        <div
            class="absolute w-full h-[30vw] bg-gradient-to-r from-[#DAAFFF00] to-[#DAAFFF00] via-[#DAAFFF] flex justify-center items-center backdrop-blur-[2vw] z-10 mt-[42vw]">
            <p class="text-white text-[3.82vw] font-josefin-normal w-[84.4vw] font-light text-center"
                v-html="t('bookingMobile.videoMessage')"></p>
            <div class="absolute top-0 w-[60vw] h-[10vw] bg-[#D7AAFF] rounded-[50%] blur-[18vw]"></div>
            <div class="absolute top-0 w-[60vw] h-[5vw] bg-[#00000050] rounded-[50%] blur-[20vw]"></div>
        </div>
    </div>

    <div class="w-full h-[360vw] relative flex flex-col items-center">
        <div class="absolute w-[250vw] h-[100vw] rounded-[50%] bg-[#62709A30] blur-[58vw] translate-y-[-5vw]"></div>
        <p class="pt-[12.6vw] text-white text-[9.3vw] font-lemajor text-glow text-center"
            v-html="t('bookingMobile.pricingTitle')">
        </p>

        <img src="../../assets/img/Mobile/Booking/line back booking 2.webp" alt="" class="w-full h-auto ">

        <div class="w-full absolute mt-[45vw] flex flex-col items-center">
            <div class="flex flex-col items-center">
                <div class="flex flex-row justify-between w-[55vw] items-center">
                    <img src="../../assets/img/Mobile/Booking/NinaWitch-Star.webp" alt="" class="w-[4.5vw] h-[4.5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-center">{{
                        t('bookingMobile.oneIssueTitle') }}</p>
                    <img src="../../assets/img/Mobile/Booking/NinaWitch-Star.webp" alt="" class="w-[4.5vw] h-[4.5vw]">
                </div>
                <p class="text-white text-[3.82vw] font-josefin-normal font-light text-center"
                    v-html="t('bookingMobile.oneIssueDesc')">
                </p>
                <p class="text-white text-[3.82vw] font-josefin-normal font-light text-center"
                    v-html="t('bookingMobile.oneIssueIntuitive')">
                </p>
            </div>
            <!-- Price -->
            <div class="flex flex-col items-center pt-[7vw] w-[95vw]">
                <div class="flex flex-row justify-between w-[55vw] items-center">
                    <img src="../../assets/img/Mobile/Booking/NinaWitch-Star.webp" alt="" class="w-[4.5vw] h-[4.5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-center">{{
                        t('bookingMobile.singleQuestion') }}</p>
                    <img src="../../assets/img/Mobile/Booking/NinaWitch-Star.webp" alt="" class="w-[4.5vw] h-[4.5vw]">
                </div>
                <p class="text-white text-[3.82vw] font-josefin-normal font-light text-center">
                    70,000 VND
                </p>
            </div>
            <!-- Price -->
            <div class="flex flex-col items-center pt-[7vw] w-[95vw]">
                <div class="flex flex-row justify-between w-[55vw] items-center">
                    <img src="../../assets/img/Mobile/Booking/NinaWitch-Star.webp" alt="" class="w-[4.5vw] h-[4.5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-center">{{
                        t('bookingMobile.spiritualReading') }}</p>
                    <img src="../../assets/img/Mobile/Booking/NinaWitch-Star.webp" alt="" class="w-[4.5vw] h-[4.5vw]">
                </div>
                <p class="text-white text-[3.82vw] font-josefin-normal font-light text-center">
                    500,000 VND
                </p>
            </div>
            <!-- Price -->
            <div class="flex flex-col items-center pt-[7vw] w-[95vw]">
                <div class="flex flex-row justify-between w-auto space-x-[3vw] items-center">
                    <img src="../../assets/img/Mobile/Booking/NinaWitch-Star.webp" alt="" class="w-[4.5vw] h-[4.5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-center">{{ t('bookingMobile.pastLife')
                        }}</p>
                    <img src="../../assets/img/Mobile/Booking/NinaWitch-Star.webp" alt="" class="w-[4.5vw] h-[4.5vw]">
                </div>
                <p class="text-white text-[3.82vw] font-josefin-normal font-light text-center">
                    500,000 VND
                </p>
            </div>
            <!-- Price -->
            <div class="flex flex-col items-center pt-[7vw] w-[95vw]">
                <div class="flex flex-row justify-between w-auto space-x-[3vw] items-center">
                    <img src="../../assets/img/Mobile/Booking/NinaWitch-Star.webp" alt="" class="w-[4.5vw] h-[4.5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-center text-center"
                        v-html="t('bookingMobile.threeMonthTea')"></p>
                    <img src="../../assets/img/Mobile/Booking/NinaWitch-Star.webp" alt="" class="w-[4.5vw] h-[4.5vw]">
                </div>
                <p class="text-white text-[3.82vw] font-josefin-normal font-light text-center">
                    450,000 VND
                </p>
            </div>
            <!-- Price -->
            <div class="flex flex-col items-center pt-[7vw] w-[95vw]">
                <div class="flex flex-row justify-between w-auto space-x-[3vw] items-center">
                    <img src="../../assets/img/Mobile/Booking/NinaWitch-Star.webp" alt="" class="w-[4.5vw] h-[4.5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-center text-center"
                        v-html="t('bookingMobile.monthlyTea')"></p>
                    <img src="../../assets/img/Mobile/Booking/NinaWitch-Star.webp" alt="" class="w-[4.5vw] h-[4.5vw]">
                </div>
                <p class="text-white text-[3.82vw] font-josefin-normal font-light text-center">
                    300,000 VND
                </p>
            </div>
            <!-- Price -->
            <div class="flex flex-col items-center pt-[7vw]">
                <div class="flex flex-row justify-between w-auto space-x-[3vw] items-center">
                    <img src="../../assets/img/Mobile/Booking/NinaWitch-Star.webp" alt="" class="w-[4.5vw] h-[4.5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-center text-center">{{
                        t('bookingMobile.futureSpouse') }}
                    </p>
                    <img src="../../assets/img/Mobile/Booking/NinaWitch-Star.webp" alt="" class="w-[4.5vw] h-[4.5vw]">
                </div>
                <p class="text-white text-[3.82vw] font-josefin-normal font-light text-center">
                    500,000 VND
                </p>
            </div>
            <!-- Price -->
            <div class="flex flex-col items-center pt-[7vw] w-[95vw]">
                <div class="flex flex-row justify-between w-auto space-x-[3vw] items-center">
                    <img src="../../assets/img/Mobile/Booking/NinaWitch-Star.webp" alt="" class="w-[4.5vw] h-[4.5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-center text-center">
                        {{ t('bookingMobile.deepFeelings') }}
                    </p>
                    <img src="../../assets/img/Mobile/Booking/NinaWitch-Star.webp" alt="" class="w-[4.5vw] h-[4.5vw]">
                </div>
                <p class="text-white text-[3.82vw] font-josefin-normal font-light text-center">
                    300,000 VND
                </p>
            </div>
            <!-- Price -->
            <div class="flex flex-col items-center pt-[7vw] w-[95vw]">
                <div class="flex flex-row justify-between w-auto space-x-[3vw] items-center">
                    <img src="../../assets/img/Mobile/Booking/NinaWitch-Star.webp" alt="" class="w-[4.5vw] h-[4.5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-center text-center"
                        v-html="t('bookingMobile.careerAlign')"></p>
                    <img src="../../assets/img/Mobile/Booking/NinaWitch-Star.webp" alt="" class="w-[4.5vw] h-[4.5vw]">
                </div>
                <p class="text-white text-[3.82vw] font-josefin-normal font-light text-center">
                    350,000 VND
                </p>
            </div>
            <!-- Price -->
            <div class="flex flex-col items-center pt-[7vw] w-[95vw]">
                <div class="flex flex-row justify-between w-auto space-x-[3vw] items-center">
                    <img src="../../assets/img/Mobile/Booking/NinaWitch-Star.webp" alt="" class="w-[4.5vw] h-[4.5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-center text-center"
                        v-html="t('bookingMobile.AuraReading')"></p>
                    <img src="../../assets/img/Mobile/Booking/NinaWitch-Star.webp" alt="" class="w-[4.5vw] h-[4.5vw]">
                </div>
                <p class="text-white text-[3.82vw] font-josefin-normal font-light text-center">
                    1,000,000 VND
                </p>

                <div class="w-full h-auto flex justify-end">
                    <button @click="openDetail('AuraReading')"
                        class="px-[5vw] h-[8vw] rounded-full border-white underline text-white text-[3.6vw] font-josefin-normal z-20 active:scale-95 transition-transform ">
                        {{ t('bookingMobile.viewDetail') || 'Xem chi tiết' }}
                    </button>
                </div>
            </div>
            <!-- Price -->
            <div class="flex flex-col items-center pt-[7vw] w-[95vw]">
                <div class="flex flex-row justify-between w-auto space-x-[3vw] items-center">
                    <img src="../../assets/img/Mobile/Booking/NinaWitch-Star.webp" alt="" class="w-[4.5vw] h-[4.5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-center text-center"
                        v-html="t('bookingMobile.AuraReadingAndCleans[0]')"></p>
                    <img src="../../assets/img/Mobile/Booking/NinaWitch-Star.webp" alt="" class="w-[4.5vw] h-[4.5vw]">
                </div>
                <p class="text-white text-[3.82vw] font-josefin-normal font-light text-center"
                    v-html="t('bookingMobile.AuraReadingAndCleans[1]')">
                </p>

                <div class="w-full h-auto flex justify-end">
                    <button @click="openDetail('AuraReadingAndClean')"
                        class="px-[5vw] h-[8vw] rounded-full border-white underline text-white text-[3.6vw] font-josefin-normal z-20 active:scale-95 transition-transform ">
                        {{ t('bookingMobile.viewDetail') || 'Xem chi tiết' }}
                    </button>
                </div>
            </div>
            <!-- Price -->
            <div class="flex flex-col items-center pt-[7vw] w-[95vw]">
                <div class="flex flex-row justify-between w-auto space-x-[3vw] items-center">
                    <img src="../../assets/img/Mobile/Booking/NinaWitch-Star.webp" alt="" class="w-[4.5vw] h-[4.5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-center text-center"
                        v-html="t('bookingMobile.FullAuraCleanseRitual[0]')"></p>
                    <img src="../../assets/img/Mobile/Booking/NinaWitch-Star.webp" alt="" class="w-[4.5vw] h-[4.5vw]">
                </div>
                <p class="text-white text-[3.82vw] font-josefin-normal font-light text-center"
                    v-html="t('bookingMobile.FullAuraCleanseRitual[1]')">
                </p>

                <div class="w-full h-auto flex justify-end">
                    <button @click="openDetail('FullAuraReading')"
                        class="px-[5vw] h-[8vw] rounded-full border-white underline text-white text-[3.6vw] font-josefin-normal z-20 active:scale-95 transition-transform ">
                        {{ t('bookingMobile.viewDetail') || 'Xem chi tiết' }}
                    </button>
                </div>
            </div>
        </div>
        <div class="absolute bottom-0 w-full h-[0.5vw] from-transparent to-transparent via-white bg-gradient-to-r">
        </div>

        <div class="w-[133vw] h-[100vw] bg-[#62709A30] absolute bottom-[-50vw] rounded-[50%] blur-[34vw]"></div>
    </div>

    <div class="w-full h-[800vw] relative flex flex-col items-center overflow-hidden">

        <img src="../../assets/img/Mobile/Booking/line back booking 3.webp" alt="" class="w-full h-auto">

        <div class="w-[133vw] h-[100vw] bg-[#62709A30] absolute bottom-[100vw] rounded-[50%] blur-[34vw]"></div>

        <div class="w-full h-[20vw] absolute mt-[15vw] flex flex-col items-center">
            <p class="text-white text-[9.3vw] font-lemajor text-glow">
                {{ t('bookingMobile.topicsTitle') }}
            </p>
            <div class="flex flex-col items-center pt-[8vw]">
                <div class="flex flex-row justify-between items-center">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-center">{{ t('bookingMobile.topic01') }}
                    </p>
                </div>
                <div class="flex flex-row justify-between items-center pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-center">{{ t('bookingMobile.topic02') }}
                    </p>
                </div>
                <div class="flex flex-row justify-between items-center pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-center">{{ t('bookingMobile.topic03') }}
                    </p>
                </div>
                <div class="flex flex-row justify-between items-center pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-center">{{ t('bookingMobile.topic04') }}
                    </p>
                </div>
                <div class="flex flex-row justify-between items-center pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-center">{{ t('bookingMobile.topic05') }}
                    </p>
                </div>
                <div class="flex flex-row justify-between items-center pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-center">{{ t('bookingMobile.topic06') }}
                    </p>
                </div>
                <div class="flex flex-row justify-between items-center pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-center">{{ t('bookingMobile.topic07') }}
                    </p>
                </div>
                <div class="flex flex-row justify-between items-center pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-center"
                        v-html="t('bookingMobile.topic08')"></p>
                </div>
                <div class="flex flex-row justify-between items-center pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-center">{{ t('bookingMobile.topic09') }}
                    </p>
                </div>
                <div class="flex flex-row justify-between items-center pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-center">{{ t('bookingMobile.topic10') }}
                    </p>
                </div>
                <div class="flex flex-row justify-between items-center pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-center"
                        v-html="t('bookingMobile.topic11')"></p>
                </div>
                <div class="flex flex-row justify-between items-center pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-center"
                        v-html="t('bookingMobile.topic12')"></p>
                </div>
                <div class="flex flex-row justify-between items-center pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-center">{{ t('bookingMobile.topic13') }}
                    </p>
                </div>
                <div class="flex flex-row justify-between items-center pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-center"
                        v-html="t('bookingMobile.topic14')"></p>
                </div>
                <div class="flex flex-row justify-between items-center pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-center text-center"
                        v-html="t('bookingMobile.topic15')"></p>
                </div>
                <div class="flex flex-row justify-between items-center pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-center text-center"
                        v-html="t('bookingMobile.topic16')"></p>
                </div>
                <div class="flex flex-row justify-between items-center pt-[21.15vw]">
                    <p class="text-[9.32vw] text-white font-lemajor text-center"
                        v-html="t('bookingMobile.studyTopicTitle')"></p>
                </div>
                <div class="flex flex-row justify-between items-center pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-center text-center"
                        v-html="t('bookingMobile.study01')"></p>
                </div>
                <div class="flex flex-row justify-between items-center pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-center text-center">{{
                        t('bookingMobile.study02') }}</p>
                </div>
                <div class="flex flex-row justify-between items-center pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-center text-center"
                        v-html="t('bookingMobile.study03')"></p>
                </div>
                <div class="flex flex-row justify-between items-center pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-center text-center font-thin"
                        v-html="t('bookingMobile.studyNote')"></p>
                </div>
                <div class="flex flex-row justify-between items-center pt-[8vw] pb-[30vw]">
                    <p class="text-[3.82vw] text-white font-josefin-italic w-[95vw] text-center font-thin"
                        v-html="t('bookingMobile.studyCaution')"></p>
                </div>
            </div>

            <p class="text-white text-[9.3vw] font-lemajor text-glow">
                {{ t('bookingMobile.HowToSuggest') }}
            </p>

            <!-- Question Hot topics -->
            <p class="text-white mt-[3vw] text-[7.3vw] font-lemajor text-glow">
                {{ t('bookingMobile.suggestTitleTopicHot') }}
            </p>
            <div class="flex flex-col items-start pt-[8vw] w-[95vw]">
                <div class="flex flex-row justify-between items-start">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-start">{{
                        t('bookingMobile.hotTopics[0]') }}
                    </p>
                </div>
                <div class="flex flex-row justify-between items-start pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-start">{{
                        t('bookingMobile.hotTopics[1]') }}
                    </p>
                </div>
                <div class="flex flex-row justify-between items-start pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-start">{{
                        t('bookingMobile.hotTopics[2]') }}
                    </p>
                </div>
                <div class="flex flex-row justify-between items-start pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-start">{{
                        t('bookingMobile.hotTopics[3]') }}
                    </p>
                </div>
                <div class="flex flex-row justify-between items-start pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-start">{{
                        t('bookingMobile.hotTopics[4]') }}
                    </p>
                </div>
                <div class="flex flex-row justify-between items-start pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-start">{{
                        t('bookingMobile.hotTopics[5]') }}
                    </p>
                </div>
                <div class="flex flex-row justify-between items-start pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-start">{{
                        t('bookingMobile.hotTopics[6]') }}
                    </p>
                </div>
                <div class="flex flex-row justify-between items-start pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-start">{{
                        t('bookingMobile.hotTopics[7]') }}
                    </p>
                </div>
                <div class="flex flex-row justify-between items-start pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-start">{{
                        t('bookingMobile.hotTopics[8]') }}
                    </p>
                </div>
            </div>

            <!-- Self Discovery -->
            <p class="text-white mt-[10vw] text-[7.3vw] font-lemajor text-glow">
                {{ t('bookingMobile.suggestTitleSelfDiscovery') }}
            </p>
            <div class="flex flex-col items-start pt-[8vw] w-[95vw]">
                <div class="flex flex-row justify-between items-start">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-start">{{
                        t('bookingMobile.selfDiscovery[0]') }}
                    </p>
                </div>
                <div class="flex flex-row justify-between items-start pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-start">{{
                        t('bookingMobile.selfDiscovery[1]') }}
                    </p>
                </div>
                <div class="flex flex-row justify-between items-start pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-start">{{
                        t('bookingMobile.selfDiscovery[2]') }}
                    </p>
                </div>
                <div class="flex flex-row justify-between items-start pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-start">{{
                        t('bookingMobile.selfDiscovery[3]') }}
                    </p>
                </div>
                <div class="flex flex-row justify-between items-start pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-start">{{
                        t('bookingMobile.selfDiscovery[4]') }}
                    </p>
                </div>
            </div>

            <!-- Self Discovery -->
            <p class="text-white mt-[10vw] text-[7.3vw] font-lemajor text-glow">
                {{ t('bookingMobile.suggestTitleLove') }}
            </p>
            <div class="flex flex-col items-start pt-[8vw] w-[95vw]">
                <div class="flex flex-row justify-between items-start">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-start">{{
                        t('bookingMobile.loveQuestions[0]') }}
                    </p>
                </div>
                <div class="flex flex-row justify-between items-start pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-start">{{
                        t('bookingMobile.loveQuestions[1]') }}
                    </p>
                </div>
                <div class="flex flex-row justify-between items-start pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-start">{{
                        t('bookingMobile.loveQuestions[2]') }}
                    </p>
                </div>
                <div class="flex flex-row justify-between items-start pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-start">{{
                        t('bookingMobile.loveQuestions[3]') }}
                    </p>
                </div>
                <div class="flex flex-row justify-between items-start pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-start">{{
                        t('bookingMobile.loveQuestions[4]') }}
                    </p>
                </div>
                <div class="flex flex-row justify-between items-start pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-start">{{
                        t('bookingMobile.loveQuestions[5]') }}
                    </p>
                </div>
                <div class="flex flex-row justify-between items-start pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-start">{{
                        t('bookingMobile.loveQuestions[6]') }}
                    </p>
                </div>
                <div class="flex flex-row justify-between items-start pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-start">{{
                        t('bookingMobile.loveQuestions[7]') }}
                    </p>
                </div>
                <div class="flex flex-row justify-between items-start pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-start">{{
                        t('bookingMobile.loveQuestions[8]') }}
                    </p>
                </div>
                <div class="flex flex-row justify-between items-start pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-start">{{
                        t('bookingMobile.loveQuestions[9]') }}
                    </p>
                </div>
                <div class="flex flex-row justify-between items-start pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-start">{{
                        t('bookingMobile.loveQuestions[10]') }}
                    </p>
                </div>
                <div class="flex flex-row justify-between items-start pt-[5vw]">
                    <p class="text-[3.82vw] text-white font-josefin-normal text-start">{{
                        t('bookingMobile.loveQuestions[11]') }}
                    </p>
                </div>
            </div>
        </div>

        <div class="absolute bottom-0 w-full h-[20vw] bg-white rounded-[50%] translate-y-[10vw] blur-[34vw]"></div>

        <div class="w-full h-[0.5vw] bg-gradient-to-r from-transparent to-transparent via-white absolute bottom-0">
        </div>
    </div>
    <!-- Overlay + Modal -->
    <transition name="fade">
        <div v-if="isDetailOpen" class="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50"
            @click.self="closeDetail" role="dialog" aria-modal="true">
            <transition name="slideUp">
                <div
                    class="w-full sm:w-[90vw] sm:max-w-[600px] bg-[#0D0D0D] text-white rounded-t-[4vw] sm:rounded-[3vw] p-[6vw] sm:p-[4vw] shadow-xl">
                    <!-- Header -->
                    <div class="flex items-start justify-between">
                        <h3 class="text-[5vw] sm:text-[22px] font-lemajor">
                            {{ modalTitle }}
                        </h3>
                        <button
                            class="ml-[3vw] w-[9vw] h-[9vw] sm:w-[36px] sm:h-[36px] grid place-items-center rounded-full active:scale-95 transition"
                            @click="closeDetail" aria-label="Close">
                            ✕
                        </button>
                    </div>

                    <!-- Content -->
                    <div
                        class="mt-[4vw] text-[3.8vw] sm:text-[15px] font-josefin-normal font-light leading-[6vw] sm:leading-7">
                        <!-- Ưu tiên lấy nội dung từ i18n -->
                        <div v-if="detailKey === 'AuraReading'" v-html="t('bookingMobile.AuraReadingDetail')"></div>

                        <div v-if="detailKey === 'AuraReadingAndClean'"
                            v-html="t('bookingMobile.AuraReadingAndCleans[2]')">
                        </div>

                        <div v-if="detailKey === 'FullAuraReading'"
                            v-html="t('bookingMobile.FullAuraCleanseRitual[2]')">
                        </div>
                    </div>

                    <!-- Footer -->
                    <div class="mt-[6vw] sm:mt-[20px] flex justify-end">
                        <button @click="closeDetail"
                            class="px-[5vw] h-[10vw] sm:h-[40px] rounded-[2vw] border-white border-[0.3vw] text-white text-[3.6vw] sm:text-[14px] font-josefin-normal active:scale-95 transition-transform">
                            {{ t('bookingMobile.close') || 'Đóng' }}
                        </button>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
    <FooterMobile />
</template>

<script setup>
import FooterMobile from './FooterMobile.vue';
import { ref, computed, watch } from 'vue';
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

const openFacebook = () => {
    window.open("https://www.facebook.com/bupbegeisha000", "_blank")
}

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

// ===== Modal state =====
const isDetailOpen = ref(false);
const detailKey = ref(null);

const openDetail = (key) => {
    detailKey.value = key;
    isDetailOpen.value = true;
};

const closeDetail = () => {
    isDetailOpen.value = false;
    setTimeout(() => { detailKey.value = null }, 200);
};

const modalTitle = computed(() => {
    if (detailKey.value === 'AuraReading') {
        return t('bookingMobile.AuraReading') || 'Đọc Hào Quang';
    } else if (detailKey.value === 'AuraReadingAndClean') {
        return t('bookingMobile.AuraReadingAndCleans[0]');
    } else if (detailKey.value === 'FullAuraReading') {
        return t('bookingMobile.FullAuraCleanseRitual[0]');
    }
    return t('bookingMobile.detail') || 'Chi tiết';
});

watch(isDetailOpen, (open) => {
    document.body.style.overflow = open ? 'hidden' : '';
});
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

/* Fade cho overlay */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.22s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Slide up cho panel */
.slideUp-enter-active,
.slideUp-leave-active {
    transition: transform 0.28s cubic-bezier(.22, .61, .36, 1), opacity 0.28s ease;
}

.slideUp-enter-from,
.slideUp-leave-to {
    transform: translateY(6vw);
    opacity: 0;
}
</style>
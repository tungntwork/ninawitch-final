<!-- src/views/Booking.vue -->
<template>
  <div class="booking bg-[#0D0D0D] pb-[2vw] overflow-hidden">
    <div class="w-full h-auto relative">
      <div class="video-background">
        <video autoplay loop muted class="video-element w-full h-auto">
          <source src="../assets/img/Desktop/Booking/back booking.webm" type="video/webm">
        </video>
      </div>
      <!-- smoke 1 -->
      <img src="../assets/img/Desktop/Booking/smoke1.webp" alt=""
        class="w-[90vw] absolute top-0 left-0  translate-x-[-30vw] translate-y-[-25vw]">
      <p class="text-white font-lemajor text-[3.83vw] absolute top-[10vw] right-[6.5vw] z-20 text-end text-glow"
        v-html="t('booking.heading.title')"></p>
      <img src="../assets/img/Desktop/Booking/line booking2.webp" alt=""
        class="w-full absolute bottom-0 translate-y-[16vw]">
      <!-- smoke 2 -->
      <img src="../assets/img/Desktop/Booking/Frame 1128.webp" alt=""
        class="w-[100vw] absolute top-0 right-0 translate-x-[40vw] translate-y-[-5vw]">
      <div class="absolute top-0 translate-y-[21vw] right-[6.5vw]">
        <p class="font-josefin-normal text-end text-[1.25vw] font-thin text-white">{{
          t('booking.heading.fullyBookedNotice') }}</p>
        <p class="font-josefin-normal text-end text-[1.25vw] font-thin text-white">{{
          t('booking.heading.availableNotice') }}</p>
      </div>

      <!-- line -->
      <img src="../assets/img/Desktop/Booking/Rectangle 1792.webp" alt="" class="w-full absolute top-[45vw] opacity-1">
      <div class="w-full absolute font-josefin-normal text-[0.9375vw] text-white font-thin text-center top-[45.7vw]">
        <p class="">{{ t('booking.philosophy.line1') }}</p>
        <p class="">{{ t('booking.philosophy.line2') }}</p>
      </div>

      <!-- Nina content middle -->
      <div class="w-full h-auto absolute top-[36vw] flex flex-col items-center">
        <p class="font-josefin-normal text-[1.02vw] font-normal text-white">{{ t('booking.follow.text') }}</p>
        <p class="font-josefin-normal text-[1.45vw] font-normal text-white mt-[1.7vw]">{{ t('booking.follow.title') }}
        </p>
        <div class="w-[16.2vw] h-[5vw] flex flex-row justify-between mt-[0.2vw]">
          <img src="../assets/img/Desktop/Booking/ic_baseline-facebook.webp" alt=""
            class="w-[2.2vw] h-[2.2vw] hover:cursor-pointer hover:scale-[1.2] transition-all duration-500 ease-in-out">
          <img src="../assets/img/Desktop/Booking/ic_baseline-tiktok.webp" alt=""
            class="w-[2.2vw] h-[2.2vw] hover:cursor-pointer hover:scale-[1.2] transition-all duration-500 ease-in-out">
          <img src="../assets/img/Desktop/Booking/bi_youtube.webp" alt=""
            class="w-[2.2vw] h-[2.2vw] hover:cursor-pointer hover:scale-[1.2] transition-all duration-500 ease-in-out">
          <img src="../assets/img/Desktop/Booking/bi_instagram.webp" alt=""
            class="w-[2.2vw] h-[2.2vw] hover:cursor-pointer hover:scale-[1.2] transition-all duration-500 ease-in-out">
        </div>
      </div>

      <!-- line right -->
      <div
        class="absolute w-[32vw] right-[6vw] top-[25.5vw] h-[0.1vw] bg-gradient-to-r from-[#BB8AFF] to-transparent via-[#FFFFFF55] via-[50%]">
      </div>
      <!-- point -->
      <div class="absolute w-[0.5vw] h-[0.5vw] right-[38vw] top-[25.3vw] rounded-full bg-[#BB8AFF]"></div>

      <!-- Button -->
      <div class="mt-[1.2vw] flex items-center z-50 absolute top-[26vw] right-[15vw]"
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
          <p class=" z-10 translate-y-[0.1vw] font-light">{{ t('booking.button') }}</p>
        </div>
      </div>
    </div>
    <div class="w-full h-auto flex flex-col items-center pt-[15vw]">
      <div class="w-[89.58vw] h-auto flex">
        <div class="flex-1 h-auto text-[2.5vw] text-white font-lemajor text-center">{{ t('booking.pricingTitle') }}
        </div>
        <div class="flex-1 h-auto text-[2.5vw] text-white font-lemajor text-center">{{ t('booking.topicTitle') }}</div>
      </div>
      <div class="w-[89.58vw] h-[0.1vw] bg-[#7D7D7D] mt-[1vw]"></div>
      <div class="w-[89.58vw] h-auto flex mt-[2vw]">
        <div class="w-[44.74vw]">
          <!-- A row -->
          <div class="ml-[3vw] flex flex-row">
            <img src="../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt=""
              class="w-[0.92vw] h-[0.92vw] mr-[1vw] mt-[0.2vw]">
            <div class="flex flex-col">
              <div class="text-white font-josefin-normal text-[1.05vw]">{{ t('booking.services.oneIssue.title') }}</div>
              <div class="text-white font-josefin-normal text-[1.05vw] font-light">
                <div
                  class="before:content-['•'] before:mr-2 text-white font-josefin-normal text-[1.05vw] font-light w-[21vw]">
                  {{ t('booking.services.oneIssue.options[0]') }}</div>
                <div
                  class="before:content-['•'] before:mr-2 text-white font-josefin-normal text-[1.05vw] font-light w-[21vw] mt-[0.5vw]">
                  {{ t('booking.services.oneIssue.options[1]') }}</div>
              </div>
            </div>
          </div>
          <!-- Row -->
          <div class="ml-[3vw] flex flex-row mt-[0.5vw]">
            <img src="../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt=""
              class="w-[0.92vw] h-[0.92vw] mr-[1vw] mt-[0.2vw]">
            <div class="text-white font-josefin-normal text-[1.05vw]">{{ t('booking.services.singleQuestion[0]') }}
            </div>
            <div class="text-white font-josefin-normal text-[1.05vw] font-light ml-[0.5vw]"> 70,000 VND</div>
          </div>
          <!-- Row -->
          <div class="ml-[3vw] flex flex-row mt-[0.5vw]">
            <img src="../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt=""
              class="w-[0.92vw] h-[0.92vw] mr-[1vw] mt-[0.2vw]">
            <div class="text-white font-josefin-normal text-[1.05vw]">{{ t('booking.services.spiritualReading[0]') }}
            </div>
            <div class="text-white font-josefin-normal text-[1.05vw] font-light ml-[0.5vw]">500,000 VND</div>
          </div>
          <!-- Row -->
          <div class="ml-[3vw] flex flex-row mt-[0.5vw]">
            <img src="../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt=""
              class="w-[0.92vw] h-[0.92vw] mr-[1vw] mt-[0.2vw]">
            <div class="text-white font-josefin-normal text-[1.05vw]">{{ t('booking.services.pastLife[0]') }}</div>
            <div class="text-white font-josefin-normal text-[1.05vw] font-light ml-[0.5vw]">500,000 VND</div>
          </div>
          <!-- Row -->
          <div class="ml-[3vw] flex flex-row mt-[0.5vw]">
            <img src="../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt=""
              class="w-[0.92vw] h-[0.92vw] mr-[1vw] mt-[0.2vw]">
            <div class="text-white font-josefin-normal text-[1.05vw]">{{ t('booking.services.fortuneTea[0]') }}</div>
            <div class="text-white font-josefin-normal text-[1.05vw] font-light ml-[0.5vw]"> 450,000 VND</div>
          </div>
          <!-- Row -->
          <div class="ml-[3vw] flex flex-row mt-[0.5vw]">
            <img src="../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt=""
              class="w-[0.92vw] h-[0.92vw] mr-[1vw] mt-[0.2vw]">
            <div class="text-white font-josefin-normal text-[1.05vw]">{{ t('booking.services.monthlyTea[0]') }}
            </div>
            <div class="text-white font-josefin-normal text-[1.05vw] font-light ml-[0.5vw]"> 300,000 VND</div>
          </div>
          <!-- Row -->
          <div class="ml-[3vw] flex flex-row mt-[0.5vw]">
            <img src="../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt=""
              class="w-[0.92vw] h-[0.92vw] mr-[1vw] mt-[0.2vw]">
            <div class="text-white font-josefin-normal text-[1.05vw]">{{ t('booking.services.futureSpouse[0]') }}</div>
            <div class="text-white font-josefin-normal text-[1.05vw] font-light ml-[0.5vw]"> 500,000 VND</div>
          </div>
          <!-- Row -->
          <div class="ml-[3vw] flex flex-row mt-[0.5vw]">
            <img src="../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt=""
              class="w-[0.92vw] h-[0.92vw] mr-[1vw] mt-[0.2vw]">
            <div class="text-white font-josefin-normal text-[1.05vw]">{{ t('booking.services.unspokenFeelings[0]') }}
            </div>
            <div class="text-white font-josefin-normal text-[1.05vw] font-light ml-[0.5vw]"> 300,000 VND</div>
          </div>
          <!-- Row -->
          <div class="ml-[3vw] flex flex-row mt-[0.5vw]">
            <img src="../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt=""
              class="w-[0.92vw] h-[0.92vw] mr-[1vw] mt-[0.2vw]">
            <div class="text-white font-josefin-normal text-[1.05vw]">{{ t('booking.services.careerDestiny[0]') }}</div>
            <div class="text-white font-josefin-normal text-[1.05vw] font-light ml-[0.5vw]"> 350,000 VND</div>
          </div>
          <!-- Row -->
          <div class="ml-[3vw] flex flex-row mt-[0.5vw]">
            <img src="../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt=""
              class="w-[0.92vw] h-[0.92vw] mr-[1vw] mt-[0.2vw]">
            <div class="text-white font-josefin-normal text-[1.05vw]">{{ t('booking.services.monthlyHighlight[0]') }}
            </div>
            <div class="text-white font-josefin-normal text-[1.05vw] font-light ml-[0.5vw]"> 300,000 VND</div>
          </div>
          <!-- Row -->
          <div class="ml-[3vw] flex flex-row mt-[0.5vw]">
            <img src="../assets/img/Desktop/Booking/NinaWitch-Star.webp" alt=""
              class="w-[0.92vw] h-[0.92vw] mr-[1vw] mt-[0.2vw]">
            <div class="text-white font-josefin-normal text-[1.05vw]">{{ t('booking.services.AuraReading[0]') }}</div>
            <div class="text-white font-josefin-normal text-[1.05vw] font-light ml-[0.5vw]"> 1,000,000 VND</div>
          </div>
        </div>
        <!-- Light middle -->
        <div class="w-[0.1vw] bg-gradient-to-b from-transparent to-transparent via-white"></div>
        <div class="w-[44.74vw]">
          <!-- Row -->
          <div
            class="before:content-['•'] before:mr-2 text-white font-josefin-normal text-[1.05vw] font-normal ml-[3vw] mt-[0.5vw]">
            {{ t('booking.topics[0]') }}</div>
          <!-- Row -->
          <div
            class="before:content-['•'] before:mr-2 text-white font-josefin-normal text-[1.05vw] font-normal ml-[3vw] mt-[0.5vw]">
            {{ t('booking.topics[1]') }}</div>
          <!-- Row -->
          <div
            class="before:content-['•'] before:mr-2 text-white font-josefin-normal text-[1.05vw] font-normal ml-[3vw] mt-[0.5vw]">
            {{ t('booking.topics[2]') }}</div>
          <!-- Row -->
          <div
            class="before:content-['•'] before:mr-2 text-white font-josefin-normal text-[1.05vw] font-normal ml-[3vw] mt-[0.5vw]">
            {{ t('booking.topics[3]') }}</div>
          <!-- Row -->
          <div
            class="before:content-['•'] before:mr-2 text-white font-josefin-normal text-[1.05vw] font-normal ml-[3vw] mt-[0.5vw]">
            {{ t('booking.topics[4]') }}</div>
          <!-- Row -->
          <div
            class="before:content-['•'] before:mr-2 text-white font-josefin-normal text-[1.05vw] font-normal ml-[3vw] mt-[0.5vw]">
            {{ t('booking.topics[5]') }}</div>
          <!-- Row -->
          <div
            class="before:content-['•'] before:mr-2 text-white font-josefin-normal text-[1.05vw] font-normal ml-[3vw] mt-[0.5vw]">
            {{ t('booking.topics[6]') }}</div>
          <!-- Row -->
          <div
            class="before:content-['•'] before:mr-2 text-white font-josefin-normal text-[1.05vw] font-normal ml-[3vw] mt-[0.5vw]">
            {{ t('booking.topics[7]') }}</div>
          <!-- Row -->
          <div
            class="before:content-['•'] before:mr-2 text-white font-josefin-normal text-[1.05vw] font-normal ml-[3vw] mt-[0.5vw]">
            {{ t('booking.topics[8]') }}</div>
          <!-- Row -->
          <div
            class="before:content-['•'] before:mr-2 text-white font-josefin-normal text-[1.05vw] font-normal ml-[3vw] mt-[0.5vw]">
            {{ t('booking.topics[9]') }}</div>
          <!-- Row -->
          <div
            class="before:content-['•'] before:mr-2 text-white font-josefin-normal text-[1.05vw] font-normal ml-[3vw] mt-[0.5vw]">
            {{ t('booking.topics[10]') }}</div>
          <!-- Row -->
          <div
            class="before:content-['•'] before:mr-2 text-white font-josefin-normal text-[1.05vw] font-normal ml-[3vw] mt-[0.5vw]">
            {{ t('booking.topics[11]') }}</div>
          <!-- Row -->
          <div
            class="before:content-['•'] before:mr-2 text-white font-josefin-normal text-[1.05vw] font-normal ml-[3vw] mt-[0.5vw]">
            {{ t('booking.topics[12]') }}</div>
          <!-- Row -->
          <div
            class="before:content-['•'] before:mr-2 text-white font-josefin-normal text-[1.05vw] font-normal ml-[3vw] mt-[0.5vw]">
            {{ t('booking.topics[13]') }}</div>
          <!-- Row -->
          <div
            class="before:content-['•'] before:mr-2 text-white font-josefin-normal text-[1.05vw] font-normal ml-[3vw] mt-[0.5vw]">
            {{ t('booking.topics[14]') }}</div>
          <!-- Row -->
          <div
            class="before:content-['•'] before:mr-2 text-white font-josefin-normal text-[1.05vw] font-normal ml-[3vw] mt-[0.5vw]">
            {{ t('booking.topics[15]') }}</div>

        </div>
      </div>
      <!-- Summary information -->
      <div class="w-[50vw] h-auto mt-[2vw] text-center">
        <div class=" text-[1.5625vw] text-white font-lemajor ">{{ t('booking.academicTitle') }}</div>

        <div
          class="before:content-['•'] before:mr-2 text-white font-josefin-normal text-[1.05vw] font-light ml-[3vw] mt-[2.5vw] translate-x-[-2vw]">
          {{ t('booking.academic.line1') }}</div>
        <div
          class="before:content-['•'] before:mr-2 text-white font-josefin-normal text-[1.05vw] font-light ml-[3vw] mt-[0.5vw] translate-x-[-2vw]">
          {{ t('booking.academic.line2') }}</div>
        <div
          class="before:content-['•'] before:mr-2 text-white font-josefin-normal text-[1.05vw] font-light ml-[3vw] mt-[0.5vw] translate-x-[-2vw]">
          {{ t('booking.academic.line3') }}</div>
        <div class=" text-white font-josefin-normal text-[1.05vw] font-light ml-[3vw] mt-[0.5vw] translate-x-[-2vw]">{{
          t('booking.academic.line4') }}</div>
      </div>
      <!-- Line sieu mo -->
      <div class=" text-white font-josefin-normal text-[1.05vw] font-thin ml-[3vw] mt-[1.5vw] translate-x-[-1.5vw]">{{
        t('booking.academic.line5') }}</div>
      <!-- Line end -->
      <div class="w-[89.58vw] h-[0.1vw] bg-[#7D7D7D] mt-[1vw] relative flex items-center z-30">
        <span class="absolute left-0 w-[0.4vw] h-[0.4vw] bg-[#7D7D7D] rounded-full"></span>
        <span class="absolute right-0 w-[0.4vw] h-[0.4vw] bg-[#7D7D7D] rounded-full"></span>
      </div>

      <!-- Suggest -->
      <div class=" text-[2.1vw] mt-[2vw] text-white font-lemajor ">{{ t('booking.HowToSuggest') }}</div>
      <!-- Content Suggest -->
      <div class="w-[89.58vw] h-auto flex mt-[2vw]">
        <!-- 1 -->
        <div class="w-[28.5vw]">
          <div class=" text-[1.5625vw] text-white font-lemajor w-[28.5vw] text-center my-[2vw] ">{{
            t('booking.suggestTitleSelfDiscovery') }}
          </div>
          <!-- A row -->
          <div class="ml-[3vw] flex flex-row">

            <div class="flex flex-col">
              <div class="text-white font-josefin-normal text-[1.05vw] w-[25vw]">{{ t('booking.hotTopics[0]') }}</div>
            </div>
          </div>
          <!-- Row -->
          <div class="ml-[3vw] flex flex-row mt-[0.5vw]">
            <div class="text-white font-josefin-normal text-[1.05vw] w-[25vw]">{{ t('booking.hotTopics[1]') }}
            </div>
          </div>
          <!-- Row -->
          <div class="ml-[3vw] flex flex-row mt-[0.5vw]">
            <div class="text-white font-josefin-normal text-[1.05vw] w-[25vw]">{{ t('booking.hotTopics[2]') }}
            </div>
          </div>
          <!-- Row -->
          <div class="ml-[3vw] flex flex-row mt-[0.5vw]">
            <div class="text-white font-josefin-normal text-[1.05vw] w-[25vw]">{{ t('booking.hotTopics[3]') }}</div>
          </div>
          <!-- Row -->
          <div class="ml-[3vw] flex flex-row mt-[0.5vw]">
            <div class="text-white font-josefin-normal text-[1.05vw] w-[25vw]">{{ t('booking.hotTopics[4]') }}</div>
          </div>
          <!-- Row -->
          <div class="ml-[3vw] flex flex-row mt-[0.5vw]">
            <div class="text-white font-josefin-normal text-[1.05vw] w-[25vw]">{{ t('booking.hotTopics[5]') }}
            </div>
          </div>
          <!-- Row -->
          <div class="ml-[3vw] flex flex-row mt-[0.5vw]">
            <div class="text-white font-josefin-normal text-[1.05vw] w-[25vw]">{{ t('booking.hotTopics[6]') }}</div>
          </div>
          <!-- Row -->
          <div class="ml-[3vw] flex flex-row mt-[0.5vw]">
            <div class="text-white font-josefin-normal text-[1.05vw] w-[25vw]">{{ t('booking.hotTopics[7]') }}
            </div>
          </div>
          <!-- Row -->
          <div class="ml-[3vw] flex flex-row mt-[0.5vw]">
            <div class="text-white font-josefin-normal text-[1.05vw] w-[25vw]">{{ t('booking.hotTopics[8]') }}</div>
          </div>
        </div>
        <!-- Light middle -->
        <div class="w-[0.1vw] bg-gradient-to-b from-transparent to-transparent via-white"></div>
        <div class="w-[28.5vw]">
          <div class=" text-[1.5625vw] text-white font-lemajor w-[28.5vw] text-center my-[2vw] ">{{
            t('booking.suggestTitleTopicHot') }}
          </div>
          <!-- Row -->
          <div class=" text-white font-josefin-normal text-[1.05vw] w-[25vw] font-normal ml-[3vw] mt-[0.5vw]">
            {{ t('booking.loveQuestions[0]') }}</div>
          <!-- Row -->
          <div class=" text-white font-josefin-normal text-[1.05vw] w-[25vw] font-normal ml-[3vw] mt-[0.5vw]">
            {{ t('booking.loveQuestions[1]') }}</div>
          <!-- Row -->
          <div class=" text-white font-josefin-normal text-[1.05vw] w-[25vw] font-normal ml-[3vw] mt-[0.5vw]">
            {{ t('booking.loveQuestions[2]') }}</div>
          <!-- Row -->
          <div class=" text-white font-josefin-normal text-[1.05vw] w-[25vw] font-normal ml-[3vw] mt-[0.5vw]">
            {{ t('booking.loveQuestions[3]') }}</div>
          <!-- Row -->
          <div class=" text-white font-josefin-normal text-[1.05vw] w-[25vw] font-normal ml-[3vw] mt-[0.5vw]">
            {{ t('booking.loveQuestions[4]') }}</div>
          <!-- Row -->
          <div class=" text-white font-josefin-normal text-[1.05vw] w-[25vw] font-normal ml-[3vw] mt-[0.5vw]">
            {{ t('booking.loveQuestions[5]') }}</div>
          <!-- Row -->
          <div class=" text-white font-josefin-normal text-[1.05vw] w-[25vw] font-normal ml-[3vw] mt-[0.5vw]">
            {{ t('booking.loveQuestions[6]') }}</div>
          <!-- Row -->
          <div class=" text-white font-josefin-normal text-[1.05vw] w-[25vw] font-normal ml-[3vw] mt-[0.5vw]">
            {{ t('booking.loveQuestions[7]') }}</div>
          <!-- Row -->
          <div class=" text-white font-josefin-normal text-[1.05vw] w-[25vw] font-normal ml-[3vw] mt-[0.5vw]">
            {{ t('booking.loveQuestions[8]') }}</div>
          <!-- Row -->
          <div class=" text-white font-josefin-normal text-[1.05vw] w-[25vw] font-normal ml-[3vw] mt-[0.5vw]">
            {{ t('booking.loveQuestions[10]') }}</div>
          <!-- Row -->
          <div class=" text-white font-josefin-normal text-[1.05vw] w-[25vw] font-normal ml-[3vw] mt-[0.5vw]">
            {{ t('booking.loveQuestions[11]') }}</div>
        </div>
        <!-- Light middle -->
        <div class="w-[0.1vw] bg-gradient-to-b from-transparent to-transparent via-white"></div>
        <div class="w-[28.5vw]">
          <div class=" text-[1.5625vw] text-white font-lemajor w-[28.5vw] text-center my-[2vw] ">{{
            t('booking.suggestTitleLove') }}
          </div>
          <!-- Row -->
          <div class="text-white font-josefin-normal text-[1.05vw] w-[25vw] font-normal ml-[3vw] mt-[0.5vw]">
            {{ t('booking.selfDiscovery[0]') }}</div>
          <!-- Row -->
          <div class="text-white font-josefin-normal text-[1.05vw] w-[25vw] font-normal ml-[3vw] mt-[0.5vw]">
            {{ t('booking.selfDiscovery[1]') }}</div>
          <!-- Row -->
          <div class="text-white font-josefin-normal text-[1.05vw] w-[25vw] font-normal ml-[3vw] mt-[0.5vw]">
            {{ t('booking.selfDiscovery[2]') }}</div>
          <!-- Row -->
          <div class="text-white font-josefin-normal text-[1.05vw] w-[25vw] font-normal ml-[3vw] mt-[0.5vw]">
            {{ t('booking.selfDiscovery[3]') }}</div>
          <!-- Row -->
          <div class="text-white font-josefin-normal text-[1.05vw] w-[25vw] font-normal ml-[3vw] mt-[0.5vw]">
            {{ t('booking.selfDiscovery[4]') }}</div>
          booking.selfDiscovery[1]
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
  },
  methods: {
    openWebLink(url) {
      setTimeout(() => {
        window.open(url, "_blank");
      }, 300);
    }
  }
}
</script>

<style>
/* .home {
    text-align: center;
    padding: 20px;
  } */

.text-glow {
  text-shadow: 0 0 0.1vw rgba(255, 255, 255, 0.8), 0 0 0.5vw rgba(255, 255, 255, 0.6), 0 0 3vw rgba(255, 255, 255, 0.4);
}

.font-lemajor {
  font-family: "TP Le Major", sans-serif;
}

.font-josefin-normal {
  font-family: "JosefinNormal", sans-serif;
}

.font-josefin-italic {
  font-family: "JosefinItalic", sans-serif;
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
</style>
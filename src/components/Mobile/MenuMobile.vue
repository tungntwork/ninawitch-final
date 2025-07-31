<template>
  <div class="fixed inset-0 z-[999] flex justify-end overflow-hidden" @click.self="$emit('close')">
    <img src="../../assets/img/Mobile/Home/back menu.webp" alt="" class="w-full h-auto absolute top-0 left-0 z-0" />

    <div class="w-full h-full text-white absolute top-0 left-0 z-10 overflow-hidden" @click.stop>
      <!-- Back button -->
      <div class="absolute top-[10vw] left-[5vw] z-20" @click="handleBack">
        <img src="../../assets/img/Desktop/Home/Mystery/arrow.webp" alt="" class="rotate-[-270deg] w-[5vw] h-[5vw]" />
      </div>

      <div
        class="flex flex-row items-center absolute top-[37vw] left-[38vw] px-[3vw] py-[1.5vw] rounded-[3vw] cursor-pointer text-[4.5vw] font-josefin-normal z-[30]"
        @click="toggleLanguage">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
          class="w-[5vw] h-[5vw]">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9z" />
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M3.6 9h16.8M3.6 15h16.8M12 3c2.4 3 2.4 12 0 18M12 3c-2.4 3-2.4 12 0 18" />
        </svg>
        <span class="mt-[1vw] pl-[2vw]">{{ currentLang.toUpperCase() }}</span>
      </div>

      <!-- Container with slide effect -->
      <div class="w-[300vw] h-[100vh] flex transition-transform duration-500"
        :style="{ transform: `translateX(-${currentIndex * 100}vw)` }">
        <!-- Menu -->
        <div class="w-[100vw] h-[80vh] px-[5vw] overflow-y-auto menu-side">
          <div class="mt-[60vw] text-[6vw] text-center">
            <!-- <router-link v-for="link in links" :key="link.path" :to="link.path"
              class="block py-[3vw] text-[5.8vw] text-white font-josefin-normal"
              :class="{ 'bg-gradient-to-r from-transparent to-transparent via-[#8FBAE350]': route.path === link.path }"
              @click="$emit('close')">
              {{ link.name }}
            </router-link> -->
            <router-link v-for="link in links" :key="link.path" :to="link.path"
              class="block py-[3vw] text-[5.8vw] text-white font-josefin-normal"
              :class="{ 'bg-gradient-to-r from-transparent to-transparent via-[#8FBAE350]': route.path === link.path }"
              @click="$emit('close')">
              {{ $t(`mobileMenu.menu.menuItems.${link.key}`) }}
            </router-link>
          </div>

          <!-- Login / Sign Up -->
          <div class="mt-[0vw] flex justify-center gap-[4vw]">
            <div @click="switchToSignup"
              class="w-[30vw] h-[12vw] border-white border-[0.5vw] rounded-[3vw] flex justify-center items-center text-[5.35vw] font-josefin-normal">
              {{ $t('mobileMenu.menu.login') }}
            </div>
            <div @click="switchToLogin"
              class="w-[30vw] h-[12vw] flex justify-center items-center text-[5.35vw] font-josefin-normal">
              {{ $t('mobileMenu.menu.signup') }}
            </div>
          </div>

          <!-- Footer -->
          <!-- <div class="mt-[15vw] flex flex-col items-center">
            <p class="text-[4.65vw] font-josefin-normal font-light">Mystic Connections</p>
            <div class="w-[72.5vw] h-[9.3vw] flex justify-between pt-[2vw]">
              <img src="../../assets/img/Mobile/Home/Nina-ico-facebook.webp" alt="" class="w-[9.3vw] h-[9.3vw]">
              <img src="../../assets/img/Mobile/Home/Nina-ico-tiktok.webp" alt="" class="w-[9.3vw] h-[9.3vw]">
              <img src="../../assets/img/Mobile/Home/Nina-ico-youtube.webp" alt="" class="w-[9.3vw] h-[9.3vw]">
              <img src="../../assets/img/Mobile/Home/Nina-ico-instagram.webp" alt="" class="w-[9.3vw] h-[9.3vw]">
            </div>
            <p class="text-[3.25vw] font-thin mt-[8vw] font-josefin-normal">© 2025 NinaWitch. All rights reserved.</p>
          </div> -->
          <div class="absolute bottom-[10vw] left-[15vw] flex flex-col items-center">
            <p class="text-[4.65vw] font-josefin-normal font-light">{{ $t('mobileMenu.menu.footer.connect') }}</p>
            <div class="w-[72.5vw] h-[9.3vw] flex justify-between pt-[2vw]">
              <img src="../../assets/img/Mobile/Home/Nina-ico-facebook.webp" alt="" class="w-[9.3vw] h-[9.3vw]">
              <img src="../../assets/img/Mobile/Home/Nina-ico-tiktok.webp" alt="" class="w-[9.3vw] h-[9.3vw]">
              <img src="../../assets/img/Mobile/Home/Nina-ico-youtube.webp" alt="" class="w-[9.3vw] h-[9.3vw]">
              <img src="../../assets/img/Mobile/Home/Nina-ico-instagram.webp" alt="" class="w-[9.3vw] h-[9.3vw]">
            </div>
            <p class="text-[3.25vw] font-thin mt-[8vw] font-josefin-normal">{{ $t('mobileMenu.menu.footer.copyright') }}</p>
          </div>
        </div>

        <!-- Login -->
        <div class="w-[100vw] h-full px-[10vw] pt-[50vw] overflow-y-auto signup-side">
          <div class="w-full h-auto flex flex-col items-center">
            <!-- 1 -->
            <div
              class="text-white w-[100vw] h-[25vw] relative overflow-hidden text-center text-[8.84vw] leading-[9vw] font-josefin-normal flex flex-col justify-center items-center">
              <p class="" v-html="$t('mobileMenu.menu.welcomeTitle')">
              </p>
              <div
                class="absolute bottom-[0] w-full h-[0.2vw] bg-gradient-to-r from-transparent to-transparent via-white">
              </div>
              <div
                class="absolute bottom-[0] w-full h-[0.2vw] bg-gradient-to-r from-transparent to-transparent via-white">
              </div>
              <div class="absolute bottom-[-6vw] w-[88.6vw] h-[12vw] rounded-[50%] bg-[#C4A9FF99] blur-[14vw]"></div>
            </div>
            <!-- 2 -->
            <div class="w-full h-auto flex flex-col items-center pt-[5vw]">
              <p class="text-white text-[4.18vw] font-josefin-normal font-thin text-center leading-[4.18vw]" v-html="$t('mobileMenu.menu.welcomeDesc')">
              </p>
              <div class="w-[90vw] font-josefin-normal text-white">
                <p class="text-[4.18vw] leading-[4.18vw]">{{ $t('mobileMenu.menu.username') }}</p>
                <input type="text"
                  class="w-[90vw] h-[9.3vw] rounded-[2.7vw] bg-[#F6F2F230] text-white text-[3.72vw] px-[4vw] font-josefin-normal mt-[1vw] outline-none"
                  :placeholder="$t('mobileMenu.menu.username')">
                <p class="text-[4.18vw] leading-[4.18vw] pt-[2vw]">{{ $t('mobileMenu.menu.email') }}</p>

                <input type="text"
                  class="w-[90vw] h-[9.3vw] rounded-[2.7vw] bg-[#F6F2F230] text-white text-[3.72vw] px-[4vw] font-josefin-normal mt-[1vw] outline-none"
                  :placeholder="$t('mobileMenu.menu.email')">
                <p class="text-[4.18vw] leading-[4.18vw] pt-[2vw]">{{ $t('mobileMenu.menu.password') }}</p>
                <div class="input-wrapper w-[90vw] h-[9.3vw] mt-[1vw]">
                  <input :type="showPassword ? 'text' : 'password'"
                    class="w-full h-full rounded-[2.7vw] bg-[#F6F2F230] text-white text-[3.72vw] px-[4vw] font-josefin-normal outline-none"
                    :placeholder="$t('mobileMenu.menu.password')">
                  <img :src="showPassword ? '' : ''" class="toggle-eye hidden" @click="showPassword = !showPassword" />
                </div>
                <p class="text-[4.18vw] leading-[4.18vw] pt-[2vw]">{{ $t('mobileMenu.menu.confirmPassword') }}</p>
                <div class="input-wrapper w-[90vw] h-[9.3vw] mt-[1vw]">
                  <input :type="showPassword ? 'text' : 'password'"
                    class="w-full h-full rounded-[2.7vw] bg-[#F6F2F230] text-white text-[3.72vw] px-[4vw] font-josefin-normal outline-none"
                    :placeholder="$t('mobileMenu.menu.confirmPassword')">
                  <img :src="showPassword ? '' : ''" class="toggle-eye hidden" @click="showPassword = !showPassword" />
                </div>
                <div class="w-full h-auto flex flex-row justify-between pt-[1.5vw]">
                  <input type="checkbox" class="w-[3.25vw] h-[3.25vw] bg-white">
                  <p class="text-white text-[3.25vw] font-josefin-normal font-thin">{{ $t('mobileMenu.menu.dailyWhispers') }}</p>
                </div>
              </div>

              <div
                class="w-[61.16vw] h-[10.5vw] rounded-[2.5vw] border-white border-[0.2vw] flex justify-center text-center text-white text-[4.65vw] font-josefin-normal">
                <p class="translate-y-[1.5vw]">{{ $t('mobileMenu.menu.createAccount') }}</p>
              </div>
              <p class="text-center text-white text-[3.82vw] font-josefin-normal font-thin mt-[2vw]">
                {{ $t('mobileMenu.menu.alreadyHaveAccount') }} <span class="font-normal" @click="switchToSignup">{{ $t('mobileMenu.menu.loginHere') }}</span><br />
                {{ $t('mobileMenu.menu.magicalPathNote') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Signup -->
        <div class="w-[100vw] h-full px-[10vw] pt-[50vw] overflow-y-auto login-side">
          <div class="w-full h-auto flex flex-col items-center">
            <!-- 1 -->
            <div
              class="text-white w-[100vw] h-[25vw] relative overflow-hidden text-center text-[8.84vw] leading-[9vw] font-josefin-normal flex flex-col justify-center items-center">
              <p class="" v-html="$t('mobileMenu.menu.backTitle')"></p>
              <div
                class="absolute bottom-[0] w-full h-[0.2vw] bg-gradient-to-r from-transparent to-transparent via-white">
              </div>
              <div
                class="absolute bottom-[0] w-full h-[0.2vw] bg-gradient-to-r from-transparent to-transparent via-white">
              </div>
              <div class="absolute bottom-[-6vw] w-[88.6vw] h-[12vw] rounded-[50%] bg-[#C4A9FF99] blur-[14vw]"></div>
            </div>
            <!-- 2 -->
            <div class="w-full h-auto flex flex-col items-center pt-[5vw]">
              <p
                class="text-white text-[4.18vw] font-josefin-normal font-thin text-center leading-[4.18vw] tracking-[-0.2vw]" v-html="$t('mobileMenu.menu.backDesc')">
              </p>
              <div class="w-[90vw] font-josefin-normal text-white">

                <p class="text-[4.18vw] leading-[4.18vw] pt-[5vw]">Username / Email</p>
                <input type="text"
                  class="w-[90vw] h-[9.3vw] rounded-[2.7vw] bg-[#F6F2F230] text-white text-[3.72vw] px-[4vw] font-josefin-normal mt-[1vw] outline-none"
                  :placeholder="$t('mobileMenu.menu.username')">
                <p class="text-[4.18vw] leading-[4.18vw] pt-[5vw]">Password</p>
                <div class="input-wrapper w-[90vw] h-[9.3vw] mt-[1vw]">
                  <input :type="showPassword ? 'text' : 'password'"
                    class="w-full h-full rounded-[2.7vw] bg-[#F6F2F230] text-white text-[3.72vw] px-[4vw] font-josefin-normal outline-none"
                    :placeholder="$t('mobileMenu.menu.password')">
                  <img :src="showPassword ? '' : ''" class="toggle-eye hidden" @click="showPassword = !showPassword" />
                </div>
                <div class="w-full h-auto flex flex-col items-end pt-[1.5vw]">
                  <p class="text-white text-[3.72vw] font-josefin-normal font-thin">{{ $t('mobileMenu.menu.forgotPassword') }}</p>
                  <p class="text-white text-[2.79vw] font-josefin-normal font-thin">{{ $t('mobileMenu.menu.forgotNote') }}</p>
                </div>
              </div>

              <div
                class="w-[61.16vw] h-[10.5vw] mt-[8vw] rounded-[2.5vw] border-white border-[0.2vw] flex justify-center text-center text-white text-[4.65vw] font-josefin-normal">
                <p class="translate-y-[1.5vw]">{{ $t('mobileMenu.menu.loginNow') }}</p>
              </div>
              <p class="text-center text-white text-[3.82vw] font-josefin-normal font-thin mt-[12vw]">
                {{ $t('mobileMenu.menu.newHere') }}<br />
                <span class="font-normal" @click="switchToLogin">{{ $t('mobileMenu.menu.signupNow') }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
/* global defineEmits */
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const currentLang = ref(locale.value)

const toggleLanguage = () => {
  const newLang = currentLang.value === 'vi' ? 'en' : 'vi'
  locale.value = newLang
  currentLang.value = newLang
}

const emit = defineEmits(['close'])
const route = useRoute()
const currentView = ref('menu')

const currentIndex = computed(() => {
  return currentView.value === 'menu' ? 0 : currentView.value === 'login' ? 1 : 2
})

const switchToMenu = () => currentView.value = 'menu'
const switchToLogin = () => currentView.value = 'login'
const switchToSignup = () => currentView.value = 'signup'
const showPassword = ref(false)

const handleBack = () => {
  if (currentView.value === 'menu') {
    emit('close')
  } else {
    switchToMenu()
  }
}

const links = [
  { key: 'home', path: '/' },
  { key: 'booking', path: '/booking' },
  { key: 'shop', path: '/shop' },
  { key: 'vip', path: '/vip' },
  { key: 'present', path: '/present' },
]
</script>

<style scoped>
.font-lemajor {
  font-family: "TP Le Major", sans-serif;
}

.font-josefin-normal {
  font-family: "JosefinNormal", sans-serif;
}

.menu-side,
.login-side,
.signup-side {
  -webkit-overflow-scrolling: touch;
}

.input-wrapper {
  position: relative;
}
.toggle-eye {
  position: absolute;
  top: 50%;
  right: 4vw;
  transform: translateY(-50%);
  width: 6vw;
  height: 6vw;
  cursor: pointer;
}
</style>

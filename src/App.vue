<template>
  <div ref="homeFrame" class="w-full h-auto">
    <div v-if="!isMobile" class="w-full h-auto">
      <nav
        class="fixed top-[1vw] left-0 w-full h-[4vw] bg-gradient-to-r from-transparent via-[#00000080] backdrop-blur-[1vw] to-transpare nt py-[0.4vw] z-50 flex flex-row justify-between">
        <ul class="flex w-full h-auto justify-center items-center pl-[14vw]">
          <li class="mx-[4vw]">
            <router-link to="/"
              class="text-white text-[1.05vw] font-light transition-all duration-200 ease-in-out hover:text-white shadow-glow font-josefin-normal">
              {{ t('appDesktop.home') }}
            </router-link>
          </li>
          <li class="mx-[4vw]">
            <router-link to="/booking"
              class="text-white text-[1.05vw] font-light transition-all duration-200 ease-in-out hover:text-white shadow-glow font-josefin-normal">
              {{ t('appDesktop.booking') }}
            </router-link>
          </li>
          <li class="mx-[4vw]">
            <router-link to="/shop"
              class="text-white text-[1.05vw] font-light transition-all duration-200 ease-in-out hover:text-white shadow-glow font-josefin-normal">
              {{ t('appDesktop.shop') }}
            </router-link>
          </li>
          <li class="mx-[4vw]">
            <router-link to="/vip"
              class="text-white text-[1.05vw] font-light transition-all duration-200 ease-in-out hover:text-white shadow-glow font-josefin-normal">
              {{ t('appDesktop.vip') }}
            </router-link>
          </li>
          <li class="mx-[4vw]">
            <router-link to="/present"
              class="text-white text-[1.05vw] font-light transition-all duration-200 ease-in-out hover:text-white shadow-glow font-josefin-normal">
              {{ t('appDesktop.present') }}
            </router-link>
          </li>

          <div class="text-white text-[1.05vw] mx-[1vw] relative hover:cursor-pointer select-none grayscale"
            ref="langDropdownRef"
            @click="toggleLangDropdown"> 🌐
            <span>{{ currentLangLabel }}</span>
            <div v-if="showLangDropdown"
              class="absolute top-[2.5vw] right-0 bg-[#333] text-white text-[0.9vw] rounded-[0.3vw] px-[0.5vw] py-[0.2vw] shadow-lg z-50">
              <div @click="selectLanguage('en')" class="hover:underline cursor-pointer">English</div>
              <div @click="selectLanguage('vi')" class="hover:underline cursor-pointer mt-[0.3vw]">Tiếng Việt</div>
            </div>
          </div>

        </ul>

        <div ref="dropdownRef" v-if="auth.isAuthenticated && auth.user"
          class="relative group mx-[2vw] flex items-center gap-[0.8vw]">
          <img :src="defaultAvatar" alt="avatar" @click="toggleDropdown"
            class="w-[2.5vw] h-[2.5vw] rounded-full border border-white object-cover cursor-pointer" />
          <span @click="toggleDropdown" class="cursor-pointer text-white text-[0.9vw]">{{ shortName(auth.user?.name)
          }}</span>

          <div v-if="showDropdown"
            class="absolute top-[3vw] right-0 bg-[#2e2e2e] border border-white border-opacity-10 rounded-[0.5vw] w-[12vw] shadow-lg z-50 p-[1vw]">
            <div class="text-[1.2vw] font-semibold mb-[0.5vw] text-white">{{ auth.user?.name }}</div>
            <router-link to="/profile" class="block hover:underline text-[0.95vw] text-white mb-[0.4vw]">
              {{ t('appDesktop.profile') }}
            </router-link>
            <router-link to="/change-password" class="block hover:underline text-[0.95vw] text-white mb-[0.4vw]">
              {{ t('appDesktop.changePassword') }}
            </router-link>
            <router-link v-if="auth.user?.role === 'admin'" to="/admin"
              class="block hover:underline text-[0.95vw] text-white mb-[0.4vw]">
              {{ t('appDesktop.adminPanel') }}
            </router-link>
            <div @click="handleLogout" class="block hover:underline text-[0.95vw] text-white cursor-pointer">Logout
            </div>
          </div>
        </div>
        <div v-else class="right-[2vw] top-[2.75vw] flex items-center translate-x-[-3vw]">
          <div>
            <div
              class="button-translation-parent w-[6.2vw] h-[2.3vw] rounded-[0.55vw] bg-transparent text-white border-[0.01vw] border-white flex items-center justify-center text-[1.05vw] transition-all duration-1500 font-josefin-normal hover:cursor-pointer overflow-hidden relative"
              @click="openPopupLogin">
              <div
                class="absolute right-0 w-[8vw] h-[3vw] bg-[#D9D9D920] rounded-[0.9vw] translate-x-[-15vw] button-translation-child-1">
              </div>
              <div
                class="absolute right-0 w-[8vw] h-[3vw] bg-[#D9D9D960] rounded-[0.9vw] translate-x-[-17vw] button-translation-child-2">
              </div>
              <div
                class="absolute right-0 w-[8vw] h-[3vw] bg-[#D9D9D980] rounded-[0.9vw] translate-x-[-19vw] button-translation-child-3">
              </div>
              <p class="z-10 translate-y-[0.1vw] font-light">{{ t('appDesktop.login') }}</p>
            </div>
          </div>
          <div
            class="text-white text-[1.05vw] mx-[1vw] w-[6vw] font-light transition-all duration-200 ease-in-out hover:text-white shadow-glow font-josefin-normal hover:cursor-pointer translate-y-[0.1vw]"
            @click="openPopupSignin">
            {{ t('appDesktop.signup') }}
          </div>
        </div>
      </nav>

      <router-view></router-view>
      <DesktopFooter class="relative" />

      <transition name="fade-scale">
        <div v-if="showPopupLogin"
          class="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 backdrop-blur-[1.2vw] bg-[#2e2e2e50]"
          :class="{ 'opacity-0': !showPopupLogin, 'opacity-100': showPopupLogin }" @click="closePopupLogin">
          <div ref="popupRefLogin"
            class="transition-all duration-500 max-w-[90vw] min-h-[10vw] flex flex-col items-center justify-center p-0 m-0"
            :class="{ 'opacity-0 scale-95': !showPopupLogin, 'opacity-100 scale-100': showPopupLogin }" @click.stop>
            <LoginDesktop class="z-[999]" @open-signin="switchToSignin" />
          </div>
        </div>
      </transition>

      <transition name="fade-scale">
        <div v-if="showPopupSignin"
          class="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 backdrop-blur-[1.2vw] bg-[#2e2e2e50]"
          :class="{ 'opacity-0': !showPopupSignin, 'opacity-100': showPopupSignin }" @click="closePopupSignin">
          <div ref="popupRefSignin"
            class="transition-all duration-500 max-w-[90vw] min-h-[10vw] flex flex-col items-center justify-center p-0 m-0"
            :class="{ 'opacity-0 scale-95': !showPopupSignin, 'opacity-100 scale-100': showPopupSignin }" @click.stop>
            <SigninDesktop class="z-[999]" @open-login="switchToLogin" />
          </div>
        </div>
      </transition>
    </div>

    <!-- Mobile -->
    <div v-if="isMobile" class="w-full h-auto">

      <div class="w-full h-auto flex flex-row justify-between items-center fixed top-[12vw] left-0 z-40">
        <div class="w-[100vw] h-[25vw] bg-gradient-to-b from-[#6E5080] to-transparent fixed top-0"></div>
        <!-- Logo -->
        <div class="w-auto h-[11.4vw] ml-[5vw] flex flex-row items-center absolute top-0 left-0">
          <img src="../src/assets/img/Nina-logo.webp" alt="" class="w-[11.4vw] h-[11.4vw]" />
          <div class="font-lemajor text-white text-[5.1vw] pl-[2vw]">NinaWitch’s Museum</div>
        </div>
        <!-- Nav icon -->
        <img src="../src/assets/img/Mobile/Home/bt menu.webp" alt=""
          class="w-[8.14vw] h-[8.14vw] mr-[5vw] absolute top-[1vw] right-0" @click="showMenuMobile = true">
      </div>

      <!-- <component :is="currentMobilePage" /> -->
      <router-view></router-view>
      <transition name="slide-left">
        <MenuMobile v-if="showMenuMobile" @close="showMenuMobile = false" />
      </transition>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed, onBeforeUnmount } from "vue";
import Lenis from '@studio-freight/lenis'
import DesktopFooter from "./views/DesktopFooter.vue";
import LoginDesktop from "./components/Desktop/Signin/LoginDesktop.vue"
import SigninDesktop from "./components/Desktop/Signin/SigninDesktop.vue";
import { useAuthStore } from './store/auth'
import { useLanguageStore } from './store/languague'
import { useRouter } from 'vue-router'
import HomePageMobile from "./components/Mobile/HomePageMobile.vue";
import ShopPageMobile from "./components/Mobile/ShopPageMobile.vue";
import BookingPageMobile from "./components/Mobile/BookingMobile.vue";
import PresentPageMobile from "./components/Mobile/PresentMobile.vue";
import VipPageMobile from "./components/Mobile/VipMobile.vue";
import { useRoute } from "vue-router";
import MenuMobile from "./components/Mobile/MenuMobile.vue";
import { useI18n } from "vue-i18n";

export default {
  name: 'App',
  components: {
    DesktopFooter,
    LoginDesktop,
    SigninDesktop,
    MenuMobile
  },
  setup() {

    const homeFrame = ref(null);
    const windowWidth = ref(window.innerWidth);
    const isMobile = computed(() => windowWidth.value <= 768);
    const initialIsMobile = ref(isMobile.value);
    const showPopupLogin = ref(false);
    const popupRefLogin = ref(null);
    const showPopupSignin = ref(false);
    const popupRefSignin = ref(null);
    const showMenuMobile = ref(false);
    const langDropdownRef = ref(null);

    const languageStore = useLanguageStore()
    const setLang = (lang) => languageStore.setLanguage(lang);
    const router = useRouter();

    const defaultAvatar = 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
    const dropdownRef = ref(null)
    const showDropdown = ref(false)

    const route = useRoute();

    const MobilePageMap = {
      '/': HomePageMobile,
      '/shop': ShopPageMobile,
      '/booking': BookingPageMobile,
      '/present': PresentPageMobile,
      '/vip': VipPageMobile,

    };

    const translations = {
      vi: {
        profile: 'Xem hồ sơ',
        changePassword: 'Đổi mật khẩu',
        adminPanel: 'Danh sách sản phẩm',
        home: 'NinaWitch',
        booking: 'Đặt lịch',
        shop: 'Cửa hàng',
        vip: 'VIP',
        present: 'Quà tặng',
        login: 'Đăng nhập',
        signup: 'Đăng ký'
      },
      en: {
        profile: 'View Profile',
        changePassword: 'Change Password',
        adminPanel: 'Product List',
        home: 'NinaWitch',
        booking: 'Booking',
        shop: 'Shop',
        vip: 'VIP',
        present: 'Present',
        login: 'Log in',
        signup: 'Sign Up'
      }
    };

    const currentMobilePage = computed(() => {
      return MobilePageMap[route.path] || HomePageMobile;
    });

    const shortName = (name) => {
      if (!name) return '';
      return name.length > 6 ? name.slice(0, 5) + '...' : name;
    }

    const { t, locale } = useI18n()

    const showLangDropdown = ref(false)

    function toggleLangDropdown() {
      showLangDropdown.value = !showLangDropdown.value
    }

    function selectLanguage(lang) {
      // setLang(lang)
      locale.value = lang; // Update the locale in i18n
      localStorage.setItem('lang', lang);
      showLangDropdown.value = false
    }

    const auth = useAuthStore()

    function handleLogout() {
      auth.logout()
      router.push('/')
    }

    const handleResize = () => {
      windowWidth.value = window.innerWidth;
      if (isMobile.value !== initialIsMobile.value) {
        initialIsMobile.value = isMobile.value;
      }
    };

    function openPopupLogin() {
      if (showPopupSignin.value) {
        showPopupSignin.value = false;
        setTimeout(() => {
          showPopupLogin.value = true;
        }, 500);
      } else {
        showPopupLogin.value = true;
      }
    }

    function closePopupLogin() {
      showPopupLogin.value = false;
    }

    function openPopupSignin() {
      if (showPopupLogin.value) {
        showPopupLogin.value = false;
        setTimeout(() => {
          showPopupSignin.value = true;
        }, 500);
      } else {
        showPopupSignin.value = true;
      }
    }

    function closePopupSignin() {
      showPopupSignin.value = false;
    }

    function switchToSignin() {
      if (showPopupLogin.value) {
        showPopupLogin.value = false;
        setTimeout(() => {
          showPopupSignin.value = true;
        }, 500);
      }
    }

    function switchToLogin() {
      if (showPopupSignin.value) {
        showPopupSignin.value = false;
        setTimeout(() => {
          showPopupLogin.value = true;
        }, 500);
      }
    }

    function toggleDropdown() {
      showDropdown.value = !showDropdown.value
    }

    function handleClickOutside(event) {
      // if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
      //   showDropdown.value = false
      // }
      if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
        showDropdown.value = false;
      }
      if (langDropdownRef.value && !langDropdownRef.value.contains(event.target)) {
        showLangDropdown.value = false;
      }
    }

    const currentLangLabel = computed(() => {
      return locale.value === 'vi' ? 'VI' : 'EN';
    });

    onBeforeUnmount(() => {
      document.removeEventListener('click', handleClickOutside)
    })
    onMounted(() => {
      document.addEventListener('click', handleClickOutside)
      window.addEventListener("resize", handleResize);
    });

    return {
      homeFrame,
      isMobile,
      initialIsMobile,
      showPopupLogin,
      popupRefLogin,
      openPopupLogin,
      closePopupLogin,
      showPopupSignin,
      popupRefSignin,
      openPopupSignin,
      closePopupSignin,
      switchToSignin,
      switchToLogin,
      auth,
      setLang,
      showLangDropdown,
      toggleLangDropdown,
      selectLanguage,
      languageStore,
      defaultAvatar,
      t,
      shortName,
      handleLogout,
      showDropdown,
      toggleDropdown,
      dropdownRef,
      route,
      // MobilePageMap,
      currentMobilePage,
      MenuMobile,
      showMenuMobile,
      currentLangLabel,
      langDropdownRef,
      translations
    };
  },
  mounted() {
    this.lenis = null
    this.rafId = null
    this.lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    const raf = (time) => {
      this.lenis.raf(time)
      this.rafId = requestAnimationFrame(raf)
    }

    this.rafId = requestAnimationFrame(raf)

    document.addEventListener('click', this.handleClickOutside)
    window.addEventListener("resize", this.handleResize)
  },

  beforeUnmount() {
    if (this.lenis) this.lenis.destroy?.()
    cancelAnimationFrame(this.rafId)
    document.removeEventListener('click', this.handleClickOutside)
  }
}
</script>

<style scoped>
.shadow-glow:hover {
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.6),
    0 0 10px rgba(255, 255, 255, 0.6),
    0 0 15px rgba(255, 255, 255, 0.7),
    0 0 20px rgba(255, 255, 255, 0.8);
  transition: text-shadow 0.3s ease-in-out;
}

@font-face {
  font-family: "TP Le Major";
  src: url("../src/assets/fonts/TP Le Major.ttf") format("truetype");
}

@font-face {
  font-family: "JosefinNormal";
  src: url("../src/assets/fonts/JosefinSans-VariableFont_wght.ttf") format("truetype");
}

@font-face {
  font-family: "JosefinItalic";
  src: url("../src/assets/fonts/JosefinSans-Italic-VariableFont_wght.ttf") format("truetype");
}

@font-face {
  font-family: "BonFoyage";
  src: url("../src/assets/fonts/BonFoyage.otf");
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

.font-bon-foyage {
  font-family: "BonFoyage", sans-serif;
}

.button-translation-parent {
  transition: all 1.3s ease-in-out;
}

.button-translation-parent:hover {
  box-shadow: 0 0 1vw rgba(255, 255, 255, 0.8);
}

.glow-effect {
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

.popup-fade-enter-active,
.popup-fade-leave-active {
  transition: all 0.3s ease;
}

.popup-fade-enter-from,
.popup-fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.popup-fade-enter-to,
.popup-fade-leave-from {
  opacity: 1;
  transform: scale(1);
}

.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.4s ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(1);
}

.fade-scale-enter-to,
.fade-scale-leave-from {
  opacity: 1;
  transform: scale(1);
}

.popup-scale {
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.5s ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.fade-scale-enter-to,
.fade-scale-leave-from {
  opacity: 1;
  transform: scale(1);
}

html,
body {
  overflow: hidden !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.4s ease;
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
}

.slide-left-enter-from {
  transform: translateX(100%);
}

.slide-left-enter-to {
  transform: translateX(0%);
}

.slide-left-leave-from {
  transform: translateX(0%);
}

.slide-left-leave-to {
  transform: translateX(100%);
}
</style>
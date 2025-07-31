<template>
  <div class="custom-gradient-border w-[24vw] h-[38vw] rounded-[1vw] relative flex flex-col items-center">
    <div class="w-full h-auto flex flex-col items-center overflow-hidden relative">
      <div
        class="w-[20vw] h-[7.5vw] flex font-josefin-normal justify-center items-center text-center text-[2.0vw] text-white mt-[0.8vw] z-10">
        {{ $t('desktopLogin.title') }}
      </div>
      <div
        class="w-[20vw] h-[4vw] rounded-[50%] bg-[#7c3aed] opacity-80 blur-[2.8vw]  absolute translate-y-[6.4vw] z-0">
      </div>
    </div>
    <div class="w-[23vw] h-[0.15vw] bg-gradient-to-r from-transparent to-transparent via-white z-10"></div>
    <div class=" w-full h-[20vw] z-10 flex flex-col items-center">
      <div
        class="w-full h-auto text-white text-[0.85vw] font-josefin-normal text-center px-[1vw] font-light mt-[0.5vw]">
        {{ $t('desktopLogin.description') }}</div>
      <div class="w-[20vw] h-auto mt-[2vw]">
        <p class="text-white font-josefin-normal font-normal text-[1vw]">{{ $t('desktopLogin.usernameLabel') }}</p>
        <input v-model="email" type="text"
          class="w-full h-[2vw] font-light text-white outline-none font-josefin-normal text-[0.9vw] bg-[#F6F2F219] rounded-[0.5vw] pl-[1vw] mt-[0.5vw]"
          :placeholder="$t('desktopLogin.usernamePlaceholder')">
      </div>
      <div class="w-[20vw] h-auto mt-[1.25vw]">
        <p class="text-white font-josefin-normal font-normal text-[1vw]">{{ $t('desktopLogin.passwordLabel') }}</p>
        <input v-model="password" type="password"
          class="w-full h-[2vw] outline-none text-white font-light font-josefin-normal text-[0.9vw] bg-[#F6F2F219] rounded-[0.5vw] pl-[1vw] mt-[0.5vw]"
          :placeholder="$t('desktopLogin.passwordPlaceholder')">
      </div>
      <div class="w-[20vw] h-auto text-end mt-[0.3vw] ">
        <a href="/" class="text-white font-light text-[0.9vw] font-josefin-normal ">{{ $t('desktopLogin.forgot') }}</a>
        <p class="text-white text-[0.6vw] font-josefin-normal font-light">{{ $t('desktopLogin.forgotNote') }}</p>
      </div>
    </div>
    <div @click="handleLogin" class="w-[10vw] h-[2.2vw] border-[0.1vw] rounded-[0.4vw] text-center pt-[0.1vw] text-white text-[1vw] hover:cursor-pointer button-login z-20">
      <p class="font-josefin-normal font-light pt-[0.3vw]">{{ $t('desktopLogin.loginButton') }}</p>
    </div>

    <div  class="w-[20vw] h-auto text-white font-josefin-normal font-extralight text-[0.9vw] text-center mt-[1.8vw]">{{ $t('desktopLogin.newPrompt') }}.</div>
     <div @click="$emit('open-signin')" class="hover:cursor-pointer w-[20vw] h-auto text-white font-josefin-normal font-normal text-[1vw] text-center mt-[0.2vw] z-20">{{ $t('desktopLogin.signupNow') }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/store/auth';
import { useRouter } from 'vue-router';
// import router from '@/router';

const email = ref('')
const password = ref('')
const auth = useAuthStore()
const router = useRouter()

const handleLogin = async () => {
  try {
    const result = await auth.login(email.value, password.value)
    // console.log('Login successfully:', result)
    const role = result.user?.role || "user"

    if(role === "admin"){
      router.push("/admin")
    } else {
      router.push('/')
    }
  } catch (error) {
    console.error('Login failed: ', error.response?.data?.message || error.message)
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

.custom-gradient-border {
  position: relative;
  background: transparent;
  border-radius: 1vw;
}

.custom-gradient-border::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 1vw;
  padding: 0.1vw;
  background: conic-gradient(
    from -45deg,
      #fff,
    transparent 25%,
      #fff 50%,
    transparent 75%,
      #fff
  );
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.button-login:hover {
  box-shadow: 0 0 0.5vw rgba(255, 255, 255, 0.8);
}
</style>
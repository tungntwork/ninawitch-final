<template>
    <div class="custom-gradient-border w-[24vw] h-[38vw] rounded-[1vw] relative flex flex-col items-center">
        <div class="w-full h-auto flex flex-col items-center overflow-hidden relative">
            <div
                class="w-[19vw] h-[7.5vw] flex font-josefin-normal justify-center items-center text-center text-[2.0vw] text-white mt-[0.8vw] z-10">
                {{ $t('signIn.title') }}
            </div>
            <div
                class="w-[20vw] h-[4vw] rounded-[50%] bg-[#FFFFFF] opacity-60 blur-[2.8vw]  absolute translate-y-[6.4vw] z-0">
            </div>
        </div>
        <div class="w-[23vw] h-[0.15vw] bg-gradient-to-r from-transparent to-transparent via-white z-10"></div>
        <div class=" w-full h-[20vw] z-10 flex flex-col items-center">
            <div
                class="w-full h-auto text-white text-[0.85vw] font-josefin-normal text-center px-[0.5vw] font-light mt-[0.5vw]">
                {{ $t('signIn.description') }}</div>
            <div class="w-[20vw] h-auto ">
                <p class="text-white font-josefin-normal font-normal text-[1vw]">{{ $t('signIn.usernameLabel') }}</p>
                <input v-model="username" type="text"
                    class="w-full h-[1.8vw] font-light text-white outline-none font-josefin-normal text-[0.9vw] bg-[#F6F2F219] rounded-[0.5vw] pl-[1vw] mt-[0.2vw]"
                    :placeholder="$t('signIn.usernamePlaceholder')">
            </div>
            <div class="w-[20vw] h-auto mt-[0.25vw]">
                <p class="text-white font-josefin-normal font-normal text-[1vw]">{{ $t('signIn.emailLabel') }}</p>
                <input v-model="email" type="email"
                    class="w-full h-[2vw] outline-none text-white font-light font-josefin-normal text-[0.9vw] bg-[#F6F2F219] rounded-[0.5vw] pl-[1vw] mt-[0.2vw]"
                    :placeholder="$t('signIn.emailPlaceholder')">
            </div>
            <div class="w-[20vw] h-auto mt-[0.25vw] relative">
                <p class="text-white font-josefin-normal font-normal text-[1vw]">{{ $t('signIn.passwordLabel') }}</p>
                <input :type="showPassword ? 'text' : 'password'" v-model="password"
                    class="w-full h-[2vw] outline-none text-white font-light font-josefin-normal text-[0.9vw] bg-[#F6F2F219] rounded-[0.5vw] pl-[1vw] pr-[2.5vw] mt-[0.2vw]"
                    :placeholder="$t('signIn.passwordPlaceholder')">
                <span @click="togglePasswordVisibility"
                    class="absolute top-[2.6vw] right-[0.8vw] transform -translate-y-1/2 cursor-pointer text-white z-20">
                    <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="w-[1.2vw] h-[1.2vw]">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-[1.2vw] h-[1.2vw]">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                </span>
            </div>
            <div class="w-[20vw] h-auto mt-[0.25vw] relative">
                <p class="text-white font-josefin-normal font-normal text-[1vw]">{{ $t('signIn.confirmPasswordLabel') }}</p>
                <input :type="showConfirmPassword ? 'text' : 'password'" v-model="confirmPassword"
                    class="w-full h-[2vw] outline-none text-white font-light font-josefin-normal text-[0.9vw] bg-[#F6F2F219] rounded-[0.5vw] pl-[1vw] pr-[2.5vw] mt-[0.2vw]"
                    :placeholder="$t('signIn.confirmPasswordPlaceholder')">
                <p v-if="errorMsg" class="text-red-400 text-[0.75vw] mt-[0.3vw] font-josefin-normal">
                    {{ errorMsg }}
                </p> 
                <span @click="toggleConfirmPasswordVisibility"
                    class="absolute top-[2.6vw] right-[0.8vw] transform -translate-y-1/2 cursor-pointer text-white z-20">
                    <svg v-if="showConfirmPassword" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="w-[1.2vw] h-[1.2vw]">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-[1.2vw] h-[1.2vw]">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                </span>
            </div>
            <div class="w-[20vw] h-auto mt-[0.3vw] flex flex-row">
                <input v-model="checkboxSubcribe" type="checkbox" id="terms"
                    class="w-[1vw] h-[1vw] mr-[0.5vw] accent-gray-400">
                <label for="terms" class="text-white font-josefin-normal font-thin text-[0.9vw] leading-tight">{{ $t('signIn.subscribeLabel') }}</label>
            </div>

        </div>
        <div @click="register"
            class="w-[14vw] h-[2.2vw] border-[0.1vw] rounded-[0.4vw] text-center translate-y-[3vw] pt-[0.1vw] text-white text-[1vw] hover:cursor-pointer button-login z-20">
            <p class="font-josefin-normal font-light pt-[0.3vw]">{{ $t('signIn.createAccount') }}</p>
        </div>
        <span
            class="w-[14.5vw] h-[2.2vw] text-center translate-y-[3.7vw] pt-[0.1vw] text-white text-[0.8vw] z-20 font-josefin-normal font-light">
            <span>{{ $t('signIn.alreadyHaveAccount') }}</span>
            <span @click="$emit('open-login')" class="font-normal hover:cursor-pointer pl-[0.3vw]">{{ $t('signIn.loginHere') }}</span>
        </span>
        <span
            class="w-[14.5vw] h-[2.2vw] text-center translate-y-[2.7vw] pt-[0.1vw] text-white text-[0.8vw] z-20 font-josefin-normal font-light">
            <span>{{ $t('signIn.footerNote') }}</span>
        </span>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from '../../../utils/axios';
import { message } from 'ant-design-vue'
// eslint-disable-next-line no-undef
const emit = defineEmits(['open-login'])

const email = ref('')
const username = ref('')
const password = ref('')
const confirmPassword = ref('')
const checkboxSubcribe = ref(false)
const errorMsg = ref('')

const showPassword = ref(false);
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const showConfirmPassword = ref(false);
const toggleConfirmPasswordVisibility = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
};

const register = async () => {
  errorMsg.value = ''
  if (password.value !== confirmPassword.value) {
    errorMsg.value = '❌ Mật khẩu không trùng khớp'
    return
  }

  try {
    const res = await axios.post('/api/users/register', {
      name: username.value,
      email: email.value,
      password: password.value,
      subscribeEmail: checkboxSubcribe.value ? email.value : null
    })

    console.log('✅ Đăng ký thành công:', res.data)
    message.success('🎉 Đăng ký thành công! Chuyển sang đăng nhập...')

    setTimeout(() => {
      emit('open-login')
    }, 1500)
  } catch (err) {
    errorMsg.value = err.response?.data?.message || 'Có lỗi xảy ra khi đăng ký'
    console.error('❌ Lỗi đăng ký:', err)
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
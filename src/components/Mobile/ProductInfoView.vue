
<template>
    <div class="w-full h-[785vw] relative flex flex-col items-center">
        <img src="../../assets/img/Mobile/Detail/star detail shop.webp" alt="" class="w-full h-auto">
        <div class="w-[110vw] absolute top-[-34vw] h-[95vw] bg-[#A660FF4D] rounded-[50%] blur-[19vw]"></div>
        <div class="w-[110vw] absolute top-[140vw] h-[95vw] bg-[#A660FF4D] rounded-[50%] blur-[19vw]"></div>
        <div
            class="absolute top-[41.6vw] w-[68vw] h-[68vw] rounded-[3.5vw] bg-circle flex justify-center items-center overflow-hidden">
            <img :src="product?.productImageUrl" alt="" class="w-[67.6vw] h-[67.6vw] rounded-[3.5vw]">
            <!-- <div class="absolute w-[22.6vw] top-0 right-0 h-[4.8vw] rounded-bl-[3.5vw] flex justify-center items-center bg-gradient-to-r from-[#D9D9D9] to-[#5D5D5D]
                    text-[2.56vw] font-lemajor text-black" v-html="t('productInfoMobile.recommendedLabel')"></div> -->
        </div>
        <div class="absolute top-[118vw] flex flex-col items-center w-[75vw]">
            <p class="text-white text-[8vw] font-lemajor">{{ product?.name?.[locale] || '' }}</p>
            <div
                class="flex text-[3.25vw] text-white font-josefin-normal flex-row w-[75vw] space-x-[1vw] mt-[2vw] items-center">
                <p class="pr-[2vw]">4.9</p>
                <div class="flex flex-row space-x-[0.9vw] pr-[2vw]">
                    <img src="../../assets/img/Mobile/Detail/star review.webp" alt="" class="w-[3.85vw] h-[3.85vw]">
                    <img src="../../assets/img/Mobile/Detail/star review.webp" alt="" class="w-[3.85vw] h-[3.85vw]">
                    <img src="../../assets/img/Mobile/Detail/star review.webp" alt="" class="w-[3.85vw] h-[3.85vw]">
                    <img src="../../assets/img/Mobile/Detail/star review.webp" alt="" class="w-[3.85vw] h-[3.85vw]">
                </div>
                <div class="w-[0.1vw] h-[4vw] mx-[4vw] bg-white"></div>
                <p class="px-[2vw]">5</p>
                <p class="font-light text-[#7D7D7D]" v-html="t('productInfoMobile.ratingLabel')"></p>
                <div class="w-[0.1vw] h-[4vw] mx-[4vw] bg-white"></div>
                <p class="px-[2vw]">8</p>
                <p class="font-light text-[#7D7D7D]" v-html="t('productInfoMobile.soldLabel')"></p>
            </div>
            <div class="mt-[10.6vw] w-[47.9vw] h-[8.4vw] pt-[1vw] border-white border-[1px] rounded-[1.8vw] flex justify-center items-center text-white text-[4.09vw] font-josefin-normal"
                @click="openFacebook">
                {{ product?.salePrice.toLocaleString() }}
            </div>
        </div>
        <div class="absolute top-[172vw] w-full h-[0.5vw] bg-gradient-to-r from-transparent to-transparent via-white">
        </div>
        <!-- Text -->
        <div class="top-[183vw] absolute w-[94vw]">
            <p class="text-white text-[4.18vw] font-josefin-normal w-[95vw] font-thin leading-[4.18vw]"
                v-html="(product?.description?.[locale] || '').replaceAll('\n', '<br/>')">

            </p>

            <div class="pt-[9.3vw] text-white text-[4.18vw] font-josefin-normal"
                v-html="t('productInfoMobile.disclaimerTitle')">
            </div>
            <div class="pt-[7.3vw] text-white text-[4.18vw] font-josefin-normal flex flex-col font-light">
                <div class="flex flex-row mr-[2vw] ml-[2vw]">
                    {{ t('productInfoMobile.disclaimers[0]') }}
                </div>
                <div class="flex flex-row mr-[2vw] ml-[2vw]">
                    {{ t('productInfoMobile.disclaimers[1]') }}
                </div>
                <div class="flex flex-row mr-[2vw] ml-[2vw]">
                    {{ t('productInfoMobile.disclaimers[2]') }}
                </div>
            </div>
        </div>
        <!-- Items -->
        <div class="absolute top-[332.8vw]">
            <p class="text-white text-[8.225vw] font-lemajor text-center"
                v-html="t('productInfoMobile.highRecommendTitle')"></p>

            <div v-for="(row, rowIndex) in productRows" :key="rowIndex"
                class="w-[90vw] h-[75vw] flex flex-row justify-between pt-[12.8vw]">
                <div v-for="(item, colIndex) in row" :key="colIndex" class="w-[42vw] h-[10vw]">
                    <div @click="goToProduct(item._id)" class="cursor-pointer">
                        <div class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                            <img :src="item.productImageUrl" alt="" class="w-full h-full" />
                            <div class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                                <img src="../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[4vw] h-[4vw]" />
                                <p class="text-white text-[3.85vw] font-lemajor text-center">{{ item.name[locale] }}</p>
                                <img src="../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[4vw] h-[4vw]" />
                            </div>
                        </div>
                        <div class="w-[42vw] flex flex-col justify-start relative">
                            <p class="text-white text-[2.32vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                                {{ item.subcription[locale].slice(0, 100) + '...' }}
                            </p>
                            <div
                                class="flex text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                                {{ item.salePrice }}
                            </div>
                            <div
                                class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                                <p class="w-[42vw]" v-html="t('productInfoMobile.itemDetail')"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="../../assets/img/Desktop/Products/Candles/Medusa/Layout_line.webp" alt=""
                class="w-[90vw] h-auto" />
        </div>
        <!-- Comment -->
        <div class="absolute top-[605vw] flex flex-col justify-start items-center w-full">
            <img src="../../assets/img/Mobile/Detail/back detail shop 2.webp" alt=""
                class="w-full h-auto absolute top-0">
            <div class="absolute top-[6vw] w-full flex flex-col items-center">
                <p class="text-white text-[4.18vw] font-josefin-normal mb-[4vw]"
                    v-html="t('productInfoMobile.productReviewTitle')"></p>

                <Swiper :modules="[Zoom, Pagination, Navigation]" :slides-per-view="1.2" :space-between="15"
                    :loop="true" :pagination="{ clickable: true }" :zoom="{ maxRatio: 2 }"
                    :autoplay="{ delay: 3000, disableOnInteraction: false, reverseDirection: false }"
                    class="w-[95vw] h-[130vw]">
                    <SwiperSlide v-for="image in feedbackImages" :key="image._id">
                        <div class="swiper-zoom-container">
                            <img :src="image.imageUrl" class="rounded-[3vw] w-full h-auto object-cover" />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div class="mt-[0.5vw]">
                    <p class="text-white text-[4.15vw] font-josefin-normal"
                        v-html="t('productInfoMobile.leaveComment')">
                    </p>
                    <textarea
                        class="w-[95vw] h-[12.56vw] bg-[#202020] rounded-[2.8vw] border-white border-[1px] mt-[2vw] outline-none text-white font-josefin-normal text-[3.1vw]"
                        style="text-indent: 2vw"></textarea>
                    <div class="w-full flex items-end justify-end">
                        <div class="w-[36vw] h-[6.3vw] border-white border-[1px] rounded-[1.5vw] mt-[2vw] flex justify-center items-center text-white text-[3.72vw] font-josefin-normal"
                            v-html="t('productInfoMobile.postComment')" @click="handlePostComment">
                        </div>
                    </div>
                    <div v-if="showPopup"
                        class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center z-[1000]">
                        <div class="bg-[#171717] text-black px-[5vw] py-[4vw] rounded-[3vw] text-center w-[80vw]">
                            <p class="text-[3.5vw] text-white font-josefin-normal mb-[4vw] leading-snug">
                                Nina cảm ơn với góp ý của bạn,<br />chúc bạn một ngày tốt lành!
                            </p>
                            <button @click="showPopup = false"
                                class="px-[4vw] py-[2vw] bg-black text-white rounded-[2vw] text-[3.5vw] font-josefin-normal">
                                Đóng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FooterMobile />
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import FooterMobile from './FooterMobile.vue'
import axios from '../../utils/axios'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation, Zoom, Autoplay } from 'swiper/modules'
import SwiperCore from 'swiper'
SwiperCore.use([Pagination, Navigation, Zoom, Autoplay])

const product = ref(null)
const { t, locale } = useI18n()

const route = useRoute()
// const productId = route.params.id
const productId = ref(route.params.id)
const showPopup = ref(false);

const recommendedProducts = ref([])
const feedbackImages = ref([])

const productRows = computed(() => {
  const rows = []
  for (let i = 0; i < recommendedProducts.value.length; i += 2) {
    rows.push(recommendedProducts.value.slice(i, i + 2))
  }
  return rows
})

const router = useRouter()

const goToProduct = (id) => {
  router.push(`/shop/${id}`)
}

function handlePostComment() {
  showPopup.value = true;
  setTimeout(() => {
    showPopup.value = false;
  }, 3000);
}

const loadProduct = async () => {
  try {
    console.log('Fetching product:', productId.value)
    const productRes = await axios.get(`/api/products/${productId.value}`)
    product.value = productRes.data

    const productIdUsed = product.value._id || product.value.id
    if (productIdUsed) {
      const feedbackRes = await axios.get(`/api/feedbacks/product/${productIdUsed}`)
      feedbackImages.value = feedbackRes.data.feedbacks || []
    } else {
      console.warn('Product ID is missing')
    }

    const recommendRes = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/api/products/random?count=6`)
    recommendedProducts.value = recommendRes.data
  } catch (error) {
    console.error('Error loading product:', error)
  }
}

onMounted(() => {
  loadProduct()
})

watch(() => route.params.id, (newId) => {
  productId.value = newId
  loadProduct()
})

const openFacebook = () => {
  window.open('https://www.facebook.com/bupbegeisha000', '_blank')
}
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

.bg-circle {
    content: "";
    position: absolute;
    top: 41.6vw;
    width: 68vw;
    height: 68vw;
    background-image:
        radial-gradient(ellipse farthest-corner at 0% 0%, white 0%, transparent 70%),
        radial-gradient(ellipse farthest-corner at 100% 100%, white 0%, transparent 70%);
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
    pointer-events: none;
    z-index: 0;
}
</style>
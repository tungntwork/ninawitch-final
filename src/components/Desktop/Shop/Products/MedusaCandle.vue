<template>
    <div class="w-full h-auto">
        <!-- Top: product content -->
        <div class="w-full h-[80vw] relative bg-[#0D0D0D]">
            <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/StarNight.webp" alt=""
                class="w-full h-auto">
            <div class="absolute top-[8.8vw] w-full h-auto">
                <div class="ml-[5.2vw] hover:cursor-pointer text-white text-[1.05vw] font-josefin-normal flex flex-row items-center"
                    @click="$router.push('/shop')">
                    <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/ArrowLeft.webp" alt=""
                        class="w-[1.5vw] h-[1.5vw]">
                    <p class="font-thin translate-y-[0.1vw]">{{ t('productInfoDesktop.backToShop') }}</p>
                </div>

                <!-- Information -->
                <div class="mt-[1.8vw] w-full pl-[11vw] pr-[6vw] flex flex-row justify-between">
                    <!-- Main thumb -->
                    <div class="thumb-layer-bottom w-[31vw] h-[31vw] rounded-[2vw] relative overflow-hidden">
                        <!-- image -->
                        <div
                            class="w-[30.8vw] h-[30.8vw] absolute top-0 left-0 translate-x-[0.1vw] translate-y-[0.1vw] rounded-[2vw] overflow-hidden">
                            <!-- <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/BackDrop.webp" alt=""
                                class=""> -->
                            <img :src="product?.productImageUrl" alt="" class="">
                        </div>
                    </div>

                    <!-- Right information -->
                    <div class="flex flex-col items-start w-[44vw]">
                        <p class="text-start text-[3.65vw] font-lemajor text-white text-glow">
                            {{ product?.name?.en || '...' }}
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
                            <p class="ml-[0.5vw]">{{ product?.rated }}</p>
                            <p class="font-thin ml-[0.5vw]">{{ t('productInfoDesktop.productReview') }}</p>
                            <!-- <p class="text-[1.5vw] ml-[1vw] translate-y-[-0.5vw]">|</p>
                            <p class="ml-[0.5vw]">{{ product?.sold }}</p>
                            <p class="font-thin ml-[0.5vw]">{{ t('productInfoDesktop.sold') }}</p> -->
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
                                <!-- <p class=" z-10 translate-y-[0.1vw] font-light">{{ t('productInfoDesktop.contact') }}</p> -->
                                <p class=" z-10 translate-y-[0.1vw] font-light">{{ (product?.salePrice ||
                                    product?.price)?.toLocaleString() }}</p>
                            </div>
                        </div>
                        <!-- Description -->


                        <div class="mt-[0.5vw] text-[1.05vw] text-white font-josefin-normal font-light"
                            v-html="product?.description?.[locale]?.replace(/\n/g, '<br/>')">
                        </div>
                        <div class="mt-[2vw] items-start font-josefin-normal text-white text-[0.83vw]">
                            <p class="">{{ t('productInfoDesktop.disclaimerTitle') }}</p>
                            <ul class="font-thin list-disc ml-[1vw] w-[40vw]">
                                <li>{{ t('productInfoDesktop.disclaimerList[0]') }}</li>
                                <li>{{ t('productInfoDesktop.disclaimerList[1]') }}</li>
                                <li>{{ t('productInfoDesktop.disclaimerList[2]') }}</li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
            <!-- High recommend list random -->
            <div class="absolute top-[55vw] w-[90vw] h-auto left-[5vw] flex flex-col items-center">
                <p class="font-lemajor text-white text-[3.125vw] text-glow">{{
                    t('productInfoDesktop.highRecommendItems') }}</p>
                <div class="w-[90vw] h-[15vw] flex flex-row space-x-[1.2vw] mt-[2vw]">
                    <div v-for="item in recommendedProducts" :key="item._id"
                        class="w-[14vw] h-[14vw] rounded-[1vw] flex justify-center items-center product_1 hover:cursor-pointer relative"
                        @click="$router.push('/shop/' + item._id)">
                        <div
                            class="w-[13.9vw] h-[13.9vw] translate-x-[0.025vw] translate-y-[0.025vw] bg-black rounded-[1vw] overflow-hidden image-on-border_1 relative group z-40">
                            <!-- Overlay -->
                            <div
                                class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0D0D0D60] to-transparent">
                            </div>

                            <img :src="item.productImageUrl" alt="" class="w-full h-auto" />

                            <div
                                class="absolute w-[15.9vw] h-[15.9vw] top-[0vw] left-0 rounded-[1vw] opacity-0 group-hover:opacity-100 transition-all duration-500 glow-center">
                            </div>

                            <!-- Combo Text -->
                            <div
                                class="flex flex-col absolute bottom-[0.7vw] items-center w-full h-auto justify-center transition-all duration-500">
                                <div class="flex flex-row justify-between bg-green items-center w-auto">
                                    <img src="../../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto" />
                                    <div class="font-lemajor text-[1.4vw] text-center font-thin text-white font-thin-force px-[0.5vw]"
                                        style="transform: scaleY(0.95); letter-spacing: 0.01vw">
                                        {{ item.name?.[locale] || '...' }}
                                    </div>
                                    <img src="../../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                        class="w-[1.2vw] h-auto" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

        <!-- Before: comment and show -->
        <div class="w-full h-auto relative">
            <img :src="product?.productImageUrl" alt="" class="w-full h-auto backdrop-blur-[10vw]">
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

                <Swiper :slides-per-view="1.8" :space-between="20" :loop="true"
                    :autoplay="{ delay: 3000, disableOnInteraction: false }" :navigation="true"
                    :modules="[Navigation, Autoplay]" class="w-full h-[22vw] rounded-[1vw] overflow-hidden mt-[3vw]">
                    <SwiperSlide v-for="img in feedbackImages" :key="img._id" class="rounded-[1vw] overflow-hidden">
                        <img :src="img.imageUrl" alt="feedback"
                            class="rounded-[1vw] object-cover w-full h-full hover:cursor-zoom-in"
                            @click="openImageModal(img.imageUrl)" />
                    </SwiperSlide>
                </Swiper>
                <div v-if="zoomImageUrl"
                    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    @click.self="zoomImageUrl = null">
                    <img :src="zoomImageUrl" class="max-w-[90vw] max-h-[90vh] object-contain rounded-[1vw] shadow-lg" />
                </div>

                <div class="w-full h-auto mt-[2.0315vw]">
                    <div class="flex flex-row font-josefin-normal">
                        <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/Ellipse44.webp" alt=""
                            class="w-[1.25vw] h-[1.25vw]">
                        <p class="text-[1.05vw] font-medium text-white pl-[0.5vw]">
                            hoangnguyen...
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
                            Sản phẩm: Medusa Candle
                        </p>
                    </div>

                    <!-- content comment -->
                    <div class="w-full h-auto mt-[1.05vw] font-josefin-normal text-[1.05vw] text-white font-light">
                        Chiếc hộp thật tuyệt vời, chỉ cần thêm chút keo cho một bên gờ bị lệch nhẹ, không có gì quá
                        nghiêm trọng. Hoàn thiện rất đẹp, mình cực kỳ thích cách phối màu!
                    </div>
                </div>

                <!-- cmt 2 -->
                <div class="w-full h-auto mt-[3.175vw]">
                    <div class="flex flex-row font-josefin-normal">
                        <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/Ellipse45.webp" alt=""
                            class="w-[1.25vw] h-[1.25vw]">
                        <p class="text-[1.05vw] font-medium text-white pl-[0.5vw]">
                            minhphuong23...
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
                            Sản phẩm: Medusa Candle
                        </p>
                    </div>

                    <!-- content comment -->
                    <div class="w-full h-auto mt-[1.05vw] font-josefin-normal text-[1.05vw] text-white font-light">
                        Mặt dây thật xinh và mang lại cảm giác bình yên lắm. Mình rất trân trọng món quà nhỏ xinh bạn
                        gửi kèm nữa. Chắc chắn mình sẽ quay lại mua lần sau! 😊
                    </div>
                </div>

                <!-- cmt 3 -->
                <div class="w-full h-auto mt-[3.175vw]">
                    <div class="flex flex-row font-josefin-normal">
                        <img src="../../../../assets/img/Desktop/Products/Candles/Medusa/Ellipse46.webp" alt=""
                            class="w-[1.25vw] h-[1.25vw]">
                        <p class="text-[1.05vw] font-medium text-white pl-[0.5vw]">
                            bichthuyd...
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
                            Sản phẩm: Medusa Candle
                        </p>
                    </div>

                    <!-- content comment -->
                    <div class="w-full h-auto mt-[1.05vw] font-josefin-normal text-[1.05vw] text-white font-light">
                        Hoàn hảo luôn ạ 👌 Từ khâu đóng gói đến lúc nhận hàng, em thật sự không biết nói gì hơn. Đây là
                        lần đầu tiên em nhận được một gói hàng được chuẩn bị chỉn chu và chuyên nghiệp đến vậy. Em từng
                        đặt của vài shop khác rồi... và... thôi, không nói nữa ạ 😅 Mong anh/chị giữ vững phong độ nhé!
                    </div>
                </div>

                <!-- Text area to post comment -->
                <div class="mt-[3.5vw]">
                    <p class="text-white text-start font-josefin-normal font-medium text-[1.05vw]">{{
                        t('productInfoDesktop.leaveComment') }}</p>
                    <textarea
                        class="w-full h-[5.7vw] bg-[#202020] rounded-[0.45vw] border-[1px] border-[##FFFFFF] p-[0.6vw] outline-none font-josefin-normal text-[0.83vw] text-white resize-none"></textarea>
                    <div class="mt-[1.2vw] justify-end flex items-center z-50 mb-[1.2vw]">
                        <div @click="showThankYouPopup"
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
                            <p class=" z-10 translate-y-[0.1vw] font-light">{{ t('productInfoDesktop.postComment') }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Product try -->
            <div class="absolute w-[40vw] h-auto right-[5vw] top-[10vw] flex flex-col items-end">
                <p class="text-[1.25vw] text-white font-medium font-josefin-normal">
                    {{ t('productInfoDesktop.youMayAlsoLike') }}
                </p>

                <div class="flex flex-row flex-wrap justify-end w-full gap-x-[3.8vw] gap-y-[2.6vw] mt-[2.6vw]">
                    <div v-for="item in youMayAlsoLikeProducts" :key="item._id"
                        class="h-[25vw] w-[15vw] items-1 overflow-hidden relative">
                        <!-- Image + glow -->
                        <div class="relative w-full rounded-[0.8vw] flex justify-center overflow-hidden">
                            <img :src="item.productImageUrl" alt="" class="w-full h-auto" />
                            <div class="w-full h-full absolute top-0 left-0 opacity-0 layer-drop"
                                style="background: radial-gradient(circle at center, transparent, #00000080)"></div>
                            <div
                                class="absolute bottom-[0.3vw] flex flex-row justify-between bg-green items-center w-auto">
                                <img src="../../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.2vw] h-auto" />
                                <div class="font-lemajor text-[1.4vw] text-center font-thin text-white px-[0.3vw]"
                                    style="transform: scaleY(0.95); letter-spacing: 0.01vw">
                                    {{ item.name?.[locale] || '...' }}
                                </div>
                                <img src="../../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                    class="w-[1.2vw] h-auto" />
                            </div>
                            <div
                                class="w-[8vw] h-[8vw] bg-[#C05140] absolute rounded-[50%] top-[6vw] left-0 translate-x-[-10vw] blur-[5vw] layer-on-top">
                            </div>
                        </div>

                        <!-- Short description -->
                        <p class="w-full text-start font-josefin-normal text-[0.87vw] text-white font-thin mt-[1vw]">
                            {{ (item.subcription?.[locale]?.split(' ').slice(0, 12).join(' ') || '') + '...' }}
                        </p>

                        <!-- Price -->
                        <div class="flex flex-row items-start mt-[1.5vw]">
                            <p class="text-start font-josefin-normal text-[1.39vw] text-white">
                                {{ item.salePrice || item.price }}
                            </p>
                        </div>

                        <!-- Action buttons -->
                        <div class="w-full flex justify-between flex-row items-center items-details translate-x-[9vw]">
                            <div class="flex flex-row items-center hover:cursor-pointer hover:scale-[1.1] transition-all duration-300 ease-in-out"
                                @click="$router.push(`/shop/${item._id}`)">
                                <p class="text-start font-josefin-normal text-[1vw] text-white pr-[0.3vw]">
                                    {{ t('productInfoDesktop.itemDetails') }}
                                </p>
                                <img src="../../../../assets/img/Desktop/Shop/HighRecommened/starItems.webp" alt=""
                                    class="w-[1vw] h-[1vw]" />
                            </div>
                            <div
                                class="button-redirect text-[1vw] text-white border-white border-[0.05vw] py-[0.4vw] px-[1vw] rounded-[0.6vw] hover:cursor-pointer">
                                <p class="translate-y-[0.1vw]">{{ t('productInfoDesktop.addToCart') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- POPUP -->
            <div v-if="showPopup"
                class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-[1000]">
                <div class="bg-[#171717] text-black px-[2vw] py-[1.5vw] rounded-[0.5vw] text-center w-[25vw]">
                    <p class="text-[1vw] text-white font-josefin-normal mb-[1vw]">
                        Nina cảm ơn với góp ý của bạn,<br />chúc bạn một ngày tốt lành!
                    </p>
                    <button @click="showPopup = false"
                        class="mt-[0.5vw] px-[1vw] py-[0.4vw] bg-black text-white rounded-[0.3vw] hover:bg-gray-800">
                        Đóng
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from '../../../../utils/axios'
import { useI18n } from 'vue-i18n'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules' 
import 'swiper/css'
import 'swiper/css/navigation'

export default {
    name: 'MedusaCandle',
    components:{
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            showPopup: false
        };
    },
    methods: {
        showThankYouPopup() {
            this.showPopup = true;
            setTimeout(() => {
                this.showPopup = false;
            }, 3000);
        }
    },
    setup() {
        const product = ref(null)
        const route = useRoute()
        const { t, locale } = useI18n()
        const feedbackImages = ref([])
        const zoomImageUrl = ref(null)

        const openImageModal = (url) => {
            zoomImageUrl.value = url
        }

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

        const recommendedProducts = ref([])

        const fetchRecommended = async () => {
            try {
                const { data } = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/api/products/random?count=6`)
                recommendedProducts.value = data
                console.log('🎯 Recommended products:', data)
            } catch (error) {
                console.error('Failed to fetch recommended products:', error)
            }
        }
        const youMayAlsoLikeProducts = ref([])

        const fetchYouMayAlsoLike = async () => {
            try {
                const { data } = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/api/products/random?count=4`)
                youMayAlsoLikeProducts.value = data
                console.log('🔥 You May Also Like:', data)
            } catch (error) {
                console.error('Failed to fetch You May Also Like products:', error)
            }
        }

        const fetchFeedbackImages = async () => {
            try {
                const { id } = route.params
                const { data } = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/api/feedbacks/product/${id}`)
                feedbackImages.value = data.feedbacks || []
                console.log('✅ API response:', data)
                console.log('✅ Feedback images:', data.feedbacks)
            } catch (error) {
                console.error('Error fetching feedback images:', error)
            }
        }

        onMounted(() => {
            fetchProduct()
            fetchRecommended()
            fetchYouMayAlsoLike()
            fetchFeedbackImages()
        })

        watch(() => route.params.id, (newId, oldId) => {
            if (newId !== oldId) {
                fetchProduct()
            }
        })

        const openWebLink = (url) => {
            setTimeout(() => {
                window.open(url, "_blank")
            }, 300)
        }

        return {
            product,
            openWebLink,
            t,
            locale,
            recommendedProducts,
            youMayAlsoLikeProducts,
            fetchFeedbackImages,
            feedbackImages,
            Swiper,
            SwiperSlide,
            zoomImageUrl,
            openImageModal,
            Navigation,
            Autoplay,
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
    transform: translateY(9.5vw);
    transition: all 0.7s ease-in-out;
}

.product_1:hover .combo-text-button-1:hover {
    box-shadow: 0 0 1vw rgba(255, 255, 255, 0.8);
}

.swiper-button-prev,
.swiper-button-next {
  color: white;
  width: 2.5vw;
  height: 2.5vw;
  top: 40%;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  color: #ccc;
}
</style>
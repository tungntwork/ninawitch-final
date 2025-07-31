<template>
    <div class="w-full h-[790vw] relative flex flex-col items-center">
        <img src="../../../assets/img/Mobile/Shop/light shop.webp" alt="" class="w-full h-auto absolute top-0">
        <div class="absolute top-[24vw] text-end right-[5vw] text-white text-[12vw] font-lemajor leading-[14vw]"
            v-html="t('embraceMagicMobile.title')">
        </div>
        <div class="absolute top-[125vw] left-[-55vw] h-[214vw] w-[110vw] bg-[#FEDACE30] blur-[50vw]"></div>
        <div class="absolute top-[372vw] right-[-70vw] h-[284vw] w-[140vw] bg-[#B679FF30] blur-[50vw]"></div>
        <!-- Content -->
        <div class="w-[90vw] h-auto absolute top-[57vw]">

            <!-- Filter -->
            <div class="w-full h-auto">
                <!-- Filter Category -->
                <div class="w-full h-auto flex flex-col items-start">
                    <div class="flex flex-row items-center text-white font-josefin-normal text-[4.18vw]"
                        @click="toggleCategory">
                        <p class="pr-[2vw]">{{ t('embraceMagicMobile.categoryTitle') }}</p>
                        <img src="../../../assets/img/Desktop/Shop/EmbraceYourMagic/Arrow.webp" alt=""
                            class="w-[5.5vw] h-[5.5vw] transition-transform duration-300"
                            :class="{ 'rotate-[180deg]': showCategory, 'rotate-0': !showCategory }" />
                    </div>
                    <transition name="fade">
                        <div v-if="showCategory"
                            class="w-full mt-[4.18vw] h-auto text-white text-[3.72vw] leading-[3.72vw] space-y-[2.5vw] font-josefin-normal font-thin">
                            <p @click="selectCategoryByName('Candles')">
                                {{ t('embraceMagicMobile.categories[0]') }}
                            </p>
                            <p @click="selectCategoryByName('Potion')">
                                {{ t('embraceMagicMobile.categories[1]') }}
                            </p>
                            <p @click="selectCategoryByName('Spell')">
                                {{ t('embraceMagicMobile.categories[2]') }}
                            </p>
                            <p @click="selectCategoryByName('CrystalsAndGemstones')">
                                {{ t('embraceMagicMobile.categories[3]') }}
                            </p>
                            <p @click="selectCategoryByName('AmuletsAndTalismans')">
                                {{ t('embraceMagicMobile.categories[4]') }}
                            </p>
                        </div>
                    </transition>
                </div>
                <!-- Filter Sub Category -->
                <div class="mt-[5vw] w-full h-auto flex flex-col items-start">
                    <div class="flex flex-row items-center text-white font-josefin-normal text-[4.18vw]"
                        @click="toggleNeed">
                        <p class="pr-[2vw]">{{ t('embraceMagicMobile.needTitle') }}</p>
                        <img src="../../../assets/img/Desktop/Shop/EmbraceYourMagic/Arrow.webp" alt=""
                            class="w-[5.5vw] h-[5.5vw] transition-transform duration-300"
                            :class="{ 'rotate-[180deg]': showNeed, 'rotate-0': !showNeed }" />
                    </div>
                    <transition name="fade">
                        <div v-if="showNeed"
                            class="w-full h-auto text-white text-[3.72vw] leading-[3.72vw] space-y-[2.5vw] font-josefin-normal font-thin">
                            <div class="flex flex-row items-center space-x-[2vw]">
                                <input type="checkbox" :value="'Loves'" v-model="selectedNeeds"
                                    @change="fetchFilteredProducts()"
                                    class="w-[5.5vw] h-[5.5vw] appearance-none bg-transparent border border-white/50 rounded-[1.2vw] checked:bg-transparent checked:border-white checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:translate-x-[1vw] checked:before:translate-y-[1vw] relative hover:cursor-pointer">
                                <p class="translate-y-[0.5vw]">{{ t('embraceMagicMobile.needs[0]') }}</p>
                            </div>
                            <div class="flex flex-row items-center space-x-[2vw]">
                                <input type="checkbox" :value="'Wealth'" v-model="selectedNeeds"
                                    @change="fetchFilteredProducts()"
                                    class="w-[5.5vw] h-[5.5vw] appearance-none bg-transparent border border-white/50 rounded-[1.2vw] checked:bg-transparent checked:border-white checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:translate-x-[1vw] checked:before:translate-y-[1vw] relative hover:cursor-pointer">
                                <p class="translate-y-[0.5vw]">{{ t('embraceMagicMobile.needs[1]') }}</p>
                            </div>
                            <div class="flex flex-row items-center space-x-[2vw]">
                                <input type="checkbox" :value="'Career'" v-model="selectedNeeds"
                                    @change="fetchFilteredProducts()"
                                    class="w-[5.5vw] h-[5.5vw] appearance-none bg-transparent border border-white/50 rounded-[1.2vw] checked:bg-transparent checked:border-white checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:translate-x-[1vw] checked:before:translate-y-[1vw] relative hover:cursor-pointer">
                                <p class="translate-y-[0.5vw]">{{ t('embraceMagicMobile.needs[2]') }}</p>
                            </div>
                            <div class="flex flex-row items-center space-x-[2vw]">
                                <input type="checkbox" :value="'Studies'" v-model="selectedNeeds"
                                    @change="fetchFilteredProducts()"
                                    class="w-[5.5vw] h-[5.5vw] appearance-none bg-transparent border border-white/50 rounded-[1.2vw] checked:bg-transparent checked:border-white checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:translate-x-[1vw] checked:before:translate-y-[1vw] relative hover:cursor-pointer">
                                <p class="translate-y-[0.5vw]">
                                    {{ t('embraceMagicMobile.needs[3]') }}
                                </p>
                            </div>
                            <div class="flex flex-row items-center space-x-[2vw]">
                                <input type="checkbox" :value="'Heatlth'" v-model="selectedNeeds"
                                    @change="fetchFilteredProducts()"
                                    class="w-[5.5vw] h-[5.5vw] appearance-none bg-transparent border border-white/50 rounded-[1.2vw] checked:bg-transparent checked:border-white checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:translate-x-[1vw] checked:before:translate-y-[1vw] relative hover:cursor-pointer">
                                <p class="translate-y-[0.5vw]">
                                    {{ t('embraceMagicMobile.needs[4]') }}
                                </p>
                            </div>
                            <div class="flex flex-row items-center space-x-[2vw]">
                                <input type="checkbox" :value="'Feng Shui'" v-model="selectedNeeds"
                                    @change="fetchFilteredProducts()"
                                    class="w-[5.5vw] h-[5.5vw] appearance-none bg-transparent border border-white/50 rounded-[1.2vw] checked:bg-transparent checked:border-white checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:translate-x-[1vw] checked:before:translate-y-[1vw] relative hover:cursor-pointer">
                                <p class="translate-y-[0.5vw]">
                                    {{ t('embraceMagicMobile.needs[5]') }}
                                </p>
                            </div>
                            <div class="flex flex-row items-center space-x-[2vw]">
                                <input type="checkbox" :value="'Healing'" v-model="selectedNeeds"
                                    @change="fetchFilteredProducts()"
                                    class="w-[5.5vw] h-[5.5vw] appearance-none bg-transparent border border-white/50 rounded-[1.2vw] checked:bg-transparent checked:border-white checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:translate-x-[1vw] checked:before:translate-y-[1vw] relative hover:cursor-pointer">
                                <p class="translate-y-[0.5vw]">
                                    {{ t('embraceMagicMobile.needs[6]') }}
                                </p>
                            </div>
                            <div class="flex flex-row items-center space-x-[2vw]">
                                <input type="checkbox" :value="'Future'" v-model="selectedNeeds"
                                    @change="fetchFilteredProducts()"
                                    class="w-[5.5vw] h-[5.5vw] appearance-none bg-transparent border border-white/50 rounded-[1.2vw] checked:bg-transparent checked:border-white checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:translate-x-[1vw] checked:before:translate-y-[1vw] relative hover:cursor-pointer">
                                <p class="translate-y-[0.5vw]">
                                    {{ t('embraceMagicMobile.needs[7]') }}
                                </p>
                            </div>
                            <div class="flex flex-row items-center space-x-[2vw]">
                                <input type="checkbox" :value="'Hidden Secrets'" v-model="selectedNeeds"
                                    @change="fetchFilteredProducts()"
                                    class="w-[5.5vw] h-[5.5vw] appearance-none bg-transparent border border-white/50 rounded-[1.2vw] checked:bg-transparent checked:border-white checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:translate-x-[1vw] checked:before:translate-y-[1vw] relative hover:cursor-pointer">
                                <p class="translate-y-[0.5vw]">
                                    {{ t('embraceMagicMobile.needs[8]') }}
                                </p>
                            </div>
                            <div class="flex flex-row items-center space-x-[2vw]">
                                <input type="checkbox" :value="'Beauty'" v-model="selectedNeeds"
                                    @change="fetchFilteredProducts()"
                                    class="w-[5.5vw] h-[5.5vw] appearance-none bg-transparent border border-white/50 rounded-[1.2vw] checked:bg-transparent checked:border-white checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:translate-x-[1vw] checked:before:translate-y-[1vw] relative hover:cursor-pointer">
                                <p class="translate-y-[0.5vw]">
                                    {{ t('embraceMagicMobile.needs[9]') }}
                                </p>
                            </div>
                            <div class="flex flex-row items-center space-x-[2vw]">
                                <input type="checkbox"  :value="'Attracting Positive Energy'" v-model="selectedNeeds"
                                    @change="fetchFilteredProducts()"
                                    class="w-[5.5vw] h-[5.5vw] appearance-none bg-transparent border border-white/50 rounded-[1.2vw] checked:bg-transparent checked:border-white checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:translate-x-[1vw] checked:before:translate-y-[1vw] relative hover:cursor-pointer">
                                <p class="translate-y-[0.5vw]">
                                    {{ t('embraceMagicMobile.needs[10]') }}
                                </p>
                            </div>
                            <div class="flex flex-row items-center space-x-[2vw]">
                                <input type="checkbox"  :value="'Ex-Lover'" v-model="selectedNeeds"
                                    @change="fetchFilteredProducts()"
                                    class="w-[5.5vw] h-[5.5vw] appearance-none bg-transparent border border-white/50 rounded-[1.2vw] checked:bg-transparent checked:border-white checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:translate-x-[1vw] checked:before:translate-y-[1vw] relative hover:cursor-pointer">
                                <p class="translate-y-[0.5vw]">
                                    {{ t('embraceMagicMobile.needs[11]') }}
                                </p>
                            </div>
                            <div class="flex flex-row items-center space-x-[2vw]">
                                <input type="checkbox"  :value="'Fate & Fortune'" v-model="selectedNeeds"
                                    @change="fetchFilteredProducts()"
                                    class="w-[5.5vw] h-[5.5vw] appearance-none bg-transparent border border-white/50 rounded-[1.2vw] checked:bg-transparent checked:border-white checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:translate-x-[1vw] checked:before:translate-y-[1vw] relative hover:cursor-pointer">
                                <p class="translate-y-[0.5vw]">
                                    {{ t('embraceMagicMobile.needs[12]') }}
                                </p>
                            </div>
                            <div class="flex flex-row items-center space-x-[2vw]">
                                <input type="checkbox"  :value="'Banish Negative Energy'" v-model="selectedNeeds"
                                    @change="fetchFilteredProducts()"
                                    class="w-[5.5vw] h-[5.5vw] appearance-none bg-transparent border border-white/50 rounded-[1.2vw] checked:bg-transparent checked:border-white checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:translate-x-[1vw] checked:before:translate-y-[1vw] relative hover:cursor-pointer">
                                <p class="translate-y-[0.5vw]">
                                    {{ t('embraceMagicMobile.needs[13]') }}
                                </p>
                            </div>
                            <div class="flex flex-row items-center space-x-[2vw]">
                                <input type="checkbox"  :value="'Manifest a New Thing'" v-model="selectedNeeds"
                                    @change="fetchFilteredProducts()"
                                    class="w-[5.5vw] h-[5.5vw] appearance-none bg-transparent border border-white/50 rounded-[1.2vw] checked:bg-transparent checked:border-white checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:translate-x-[1vw] checked:before:translate-y-[1vw] relative hover:cursor-pointer">
                                <p class="translate-y-[0.5vw]">
                                    {{ t('embraceMagicMobile.needs[14]') }}
                                </p>
                            </div>
                            <div class="flex flex-row items-center space-x-[2vw]">
                                <input type="checkbox"  :value="'Unlock Luck'" v-model="selectedNeeds"
                                    @change="fetchFilteredProducts()"
                                    class="w-[5.5vw] h-[5.5vw] appearance-none bg-transparent border border-white/50 rounded-[1.2vw] checked:bg-transparent checked:border-white checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:translate-x-[1vw] checked:before:translate-y-[1vw] relative hover:cursor-pointer">
                                <p class="translate-y-[0.5vw]">
                                    {{ t('embraceMagicMobile.needs[15]') }}
                                </p>
                            </div>
                            <div class="flex flex-row items-center space-x-[2vw]">
                                <input type="checkbox"  :value="'Business'" v-model="selectedNeeds"
                                    @change="fetchFilteredProducts()"
                                    class="w-[5.5vw] h-[5.5vw] appearance-none bg-transparent border border-white/50 rounded-[1.2vw] checked:bg-transparent checked:border-white checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:translate-x-[1vw] checked:before:translate-y-[1vw] relative hover:cursor-pointer">
                                <p class="translate-y-[0.5vw]">
                                    {{ t('embraceMagicMobile.needs[16]') }}
                                </p>
                            </div>
                        </div>
                    </transition>
                </div>
                <!-- Filter Price -->
                <div class="mt-[5vw] w-full h-auto flex flex-col items-start">
                    <div class="flex flex-row items-center text-white font-josefin-normal text-[4.18vw]"
                        @click="togglePrice">
                        <p class="pr-[2vw]">Price</p>
                        <img src="../../../assets/img/Desktop/Shop/EmbraceYourMagic/Arrow.webp" alt=""
                            class="w-[5.5vw] h-[5.5vw] transition-transform duration-300"
                            :class="{ 'rotate-[180deg]': showPrice, 'rotate-0': !showPrice }" />
                    </div>
                    <transition name="fade">
                        <div v-if="showPrice"
                            class="w-full mt-[4.18vw] h-auto flex flex-col items-center relative text-white text-[3.72vw] leading-[3.72vw] space-y-[2.5vw] font-josefin-normal font-thin">
                            <div class="price-choose w-[56.5vw] h-[2vw] bg-[#2F2F2F] rounded-full relative"
                                @mousedown="startDrag" @touchstart="startDrag">
                                <div class="price-choose-icon absolute w-[2vw] h-[2vw] rounded-full bg-white top-0"
                                    :style="{ left: `${pricePercent}%`, transform: 'translateX(-50%)' }"></div>
                            </div>
                            <div
                                class="w-[56.5vw] h-[3.25vw] relative flex justify-end text-white font-normal text-[3.25vw] overflow-hidden">
                                <div class="price-list absolute right-[6.5vw] text-end transition-transform duration-300"
                                    :style="{ transform: `translateY(-${currentStep * 3.25}vw)` }">
                                    <div v-for="price in priceSteps" :key="price">{{ price.toLocaleString('vi-VN') }}
                                    </div>
                                </div>
                                <p class="pl-[1.5vw]">vnd</p>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
            <!-- Content inner -->
            <div class="w-[90vw] h-auto flex flex-col mt-[5vw]">
                <!-- Nếu đang lọc -->
                <template v-if="isFiltering">
                    <div v-for="(row, rowIndex) in paginatedProductRows" :key="rowIndex"
                        class="w-[90vw] h-[75vw] flex flex-row justify-between mt-[10vw]">
                        <div v-for="item in row" :key="item._id" class="w-[42vw] h-[10vw]" @click="$router.push(`/shop/${item._id}`)">
                            <!-- Ảnh sản phẩm -->
                            <div class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                                <img :src="item.productImageUrl" alt="" class="w-full h-full object-cover" />
                                <div
                                    class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                                    <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp"
                                        class="w-[4vw] h-[4vw]" />
                                    <p class="text-white text-[3.85vw] font-lemajor text-center">{{ item.name?.en || '' }}
                                    </p>
                                    <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp"
                                        class="w-[4vw] h-[4vw]" />
                                </div>
                            </div>
                            <!-- Info sản phẩm -->
                            <div class="w-[42vw] flex flex-col justify-start relative">
                                <p
                                    class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                                    {{ shortDescription(item.subcription?.[locale] || '') }}
                                </p>
                                <div
                                    class="flex text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                                    {{ item.price }}
                                </div>
                                <div
                                    class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                                    <p class="w-[42vw]">{{ t('embraceMagicMobile.button.detail') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Pagination -->
                    <div
                        class="flex justify-center items-center mt-[6vw] space-x-[8vw] text-white text-[5vw] font-lemajor">
                        <button :disabled="currentPage === 1" @click="currentPage--"
                            class="disabled:opacity-30 hover:opacity-100">
                            &lt;
                        </button>
                        <span class="text-[4vw]">{{ currentPage }} / {{ totalPages }}</span>
                        <button :disabled="currentPage === totalPages" @click="currentPage++"
                            class="disabled:opacity-30 hover:opacity-100">
                            &gt;
                        </button>
                    </div>
                </template>
                <template v-else>
                    <!-- Comp 1 -->
                    <div class="w-full h-auto  flex flex-col">
                        <p class="text-[4.18vw] text-white font-josefin-normal">{{
                            t('embraceMagicMobile.sections.section1') }}</p>
                        <div class="w-[42vw] h-[0.5vw] bg-gradient-to-r from-white to-transparent"></div>
                        <!-- Row 1 -->
                        <div class="w-[90vw] h-[75vw] flex flex-row justify-between mt-[10vw]">
                            <!-- Product 1 -->
                            <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/684953d856e40f56a3d112b5')">
                                <div
                                    class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                                    <img src="../../../assets/img/NINAPRODUCT/ritual_oil.webp" alt=""
                                        class="w-full h-full">
                                    <div
                                        class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                                        <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                            class="w-[4vw] h-[4vw]">
                                        <p class="text-white text-[3.85vw] font-lemajor text-center">Ritual Oils</p>
                                        <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                            class="w-[4vw] h-[4vw]">
                                    </div>
                                </div>
                                <div class="w-[42vw] flex flex-col justify-start relative">
                                    <p
                                        class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                                        {{ truncateWords(t('embraceMagicMobile.products[0].desc')) }}
                                    </p>
                                    <div
                                        class="flex text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                                        {{ t('embraceMagicMobile.products[0].price') }}
                                    </div>
                                    <div
                                        class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                                        <p class="w-[42vw]">{{ t('embraceMagicMobile.button.detail') }}</p>
                                    </div>
                                </div>
                            </div>
                            <!-- Product 2 -->
                            <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/684954f256e40f56a3d112b9')">
                                <div
                                    class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                                    <img src="../../../assets/img/NINAPRODUCT/patchouli_oil.webp" alt=""
                                        class="w-full h-full">
                                    <div
                                        class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                                        <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                            class="w-[4vw] h-[4vw]">
                                        <p class="text-white text-[3.85vw] font-lemajor">Patchouli Oil</p>
                                        <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                            class="w-[4vw] h-[4vw]">
                                    </div>
                                </div>
                                <div class="w-[42vw] flex flex-col justify-start relative">
                                    <p
                                        class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                                        {{ truncateWords(t('embraceMagicMobile.products[1].desc')) }}
                                    </p>
                                    <div
                                        class="flex text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                                        {{ t('embraceMagicMobile.products[0].price') }}
                                        <!-- <p class="text-[3vw] pl-[0.5vw] translate-y-[-0.5vw]">vnd</p> -->
                                    </div>
                                    <div
                                        class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                                        <p class="w-[42vw]">{{ t('embraceMagicMobile.button.detail') }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Row 2 -->
                        <div class="w-[90vw] h-[75vw] flex flex-row justify-between mt-[10vw]">
                            <!-- Product 1 -->
                            <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/6849556356e40f56a3d112bb')">
                                <div
                                    class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                                    <img src="../../../assets/img/NINAPRODUCT/dragon_blood_oil.webp" alt=""
                                        class="w-full h-full">
                                    <div
                                        class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                                        <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                            class="w-[4vw] h-[4vw]">
                                        <p class="text-white text-[3.85vw] font-lemajor text-center">Dragon
                                            Blood<br />Oil
                                        </p>
                                        <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                            class="w-[4vw] h-[4vw]">
                                    </div>
                                </div>
                                <div class="w-[42vw] flex flex-col justify-start relative">
                                    <p
                                        class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                                        {{ truncateWords(t('embraceMagicMobile.products[2].desc')) }}
                                    </p>
                                    <div
                                        class="flex text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                                        {{ t('embraceMagicMobile.products[0].price') }}
                                    </div>
                                    <div
                                        class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                                        <p class="w-[42vw]">{{ t('embraceMagicMobile.button.detail') }}</p>
                                    </div>
                                </div>
                            </div>
                            <!-- Product 2 -->
                            <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/684955b856e40f56a3d112bd')">
                                <div
                                    class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                                    <img src="../../../assets/img/NINAPRODUCT/aphrodite_oil.webp" alt=""
                                        class="w-full h-full">
                                    <div
                                        class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                                        <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                            class="w-[4vw] h-[4vw]">
                                        <p class="text-white text-[3.85vw] font-lemajor">Aphrodite Oil</p>
                                        <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                            class="w-[4vw] h-[4vw]">
                                    </div>
                                </div>
                                <div class="w-[42vw] flex flex-col justify-start relative">
                                    <p
                                        class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                                        {{ truncateWords(t('embraceMagicMobile.products[3].desc')) }}
                                    </p>
                                    <div
                                        class="flex text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                                        {{ t('embraceMagicMobile.products[0].price') }}
                                        <!-- <p class="text-[3vw] pl-[0.5vw] translate-y-[-0.5vw]">vnd</p> -->
                                    </div>
                                    <div
                                        class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                                        <p class="w-[42vw]">{{ t('embraceMagicMobile.button.detail') }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Comp 2 -->
                    <div class="w-full h-auto  flex flex-col">
                        <p class="text-[4.18vw] text-white font-josefin-normal">{{
                            t('embraceMagicMobile.sections.section2') }}</p>
                        <div class="w-[42vw] h-[0.5vw] bg-gradient-to-r from-white to-transparent"></div>
                        <!-- Row 1 -->
                        <div class="w-[90vw] h-[75vw] flex flex-row justify-between mt-[10vw]">
                            <!-- Product 1 -->
                            <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/6848533f56e40f56a3d1124e')">
                                <div
                                    class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                                    <img src="../../../assets/img/NINAPRODUCT/potion.webp" alt="" class="w-full h-full">
                                    <div
                                        class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                                        <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                            class="w-[4vw] h-[4vw]">
                                        <p class="text-white text-[3.85vw] font-lemajor text-center">Potion</p>
                                        <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                            class="w-[4vw] h-[4vw]">
                                    </div>
                                </div>
                                <div class="w-[42vw] flex flex-col justify-start relative">
                                    <p
                                        class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                                        {{ truncateWords(t('embraceMagicMobile.products[4].desc')) }}
                                    </p>
                                    <div
                                        class="flex text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                                        1.300.000
                                        <p class="text-[3vw] pl-[0.5vw] translate-y-[-0.5vw]">vnd</p>
                                    </div>
                                    <div
                                        class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                                        <p class="w-[42vw]">{{ t('embraceMagicMobile.button.detail') }}</p>
                                    </div>
                                </div>
                            </div>
                            <!-- Product 2 -->
                            <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/6889e0568cfd586f340f0ec2')">
                                <div
                                    class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                                    <img src="../../../assets/img/NINAPRODUCT/LuckyWallpaper.webp" alt=""
                                        class="w-full h-full">
                                    <div
                                        class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                                        <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                            class="w-[4vw] h-[4vw]">
                                        <p class="text-white text-[3.85vw] font-lemajor text-center">
                                            Lucky<br />Wallpaper
                                        </p>
                                        <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                            class="w-[4vw] h-[4vw]">
                                    </div>
                                </div>
                                <div class="w-[42vw] flex flex-col justify-start relative">
                                    <p
                                        class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                                        {{ truncateWords(t('embraceMagicMobile.products[5].desc')) }}
                                    </p>
                                    <div
                                        class="flex text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                                        1.500.000
                                        <p class="text-[3vw] pl-[0.5vw] translate-y-[-0.5vw]">vnd</p>
                                    </div>
                                    <div
                                        class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                                        <p class="w-[42vw]">{{ t('embraceMagicMobile.button.detail') }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Row 2 -->
                        <div class="w-[90vw] h-[75vw] flex flex-row justify-between mt-[10vw]">
                            <!-- Product 1 -->
                            <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/684957ef56e40f56a3d112c1')">
                                <div
                                    class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                                    <img src="../../../assets/img/NINAPRODUCT/sigil_beauty.webp" alt=""
                                        class="w-full h-full">
                                    <div
                                        class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                                        <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                            class="w-[4vw] h-[4vw]">
                                        <p class="text-white text-[3.85vw] font-lemajor text-center">Sigil Beauty</p>
                                        <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                            class="w-[4vw] h-[4vw]">
                                    </div>
                                </div>
                                <div class="w-[42vw] flex flex-col justify-start relative">
                                    <p
                                        class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                                        {{ truncateWords(t('embraceMagicMobile.products[6].desc')) }}
                                    </p>
                                    <div
                                        class="flex text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                                        2.500.000
                                        <p class="text-[3vw] pl-[0.5vw] translate-y-[-0.5vw]">vnd</p>
                                    </div>
                                    <div
                                        class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                                        <p class="w-[42vw]">{{ t('embraceMagicMobile.button.detail') }}</p>
                                    </div>
                                </div>
                            </div>
                            <!-- Product 2 -->
                            <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/6849588256e40f56a3d112c3')">
                                <div
                                    class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                                    <img src="../../../assets/img/NINAPRODUCT/aphrodite_oil.webp" alt=""
                                        class="w-full h-full">
                                    <div
                                        class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                                        <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                            class="w-[4vw] h-[4vw]">
                                        <p class="text-white text-[3.85vw] font-lemajor">Sigil Grimoire</p>
                                        <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                            class="w-[4vw] h-[4vw]">
                                    </div>
                                </div>
                                <div class="w-[42vw] flex flex-col justify-start relative">
                                    <p
                                        class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                                        {{ truncateWords(t('embraceMagicMobile.products[7].desc')) }}
                                    </p>
                                    <div
                                        class="flex text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                                        3.000.000
                                        <p class="text-[3vw] pl-[0.5vw] translate-y-[-0.5vw]">vnd</p>
                                    </div>
                                    <div
                                        class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                                        <p class="w-[42vw]">{{ t('embraceMagicMobile.button.detail') }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Row 3 -->
                        <div class="w-[90vw] h-[75vw] flex flex-row justify-between mt-[10vw]">
                            <!-- Product 1 -->
                            <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/684959be56e40f56a3d112c9')">
                                <div
                                    class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                                    <img src="../../../assets/img/NINAPRODUCT/fortune_clover.webp" alt=""
                                        class="w-full h-full">
                                    <div
                                        class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                                        <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                            class="w-[4vw] h-[4vw]">
                                        <p class="text-white text-[3.65vw] font-lemajor text-center">Fortune Clover</p>
                                        <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                            class="w-[4vw] h-[4vw]">
                                    </div>
                                </div>
                                <div class="w-[42vw] flex flex-col justify-start relative">
                                    <p
                                        class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                                        {{ truncateWords(t('embraceMagicMobile.products[8].desc')) }}
                                    </p>
                                    <div
                                        class="flex text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                                        666.000 - 999.000
                                        <p class="text-[3vw] pl-[0.5vw] translate-y-[-0.5vw]">vnd</p>
                                    </div>
                                    <div
                                        class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                                        <p class="w-[42vw]">{{ t('embraceMagicMobile.button.detail') }}</p>
                                    </div>
                                </div>
                            </div>
                            <!-- Product 2 -->
                            <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/68495a3856e40f56a3d112cb')">
                                <div
                                    class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                                    <img src="../../../assets/img/NINAPRODUCT/Nina_charms_spell.webp" alt=""
                                        class="w-full h-full">
                                    <div
                                        class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                                        <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                            class="w-[4vw] h-[4vw]">
                                        <p class="text-white text-[3.85vw] font-lemajor text-center">NiNa's
                                            Charms<br />Spells</p>
                                        <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                            class="w-[4vw] h-[4vw]">
                                    </div>
                                </div>
                                <div class="w-[42vw] flex flex-col justify-start relative">
                                    <p
                                        class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                                        {{ truncateWords(t('embraceMagicMobile.products[9].desc')) }}
                                    </p>
                                    <div
                                        class="flex text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                                        {{ t('embraceMagicMobile.products[0].price') }}
                                        <!-- <p class="text-[3vw] pl-[0.5vw] translate-y-[-0.5vw]">vnd</p> -->
                                    </div>
                                    <div
                                        class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                                        <p class="w-[42vw]">{{ t('embraceMagicMobile.button.detail') }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Row 4 -->
                        <div class="w-[90vw] h-[75vw] flex flex-row justify-between mt-[10vw]">
                            <!-- Product 1 -->
                            <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/68495a9156e40f56a3d112cd')">
                                <div
                                    class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                                    <img src="../../../assets/img/NINAPRODUCT/crystal_magic_spell.webp" alt=""
                                        class="w-full h-full">
                                    <div
                                        class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                                        <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                            class="w-[4vw] h-[4vw]">
                                        <p class="text-white text-[3.85vw] font-lemajor text-center">Crystal<br />Magic
                                            Spell</p>
                                        <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                            class="w-[4vw] h-[4vw]">
                                    </div>
                                </div>
                                <div class="w-[42vw] flex flex-col justify-start relative">
                                    <p
                                        class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                                        {{ truncateWords(t('embraceMagicMobile.products[10].desc')) }}
                                    </p>
                                    <div
                                        class="flex text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                                        {{ t('embraceMagicMobile.products[0].price') }}
                                        <!-- <p class="text-[3vw] pl-[0.5vw] translate-y-[-0.5vw]">vnd</p> -->
                                    </div>
                                    <div
                                        class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                                        <p class="w-[42vw]">{{ t('embraceMagicMobile.button.detail') }}</p>
                                    </div>
                                </div>
                            </div>
                            <!-- Product 2 -->
                            <div class="w-[42vw] h-[10vw]" @click="$router.push('/shop/68495afe56e40f56a3d112cf')">
                                <div
                                    class="w-[42vw] h-[42vw] relative rounded-[2vw] overflow-hidden flex justify-center">
                                    <img src="../../../assets/img/NINAPRODUCT/magic_lipstick.webp" alt=""
                                        class="w-full h-full">
                                    <div
                                        class="absolute bottom-[3vw] flex flex-row justify-between items-center space-x-[1vw]">
                                        <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                            class="w-[4vw] h-[4vw]">
                                        <p class="text-white text-[3.85vw] font-lemajor">Magic Lipstick</p>
                                        <img src="../../../assets/img/Desktop/Home/Recommend/star_name.webp" alt=""
                                            class="w-[4vw] h-[4vw]">
                                    </div>
                                </div>
                                <div class="w-[42vw] flex flex-col justify-start relative">
                                    <p
                                        class="text-white text-[2.75vw] text-start font-josefin-normal font-light pt-[4.5vw]">
                                        {{ truncateWords(t('embraceMagicMobile.products[11].desc')) }}
                                    </p>
                                    <div
                                        class="flex text-white text-[3.8vw] text-glow text-start absolute top-[13vw] font-josefin-normal font-normal pt-[1.5vw]">
                                        {{ t('embraceMagicMobile.products[0].price') }}
                                    </div>
                                    <div
                                        class="w-[42vw] absolute top-[18vw] h-auto flex items-end text-white text-end font-josefin-normal font-normal pt-[3.7vw]">
                                        <p class="w-[42vw]">{{ t('embraceMagicMobile.button.detail') }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import axios from '../../../utils/axios'
const { t } = useI18n()
const isDragging = ref(false)
const { locale } = useI18n()

const priceSteps = [500000, 1000000, 2000000, 3000000, 4000000, 5000000]

const currentStep = ref(0)
const priceTo = computed(() => priceSteps[currentStep.value])

const showCategory = ref(true)
const showNeed = ref(true)
const showPrice = ref(true)

const currentPage = ref(1)
const itemsPerPage = 8

const totalPages = computed(() =>
  Math.ceil(filteredProducts.value.length / itemsPerPage)
)

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredProducts.value.slice(start, end)
})

const paginatedProductRows = computed(() => {
  const rows = []
  const list = paginatedProducts.value

  for (let i = 0; i < list.length; i += 2) {
    const row = list.slice(i, i + 2)
    rows.push(row)
  }

  return rows
})

const toggleCategory = () => (showCategory.value = !showCategory.value)
const toggleNeed = () => (showNeed.value = !showNeed.value)
const togglePrice = () => (showPrice.value = !showPrice.value)

const pricePercent = computed(() => (currentStep.value / (priceSteps.length - 1)) * 100)
//const displayedPrice = computed(() => priceSteps[currentStep.value])

// FILTER
const filteredProducts = ref([])
const isFiltering = ref(false)
const selectedCategory = ref('')
const selectedNeeds = ref([])

const fetchFilteredProducts = async () => {
    currentPage.value = 1
    const need = selectedNeeds.value.join(',')
    const category = selectedCategory.value
    const from = 0
    const to = priceTo.value || 5000000

    try {
        const res = await axios.get('/api/products/filter', {
            params: { category, need, priceFrom: from, priceTo: to }
        })
        filteredProducts.value = res.data.products
        isFiltering.value = true
    } catch (error) {
        console.error('Failed to fetch filtered products:', error)
    }
}

function truncateWords(text) {
  return text.split(' ').slice(0, 9).join(' ') + '...'
}

onMounted(() => {
})

const categoryIds = {
  'Candles': '68467471e00d13821681ebd7',
  'Potion': '6847da3b4f5c0116dbc64de0',
  'Spell': '6847da524f5c0116dbc64de3',
  'CrystalsAndGemstones': '6847da6d4f5c0116dbc64de6',
  'AmuletsAndTalismans': '6847da8b4f5c0116dbc64de9'
}

const handleDrag = (e) => {
    const bar = document.querySelector('.price-choose')
    const rect = bar.getBoundingClientRect()
    const offsetX = Math.min(Math.max(e.clientX - rect.left, 0), rect.width)
    const percent = offsetX / rect.width
    const step = Math.round(percent * (priceSteps.length - 1))
    currentStep.value = step
}

const startDrag = () => {
    isDragging.value = true
    document.addEventListener('mousemove', handleDrag)
    document.addEventListener('mouseup', stopDrag)
    document.addEventListener('touchmove', handleTouchDrag)
    document.addEventListener('touchend', stopDrag)
}

const stopDrag = () => {
    isDragging.value = false
    document.removeEventListener('mousemove', handleDrag)
    document.removeEventListener('mouseup', stopDrag)
    document.removeEventListener('touchmove', handleTouchDrag)
    document.removeEventListener('touchend', stopDrag)
    fetchFilteredProducts()
}

const selectCategoryByName = (name) => {
  selectedCategory.value = categoryIds[name] || ''
  fetchFilteredProducts()
}

const handleTouchDrag = (e) => {
    if (e.touches.length > 0) {
        handleDrag(e.touches[0])
    }
}

// const filteredProductRows = computed(() => {
//   const rows = []
//   for (let i = 0; i < filteredProducts.value.length; i += 2) {
//     rows.push(filteredProducts.value.slice(i, i + 2))
//   }
//   return rows
// })

const shortDescription = (text) => {
  if (!text) return ''
  const words = text.split(' ')
  return words.slice(0, 9).join(' ') + (words.length > 10 ? '...' : '')
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

.price-choose {
    touch-action: none;
    user-select: none;
}

.price-list div {
    height: 3.25vw;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-1vw);
}
</style>
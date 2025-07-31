<template>
    <div class="w-full h-auto">
        <FirstShop />
        <HighRecommended />
        <HighRecommendItem />
        <NinaLightMobile />
        <EnchantedSpellMobile />
        <MysticalArrival />
        <EmbraceYourMagicMobile />
        <MysticalExperience />
        <MagicNinawitch/>
        <FooterMobile/>
    </div>
</template>

<script setup>
// import FooterMobile from './FooterMobile.vue';
import FirstShop from './ShopPage/FirstShop.vue';
import HighRecommended from './ShopPage/HighRecommended.vue';
import HighRecommendItem from './ShopPage/HighRecommendItem.vue';
import NinaLightMobile from './ShopPage/NinaLightMobile.vue';
import EnchantedSpellMobile from './ShopPage/EnchantedSpellMobile.vue';
import MysticalArrival from './ShopPage/MysticalArrival.vue';
import MysticalExperience from './ShopPage/MysticalExperience.vue';
import MagicNinawitch from './ShopPage/MagicNinawitch.vue';
import FooterMobile from './FooterMobile.vue';
import EmbraceYourMagicMobile from './ShopPage/EmbraceYourMagicMobile.vue';
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
</style>
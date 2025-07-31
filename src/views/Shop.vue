<template>
  <div class="shop-page-container w-full min-h-screen bg-[#0D0D0D] overflow-x-hidden">
    <div class="home-shop-background-layer sticky top-0 h-screen z-0">
      <HomeShop class="w-full h-full object-cover" />
    </div>

    <div class="main-content-foreground relative z-10">
      <HomeRecommend />
      <HighRecommened />
      <NinaLight />
      <EnchantedSpell />
      <MysticalArrival />
      <EmbraceYourMagic />
      <MysticalExperience />
      <ShopMagicGift />
    </div>

  </div>
</template>

<script>
import HomeRecommend from '@/components/Desktop/Home/HomeRecommend.vue';
import HighRecommened from '@/components/Desktop/Shop/HighRecommened.vue';
import HomeShop from '@/components/Desktop/Shop/HomeShop.vue';
import ShopMagicGift from '@/components/Desktop/Shop/ShopMagicGift.vue';
import NinaLight from '@/components/Desktop/Shop/NinaLight.vue';
import EnchantedSpell from '@/components/Desktop/Shop/EnchantedSpell.vue';
import MysticalArrival from '@/components/Desktop/Shop/MysticalArrival.vue';
import EmbraceYourMagic from '@/components/Desktop/Shop/EmbraceYourMagic.vue';
import MysticalExperience from '@/components/Desktop/Shop/MysticalExperience.vue';

export default {
  name: 'ShopPage',
  components: {
    HomeRecommend,
    ShopMagicGift,
    HomeShop,
    HighRecommened,
    NinaLight,
    EnchantedSpell,
    MysticalArrival,
    EmbraceYourMagic,
    MysticalExperience
  }
}
</script>

<style scoped>

</style>
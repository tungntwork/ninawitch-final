import { createRouter, createWebHistory } from "vue-router";
// import Home from "./views/Home.vue";
// import Booking from "./views/Booking.vue";
// import Shop from "./views/Shop.vue";
// import VIP from "./views/VIP.vue";
// import Present from "./views/Present.vue";
// import NinaWitchRitual from "./components/Desktop/Shop/Products/NinaWitchRitual.vue";
// import MedusaCandle from "./components/Desktop/Shop/Products/MedusaCandle.vue";
import { useAuthStore } from "./store/auth";
import ProductList from "./components/AdminSite/ProductList.vue";
import Admin from "./views/AdminView.vue";
import UserList from "./components/AdminSite/UserList.vue";
import ChangePassword from "./components/AdminSite/ChangePassword.vue";
import Profile from "./components/AdminSite/ProfileView.vue";
import { defineAsyncComponent } from "vue";
// import HomePageMobile from "./components/Mobile/HomePageMobile.vue";

const isMobile = () => window.innerWidth <= 768

const routes = [
  {
    path: "/ritual",
    name: "NinaWitchRitual",
    component: () => import("./components/Desktop/Shop/Products/NinaWitchRitual.vue")
  },
  {
    path: "/nina-rituals",
    name: "ritual",
    component: defineAsyncComponent(() =>
      isMobile()
        ? import("./components/Mobile/NinaRitualMobile.vue")
        : import("./components/Desktop/Shop/Products/NinaWitchRitual.vue")
    ),
  },
  {
    path: "/",
    name: "Home",
    component: async () => {
    if (window.innerWidth <= 768) {
      return (await import("./components/Mobile/HomePageMobile.vue")).default
    } else {
      return (await import("./views/Home.vue")).default
    }
  }
  },
  {
    path: "/Booking",
    name: "Booking",
    component: defineAsyncComponent(() =>
      isMobile()
        ? import("./components/Mobile/BookingMobile.vue")
        : import("./views/Booking.vue")
    ),
  },
  {
    path: "/Shop",
    name: "Shop",
    component: defineAsyncComponent(() =>
      isMobile()
        ? import("./components/Mobile/ShopPageMobile.vue")
        : import("./views/Shop.vue")
    ),
  },
  {
    path: "/VIP",
    name: "VIP",
    component: defineAsyncComponent(() =>
      isMobile()
        ? import("./components/Mobile/VipMobile.vue")
        : import("./views/VIP.vue")
    ),
  },
  {
    path: "/Present",
    name: "Present",
    component: defineAsyncComponent(() =>
      isMobile()
        ? import("./components/Mobile/PresentMobile.vue")
        : import("./views/Present.vue")
    ),
  },
  {
    path: "/Shop/MedusaCandle",
    name: "Medusa",
    component: defineAsyncComponent(() =>
      isMobile()
        ? import("./components/Mobile/ProductInfoView.vue")
        : import("./components/Desktop/Shop/Products/MedusaCandle.vue")
    ),
  },
  {
    path: "/Shop/MedusaCandlePreview",
    name: "Medusa",
    component: defineAsyncComponent(() =>
      isMobile()
        ? import("./components/Mobile/ProductInfoView.vue")
        : import("./components/Desktop/Shop/Products/MedusaCandlePreview.vue")
    ),
  },
  // { path: "/Shop/MedusaCandle", name: "MedusaCandle", component: MedusaCandle },
  {
  path: "/Shop/:id",
  name: "ProductDetail",
  component: defineAsyncComponent(() =>
    isMobile()
      ? import("./components/Mobile/ProductInfoView.vue")
      : import("./components/Desktop/Shop/Products/MedusaCandle.vue")
  ),
},
  {
    path: "/admin",
    component: Admin,
    meta: { requiresAuth: true, role: "admin" },
    children: [
      { path: "", redirect: "/admin/products" },
      { path: "products", name: "ProductList", component: ProductList },
      { path: "users", name: "UserList", component: UserList },
      {
        path: "/admin/products/:id/edit",
        name: "EditProduct",
        component: () => import("./components/AdminSite/EditProduct.vue"),
      },
    ],
  },
  {
    path: "/change-password",
    name: "ChangePassword",
    component: ChangePassword,
    meta: { requiresAuth: true },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: { requiresAuth: true },
  },
  {
    path: "/unauthorized",
    name: "Unauthorized",
    component: () => import("./views/UnauthorizedPage.vue"),
  },
];

const router = createRouter({
    history: createWebHistory("/"),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    }
});

// Middleware check login / role
router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    next('/unauthorized')
  } else if (to.meta.role && auth.user?.role !== to.meta.role) {
    next('/unauthorized')
  } else {
    next()
  }
})

export default router;
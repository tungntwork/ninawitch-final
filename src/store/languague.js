import { defineStore } from "pinia";
import { ref } from "vue";

// export const useLanguageStore = defineStore("language", () => {
//   const currentLang = ref("en");

//   const setLanguage = (lang) => {
//     currentLang.value = lang;
//     localStorage.setItem("lang", lang);
//   };

//   // if (typeof window !== "undefined") {
//   //   const savedLang = localStorage.getItem("lang");
//   //   if (savedLang) currentLang.value = savedLang;
//   // }

//   const savedLang = localStorage.getItem('lang')
//   if (savedLang) {
//     currentLang.value = savedLang
//   }

//   return {
//     currentLang,
//     setLanguage,
//   };
// });

export const useLanguageStore = defineStore("language", () => {
  const currentLang = ref(localStorage.getItem('lang') || 'en');

  const setLanguage = (lang) => {
    currentLang.value = lang;
    localStorage.setItem("lang", lang);
  };

  return {
    currentLang,
    setLanguage,
  };
});

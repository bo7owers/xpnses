import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["~/assets/fonts.css", "~/assets/styles.scss"],
  buildModules: ["@pinia/nuxt"],
});

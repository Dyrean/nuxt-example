import { resolve } from "path";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "@nuxtjs/eslint-module",
        "@pinia/nuxt",
        "nuxt-lucide-icons",
        "@vueuse/nuxt",
        "radix-vue",
        "nuxt-vitest",
        "@nuxtjs/tailwindcss",
        "shadcn-nuxt",
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: ["~/assets/css/main.css"],
    alias: {
        "@": resolve(__dirname, "/"),
    },
    shadcn: {
        prefix: "",
        componentDir: "./components/ui",
    },
    typescript: {},
});

export default {
  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-mode/
  // 'universal': Isomorphic application (server-side rendering + client-side navigation)
  // mode: "universal",

  srcDir: "src/",

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // plugins: [{ src: "@/plugins/amplify.js", ssr: false }],
  plugins: [{ src: "@/plugins/amplify.js", mode: "client" }, "~/plugins/auth"],

  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxtjs-refresh",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/vuetify"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules

  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};

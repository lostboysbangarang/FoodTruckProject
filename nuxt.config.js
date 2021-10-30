export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'foodTrucks',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: "~/plugins/vee-validate.js", ssr: true},
    {src: "~/plugins/firebase.js"}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  extractCSS: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/auth-next',
    ['@nuxtjs/firebase',
    { 
      config: {
        apiKey: "AIzaSyB1G94ZCgPNSx8TMOM3q8EWv_GYAmJ_30U",
        authDomain: "foodtruckslocator.firebaseapp.com",
        projectId: "foodtruckslocator",
        storageBucket: "foodtruckslocator.appspot.com",
        messagingSenderId: "104363794014",
        appId: "1:104363794014:web:b322073de7caeb7308decf",
        measurementId: "G-1CW3P41FJB"
      },
      services: {
        auth: true,
        firestore: true,
        functions: true,
        storage: true,
        database: true,
        messaging: true,
        performance: true,
        analytics: true,
        remoteConfig: true
      }
    }],
  ],
  // auth-next module configuration
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/auth/login',
            method: 'post',
            propertyName: false
          },
          logout: { 
            url: '/auth/logout', 
            method: 'post' 
          },
          user: { 
            url: '/auth/profile', 
            method: 'get', 
            propertyName: false 
          }
        },
        tokenRequired: false,
        tokenType: false
      }
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // transpile: ["vee-validate/dist/rules"],
    transpile: ["vee-validate"],
  },
  server: {
    host: '0'
  }
}

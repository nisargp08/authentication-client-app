export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: `Nisarg's Authentication App`,
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/auth.js',
    '~/plugins/users.js',
    '~/plugins/notification.js',
    '~/plugins/animate.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dayjs',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: process.env.API_SERVER,
  },

  // Frontend auth
  auth: {
    strategies: {
      local: {
        token: {
          property: 'data.token',
        },
        user: {
          property: 'data',
        },
        endpoints: {
          login: { url: 'login', method: 'post' },
          user: { url: 'byToken', method: 'get' },
          logout: { url: 'logout', method: 'get' },
        },
      },
    },
  },

  dayjs: {
    plugins: ['relativeTime'],
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'blackbuilders',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],

    // <link href=""  rel="stylesheet">
    // <link href="https://cdn.lineicons.com/2.0/LineIcons.css" rel="stylesheet">
    // <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,700|Source+Sans+Pro:400,700" rel="stylesheet">

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel: 'stylesheet'},
      { href: 'https://cdn.lineicons.com/2.0/LineIcons.css', rel:'stylesheet'},
      { href: 'https://fonts.googleapis.com/css?family=Rubik:300,400,700|Source+Sans+Pro:400,700', rel: 'stylesheet'},

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/main.styl'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/scrollinto.client.ts',
    '~/plugins/google-analytics.ts',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api',
  ],
  generate: {
    interval: 2000
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
    '@nuxtjs/markdownit'
  ],
  markdownit: {
    breaks: true,
    // runtime: true,
  },
  content: [],
  ssr: true,
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

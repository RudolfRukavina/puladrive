// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 app: {
    head: {
      charset: 'utf-8',
     viewport: 'width=device-width, initial-scale=1',
     script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-YH3FWH14LE',
        async: true
      },
      {
        src: '/google-tag-manager-script.js',
        async: true
      }
    ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: './public/favicon.ico'}],
    },
  },
    modules: [
    '@nuxtjs/tailwindcss',
      'nuxt-swiper'
  ],
    tailwindcss: {
        cssPath: '~/assets/css/input.css'
    }
})

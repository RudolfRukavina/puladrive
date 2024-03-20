// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 app: {
    head: {
      charset: 'utf-8',
     viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico'}],
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

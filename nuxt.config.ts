// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/ui'
  ],
  css: ['@/assets/css/main.css'],
  fonts: {
    defaults: {
      weights: [400, 600, 700]
    }
  },
  ui: {
    theme: {
      colors: [
        'primary',
        'secondary',
        'tertiary',
        'info',
        'success',
        'warning',
        'error',
        'sky',
        'amber',
        'blue',
        'stone',
      ]
    }
  },
  app: {
    baseURL: '/',
    head: {
      title: 'Andrew Januszko • ajanuszko.me',
      meta: [
        { name: 'description', content: 'My name is Andrew Januszko.', },
        { name: 'application-name', content: 'ajanuszko.me' },
      ],
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  }
})
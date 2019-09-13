
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#41b883', height: '5px', throttle: 200 },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/wordpress',
    '~/plugins/i18n.js',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-i18n',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],
  i18n: {
    locales: [
      {
        code: 'el',
        iso: 'el-GR'
      },
      {
        code: 'en',
        iso: 'en-US'
      }
    ],
    strategy: 'prefix_and_default',
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected'
    },
    parsePages: false,
    pages: {
      '/blog': {
        en: '/newss',
        el: '/nea'
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    postcss: {
      plugins: {
        'postcss-url': false,
        'postcss-nested': {},
        'postcss-responsive-type': {},
        'postcss-hexrgba': {}
      },
    },

    extend(config, ctx) {
      
    }
  },
  axios: {
    proxy: true
  },
  
  proxy: {
    '/wp-json/nuxtpress/v1/': { target: 'http://www.nuxtpress.test', changeOrigin: true }

  }
}

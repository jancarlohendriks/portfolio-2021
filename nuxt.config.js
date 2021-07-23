export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
	// ssr: false,
	// mode:'universal',
	loading: false,

	generate: {
		routes: [
			'/bert-govers',
			'/mooi',
			'/riverco',
			'/schommel',
			'/strp',
		]
	},

	// generate: {
  //   async routes () {
  //     // next comment to make VSCode ignore the "error"
  //     // @ts-ignore
  //     const { $content } = require('@nuxt/content')
  //     const pages = await $content().only(['path']).fetch()
  //     // const posts = await $content('posts').only(['path']).fetch()
      
  //     // const files = [...pages,...posts,]
  //     const files = [...pages]

  //     return files.map(file => file.path === '/index' ? '/' : file.path)
  //   }
  // },

  head: {
    title: 'portfolio-2021',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'stylesheet',
				href: 'https://use.typekit.net/abt6rwi.css'
			},
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Inter:wght@700;800&display=swap'
			}
    ],
		script: [
      {
        // src: '/assets/js/base.js'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/app.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
		{ src: '~/plugins/LocomotiveBoth.js' },
		{ src: '~/plugins/LocomotivePlugin.js', mode: 'client' },
	],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/content'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
		extend(config, ctx) {}
	},

	server: {
		host: "0.0.0.0"
	},

	/*
  ** Router configuration
  */
  router: {
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      }

      const findEl = async (hash, x) => {
        return document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve()
            }
            setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
          })
      }

      if (to.hash) {
        let el = await findEl(to.hash)
        if ('scrollBehavior' in document.documentElement.style) {
          return document.body.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
        } else {
          return document.body.scrollTo(0, el.offsetTop)
        }
      }

      return { x: 0, y: 0 }
    }
  }
}

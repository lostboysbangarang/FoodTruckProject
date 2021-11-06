export default {
	/*
	 ** Nuxt target
	 ** See https://nuxtjs.org/api/configuration-target
	 */
	target: 'server',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'foodTrucks',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				hid: 'description',
				name: 'description',
				content: '',
			},
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [
			{
				rel: 'icon',
				type: 'image/x-icon',
				href: '/favicon.ico',
			},
		],
	},
	// devServer: {
	// 	proxy: {
	// 		'/api2': {target: 'https://api.yelp.com/', pathRewrite: {'^/api2/': ''}, changeOrigin: true}
	// 	},
	// },
	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['~assets/css/main.css'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'~/plugins/vee-validate.js',
		'~/plugins/yelp.js',
		// '~/plugins/vue-jsonp.js',
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,
	extractCSS: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
		"@nuxtjs/svg",
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
		// '@nuxtjs/proxy'
	],
	auth: {
		strategies: {
			local: {
				endpoints: {
					login: {url: 'login', method: 'post', propertyName: 'data.token'},
					user: {url: 'me', method: 'get', propertyName: 'data'},
					logout: false,
				},
				autoFetchUser: false,
			}
		}
	},
	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		baseURL: '/',
		credentials: true,
		// proxy: true,
		// prefix: '/'
	},
	// proxy: {
	// 	'/api/': {target: 'https://192.168.1.102/:5000', pathRewrite: {'^/api/': ''}},
	// 	'/api2/': {target: 'https://api.yelp.com/', pathRewrite: {'^/api2/': ''}, changeOrigin: true}
	// },

	// PWA module configuration: https://go.nuxtjs.dev/pwa
	pwa: {
		manifest: {
			lang: 'en',
		},
	},

	// Content module configuration: https://go.nuxtjs.dev/config-content
	content: {},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		transpile: ['vee-validate/dist/rules'],
	},
	server: {
		host: '0.0.0.0',
	},

	/*
	 ** Server Middleware
	 */
	serverMiddleware: {
		'/api': '~/api/index.js',
	},

	// watch: ['api'],
}

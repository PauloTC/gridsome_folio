// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import VueScrollTo from 'vue-scrollto'
import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/main.sass'

// import 'vuetify/dist/vuetify.min.css'

export default function (Vue, {head}) {
	Vue.use(VueScrollTo)
	Vue.component('Layout', DefaultLayout)

	head.link.push(
		{rel: 'stylesheet', href: 'https://file.myfontastic.com/iREo9iNeVTNDA33YjztTjn/icons.css'},
		{rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300i,400|Raleway:700'}
	)
}
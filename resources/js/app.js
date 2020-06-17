require('./bootstrap');

import router from './routes'
import VueRouter from 'vue-router'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// import '@mdi/font/css/materialdesignicons.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import Vue from 'vue';


// import moment from 'moment';
// import anime from 'animejs/lib/anime.es.js';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { fas } from '@fortawesome/free-solid-svg-icons'

// Vue.prototype.$anime = anime;
window.Vue = require('vue');
Vue.use(Element, { locale })
Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueSidebarMenu)
Vue.config.devtools = true

// library.add(fas)
// Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue.component('ex', require('./components/ExampleComponent.vue').default);
// Vue.component('logout', require('./components/Logout.vue').default);
Vue.component('index', require('./Index.vue').default);
Vue.component('anime', require('./components/Anime.vue').default);
Vue.component('sidebar', require('./components/Sidebar.vue').default);


// const anime = require('animejs');

const app = new Vue({
    el: '#app',
    router,
    vuetify: new Vuetify({
        icons: {
            iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
          },
    }),
});

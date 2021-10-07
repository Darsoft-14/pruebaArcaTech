require('./bootstrap');
import vue from 'vue'
window.Vue = vue;


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import App from './components/App.vue';

//importar axios
import VueAxios from 'vue-axios';
import axios from 'axios';

//importar y configurar vue-router
import VueRouter from 'vue-router';
import { routes } from './routes';
import Vue from 'vue';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({
	mode:'history',
	routes: routes
});

const app = new Vue({
	el: '#app',
	router:router,
	render: h => h(App)
});
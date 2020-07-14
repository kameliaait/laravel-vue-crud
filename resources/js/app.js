/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import home from './components/HomeComponent.vue';
import list from './components/ListComponent.vue';
Vue.component('add-task', require('./components/AddtaskComponent.vue').default);
Vue.component('edit-task', require('./components/EdittaskComponent.vue').default);
Vue.component('pagination', require('laravel-vue-pagination'));


const routes =[
{path : '/',
component: home
},
{
	path :'/list',
	component:list
}
];
const router = new VueRouter({routes});

const app = new Vue({
    el: '#app',
    router:router
});

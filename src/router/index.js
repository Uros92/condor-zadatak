import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../components/views/HomeView.vue';
import ContactView from '../components/views/ContactView.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: HomeView,
        name: 'homeView',
        meta: {
            onlyIfAuthenticated: false,
        },
    },
    {
        path: '/contact',
        component: ContactView,
        name: 'contactView',
        meta: {
            onlyIfAuthenticated: false,
        },
    },
];

const router = new VueRouter({
    base: '/',
    linkExactActiveClass: 'active-link',
    mode: 'history',
    routes,
});


export default router;

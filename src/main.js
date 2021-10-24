import Vue from 'vue'
import App from './App.vue'
import VueToast from 'vue-toast-notification'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueI18n from 'vue-i18n';
import i18n from './i18n';
import router from './router'
import { store } from './store/store';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;

Vue.use(VueToast);

Vue.use(VueI18n);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

new Vue({
    i18n,
    router,
    store,
    render: h => h(App),
}).$mount('#app');

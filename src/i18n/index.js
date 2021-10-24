import Vue from 'vue';
import VueI18n from 'vue-i18n';
import storage from '../services/storage';

const sr = require('./sr.json');
const en = require('./en.json');

Vue.use(VueI18n);
const i18n = new VueI18n({
    locale: storage.get('locale', true),
    messages: {
        sr,
        en,
    },
});

if (module.hot) {
    module.hot.accept(['./sr.json', './en.json'], () => {
        i18n.setLocaleMessage('sr', sr);
        i18n.setLocaleMessage('en', en);
    });
}

export default i18n;

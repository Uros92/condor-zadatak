import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutation-types';
import localStorage from '../services/storage';

Vue.use(Vuex);

/**
 * Export Vuex store with strict mode and
 * middleware depending on config.ENV.debug setting for current environment
 *
 * @type {Vuex}
 */
export const store = new Vuex.Store({
    state: {
        selectedLocale:  'sr',
    },

    getters: {
        locale: (state) => state.selectedLocale,
    },

    mutations: {
        [types.SET_LANGUAGE](state, language) {
            state.selectedLocale = language;
        },
    },

    actions: {
        /**
         * This action is called from navigation i app and we need new set of notifications
         * for that language change
         *
         * @param commit
         * @param dispatch
         * @param language
         */
        changeLanguage({ commit }, language) {
            commit('SET_LANGUAGE', language);
            localStorage.save('locale', language, true);
        },
    },

    strict: false,
});
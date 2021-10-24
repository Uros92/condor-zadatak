import { mapGetters, mapActions } from 'vuex';
import localStorage from "../../services/storage";

export default {
    computed: {
        ...mapGetters(['locale'])
    },

    methods: {
        ...mapActions(['changeLanguage']),
        /**
         * Change language of whole app
         * @param language
         */
        changeLanguageApp(language) {
            this.$i18n.locale = language;
            this.changeLanguage(language);
            this.$toast.success(this.$i18n.t('messages.success'));
        },

        /**
         * Get locale, check first local storage if there is nothing there, then get value from vuex
         * @returns string
         */
        getLocale() {
            return localStorage.get('locale', true) ? localStorage.get('locale', true) : this.locale;
        },
    },
}
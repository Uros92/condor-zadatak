/**
 * Storage service object
 * @type {Object}
 */
export default {

    /**
     * Declare all possible storage objects (these are used for bootstrapping)
     * @type {Object}
     */
    data: {
        token: null,
        licenseStatus: null,
        sidebarExtended: true,
    },

    /**
     * Sets prefix to use in local/session storage, to avoid conflicts with other local/session storage properties
     * if used on localhost since it's the same domain for multiple projects
     * @type {String}
     */
    prefix: 'conodor_',

    /**
     * Botstrap method that runs on app initialization
     */
    /*bootstrap() {
        Object.keys(this.data).forEach((key) => {
            if (this.data.hasOwnProperty(key)) {
                // For each key gets value from session or local storage
                // (second argument means get it from storage, not data object)
                // Sets value for current data key
                this.data[key] = this.get(key, true);
            }
        });
    },*/

    /**
     * Clears the data storage
     */
    /*clear() {
        for (let key in this.data) {
            if (this.data.hasOwnProperty(key)) {
                // Clear all keys in data object
                this.data[key] = null;
            }
        }

        window.localStorage.clear();

        window.sessionStorage.clear();
    },*/

    /**
     * Saves value to selected key, with option to persist to localStorage
     * @param  {string} key
     * @param  {string} value
     * @param  {boolean} persist
     */
    save(key, value, persist) {
        // First sets it as data object value
        this.data[key] = value;

        // If it should persist store it in localStorage
        if (persist) {
            window.localStorage.setItem(this.prefix + key, JSON.stringify(value));

            return;
        }

        // Else store it in sessionStorage
        window.sessionStorage.setItem(this.prefix + key, JSON.stringify(value));
    },

    /**
     * Removes value for selected key
     * @param  {string} key
     */
    remove(key) {
        // Does not delete data keys since they might be needed for re-bootstrap,
        // just sets them to null
        this.data[key] = null;

        window.sessionStorage.removeItem(this.prefix + key);

        window.localStorage.removeItem(this.prefix + key);
    },

    /**
     * Gets value for selected key, if bootstrap argument is true, does not get them from data,
     * but from browser session or local storage
     * @param  {string} key
     * @param  {boolean} bootstrap
     * @return {mixed}
     */
    get(key, bootstrap) {
        // If there is no such key in session or local storage (browser returns null in those cases)
        if (window.sessionStorage.getItem(this.prefix + key) === null
            && window.localStorage.getItem(this.prefix + key) === null) {
            // Return value from data regardless of bootstrap argument
            return this.data[key];
        }

        // If bootstrap is true, always return from session or local storage
        if (bootstrap) {
            return JSON.parse(
                window.sessionStorage.getItem(this.prefix + key) || window.localStorage.getItem(this.prefix + key)
            );
        }

        // Else return from data
        return this.data[key];
    }
};
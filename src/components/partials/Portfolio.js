export default {
    data() {
        return {
            games: [],
        }
    },

    // simulate api calls
    mounted() {
        this.games = [
            {
                id: 1,
                title: 'Igrica 1',
                description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
            },
            {
                id: 2,
                title: 'Igrica 2',
                description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
            },
            {
                id: 3,
                title: 'Igrica 3',
                description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
            },
            {
                id: 4,
                title: 'Igrica 4',
                description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
            }
        ]
    }
}
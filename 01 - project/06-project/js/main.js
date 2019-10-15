//заглушки (имитация базы данных)
const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

let app = new Vue ({
    el: '#app',
    data: {
        err: '',
        filter: ''
    },
    methods: {
        getData (url) {
            return fetch(`${API_URL + url}`)
        },

        filterCatalog () {
            const reg = new RegExp (this.filter, 'i')
            this.filtered = this.filtered.filter (el => reg.test (el.product_name))
        },
        lol () {
            console.log (this)
        }
    },
    async mounted () {

    }
})


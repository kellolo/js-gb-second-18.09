const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

let app = new Vue ({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        filtered: [],
        imgCatalog: 'https://placehold.it/200x150',
        err: '',
        filter: ''
    },
    methods: {
        async getData () {
            try {
                await fetch(`${API_URL}/catalogData.json`)
                .then (data => data.json ())
                .then (data => {
                    this.products = data
                    this.filtered = data
                })
            }
            catch (error) {
                this.err = error
            }
        },

        addProduct (item) {
            console.log (item.id_product)
        },

        filterCatalog () {
            const reg = new RegExp (this.filter, 'i')
            this.filtered = this.filtered.filter (el => reg.test (el.product_name))
        }
    },
    async mounted () {
        await this.getData ()
	}
})
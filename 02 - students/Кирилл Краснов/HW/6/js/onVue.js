cartImage = 'https://placehold.it/100x80';

const app = new Vue({
    el: '#app',

    data: {
        products: [],
        filtered: [],
        imgCatalog: 'https://placehold.it/200x150',
        catalogUrl: '/catalogData.json',
        API_URL: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
        err: '',
        filter: '',
    },

    methods: {
        async getData() {
            try {
                this.products = await fetch(`${this.API_URL + this.catalogUrl}`)
                    .then(data => data.json())
                    .then(data => {
                        this.products = data
                        this.filtered = data
                    })
            }
            catch (error) {
                this.err = error
            }
            finally {
                this.filterCatalog()
            }
        },
        addProduct(item) {
            console.log(item.id_product)
        },
        filterCatalog() {
            const reg = new RegExp(this.filter, 'i')
            // this.filtered = this.products
            this.filtered = this.filtered.filter(el => reg.test(el.product_name))
        },
    },

    async mounted() {
        await this.getData()

    }
})
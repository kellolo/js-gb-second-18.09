cartImage = 'https://placehold.it/100x80';

const app = new Vue({
    el: '#app',
    
    data: {
        products: [],
        imgCatalog: 'https://placehold.it/200x150',
        catalogUrl: '/catalogData.json',
        API_URL:'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
        err: '',
        filter: '',
    },

    methods: {
        async getData() {
            try {
                this.products = await fetch(`${this.API_URL+this.catalogUrl}`)
                    .then(data => data.json())
                this.filteredProducts = this.ProductsList
            }
            catch (error) {
                this.err = error
            }
        },
        addProduct(item) {
            console.log(item.id_product)
        }
    },

    mounted() {
        this.getData()
    }
})
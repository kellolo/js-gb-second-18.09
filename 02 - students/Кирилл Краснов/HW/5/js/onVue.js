iamge = 'https://placehold.it/200x150'
cartImage = 'https://placehold.it/100x80'
API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'


const app = new Vue({
    el: '#app',
    data: {
        products: [],
        imgCatalog: 'https://placehold.it/200x150',
        err: '',
        filter: '',
        catalogUrl: '/catalogData.json',
    },
    // computed: {

    // },
    methods: {
        async getData() {
            try {
                this.products = await fetch(`${API_URL}/catalogData.json`)
                    .then(data => data.json())
                this.filteredProducts = this.ProductsList
            }
            catch (error) {
                this.err = error
            }
        },
        addProduct(item) {
            console.log(item.id_product)
        },
        mounted() {
            this.getData()
        }
    },
})
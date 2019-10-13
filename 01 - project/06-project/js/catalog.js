Vue.component ('product-item', {
    props: [
        'product', 'img'
    ],
    data () {
        return {

        }
    },
    mounted () {
        // console.log (this)
    },
    template: `
                    <div class="product-item">
                        <img :src="img" alt="Some img">
                        <div class="desc">
                            <h3> {{ product.product_name }} </h3>
                            <p>{{ product.price }} $</p>
                            <button class="buy-btn" @click="$parent.addProduct(product)">Купить</button>
                        </div>
                    </div>
    `
})

Vue.component ('catalog', {
    props: [],
    data () {
        return {
            image: 'https://placehold.it/200x150',
            filtered: [],
            products: [],
            url: '/catalogData.json'
        }
    },
    async mounted () {
        let result = null
        try {
            result = await this.$parent.getData (this.url)
            .then (data => data.json ())
        }
        catch (error) {
            result = []
            this.err = error
        }
        finally {
            this.products = result
            this.filtered = result
        }
    },
    methods: {
        addProduct (item) {
            console.log (item.id_product)
        },
        helloFromBeyond () {
            alert ('hi')
        }
    },
    template: `
                <div class="products">
                    <product-item v-for="product of filtered" :key="product.id_product" :product="product" :img="image">
                    </product-item>
                </div>
    `
})
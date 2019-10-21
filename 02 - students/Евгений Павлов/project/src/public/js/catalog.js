let productItem = {
    props: [
        'product', 'img'
    ],
    data () {
        return {

        }
    },
    mounted () {},
    template: `
                    <div class="product-item">
                        <img :src="img" alt="Some img">
                        <div class="desc">
                            <h3> {{ product.product_name }} </h3>
                            <p>{{ product.price }} $</p>
                            <button class="buy-btn" @click="$root.$refs.cart.addProduct (product)">Купить</button>
                        </div>
                    </div>
    `
}

let catalog = {
    props: [],
    data () {
        return {
            image: 'https://placehold.it/200x150',
            filtered: [],
            products: [],
            url: '/catalogData.json'
        }
    },
    mounted () {
        this.$parent.getJson(`/api/products`)
        .then(data => {
            for(let el of data){
                this.products.push(el);
                this.filtered.push(el);
            }
        });
    },
    methods: {
        filterCatalog(value){
            let regexp = new RegExp(value, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    template: `
                <div class="products">
                    <product-item v-for="product of filtered" :key="product.id_product" :product="product" :img="image">
                    </product-item>
                </div> `,
    components :{
            'product-item': productItem
                }
}

export default catalog


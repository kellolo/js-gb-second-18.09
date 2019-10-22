let productItem = {
    props:[
        'product'
    ],
    data(){
        return {
            img: 'https://placehold.it/200x150',
        }
    },
    template: 
                `<div class="product-item">
                    <img :src="img" alt="Some img">
                    <div class="desc">
                        <h3>{{product.product_name}}</h3>
                        <p>{{product.price}} $</p>
                        <button class="buy-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>
                    </div>
                </div>`
}

let catalog = {
    data(){
        return {
            filtered: [],
            products: [],
            url: '/api/products',
            err: 'Каталог товаров: запрос на сервер вернул ошибку.'
        }
    },
    methods:{
        filterCatalog(filter){
            const reg = new RegExp(filter, 'i')            
            this.filtered = this.products.filter(el => reg.test(el.product_name))
        }
    },
    async mounted(){
        let res = await this.$parent.getJson(this.url)
        this.products = res
        this.filtered = res
    },
    template: 
                `<div class="products">
                    <product-item v-for="product of filtered" :key="product.id_product" :product="product">
                    </product-item>
                </div>`,
    components: {
        'product-item': productItem
    }
}

export default catalog
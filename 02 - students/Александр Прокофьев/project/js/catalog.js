Vue.component('product-item',{
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
})

Vue.component('catalog', {
    data(){
        return {
            filtered: [],
            products: [],
            url: '/catalogData.json',
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
        let result = null
        try {
            result = await this.$parent.getData(this.url)
                .then(data => data.json())
        } catch (error) {
            result = []
            // this.err = error
            this.$parent.$refs.err_notifier.flashErrMsg(this.err)
        } finally {
            this.products = result
            this.filtered = result            
        }
    },
    template: 
                `<div class="products">
                    <product-item v-for="product of filtered" :key="product.id_product" :product="product">
                    </product-item>
                </div>`
})
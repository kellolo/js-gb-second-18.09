Vue.component('cart-item',{
    props:[
        'item'
    ],
    data(){
        return {
            img_cart: 'https://placehold.it/100x80'
        }
    },
    template:   `<div class="cart-item">
                    <div class="product-bio">
                        <img :src="img_cart" alt="Some image">
                        <div class="product-desc">
                            <p class="product-title">{{item.product_name}}</p>
                            <p class="product-quantity">Quantity: {{item.quantity}}</p>
                            <p class="product-single-price">$ {{item.price}} each</p>
                        </div>
                    </div>
                    <div class="right-block">
                        <p class="product-price">{{item.quantity * item.price}}</p>
                        <button class="del-btn" @click="$parent.removeProduct(item.id_product)">&times;</button>
                    </div>
                </div>`
})

Vue.component('cart',{
    props:[
        'toggle'
    ],
    data(){
        return {
            amount: null,
            count_goods: null,
            cart_items: [],
            total_price: 0,
            cart_empty_msg: 'Нет данных',
            url: '/getBasket.json',
            err: 'Корзина товаров: запрос на сервер вернул ошибку.'
        }
    },
    methods:{
        addProduct(item){
            let find = this.cart_items.find(element => element.id_product === item.id_product)
            if (find) {
                find.quantity++
            }
            else {
                let prod = Object.assign({quantity:  1}, item)
                this.cart_items.push(prod)
            }
            this.calcTotal()
        },
        removeProduct(productId){
            let find = this.cart_items.find(element => element.id_product === productId)
            if (find.quantity > 1) {
                find.quantity--
            } else {
                this.cart_items.splice(this.cart_items.indexOf(find), 1)
            }
            this.calcTotal()
        },
        calcTotal(){
            let sum = 0
            this.cart_items.forEach(element => sum += element.price * element.quantity)
            this.total_price = sum
        }
    },
    computed:{
        
    },
    async mounted(){
        try {
            this.cart_items = await this.$parent.getData(this.url)
                .then(data => data.json())
                .then(res => {
                    this.amount = res.amount
                    this.count_goods = res.countGoods
                    return [...res.contents]
                })
        } catch (error) {
            // this.err = error
            this.$parent.$refs.err_notifier.flashErrMsg(this.err)
        } finally {
            this.calcTotal()
        }
    },
    template:   `<div class="cart-block" v-show="toggle">
                    <div class='total-price'><p>Total price: {{total_price}} $</p><hr></div>
                    <cart-item v-for="item in cart_items" :key="item.id_product" :item="item"></cart-item>
                    <div class="cart-item" v-if="cart_items.length == 0">{{cart_empty_msg}}</div>
                </div>`
})
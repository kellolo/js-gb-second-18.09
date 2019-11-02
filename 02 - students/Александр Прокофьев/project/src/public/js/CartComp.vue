<template>
    <div class="cart-block" v-show="toggle">
        <div class='total-price'><p>Total price: {{total_price}} $</p><hr></div>
        <cart-item v-for="item in cart_items" :key="item.id_product" :item="item"></cart-item>
        <div class="cart-item" v-if="cart_items.length == 0">{{cart_empty_msg}}</div>
    </div>
</template>

<script>
import cartItem from './CartItem.vue'
export default {
    props:[
        'toggle'
    ],
    data: function(){
        return {
            amount: null,
            count_goods: null,
            cart_items: [],
            total_price: 0,
            cart_empty_msg: 'Нет данных',
            url: '/api/cart',
            err: 'Корзина товаров: запрос на сервер вернул ошибку.'
        }
    },
    methods:{
        addProduct(item){
            let find = this.cart_items.find(el => el.id_product === item.id_product)
            if (find) {
                //put
                this.$parent.putJson(`${this.url}/${find.id_product}`, {quantity: 1})
                    .then(data => {
                        if (data.result){
                            find.quantity++
                        }
                    })
            }
            else {
                //post
                let prod = Object.assign({quantity:  1}, item)                
                this.$parent.postJson(`${this.url}`, prod)
                    .then(data => {
                        if (data.result){
                            this.cart_items.push(prod)
                        }
                    })
            }
            this.calcTotal()
        },
        removeProduct(productId){
            let find = this.cart_items.find(elem => elem.id_product === productId)
            if (find.quantity > 1) {
                //put
                this.$parent.putJson(`${this.url}/${productId}`, {quantity: -1})
                    .then(data => {
                        if (data.result){
                            find.quantity--
                        }
                    })
            }
            else {
                //delete                
                this.$parent.deleteJson(`${this.url}/${productId}`)
                    .then(data => {
                        if (data.result){
                            this.cart_items.splice(this.cart_items.indexOf(find), 1)
                        }
                    })
            }
            this.calcTotal()
        },
        calcTotal(){
            let sum = 0
            this.cart_items.forEach(element => sum += element.price * element.quantity)
            this.total_price = sum
        }
    },
    async mounted(){
        let res = await this.$parent.getJson(this.url)
        this.amount = res.amount
        this.count_goods = res.countGoods
        this.cart_items = [...res.contents]
        this.calcTotal()
    },
    components: {
        'cart-item': cartItem
    }
}
</script>

<style>

</style>
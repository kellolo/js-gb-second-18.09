import cartItem from './cart-item.js'

export default {
    components: {
        'cart-item': cartItem
    },
    data: () => ({
        visible: false
    }),
    computed: {
        isEmpty () {
            return this.$store.getters.cart.length <= 0
        },
        ...Vuex.mapGetters(['cart', 'total'])
    },
    methods: {
        ...Vuex.mapActions(['fetchCart'])
    },
    mounted () {
        this.fetchCart()
    },
    template: `<div class="cart">
                <button class="cart-button btn btn_light" type="button" @click="visible = !visible">Корзина</button>
                <div class="cart-list" v-bind:class="{  invisible: !visible }">
                    <div class="cart-list__header" v-show="!isEmpty"><div class='cart-list__total'>Total: <span>\${{ total }}</span></div></div>
                    <ul class="cart-list__content">
                        <cart-item v-for="item of cart" :key="item.id" :item="item" />
                    </ul>
                    <div class="cart-list__footer" v-show="!isEmpty"><button class='cart-list__order-button btn btn_stroke'>Оформить</button></div>
                </div>
            </div>`
}

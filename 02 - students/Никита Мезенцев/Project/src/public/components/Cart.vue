<template>
    <div class="cart">
        <button class="cart-button btn btn_light" type="button" @click="visible = !visible">Корзина</button>
        <div class="cart-list" v-bind:class="{  invisible: !visible }">
            <div class="cart-list__header" v-show="!isEmpty"><div class='cart-list__total'>Total: <span>${{ total }}</span></div></div>
            <ul class="cart-list__content">
                <cart-item v-for="item of cart" :key="item.id" :item="item" />
            </ul>
            <div class="cart-list__footer" v-show="!isEmpty"><button class='cart-list__order-button btn btn_stroke'>Оформить</button></div>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'
import CartItem from './CartItem.vue'

export default {
    components: {
        'cart-item': CartItem
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
    template: ``
}
</script>

<style>
.cart {
    position: relative;
}

.cart-button {
    position: relative;
}

.cart-list {
    position: absolute;
    min-width: 300px;
    min-height: 50px;
    right: 0;
    top: 100%;
    margin-top: 1rem;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.62);
    background-color: #fff;
    color: #000;
}

.cart-list.invisible {
    display: none;
}

.cart-list:before {
    content: '';
    position: absolute;
    bottom: 100%;
    right: 3rem;
    display: block;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-bottom: 10px solid #fff;
}

.cart-list__header {
    display: block;
    padding: 20px;
    border-bottom: 1px solid #333;
}

.cart-list__header:empty {
    display: none;
}

.cart-list__content {
    padding: 20px;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
}
.cart-list__content:empty {
    display: flex;
    align-items: center;
    justify-content: center;
}

.cart-list__content:empty::after{
    content:'Ваша корзина пуста';
    text-align: center;
    color: var(--dark);
    opacity: 0.8;
}

.cart-list__footer {
    display: block;
    padding: 20px;
    border-top: 1px solid #333;
}

.cart-list__footer:empty {
    display: none;
}


.cart-list__total {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    font-size: 2rem;
}

.cart-list__order-button {
    display: block;
    width: 100%;
    border-radius: 0;
    color: hsl(20, 60%, 50%, 100%);
    padding: 1rem;
}
.cart-list__order-button:hover {
    background-color: hsl(20, 60%, 50%, 100%);
}

</style>

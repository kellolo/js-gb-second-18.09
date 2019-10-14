<template>
    <div class='cart-item'>
        <img class='cart-item__img' :src="item.thumb" />
        <div class='cart-item__block'>
            <h3 class='cart-item__title'>{{ item.title }}</h3>
            <span class='cart-item__quantity'>Quantity: {{ item.quantity }}</span>
        </div>
        <div class='cart-item__block'>
            <span class='cart-item__price'>${{ item.total }}</span>
            <button class='cart-item__btn btn' @click="$store.dispatch('remove', item)">x</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['item']
    }
</script>

<style>

.cart-item {
    min-width: 300px;
    display: flex;
}
.cart-item:nth-child(n+2) {
    margin-top: 20px;
}

.cart-item__block {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: .5rem;
}

.cart-item__block:last-child {
    flex-grow: 0;
    align-items: flex-end;
    justify-content: space-between;
}

.cart-item__title {
    font-size: 1.2rem;
    margin: 0;
}

.cart-item__quantity {
    font-size: 0.7rem;
}

.cart-item__price {
    font-size: 1.5rem;
}

.cart-item__btn {
    font-size: 1rem;
}

</style>

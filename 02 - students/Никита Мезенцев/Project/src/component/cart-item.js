Vue.component('cart-item', {
    props: ['item'],
    template: `<div class='cart-item'>
                    <img class='cart-item__img' :src="item.thumb" />
                    <div class='cart-item__block'>
                        <h3 class='cart-item__title'>{{ item.product_name }}</h3>
                        <span class='cart-item__quantity'>Quantity: {{ item.quantity }}</span>
                    </div>
                    <div class='cart-item__block'>
                        <span class='cart-item__price'>\${{ item.total }}</span>
                        <button class='cart-item__btn btn' :data-id="item.id_product" @click="$store.dispatch('remove', item)">x</button>
                    </div>
                </div>`
})

Vue.component('goods-item', {
    props: ['item'],
    template: `<div class='goods-item'>
                <img class='goods-item__img' :src="item.img" />
                <div class='goods-item__block'>
                    <h3 class='goods-item__title'>{{ item.product_name }}</h3>
                    <span class='goods-item__price'>\${{ item.price}}</span>
                </div>
                <button class='goods-item__btn btn' :data-id="item.id_product" @click="$store.dispatch('buy', item)">Купить</button>
            </div>`
})

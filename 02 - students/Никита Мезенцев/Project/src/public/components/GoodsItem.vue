export default {
    props: ['item'],
    template: `<div class='goods-item'>
                <img class='goods-item__img' :src="item.img" />
                <h3 class='goods-item__title'>{{ item.title }}</h3>
                <span class='goods-item__price'>\${{ item.price }}</span>
                <button class='goods-item__btn btn' :data-id="item.id" @click="$store.dispatch('buy', item)">Купить</button>
            </div>`
}

<template>
    <div class='goods-item'>
        <img class='goods-item__img' :src="item.img" />
        <h3 class='goods-item__title'>{{ item.title }}</h3>
        <span class='goods-item__price'>${{ item.price }}</span>
        <button class='goods-item__btn btn' :data-id="item.id" @click="$store.dispatch('buy', item)">Купить</button>
    </div>
</template>


<script>
export default {
    props: ['item']
}
</script>

<style>
.goods-item {
    width: 200px;
    border-radius: 5px;
    box-shadow: 0 0 2px 0 rgba(0,0,0,30%);
    overflow: hidden;
    text-align: center;
    display: flex;
    flex-direction: column;
}

.goods-item__img {
    max-width: 100%;
    height: auto;
}

/*
.goods-item__block {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}
*/

.goods-item__title {
    display: block;
    padding: 10px 20px;
    margin: 0;
}

.goods-item__price {
    display: block;
    padding: 10px 20px;
    font-size: 2rem;
    margin: auto 0;
}

.goods-item__btn {
    border-radius: 0;
    width: 100%;
    padding: 1rem;
    border-width: 2px;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
}
</style>

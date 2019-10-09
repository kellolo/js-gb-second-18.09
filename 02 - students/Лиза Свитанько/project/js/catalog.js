Vue.component('goods-list', {
    props: ['goods'],
    template: `
    <div class="goods-list">
      <p v-if="goods.length === 0">Нет данных</p>
      <goods-item v-for="good in goods" :good="good"></goods-item>
    </div>
    `
});

Vue.component('goods-item', {
    props: ['good'],
    template: `
    <div class="goods-item">
        <div class="goods-img"><img src=""></div>
        <h3>{{ good.product_name }}</h3>
        <p>{{ good.price }}</p>
        <button class="item-btn">Добавить</button>

    </div>
    `
});

Vue.component('goods-search', {
    template: `
    <div class="goods-search">
        <input type="text" class="text-search"/>
        <button class="search-button" type="button" @click="$parent.searchClickHandler">Искать</button>
    </div>
    `
});
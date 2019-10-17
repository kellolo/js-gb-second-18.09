Vue.component('catalog', {
    props: [],
    data() {
        return {
            filteredGoods: [],
            goods: [],
            url: '/goods.json'
        }
    },
    template: `
    <div class="goods-list">
      <p v-if="goods.length === 0">Нет данных</p>
      <goods-item v-for="good in goods" :good="good"></goods-item>
    </div>
    `,
    async mounted () {
        let result = null;
        try {
            result = await this.$parent.getData (this.url)
                .then (data => data.json ())
        }
        catch (error) {
            result = [];
            this.err = error;
        }
        finally {
            this.goods = result;
            this.filteredGoods = result;
        }
    },
    methods: {
        filterGoods(value) {
            const regexp = new RegExp(value, 'i');
            this.$root.$refs.cata.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
        },
    }
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
        <button class="search-button" type="button" @click="this.searchClickHandler">Искать</button>
    </div>
    `,
    methods: {
        searchClickHandler() {
            let searchLine = document.getElementsByClassName("goods-search")[0].value;
            this.$root.$refs.cata.filterGoods(searchLine);
            console.log(this.$root.$refs.cata.filteredGoods);
        }
    }
});

Vue.component('cart', {
    data() {
        return {
            cartGoods: [],
            isVisibleCart: false,
        }
    },
    template: `
        <button class="cart-button" type="button" @click="isVisibleCart = true">Корзина</button>
        <div v-show="isVisibleCart">
            <div class="goods-list">
                <p v-if="cartGoods.length === 0">В корзине ничего нет</p>
                <div class="goods-item" v-for="good in cartGoods">
                    <div class="goods-img"><img src=""></div>
                    <h3>{{ good.product_name }}</h3>
                    <p>{{ good.price }}</p>
                    <button class="item-btn">Удалить</button>
                </div>
            </div>
        </div>`,

});


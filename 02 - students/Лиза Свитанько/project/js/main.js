const API_URL = ".";

const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        cartGoods: [],
        searchLine: '',
        isVisibleCart: false,
    },
    methods: {
        makeGETRequest(url, callback) {
            var xhr;

            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    callback(xhr.responseText);
                }
            }

            xhr.open('GET', url, true);
            xhr.send();
        },
        filterGoods(value) {
            const regexp = new RegExp(value, 'i');
            this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
        },
        searchClickHandler() {
            this.searchLine = document.getElementsByClassName("goods-search")[0].value;
            this.filterGoods(this.searchLine);
            this.isVisibleCart = false;
        }
    },
    mounted() {
        this.makeGETRequest(`${API_URL}/goods.json`, (goods) => {
            this.goods = JSON.parse(goods);
            this.filteredGoods = JSON.parse(goods);
        });
        this.makeGETRequest(`${API_URL}/cartGoods.json`, (cartGoods) => {
            this.cartGoods = JSON.parse(cartGoods);
        });
    }
});

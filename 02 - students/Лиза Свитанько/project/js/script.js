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

/*
class GoodsItem {
    constructor(title = "Accessories", price = 250) {
        this.product_name = title;
        this.price = price;
    }

    render() {
        return `<div class="goods-item"><div class="goods-img"><img src=""></div><h3>${this.product_name}</h3><p>Цена: ${this.price} рублей</p><button id="add-btn">Добавить</button></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
        this.filteredGoods = [];
    }

    filterGoods(value) {
        const regexp = new RegExp(value, 'i');
        this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
        this.render();
    }

    fetchGoods() {
        return new Promise((resolve, reject) => {
            makeGETRequest(`${API_URL}/goods.json`)
                .then((goods) => {
                    this.goods = JSON.parse(goods);
                    this.filteredGoods = JSON.parse(goods);
                    resolve();
                }).catch((error) => {
                console.log('Something went wrong: ', error);
            });
        });
    }

    render() {
        let listHtml = "";
        this.filteredGoods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector(".goods-list").innerHTML = listHtml;
    }

    calcTotalPrice() {
        let goodsPrices = [];
        this.goods.forEach(good => {
            goodsPrices.push(new GoodsItem(good.product_name, good.price).price);
        });
        return goodsPrices.reduce((sum, goodPrice) => sum + goodPrice);
    }
}

class Cart {
    constructor() {
        this.goodsList = new GoodsList();
    }

    calcTotalPrice() {
        return this.goodsList.calcTotalPrice();
    }

    addGoodItem(good) {
        this.goodsList.goods.push(good);
    }

    removeGoodItem(good) {
        for (let i = 0; i < this.goodsList.goods.length; i++) {
            if (this.goodsList.goods[i] === good) {
                this.goodsList.goods.splice(i, 1);
            }
        }
    }
}

class CartGoods {
    constructor() {
    }

    // TODO: think about the methods, not sure for now
    changeStatus() {
    }
}

const list = new GoodsList();
list.fetchGoods()
    .then(() => {
        list.render()
    });

var searchButton = document.getElementsByClassName("search-button")[0];
var searchInput = document.getElementsByClassName("goods-search")[0];

searchButton.addEventListener('click', (e) => {
    const value = searchInput.value;
    list.filterGoods(value);
});
*/

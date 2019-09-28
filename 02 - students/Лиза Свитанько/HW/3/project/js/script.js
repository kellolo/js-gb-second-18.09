const makeGETRequest = (url) => {
    var xhr;

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;

            if (xhr.readyState === 4) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.status);
            }
        }

        xhr.open("GET", url, true);
        xhr.send();
    });
}

const API_URL = ".";

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
    }

    fetchGoods() {
        return new Promise((resolve, reject) => {
            makeGETRequest(`${API_URL}/goods.json`)
                .then((goods) => {
                    this.goods = JSON.parse(goods);
                    resolve();
                }).catch((error) => {
                console.log('Something went wrong: ', error);
            });
        });
    }

    render() {
        let listHtml = "";
        this.goods.forEach(good => {
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
        for(let i = 0; i < this.goodsList.goods.length; i++) {
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
    .then(() => {list.render()});
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

// Форма обратной связи

var firstNameTextField = document.getElementById("firstName");
var secondNameTextField = document.getElementById("secondName");
var phoneTextField = document.getElementById("phone");
var emailTextField = document.getElementById("email");
var sendButton = document.getElementById("send-button");
var errorResult = document.getElementById("error-msg");

sendButton.addEventListener('click', (e) => {
    var errorMessage = "";

    if (!firstNameTextField.value.match(/^[A-Za-zА-Яа-я]+$/)) {
        firstNameTextField.style.border = '1px solid red';
        errorMessage = "<p style='color: red; font-size: 13px;'>Имя должно содержать только буквы</p>";
    }
    if (!secondNameTextField.value.match(/^[A-Za-zА-Яа-я]+$/)) {
        secondNameTextField.style.border = '1px solid red';
        errorMessage = "<p style='color: red; font-size: 13px;'>Имя должно содержать только буквы</p>";
    }
    // +7(000)000-0000
    if (!phoneTextField.value.match(/^\+7\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/)) {
        phoneTextField.style.border = '1px solid red';
        errorMessage += "<p style='color: red; font-size: 13px;'>Телефон должен иметь вид +7(000)000-0000</p>";
    }
    if (!emailTextField.value.match(/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/)) {
        emailTextField.style.border = '1px solid red';
        errorMessage += "<p style='color: red; font-size: 13px;'>Email может содержать только точку или дефис и любые буквы</p>";
    }
    errorResult.innerHTML = errorMessage;
});
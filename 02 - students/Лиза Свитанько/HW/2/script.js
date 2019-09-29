class GoodsItem {
    constructor(title="Accessories", price=250) {
        this.title = title;
        this.price = price;
    }

    render() {
        return `<div class="goods-item"><div class="goods-img"><img src=""></div><h3>${this.title}</h3><p>Цена: ${this.price} рублей</p><button id="add-btn">Добавить</button></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
            { title: 'Shirt'},
            { title: 'Socks', price: 50 },
            { title: 'Jacket'},
            { price: 250 },
        ];
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    calcTotalPrice() {
        let goodsPrices = [];
        this.goods.forEach(good => {
            goodsPrices.push(new GoodsItem(good.title, good.price).price);
        });
        return goodsPrices.reduce((sum, goodPrice) => sum + goodPrice);
    }
}

class Cart {
    constructor() {}
    calcTotalPrice() {}
    addGoodItem() {}
    removeGoodItem() {}
}

class CartGoods {
    constructor() {}
    // TODO: think about the methods, not sure for now
    changeStatus() {}
}

const list = new GoodsList();
list.fetchGoods();
list.render();
console.log(list.calcTotalPrice());

/*
* Некая сеть фастфуда предлагает несколько видов гамбургеров:
Маленький (50 рублей, 20 калорий).
Большой (100 рублей, 40 калорий).

Гамбургер может быть с одним из нескольких видов начинок (обязательно):
С сыром (+10 рублей, +20 калорий).
С салатом (+20 рублей, +5 калорий).
С картофелем (+15 рублей, +10 калорий).

Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и полить майонезом (+20 рублей, +5 калорий).
 */

class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;

        if (this.size === "small") {
            this.price = 50;
            this.calories = 20;
        } else if (this.size === "big") {
            this.price = 100;
            this.calories = 40;
        }

        this.toppings = [];
    }

    addTopping(seasoning=false, mayo=false) {
        if (seasoning) {
            this.price += 15;
        }
        if (mayo) {
            this.price += 20;
            this.calories += 5;
        }
    }

    removeTopping(seasoning=false, mayo=false) {
        if (seasoning) {
            this.price -= 15;
        }
        if (mayo) {
            this.price -= 20;
            this.calories -= 5;
        }
    }

    getToppings(topping) {
        return this.toppings;
    }

    getSize() {
        return this.size;
    }

    getStuffing() {
        return this.stuffing;
    }

    calculatePrice() {
        return this.price;
    }

    calculateCalories() {
        return this.calories;
    }
}

// testing hamburgers
let hamburger = new Hamburger('small', 'cheese');
hamburger.addTopping(true, true);
console.log(hamburger.calculatePrice());
hamburger.removeTopping(false, true);
console.log(hamburger.calculatePrice());
console.log(hamburger.calculateCalories());
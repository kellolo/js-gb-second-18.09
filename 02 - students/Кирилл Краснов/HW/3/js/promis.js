const cartProducts = [];
const urlJson = 'https://raw.githubusercontent.com/sber-info/js-gb-second-18.09/master/02%20-%20students/Кирилл%20Краснов/HW/3/json/products.json';

function makeGETRequest(url) {
    return fetch(url)
        .then((res) => res.json())
        .catch((err) => { console.log(err) })
}

//создаем класс
class Product {
    constructor(product) {
        this.price = product.price
        this.img = product.image
        this.id = product.id
        this.name = product.name
        this.template = `<div class="product-item" data-id="${this.id}">
                            <img src="${this.img}" alt="image" width="200" height="150">
                            <h3>${this.name}</h3>
                            <p>${this.price} $</p>
                            <button class="product-item-btn" data-id="${this.id}" data-price="${this.price}" data-name="${this.name}" data-img="${this.img}">Купить</button>
                        </div>`
    }
}

class ProductsList {
    constructor() {
        this.products = []
    }

    async featchProducts() {
        try {
            this.products = await fetch(urlJson)
                .then(data => data.json())
            this.render()
        }
        catch (err) {
            console.log(err)
        }
        finally {
            console.log('end of async')
        }
    }

    // featchProducts() {
    //     makeGETRequest(urlJson)
    //     .then(data=> {
    //         this.products=JSON.parse(data)
    //         this.render();
    //     })
    //     .catch(err=>{console.log(err)})
    // }

    render() {
        const block = document.querySelector('.products')
        this.products.forEach(product => {
            const goodItem = new Product(product);
            block.innerHTML += goodItem.template;
        });
    }

    summ() {
        let s = 0;
        this.products.forEach(product => { s += product.price });
        return s
    }
}

let list = new ProductsList;
list.featchProducts(() => {
    list.render();
})








// function add() {
//     btn = document.querySelectorAll('.product-item-btn');
//     btn.forEach(element => {
//         element.addEventListener('click', (event) => { alert(event.target.dataset.name) });
//     });
// }


//ДЗ
class Cart {
    constructor(cartProducts) {

    }
    countItems() {

    }
    sumItems() {

    }
    listItems() {

    }
    incItem() {

    }
    decItem() {

    }
    delItem() {

    }
}


// class CartItem {
//     constructor() {
//         this._btnItem()
//         this.name = item.target.dataset.name
//     }
//     _btnItem() {
//         let item = document.querySelectorAll('.product-item-btn');
//         item.forEach(element => {
//             element.addEventListener('click', (event) => { alert(event.target.dataset.name) });
//         });
//     }
// }

// let createCartItem = new cartItem
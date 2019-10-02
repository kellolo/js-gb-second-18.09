var userCart = [];

document.querySelector('.cart-button').addEventListener('click', () => {
    document.querySelector('.cart-block').classList.toggle('invisible');
	});

class GoodsItem {
  constructor(title, price, image) {
    this.title = title;
    this.price = price;
    this.image = image;
  }
  render() {
    return `<div class="goods-item"><img src="${this.image}" alt="${this.title}"><h3>${this.title}</h3><p>${this.price}</p> <button class="item-button" type="button">Купить</button></div>`;
  }
}
class GoodsList {
  constructor() {
    this.goods = [];
  }
  fetchGoods() {
    this.goods = [
      { title: 'Shirt', price: 150, image: 'img/shirt.png' },
        { title: 'Socks', price: 50, image: 'img/socks.png' },
        { title: 'Jacket', price: 350, image: 'img/jacket.png' },
        { title: 'Shoes', price: 250, image: 'img/shoes.png' },
    ];
  }
  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price, good.image);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
}
const list = new GoodsList();
list.fetchGoods();
list.render();

//User cart

class CartItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  render() {
    return `<div class="cart-item"><h5>${this.title}</h5><p>${this.price}</p>`;
  }
}

class Cart {
  constructor() {
    this.goods = [];
  }
  fetchCart() {
      
  };
    
    renderCart () { 
    let cartList = '';
  this.goods.forEach(good => {
      const Item = new cartItem(good.title, good.price);
      cartList += CartItem.render();
    });
    document.querySelector('.cart-block').innerHTML = cartList;
  }

}
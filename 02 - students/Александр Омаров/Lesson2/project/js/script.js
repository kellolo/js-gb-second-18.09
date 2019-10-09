class GoodsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  render() {
    return `<div
  class="goods-item"><h3> ${this.title} </h3><p> ${this.price} $ </p><button class="goods-item-btn"> Купить </button></div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }

  fetchGoods() {
    this.goods = [
      { title: "Shirt", price: 150 },
      { title: "Socks", price: 50 },
      { title: "Jacket", price: 350 },
      { title: "Shoes", price: 250 },
      { title: "Sweater", price: 400 },
      { title: "Blouse", price: 300 },
      { title: "Sweatshirt", price: 200 },
      { title: "Vest", price: 100 }
    ];
  }

  render() {
    let listHtml = "";
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector(".goods-list").innerHTML = listHtml;
  }
}

const list = new GoodsList();
list.fetchGoods();
list.render();

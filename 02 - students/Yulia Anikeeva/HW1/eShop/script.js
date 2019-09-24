const goods = [
  { title: 'Shirt', price: 150, image: 'img/shirt.png' },
{ title: 'Socks', price: 50, image: 'img/socks.png' },
{ title: 'Jacket', price: 350, image: 'img/jacket.png' },
{ title: 'Shoes', price: 250, image: 'img/shoes.png' },
];

var userCart = [];

document.querySelector('.cart-button').addEventListener('click', () => {
    document.querySelector('.cart-block').classList.toggle('invisible');
	});

const renderItem = (title, price, image) => {
return `<div class="goods-item"><img src="${image}" alt="${title}"><h3>${title}</h3><p>${price}</p> <button class="item-button" type="button">Купить</button></div>`;
}


const renderList = (list) => {
  let goodsList = list.map(item => renderItem (item.title, item.price, item.image));
    
  document.querySelector('.goods-list').innerHTML = goodsList.join(" ");

}

renderList(goods);




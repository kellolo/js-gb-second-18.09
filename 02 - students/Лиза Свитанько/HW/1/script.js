const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    { title: 'Shirt'},
    { title: 'Socks', price: 50 },
    { title: 'Jacket'},
    { price: 250 },
];

const renderGoodsItem = (title='Accessories', price='250') => {
    return `<div class="goods-item"><div class="goods-img"><img src=""></div><h3>${title}</h3><p>Цена: ${price} рублей</p><button id="add-btn">Добавить</button></div>`;
};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
};

renderGoodsList(goods);
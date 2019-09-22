const goods = [
    { title: 'Shirt', price: '150', miniImg: 'https://storage.vsemayki.ru/images/0/1/1757/1757389/previews/people_1_manshort_front_white_250.jpg' },
    { title: 'Socks', price: '50', miniImg: 'https://shop.bowandtie.ru/image/cache/data/foto/noski-baboon/Noski-v-beluyu-i-krasnuyu-polosku-BAB-S-36-350x420.jpg' },
    { title: 'Jacket', price: '350', miniImg: 'https://contents.mediadecathlon.com/p1222384/k$bd9b120ca6d903cd84d1619bd254adae/rainwarm-500-3-in-1-men-s-hiking-jacket-black.jpg?&f=800x800' },
    { title: 'Shoes', price: '250', miniImg: 'https://allkeds.ru/wa-data/public/shop/products/84/18/1884/images/7862/7862.750.jpg' },
    {},
]

//добавилены значения аргументам поумолчанию
const renderGoodsItem = (title, price, miniImg) => {
    if (miniImg===undefined) {miniImg='http://ozmatrix.ru/sites/default/files/inline-images/404.png';}
    if (title===undefined) {title='Извините';}
    if (price===undefined) {price='Товар не&nbsp;найден';}

    return '<div class="goods-item"><img src="'+miniImg+'" width="130" height="100"><h3>' + title + '</h3><p>' + price + '</p><button class="goods-item-btn" type="button">Добавить</button></div>';
}
//почему-то не работет ${title}. Почему?

const renderGoodsList = (list) => {
    let goodsList = list.map((item) => renderGoodsItem(item.title, item.price, item.miniImg)).join('');
    document.querySelector('.goods-list').innerHTML = goodsList;
}
//join('') убирает запятую в массиве

//добавил стилии JSом для .goodsItem
const goodsItemStyle = (arr) => {
    arr.forEach(el => {
        el.style.cssText = 'width: 170px; min-height: 250px; text-align: center; border: 1px solid #eee; margin: 20px; padding: 10px; box-sizing: border-box;';
    });
}

renderGoodsList(goods);
goodsItemStyle(document.querySelectorAll('.goods-item'));

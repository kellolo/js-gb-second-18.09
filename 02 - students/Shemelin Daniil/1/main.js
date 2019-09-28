const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];



const renderGoodsItem = (title = 'New Title', price = 'New Price') => {
  return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
};

const renderGoodsList = (list) => {
  let $values = '';
  const goodsList = list.map(item => $values += renderGoodsItem(item.title, item.price));
  return $values;
}

document.querySelector('.goods-list').innerHTML = renderGoodsList(goods);
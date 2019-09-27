const goods = [
    { id: '0', title: 'Shirt', price: 150, img: 'https://placehold.it/200x150', thumb: 'https://placehold.it/100x80' },
    { id: '1', title: 'Socks', price: 50, img: 'https://placehold.it/200x150', thumb: 'https://placehold.it/100x80' },
    { id: '2', title: 'Jacket', price: 350, img: 'https://placehold.it/200x150', thumb: 'https://placehold.it/100x80' },
    { id: '3', title: 'Socks', price: 50, img: 'https://placehold.it/200x150', thumb: 'https://placehold.it/100x80' },
    { id: '4', title: 'Jacket', price: 350, img: 'https://placehold.it/200x150', thumb: 'https://placehold.it/100x80' },
    { id: '5', title: 'Shoes', price: 250, img: 'https://placehold.it/200x150', thumb: 'https://placehold.it/100x80' },
    { id: '6', title: 'Shirt', price: 150, img: 'https://placehold.it/200x150', thumb: 'https://placehold.it/100x80' },
    { id: '7', title: 'Shoes', price: 250, img: 'https://placehold.it/200x150', thumb: 'https://placehold.it/100x80' },
];

const cart = {}


document.querySelector('.goods-list').addEventListener('click', e => {
	if (e.target.dataset.fn === "buy" && e.target.dataset.id) {
		const id = e.target.dataset.id
		if (cart[id]){
			cart[id].quantity += 1
		}else{
			const item = goods.find(i => i.id === id)
			cart[id] = { ...item, quantity: 1 }
		}
		renderCartList(cart)
	}
})
document.querySelector('.cart-list').addEventListener('click', e => {
	if (e.target.dataset.fn === 'remove' && e.target.dataset.id) {
		const id = e.target.dataset.id
		cart[id].quantity -= 1
		if (cart[id].quantity <= 0) delete cart[id]
		renderCartList(cart)
	}
})
document.querySelector('.cart-button').addEventListener('click', e => {
	document.querySelector('.cart-list').classList.toggle('invisible')
})

const renderCartItem = ({id, title, price, quantity, thumb}) => {
	return `<div class='cart-item'>
					<img class='cart-item__img' src=${thumb} />
					<div class='cart-item__block'>
						<h3 class='cart-item__title'>${title}</h3>
						<span class='cart-item__quantity'>Quantity: ${quantity}</span>
					</div>
					<div class='cart-item__block'>
						<span class='cart-item__price'>$${price * quantity}</span>
						<button class='cart-item__btn btn' data-id=${id} data-fn="remove">x</button>
					</div>
				</div>`
}

const renderGoodsItem = ({id, title, price, img}) => {
    return `<div class='goods-item'>
				<img class='goods-item__img' src=${img} />
				<div class='goods-item__block'>
					<h3 class='goods-item__title'>${title}</h3>
					<span class='goods-item__price'>$${price}</span>
				</div>
				<button class='goods-item__btn btn' data-id=${id} data-fn="buy">Купить</button>
			</div>`
}
const renderGoodsList = (list = []) => {
    let goodsList = list.map(renderGoodsItem)
    document.querySelector('.goods-list').innerHTML = goodsList.join("")
}
const renderCartList = (list = {}) => {
	let goodsList = Object.keys(list).map(i => renderCartItem(list[i]))
	document.querySelector('.cart-list').innerHTML = goodsList.join("")
}

renderGoodsList(goods)
renderCartList(cart)

const priceList = {
	"big": 100,
	"small": 50,
	"cheese": 10,
	"salad": 20,
	"potato": 15,
	"flavoring": 15,
	"mayo": 20,
}

const calList = {
	"big": 40,
	"small": 20,
	"cheese": 20,
	"salad": 5,
	"potato": 10,
	"flavoring": 0,
	"mayo": 5,
}

class Burger {
	constructor(...args) {
		[this._size, this._stuffing, ...this._toppings] = args;
		this._priceList = priceList
		this._calList = calList
		this._calc()
	}
	get price() {
		return this._price
	}
	get cal() {
		return this._cal
	}
	_calc() {
		[this._price, this._cal] = [this._size, this._stuffing, ...this._toppings].reduce( ([price, cal], opt ) => [ price + this._priceList[opt], cal + this._calList[opt] ], [0, 0] );
	}
}

const form = document.querySelector('form')
const priceNode = form.querySelector('.price')
const calNode = form.querySelector('.cal')

form.addEventListener('submit', e => {
	e.preventDefault();
	const data = new FormData(e.target);
	const burger = new Burger(data.get("size"), data.get("stuffing"), ...data.getAll("topping"));
	priceNode.innerHTML = burger.price
	calNode.innerHTML = burger.cal
})

class Parameter {
    constructor(el) {
        this.name = el.value
        this.price = +el.dataset['price']
        this.calories = +el.dataset['calories']
    }
}

class Burger {
    constructor(size, filling, topping) {
        this.size = new Parameter(this._select(size))
        this.filling = new Parameter(this._select(filling))
        this.topping = this._getToppings(topping)
    }

    _select(name) {
        return document.querySelector(`input[name="${name}"]:checked`)
    }
    _getToppings(name) {
        let arr = []
        this._selectAll(name).forEach(el => arr.push(new Parameter(el)))
        return arr
    }
    _selectAll(name) {
        return [...document.querySelectorAll(`input[name="${name}"]:checked`)]
    }
    _sumPice() {
        let rezult = this.size.price + this.filling.price
        this.topping.forEach(el => rezult += el.price)
        return rezult
    }
    _sumCalories() {
        let rezult = this.size.calories + this.filling.calories
        this.toppings.forEach(el => rezult += el.calories)
        return rezult
    }
    showSum(price, calories) {
        document.querySelector(price).textContent = this._sumPice()
        document.querySelector(calories).textContent = this._sumCalories()
    }
}
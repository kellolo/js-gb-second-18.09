class Parameter {
    constructor (el) {
        this.name  = el.value
        this.price = +el.dataset ['price']
        this.calories = +el.dataset ['calories']
    }
}

class Burger {
    constructor (size, add, toppings) {
        this.size = new Parameter (this._select (size))
        this.add = new Parameter (this._select (add))
        this.toppings = this._getToppings (toppings)
    }

    _select (name) {
        return document.querySelector (`input[name="${name}"]:checked`)
    }
    _getToppings (name) {
        let arr = []
        this._selectAll (name).forEach (el => arr.push (new Parameter (el)))
        return arr
    }
    _selectAll (name) {
        return [...document.querySelectorAll (`input[name="${name}"]:checked`)]
    }
    _sumPice () {
        let rezult = this.size.price + this.add.price
        this.toppings.forEach (el => rezult += el.price)
        return rezult
    }
    _sumCalories () {
        let rezult = this.size.calories + this.add.calories
        this.toppings.forEach (el => rezult += el.calories)
        return rezult
    }
    showSum (price, calories) {
        document.querySelector (price).textContent = this._sumPice ()
        document.querySelector (calories).textContent = this._sumCalories ()
    }
}


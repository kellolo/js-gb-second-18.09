const basisSizes = ['маленький', 'большой'];
const basisPrices = [50, 100];
const basisCalories = [20, 40];

const stuffingNames = ['сыр', 'салат', 'картошка'];
const stuffingPrices = [10, 20, 15];
const stuffingCalories = [20, 5, 10];

//создаю объект - базовый бургер со свойствами базового бургера
function createBasis(i) {
    return {
        basisSize: basisSizes[i],
        basisPrice: basisPrices[i],
        basisCalories: basisCalories[i],
    }
}

function createStuffing(i) {
    return {
        stuffingName: stuffingNames[i],
        stuffingPrice: stuffingPrices[i],
        stuffingCalories: stuffingCalories[i],
    }
}

//имитирую загрузку данный с сервера. генерирую массив из базового бургера
function featchBasis() {
    let arr = [];
    for (let i = 0; i < basisSizes.length; i++) {
        arr.push(createBasis(i));
    }
    return arr
}
let basis = featchBasis();

function featchStuffing() {
    let arr = [];
    for (let i = 0; i < basisSizes.length; i++) {
        arr.push(createStuffing(i));
    }
    return arr
}
let stuffing = featchStuffing();

class Burger {
    constructor(basis, stuffing) {
        this.size = basis.basisSize
        this.price = basis.basisPrice
        this.calories = basis.basisCalories

        this.stuffingName = stuffing.stuffingName
        this.stuffingPrice = stuffing.stuffingPrice
        this.stuffingCalories = stuffing.stuffingCalories
    }

    // addTopping(topping) {

    // }
    // removeTopping(topping) {

    // }
    // getToppings(topping) {
    //     console.log();
    // }
    getSize() {
        console.log(`Размер бургера: ${this.size}`);
    }
    getStuffing() {
        console.log(`Начинка бургера: ${this.stuffingName}`);
    }
    calculateCalories() {
        console.log(`Калории бургера: ${this.stuffingCalories + this.calories} кал.`);
    }
    calculatePrice() {
        console.log(`Стоимость бургера: ${this.stuffingPrice + this.price} руб.`);
    }
    getListOrder() {
        console.log(`ВАШ ЗАКАЗ  
Бургер:
${this.size} - ${this.price} руб. (${this.calories} кал.)
Начинка:
${this.stuffingName} - ${this.stuffingPrice} руб. (${this.stuffingCalories} кал.)
_________________________
Итого - ${this.stuffingPrice + this.price} руб. (${this.stuffingCalories + this.calories} кал.)`)
    }
}   

let order = new Burger(basis[indexBasis(basisSizes)], stuffing[indexStuffing(stuffingNames)]);

function indexBasis (arr) {
    let x = arr.indexOf (prompt(`Какой бургер будете: ${basisSizes}?`));
    return x
}

function indexStuffing (arr) {
    let x = arr.indexOf (prompt(`Какую начинку добавить: ${stuffingNames}?`));
    return x
}

alert ('Для работы с прототипами откройте консоль');
console.log(order);



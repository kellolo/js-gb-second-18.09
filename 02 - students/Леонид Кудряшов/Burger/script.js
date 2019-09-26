"use strict"

class Burger {
    constructor (){
        this.dimension = "";
        this.filling = "";
        this.seasoning = false;
        this.mayonnaise = false;
        this.cost = 0;
        this.calories = 0;
    }
    costCalculation () {
        if (this.dimension == "max") {
            this.cost += 100
            this.calories +=40
        }
        if (this.dimension == "mini") {
            this.cost += 50
            this.calories += 20
        }
        if (this.filling == "cheese") {
            this.cost += 10
            this.calories += 20
        }
        if (this.filling == "salad") {
            this.cost += 20
            this.calories += 5
        }
        if (this.filling == "potato") {
            this.cost += 15
            this.calories += 10
        }
        if (this.seasoning) {
            this.cost += 15
            this.calories += 0
        }
        if (this.mayonnaise) {
            this.cost += 20
            this.calories += 5
        }

    }
}

//вывод в HTML результата
class Render {
    constructor(hamburger){
       this.cost = hamburger.cost
       this.calories = hamburger.calories
       this.template = `Ваш гамбургер стоит: ${this.cost} руб. 
                        и содержит ${this.calories} калорий.`
    }
}

let burg = new Burger //создаем объект Гамбургер

//выбор размера гамбургера
let burgerMini = document.querySelector (".btn_size_mini");
let burgerMax = document.querySelector (".btn_size_max");
let blockFill = document.querySelector(".filling");
burgerMini.addEventListener ("click", function() {
    burg.dimension = "mini";
    burgerMini.classList.add("btn_on");
    burgerMax.classList.remove("btn_on");
    blockFill.classList.remove("screen_off");
});
burgerMax.addEventListener ("click", function () {
    burg.dimension = "max";
    burgerMini.classList.remove("btn_on");
    burgerMax.classList.add("btn_on");
    blockFill.classList.remove("screen_off");
});

//выбор начинки гамбургера
let fillingCheese = document.querySelector (".btn_filling_cheese");
let fillingSalad = document.querySelector (".btn_filling_salad");
let fillingPotato = document.querySelector (".btn_filling_potato");
let blockAdditive = document.querySelector(".additive");
let blockResult = document.querySelector (".result");
fillingCheese.addEventListener ("click", function () {
    burg.filling = "cheese";
    fillingCheese.classList.add("btn_on");
    fillingSalad.classList.remove("btn_on");
    fillingPotato.classList.remove("btn_on");
    blockAdditive.classList.remove("screen_off");
    blockResult.classList.remove ("screen_off");
});
fillingSalad.addEventListener ("click", function () {
    burg.filling = "salad";
    fillingCheese.classList.remove("btn_on");
    fillingSalad.classList.add("btn_on");
    fillingPotato.classList.remove("btn_on");
    blockAdditive.classList.remove("screen_off");
    blockResult.classList.remove ("screen_off");
});
fillingPotato.addEventListener ("click", function () {
    burg.filling = "potato";
    fillingCheese.classList.remove("btn_on");
    fillingSalad.classList.remove("btn_on");
    fillingPotato.classList.add("btn_on");
    blockAdditive.classList.remove("screen_off");
    blockResult.classList.remove ("screen_off");
});

//выбор добавки
let additiveSeasoning = document.querySelector (".btn_additive_seasoning");
let additiveMayonnaise = document.querySelector (".btn_additive_mayonnaise");

additiveSeasoning.addEventListener ("click", function () {
    if (burg.seasoning) {
        burg.seasoning = false;
        additiveSeasoning.classList.remove("btn_on");
    } else {
        burg.seasoning = true;
        additiveSeasoning.classList.add("btn_on");
    }
    
});
additiveMayonnaise.addEventListener ("click", function () {
    if (burg.mayonnaise) {
        burg.mayonnaise = false;
        additiveMayonnaise.classList.remove("btn_on");
    } else {
        burg.mayonnaise = true;
        additiveMayonnaise.classList.add("btn_on");
    }
    
});

//расчет цены и каллорий гамбургера
let result = document.querySelector (".btn_result");
result.addEventListener ("click", function() {
    burg.cost = 0;
    burg.calories = 0;
    burg.costCalculation();
    let renderResult = new Render(burg);

    let resultCost = document.querySelector(".screen_result");
    resultCost.innerHTML = renderResult.template;
});
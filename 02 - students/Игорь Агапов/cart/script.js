let d = document,
    // товары
    itemBox = d.querySelectorAll('.item'),
    // данные
    cartCont = d.getElementById('content');

// установка обработчика событий
function addEvent(elem, type, handler) {
    if (elem.addEventListener) {
        elem.addEventListener(type, handler, false);
    } else {
        elem.attachEvent('on' + type, function () {
            handler.call(elem);
        });
    }
    return false;
}

// получаем данные из localstotage
function getCartData() {
    return JSON.parse(localStorage.getItem('cart'));
}

// записываем данные в localstorage
function setCartData(o) {
    localStorage.setItem('cart', JSON.stringify(o));
    return false;
}

// добавление товара в корзину
function addToCart() {
    // блокируем кнопку на время работы с корзиной
    this.disabled = true;
    // получаем данные из корзины или создаем новый объект, если данных нет
    let cartData = getCartData() || {},
        // родительский элемент кнопки "Купить"
        parentBox = this.parentNode,
        // ID товара
        itemId = this.getAttribute('data-id'),
        // название товара
        itemTitle = parentBox.querySelector('.title').innerHTML,
        // стоимость товара
        itemPrice = parentBox.querySelector('.price').innerHTML;
    // если такой товар в корзине уже есть, то необходимо сделать +1
    if (cartData.hasOwnProperty(itemId)) {
        cartData[itemId][2] += 1;
    } else {
        // если товара в корзине нет, то добавляем его
        cartData[itemId] = [itemTitle, itemPrice, 1];
    }
    // обновляем данные в localstorage
    if (!setCartData(cartData)) {
        // разблокируем кнопку после обновления
        this.disabled = false;
    }
    return false;
}

// устанавливаем обработчик событий на каждую кнопку "Купить"
for (let i = 0; i < itemBox.length; i++) {
    addEvent(itemBox[i].querySelector('.add'), 'click', addToCart);
}

// просмотр содержимого корзины
function openCart() {
    let cartData = getCartData(),
        // получаем данные корзины
        totalItems = '',
        totalGoods = 0,
        totalPrice = 0;
    // если что-то в корзине есть, формируем данные для вывода
    if (cartData !== null) {
        totalItems = '<table><tr><th>Наименование</th><th>Цена</th><th>Кол-во</th></tr>';
        for (let items in cartData) {
            totalItems += '<tr>';
            for (let i = 0; i < cartData[items].length; i++) {
                totalItems += '<td>' + cartData[items][i] + '</td>';
            }
            totalItems += '</tr>';
            totalGoods += cartData[items][2];
            totalPrice += cartData[items][1] * cartData[items][2];
        }
        totalItems += '</table>';
        cartCont.innerHTML = totalItems;
        cartCont.append(document.createElement('p').innerHTML = 'Всего: ' + totalGoods + ' товара(ов) ' + 'на сумму ' + totalPrice + ' рублей.');
    } else {
        // если в корзине пусто, сообщаем об этом
        cartCont.innerHTML = 'В корзине пусто!';
    }
    return false;
}
// открыть корзину
addEvent(d.getElementById('open'), 'click', openCart);

// очистить корзину
addEvent(d.getElementById('clear'), 'click', function () {
    localStorage.removeItem('cart');
    cartCont.innerHTML = 'Корзина очишена.';
});

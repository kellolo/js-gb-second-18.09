//модуль, задача которого возвращать новую/изменённую корзину 
//в формате json-строки для записи в файл userCart.json, имитирующий БД
let add = (cart, req) => {
    //req.body - тело запроса с front-a
    cart.contents.push(req.body)
    return  {newCart: JSON.stringify(cart, null, 4), name: req.body.product_name}
}

let change = (cart, req) => {
    //req.params.id это параметр запроса с front-a /:id
    //см. cartRouter.js стр. 28
    let find = cart.contents.find (el => el.id_product === +req.params.id)
    //в случае удаления товара req.body.quantity = -1
    find.quantity += req.body.quantity
    return  {newCart: JSON.stringify(cart, null, 4), name: find.product_name}
}

let del = (cart, req) => {
    let find = cart.contents.find (el => el.id_product === +req.params.id)
    cart.contents.splice(cart.contents.indexOf(find), 1)
    return {newCart: JSON.stringify(cart, null, 4), name: find.product_name}

}

module.exports = {add, del, change}
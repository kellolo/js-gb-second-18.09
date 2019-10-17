let add = (cart, res) => {
    cart.contents.push(req.body);
    return JSON.stringify(cart, null, 4);
}

let change = (req, res)=> {
    let find = cart.contents.find(el => el.id === +req.params.id);
    find.quantity +=req.body.quantity;
    return JSON.stringify(cart, null, 4);
}

let del = (req, res) => {
    let find = cart.contents.find(el => el.id === +req.params.id);
    return JSON.stringify(cart, null, 4);
}

module.exports = {
    add,
    change,
    del
} 
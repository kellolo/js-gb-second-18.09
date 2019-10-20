const cart = require ('./cart')
const fs = require ('fs')
const logger = require ('./logger')

const actions = {
    add: cart.add,
    remove: cart.remove,
    change: cart.change
}

let handler = (req, res, action, file) => {
    fs.readFile (file, 'utf-8', (err, data) => {
        if (err) {
            console.log ('paravozik ne smog')
        } else {
            let {newCart, name} = actions [action] (JSON.parse (data), req)
            fs.writeFile (file, newCart, (err) => {
                if (err) {
                    res.sendStatus (404, JSON.stringify ({ result: 0, text: 'err' }))
                } else {
                    res.send ({ result: 1, text: 'success' })
                    logger (name, action)
                }
            })
        }
    })
}


module.exports = handler
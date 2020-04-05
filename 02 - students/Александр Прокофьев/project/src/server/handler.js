//модуль помощник для работы с файлами
const cart = require('./cart')
const fs = require('fs')
const logger = require('./logger')

const actions = {
    add: cart.add,
    change: cart.change,
    delete: cart.del
}

let handler = (req, res, action, file) => {
    //чтение и запись файлов - асинхронные операции, поэтому обработка в callback-функциях
    fs.readFile (file, 'utf-8', (err, data) => {
        if (err) {
            console.log('paravozik ne smog')
        } else {
            //JSON.parse и JSON.stringify выполняют десериализацию и сериализацию объекта js
            let {newCart, name} = actions [action] (JSON.parse(data), req)
            fs.writeFile(file, newCart, (err) => {
                if (err) {
                    res.sendStatus(404, JSON.stringify({result: 0, text: 'err'}))
                } else {
                    res.send ({result: 1, text: 'success'})
                    logger (name, action)
                }
            })
        }
    })
}

module.exports = handler
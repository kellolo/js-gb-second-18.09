const express = require('express')
const fs = require('fs')
const cartRouter = require('./cartRouter')

const app = express()
app.use(express.json())
app.use('/', express.static('dist/public'))
app.use('/api/cart', cartRouter)
//cartRouter >>> handler >>> cart

//Для каталога роутер не нужен.
//На один адрес ресурса(url) приходится один тип запроса: 
//GET - получение каталога товаров.
app.get('/api/products', (req, res) => {
    fs.readFile('dist/server/db/catalog.json', 'utf-8', (err, data) => {
        if (err) {
            //Файл не найден. Давай до свидания. Даже не уточням какая ошибка.
            res.sendStatus(404, JSON.stringify({ result: 0, text: 'err'}))
        } else {
            res.send(data)
        }
    })
})

//$ npx nodemon server/server.js
app.listen(3000, () => console.log('listen on port 3000.'))

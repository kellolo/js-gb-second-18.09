// Для обработки разных типов запросов (Get, Post, Put, Delete) по ur: localhost:3000/api/cart
// получение данных, добавление товара, редактирование товара, удаление товара 
const express = require('express')
const fs = require('fs')
const handler = require('./handler')

//используем роутер из коробки для обработки Get, Post, Put, Delete запросов
const router = express.Router()

//первый аргумент '/' == '/api/cart' своеобразная подстановка. См. стр. 8 => server.js
router.get ('/', (req, res) => {
    fs.readFile ('dist/server/db/userCart.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus (404, JSON.stringify ({ result: 0, text: 'err' }))
        } else {
            res.send (data)
        }
    })
})

//добавление товара в корзину
router.post ('/', (req, res) => {
    //handler - менеджер по работе с файлами
    handler(req, res, 'add', 'dist/server/db/userCart.json')
})

//запрос на изменение сушествующего в корзине товара
router.put ('/:id', (req, res) => {
    handler(req, res, 'change', 'dist/server/db/userCart.json')
})

//запрос на удаление товара из корзины
router.delete ('/:id', (req, res) => {
    handler(req, res, 'delete', 'dist/server/db/userCart.json')
})

module.exports = router
const express = require('express')
const db = require('../db')
const router = express.Router()

router.get ('/', (req, res) => {
    db.cart.getAll()
        .then( cart => {
            res.status(200).json(cart)
        })
        .catch( err => {
            res.status(404).json({ result: 0, message: err.message})
        })
})

router.post ('/', (req, res) => {
    db.cart.add(req.body.id, req.body.quantity)
        .then( (data) => {
            res.status(200).json({ result: 1, data })
        })
        .catch( err => {
            res.status(404).json({ result: 0, message: err.message})
        })
})

router.delete ('/', (req, res) => {
    db.cart.remove(req.body.id, req.body.quantity)
        .then( (data) => {
            res.status(200).json({ result: 1, data })
        })
        .catch( err => {
            res.status(404).json({ result: 0, message: err.message})
        })
})

module.exports = router

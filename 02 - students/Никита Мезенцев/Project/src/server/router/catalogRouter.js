const express = require('express')
const db = require('../db')
const router = express.Router()

router.get ('/', (req, res) => {
    db.catalog.getAll()
        .catch( err => {
            res.status(404).json({ result: 0, msg: 'error', detail: JSON.stringify(err, null, '\t') })
        })
        .then( catalog => {
            res.status(200).json(catalog)
        })
})

module.exports = router

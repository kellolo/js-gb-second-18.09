const express = require ('express')
const catalogRouter = require ('./catalogRouter.js')
const cartRouter = require ('./cartRouter.js')

const router = express.Router ()

router.use ('/api/catalog', catalogRouter)
router.use ('/api/cart', cartRouter)

module.exports = router

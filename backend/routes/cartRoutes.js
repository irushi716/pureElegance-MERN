const express = require('express');
const { createCart, viewCart, addItemToCart, deleteCart } = require('../controllers/cartController');
const router = express.Router();

router.post('/create', createCart);
router.get('/:userId', viewCart);
router.put('/addItem/:cartId', addItemToCart);
router.delete('/:cartId', deleteCart);

module.exports = router;

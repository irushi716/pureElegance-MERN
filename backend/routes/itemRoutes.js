const express = require('express');
const { createItem, viewItems, updateItem, deleteItem } = require('../controllers/itemController');
const router = express.Router();

router.post('/create', createItem);
router.get('/', viewItems);
router.put('/:itemId', updateItem);
router.delete('/:itemId', deleteItem);

module.exports = router;

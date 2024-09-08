const express = require('express');
const { createUser, viewUser, updateUser, deleteUser } = require('../controllers/userController');
const router = express.Router();

router.post('/create', createUser);
router.get('/:id', viewUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;

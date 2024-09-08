const express = require('express');
const { createComment, viewComments, updateComment, deleteComment } = require('../controllers/commentController');
const router = express.Router();

router.post('/create', createComment);
router.get('/:itemId', viewComments);
router.put('/:commentId', updateComment);
router.delete('/:commentId', deleteComment);

module.exports = router;

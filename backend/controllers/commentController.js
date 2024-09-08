const Comment = require('../models/Comment');

exports.createComment = async (req, res) => {
  const { userId, itemId, text } = req.body;
  try {
    const newComment = await Comment.create({ userId, itemId, text });
    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ message: 'Error creating comment', error });
  }
};

exports.viewComments = async (req, res) => {
  try {
    const comments = await Comment.find({ itemId: req.params.itemId }).populate('userId');
    res.status(200).json(comments);
  } catch (error) {
    res.status(404).json({ message: 'Comments not found', error });
  }
};

exports.updateComment = async (req, res) => {
  const { text } = req.body;
  try {
    const updatedComment = await Comment.findByIdAndUpdate(req.params.commentId, { text }, { new: true });
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(400).json({ message: 'Error updating comment', error });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.commentId);
    res.status(200).json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting comment', error });
  }
};

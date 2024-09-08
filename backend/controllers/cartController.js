const Cart = require('../models/Cart');

exports.createCart = async (req, res) => {
  const { userId, items, total } = req.body;
  try {
    const newCart = await Cart.create({ userId, items, total });
    res.status(201).json(newCart);
  } catch (error) {
    res.status(400).json({ message: 'Error creating cart', error });
  }
};

exports.viewCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId }).populate('items.itemId');
    res.status(200).json(cart);
  } catch (error) {
    res.status(404).json({ message: 'Cart not found', error });
  }
};

exports.addItemToCart = async (req, res) => {
  const { itemId, quantity } = req.body;
  try {
    const cart = await Cart.findById(req.params.cartId);
    cart.items.push({ itemId, quantity });
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ message: 'Error adding item to cart', error });
  }
};

exports.deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.cartId);
    res.status(200).json({ message: 'Cart deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting cart', error });
  }
};

const Item = require('../models/Item');

exports.createItem = async (req, res) => {
  const { name, description, price, brand, stock } = req.body;
  try {
    const newItem = await Item.create({ name, description, price, brand, stock });
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: 'Error creating item', error });
  }
};

exports.viewItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(404).json({ message: 'Items not found', error });
  }
};

exports.updateItem = async (req, res) => {
  const { name, description, price, brand, stock } = req.body;
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.itemId, { name, description, price, brand, stock }, { new: true });
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: 'Error updating item', error });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.itemId);
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting item', error });
  }
};

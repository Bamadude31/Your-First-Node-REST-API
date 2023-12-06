const express = require('express')
const router = express.Router()
const Items = require('../migrations/20231206024927_item.js')

// Getting all
router.get('/', async (req, res) => {
  try {
    const items = await Items.find()
    res.json(items)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting One
router.get('/:id', getItems, (req, res) => {
  res.json(res.items)
})

// Creating one
router.post('/', async (req, res) => {
  const items = new Items({
    UserId: req.body.UserId,
    Item_Name: req.body.Item_Name,
    Description: req.body.Description,
    Quality: req.body.Quality
  })
  try {
    const newItems = await Items.save()
    res.status(201).json(newItems)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
});

// Updating One
router.patch('/:id', getItems, async (req, res) => {
  if (req.body.name != null) {
    res.UserId = req.body.UserId,
    res.Item_Name = req.body.Item_Name,
    res.Description = req.body.Description,
    res.Quality = req.body.Quality
  }
  if (req.body.Item_Name != null) {
    res.items.Item_Name = req.body.username
  }
  try {
    const updatedItems = await res.items.save()
    res.json(updatedItems)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting One
router.delete('/:id', getItems, async (req, res) => {
  try {
    await res.items.remove()
    res.json({ message: 'Deleted Item' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getItems(req, res, next) {
  let items
  try {
    items = await items.findById(req.params.id)
    if (items == null) {
      return res.status(404).json({ message: 'Cannot find item' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.items = items
  next()
}

module.exports = router
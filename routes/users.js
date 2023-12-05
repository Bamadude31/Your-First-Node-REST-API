const express = require('express')
const router = express.Router()
const Users = require('../models/users')

// Getting all
router.get('/', async (req, res) => {
  try {
    const users = await Users.find()
    res.json(users)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting One
router.get('/:id', getUsers, (req, res) => {
  res.json(res.users)
})

// Creating one
router.post('/', async (req, res) => {
  const newUser = new Users({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    username: req.body.username,
    password: req.body.password
  })
  try {
    const newUsers = await newUser.save()
    res.status(201).json(newUsers)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Updating One
router.patch('/:id', getUsers, async (req, res) => {
  if (req.body.name != null) {
    res.first_name = req.body.first_name,
    res.last_name = req.body.last_name
    res.username = req.body.username,
    res.password = req.body.password
  }
  if (req.body.username != null) {
    res.users.username = req.body.username
  }
  try {
    const updatedUsers = await res.users.save()
    res.json(updatedUsers)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting One
router.delete('/:id', getUsers, async (req, res) => {
  try {
    await res.users.remove()
    res.json({ message: 'Deleted User' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getUsers(req, res, next) {
  let users
  try {
    users = await users.findById(req.params.id)
    if (users == null) {
      return res.status(404).json({ message: 'Cannot find user' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.users = users
  next()
}

module.exports = router
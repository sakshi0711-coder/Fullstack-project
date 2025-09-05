const express = require('express')
const app = express()

app.use(express.json())

let recipes = []
let nextId = 1

app.get('/test', (req, res) => {
  console.log('GET /test called')
  res.json({ message: 'Server is working!', timestamp: new Date() })
})

app.post('/api/recipes', (req, res) => {
  console.log('POST /api/recipes called with:', req.body)
  const recipe = { id: nextId++, ...req.body, createdAt: new Date() }
  recipes.push(recipe)
  console.log('Recipe saved:', recipe)
  res.status(201).json(recipe)
})

app.get('/api/recipes', (req, res) => {
  console.log('GET /api/recipes called')
  res.json(recipes)
})

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Test server running on port ${PORT}`)
  console.log('Available endpoints:')
  console.log('- GET /test')
  console.log('- POST /api/recipes')
  console.log('- GET /api/recipes')
})
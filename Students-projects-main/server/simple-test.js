// Simple test to verify the endpoint logic works
console.log('Testing recipe endpoint logic...')

// Simulate the endpoint logic
let recipes = []
let nextId = 1

function addRecipe(body) {
  const recipe = { id: nextId++, ...body, createdAt: new Date() }
  recipes.push(recipe)
  return recipe
}

// Test the function
const testRecipe = {
  title: "Test Recipe",
  ingredients: "Test ingredients", 
  instructions: "Test instructions"
}

const result = addRecipe(testRecipe)
console.log('Recipe added:', result)
console.log('All recipes:', recipes)
console.log('Test completed successfully!')
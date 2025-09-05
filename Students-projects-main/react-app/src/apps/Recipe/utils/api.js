// API Functions - Students should implement these

export const getRecipes = async () => {
  // get recipe code
  const response = await fetch ('http://localhost:3002/api/recipes')
  const data = await response.json()
  return data
  
};

export const addRecipeAPI = async (recipe) => {
  // add recipe code
  const response = await fetch('http://localhost:3002/api/recipes',{
    headers:{
      "Content-type":"application/json"
    },
    method:"POST",
    body:JSON.stringify(recipe)
  })
  const data = await response.json()
  alert("Recipe Saved")
  return data
};



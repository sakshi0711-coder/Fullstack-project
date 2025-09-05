import { useEffect, useState } from 'react'
import { addRecipeAPI, getRecipes } from './utils/api'

function RecipeApp() {
  const [recipes, setRecipes] = useState([])
  const [newRecipe, setNewRecipe] = useState({ title: '', ingredients: '', instructions: '' })

  const addRecipe = async () => {
    //add recipe code
    const response = await addRecipeAPI(newRecipe)
    console.log(response)
    setNewRecipe({ title: '', ingredients: '', instructions: '' })
  }

  useEffect(()=>{
    const  fetchRecipes=async()=>{
      // get recipes code
      const data = await getRecipes()
      setRecipes(data)
      console.log(data)
    }
    fetchRecipes();
  },[newRecipe])
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column' }}>
      <h1 style={{textAlign:'center'}}>Recipe App</h1>
      
      <div style={{display:'flex',flexDirection:'column',width:'70vw',height:'85vh',border:'2px solid black',alignItems:'center',justifyContent:'center'}}>
        <h2>Add Recipe</h2>
        <input style={{width:'55vw'}}
          type="text"
          placeholder="Recipe title"
          value={newRecipe.title}
          onChange={(e) => setNewRecipe({ ...newRecipe, title: e.target.value })}
        />
        <input style={{width:'55vw'}}
          type="text"
          placeholder="Ingredients"
          value={newRecipe.ingredients}
          onChange={(e) => setNewRecipe({ ...newRecipe, ingredients: e.target.value })}
        />
        <textarea style={{width:'55vw',height:'25vh'}}
          placeholder="Instructions"
          value={newRecipe.instructions}
          onChange={(e) => setNewRecipe({ ...newRecipe, instructions: e.target.value })}
        />
        <button style={{marginTop:'5px'}} onClick={addRecipe}>Add Recipe</button>
      </div>

      <div >
        <h2 style={{textAlign:'center'}}>Recipes</h2>
        <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center'}}>
            {
              recipes?.map(ele=>{
                return (
                  <div key={ele._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px',width:'25vw' }}>
                  <h3>{ele?.title}</h3>
                  <p><strong>Ingredients:</strong> {ele?.ingredients}</p>
                  <p><strong>Instructions:</strong> {ele?.instructions?.slice(0,20)}....</p>
                </div>
                )
              })
            }
        </div>

      </div>
    </div>
  )
}

export default RecipeApp
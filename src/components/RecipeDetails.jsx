import { useState, useEffect } from "react"
import styles from './recipedetails.module.css';
import ItemList from "./ItemList";

export default function RecipeDetails ({foodId}) {
    const [recipe, setRecipe] = useState({})
    const [isloading, setIsLoading] = useState(true)
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
    const API_KEY = '236d98017cdd4c5c9ddabcb1f536b0d9'
    useEffect(() => {
        async function fetchRecipe() {
            const res = await fetch(`${URL}?apiKey=${API_KEY}`)
            const data = await res.json()
            setRecipe(data)
            setIsLoading(false)
        }
        fetchRecipe()
    }, [foodId])
    return (
        <div>
            <div className={styles.recipeCard}>
                <div className={styles.recipe}>
                    <h1 className={styles.recipeName}>{recipe.title}</h1>
                    <img className={styles.recipeImage} src={recipe.image} alt="" />
                    <div className={styles.recipeDetails}>
                        <span>
                            <strong>⏱ {recipe.readyInMinutes} Minutes </strong>
                        </span>
                        <span>
                            <strong>👪 Serves {recipe.servings}</strong>
                        </span>
                        <span>
                             <strong>{recipe.vegetarian ? "🍅 Vegetarian" : "🥩 Non-Vegetarian"}</strong>
                        </span>
                        <span>
                            <strong>$ {(recipe.pricePerServing/100).toFixed(2)} Per Serving</strong>
                        </span>
                    </div>
                    <h2>Ingredients</h2>
                    <ItemList recipe={recipe} isloading={isloading}/>
                    <h2>Instructions</h2>
                    <div className={styles.recipeInstructions}>
                        <ol>
                            {isloading ? <p>Loading...</p>:recipe.analyzedInstructions[0].steps.map((step) => <li>{step.step}</li>)}
                        </ol>
                    </div>
                </div>
            </div>

        </div>
    )
}
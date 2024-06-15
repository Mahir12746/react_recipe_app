import Item from "./Item";

export default function ItemList ({recipe, isloading}) {
    return (
        <div>
            {isloading ? <p>Loading...</p>  : recipe.extendedIngredients.map((item) =><Item item={item}/>)}
        </div>
    )
}
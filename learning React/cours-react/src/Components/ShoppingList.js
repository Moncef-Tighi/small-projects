import { plantList } from "../data/platList.js";

function ShoppingList() {
    return (
        <>
        <ul>
            {plantList.filter(plant=> plant.instock).map( plant=> <li key={plant.id}>Nom : {plant.name} Catégorie : {plant.categorie}</li>)}
        </ul>
        <ul>
            {plantList.map(plant=> <li key={plant.id}>{plant.instock ? '+' : '-'}Nom : {plant.name} Catégorie : {plant.categorie}</li>)}
        </ul>
        </>
    )
}

export default ShoppingList;
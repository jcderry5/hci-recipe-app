import React from 'react'
import data from '../data.json'
import '../RecipeResults.css'
import { Link } from "react-router-dom"
import { database } from '../firebase';
import { set, push, update, ref } from "firebase/database";
import { useAuth } from '../contexts/AuthContext';
import extractRecipeSteps from './DisplayRecipeSteps'
import extractRecipeIngredients from './DisplayRecipeIngredients'



function DisplayRecipeSummary({ recipeIndex }){
    const user = useAuth();
    let theIngredients = extractRecipeIngredients({recipeIndex})
    let theSteps = extractRecipeSteps({recipeIndex})

    //here is where the code to pass idx back and forth goes
    
    return(
        <div>
            {console.log(user)}
            {Title()}
            {theIngredients}
            {theSteps}
            {ConfirmRecipe()}
        </div>
    )

    // async function getRecipeCount() {
    //     const val = await fetch(`${"https://recipe-remix-996dc-default-rtdb.firebaseio.com//users/"+user.uid+"/recipecount"}/.json`);
    //     const responseJson = await val.json();
    //     console.log(responseJson)
    //     return responseJson
    //   }

    function updateRecipe(recipeIndex) {
        update(ref(database, 'users/' + user.uid),{
            recipename: data.results[0].recipes[recipeIndex].name,
           })
        update(ref(database, 'users/' + user.uid),{
            recipethumbnail: data.results[0].recipes[recipeIndex].thumbnail_url,
           })
    }
    //add firebase data confirmation to here
    function ConfirmRecipe(){
        
        return(
            <div class = "row justify-content-center">
                <button type="button" class = "confirm-but">
                   <Link to="/hci-recipe-app/RecipeBook"  onClick={() => updateRecipe(recipeIndex)}>Add New Recipe</Link>
               </button>
            </div>
        )
     
    }

    function Title(){
        return(
            <div class = 'row'>
                <div class = "title-sum">
                    Summary
                </div>
            </div>
        )
    }
}


export default DisplayRecipeSummary
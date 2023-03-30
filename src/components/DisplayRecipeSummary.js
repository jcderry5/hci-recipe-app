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

    let theIngredients = extractRecipeIngredients({recipeIndex})
    let theSteps = extractRecipeSteps({recipeIndex})

    //here is where the code to pass idx back and forth goes
    
    return(
        <div>
            {Title()}
            {theIngredients}
            {theSteps}
            {ConfirmRecipe()}
        </div>
    )

    async function getRecipeCount() {
        const val = await fetch(`${"https://recipe-remix-996dc-default-rtdb.firebaseio.com//users/"+user.uid+"/recipecount"}/.json`);
        const responseJson = await val.json();
        console.log(responseJson)
        return responseJson
      }

    function updateUserIngredients() {
        alert(getRecipeCount())
        update(ref(database, 'users/' + user.uid+'/recipe-book/'),{
            recipename: data.results[0].recipes[0].name,
           })
        update(ref(database, 'users/' + user.uid+'/recipe-book/'),{
            recipethumbnail: data.results[0].recipes[0].thumbnail_url,
           })
        recipecount_val(recipecount + 1)
    }
    //add firebase data confirmation to here
    function ConfirmRecipe(){
        return(
            <div class = "row justify-content-center">
                <button type="button" class = "confirm-but">
                   <Link to="/hci-recipe-app/RecipeBook"  onClick={() => updateUserIngredients()}>Add New Recipe</Link>
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
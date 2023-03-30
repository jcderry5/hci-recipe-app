import React from 'react'
import data from '../data.json'
import '../RecipeResults.css'
import { Link } from "react-router-dom"

import extractRecipeSteps from './DisplayRecipeSteps'
import extractRecipeIngredients from './DisplayRecipeIngredients'




function DisplayRecipeSummary({addedIngredients, changeAddedIngredients}){

    let theIngredients = extractRecipeIngredients()
    let theSteps = extractRecipeSteps()

    //here is where the code to pass idx back and forth goes
    
    return(
        <div>
            {Title()}
            {theIngredients}
            {theSteps}
            {ConfirmRecipe()}
        </div>
    )

    //add firebase data confirmation to here
    function ConfirmRecipe(){
        return(
            <div class = "row justify-content-center">
                <button type="button" class = "confirm-but">
                   <Link to="/hci-recipe-app/RecipeBook">Add New Recipe</Link>
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
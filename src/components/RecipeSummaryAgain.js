import React from 'react'
import data from '../data.json'
import '../RecipeResults.css'
import { Link } from "react-router-dom"
import { database } from '../firebase';
import { update, ref } from "firebase/database";
import { useAuth } from '../contexts/AuthContext';
import extractRecipeSteps from './DisplayRecipeSteps'
import extractRecipeIngredients from './DisplayRecipeIngredients'

import selectedRecipe from './DisplayRecipeResults'


function DisplayRecipeSummary(){
    const { user } = useAuth();
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
                   <Link to="/hci-recipe-app/RecipeBook" >Back</Link>
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
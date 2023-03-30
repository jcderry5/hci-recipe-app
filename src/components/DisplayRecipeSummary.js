import React from 'react'
import data from '../data.json'
import '../RecipeResults.css'
import { Link } from "react-router-dom"

import extractRecipeSteps from './DisplayRecipeSteps'
import DisplayRecipeIngredients from './DisplayRecipeIngredients'




function DisplayRecipeSummary({recipeIndex, addedIngredients, changeAddedIngredients}){

    let theIngredients = DisplayRecipeIngredients({recipeIndex, addedIngredients, changeAddedIngredients})
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

    function generateIngredients(){

        function extractRecipeIngredients({recipeIndex}){
            // console.log("line 24")
            let ingredients_data = data.results[0].recipes[recipeIndex].sections[0].components;
            let amtIngredients = ingredients_data.length
    
            console.log(data.results)
    
            const returnValue = [];
    
            returnValue.push(<Title />);
    
            for(let i = 0; i< amtIngredients; i++){
                returnValue.push(<GenerateRecipeIngredients idx={recipeIndex} num={i}/>)
            }
    
            // returnValue.push(<AddButton/>);
    
            return (
                returnValue
            )
        }
        
        function GenerateRecipeIngredients({idx, num}){

            let amt = data.results[0].recipes[idx].sections[0].components[num].measurements[0].quantity
            let unit_a = data.results[0].recipes[idx].sections[0].components[num].measurements[0].unit.display_plural
            if (amt == 1) {
                unit_a = data.results[0].recipes[idx].sections[0].components[num].measurements[0].unit.display_singular
            }
            let ingredient_a = data.results[0].recipes[idx].sections[0].components[num].ingredient.name
            let space = " "
    
            return (
                <div class="row justify-content-center">
                    <div class="ingredient">
                        {amt} {unit_a}
                        {space}
                        {ingredient_a}
                    </div>
    
                </div>
            )
    
        }

        function GenerateNewIngredients(){
            let send = []
            for(let i = 0; i<addedIngredients.length; i++){
                send.push(<AddNewIngredient idx = {i}/>)
            }
            return(
                send
            )
        }

        function AddNewIngredient({idx}){
            return(
                <div class = "row justify-content-center">
                    <div class = "ingredient">
                        {addedIngredients[idx]}
                    </div>
                </div>
            )
        }

    }
}


export default DisplayRecipeSummary
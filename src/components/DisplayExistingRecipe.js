import React from 'react'
import data from '../data.json'
import '../RecipeResults.css'
import { Link } from "react-router-dom"
import { database } from '../firebase';
import { set, push, update, ref } from "firebase/database";
import { useAuth } from '../contexts/AuthContext';

function DisplayRecipeSummary({recipeSteps, recipeIndex, currentIngredients, user}){
    // let theIngredients = DisplayRecipeIngredients({recipeIndex, addedIngredients, changeAddedIngredients})
    let theIngredients = extractRecipeIngredients({currentIngredients})
    let theSteps = extractRecipeSteps({recipeSteps})
    //here is where the code to pass idx back and forth goes
    return(
        <div>
            {TitleSum()}
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
                   <Link to="/hci-recipe-app/RecipeBook" >Back to Book</Link>
               </button>
            </div>
        )
    }

    function TitleSum(){
        return(
            <div class = 'row'>
                <div class = "title-sum">
                    Summary
                </div>
            </div>
        )
    }

    function TitleIn(){
        return(
            <div class = 'row'>
                <div class = "title">
                    Ingredients
                </div>
            </div>
        )
    }

    function TitleSteps(){
        return(
            <div class = 'row'>
                <div class = "title">
                    Steps
                </div>
            </div>
        )
    }

    // INGREDIENT PORTION
    function extractRecipeIngredients({currentIngredients}){
        // console.log(currentIngredients)
        let amtIngredients = currentIngredients.length // this line gives errors about lenght!
        const returnValue = [];
        returnValue.push(<TitleIn/>);
        for(let i = 0; i< amtIngredients; i++){
            returnValue.push(<GenerateRecipeIngredients idx={i} currentIngredients={currentIngredients}/>)
        }
        return (
            returnValue
        )
    }

    function GenerateRecipeIngredients({idx, num}){

        let displayText = currentIngredients[idx]
        return (
            <div class="row justify-content-center">
                <div class="ingredient">
                    {displayText}
                </div>
            </div>
        )
    }

    // STEPS PORTION
    function extractRecipeSteps({recipeSteps}){
        // let steps_data = data.results[0].recipes[recipeIndex].instructions;
        let steps_data = recipeSteps
        let amtSteps = steps_data.length
        // console.log(steps_data)
        const returnValue = [];
        returnValue.push(<TitleSteps/>)
        for(let i = 0; i< amtSteps; i++){
            returnValue.push(<GenerateRecipeSteps num={i} recipeSteps={recipeSteps}/>)
        }
        return(
            returnValue
        )
    }

    function GenerateRecipeSteps({num, recipeSteps}){
        // let step = data.results[0].recipes[recipeIndex].instructions[num].display_text
        let step = recipeSteps[num]
        let punctuation = ". "
        return(
            <div class = "row justify-content-center">
                <div class = "steps">
                    {num}
                    {punctuation}
                    {step}
                </div>
            </div>
        )
    }
}

export default DisplayRecipeSummary 
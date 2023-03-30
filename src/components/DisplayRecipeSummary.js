import React from 'react'
import data from '../data.json'
import '../RecipeResults.css'
import { Link } from "react-router-dom"




function DisplayRecipeSummary({recipeIndex, addedIngredients, changeAddedIngredients}){

    // let theIngredients = DisplayRecipeIngredients({recipeIndex, addedIngredients, changeAddedIngredients})
    let theIngredients = extractRecipeIngredients({recipeIndex})
    let newIngredients = GenerateNewIngredients()
    let theSteps = extractRecipeSteps({recipeIndex})

    //here is where the code to pass idx back and forth goes
    
    return(
        <div>
            {TitleSum()}
            {theIngredients}
            {newIngredients}
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

    function extractRecipeIngredients({recipeIndex}){
        // console.log("line 24")
        let ingredients_data = data.results[0].recipes[recipeIndex].sections[0].components;
        let amtIngredients = ingredients_data.length

        console.log(data.results)

        const returnValue = [];

        returnValue.push(<TitleIn />);

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


    // STEPS PORTION

    function extractRecipeSteps({recipeIndex}){

        let steps_data = data.results[0].recipes[recipeIndex].instructions;
        let amtSteps = steps_data.length

        console.log(steps_data)


        const returnValue = [];

        returnValue.push(<TitleSteps/>)

        for(let i = 0; i< amtSteps; i++){
            returnValue.push(<GenerateRecipeSteps recipeIndex={recipeIndex} num={i}/>)
        }

        return(
            returnValue
        )

    }

    function GenerateRecipeSteps({recipeIndex, num}){

        let step = data.results[0].recipes[recipeIndex].instructions[num].display_text
        
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
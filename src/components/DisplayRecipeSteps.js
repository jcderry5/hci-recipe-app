import React from 'react'
import data from '../data.json'
import '../RecipeResults.css'
import selectedRecipe from './DisplayRecipeResults'


function DisplayRecipeSteps({ recipeIndex }){

    let results = extractRecipeSteps({recipeIndex})

    //here is where the code to pass idx back and forth goes
    return (
        <div>
            {results}
            {AddButton()}
        </div>
    )

    function extractRecipeSteps({recipeIndex}){

        let steps_data = data.results[0].recipes[recipeIndex].instructions;
        let amtSteps = steps_data.length
        console.log(steps_data)
        const returnValue = [];
        
        returnValue.push(<Title/>)
        for(let i = 0; i< amtSteps; i++){
            returnValue.push(<GenerateRecipeSteps recipeIndex={recipeIndex} num={i}/>)
        }
        return (
            returnValue
        )
    }

    function Title() {
        return (
            <div class='row'>
                <div class="title">
                    Steps:
                </div>
            </div>
        )
    }

    function AddButton() {
        return (
            <div class="row justify-content-center">
                <button type="button" class="steps">
                    {/* <button type = "button">
                        +
                    </button> */}
                    + Add Recipe Step
                </button>
            </div>
        )
    }

    function GenerateRecipeSteps({recipeIndex, num}){
        let step = data.results[0].recipes[recipeIndex].instructions[num].display_text
        
        let punctuation = ". "
        return (
            <div class="row justify-content-center">
                <div class="steps">
                    {num}
                    {punctuation}
                    {step}
                </div>
            </div>
        )
    }
    
}
export default DisplayRecipeSteps
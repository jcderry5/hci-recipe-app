import React from 'react'
import data from '../data.json'
import '../RecipeResults.css'

import selectedRecipe from './DisplayRecipeResults'


function DisplayRecipeSteps(){

    let idx = 0
    let results = extractRecipeSteps()

    //here is where the code to pass idx back and forth goes
    
    return(
        <div>
           {results}
           {AddButton()}
        </div>
    )

    function extractRecipeSteps(){

        let steps_data = data.results[0].recipes[idx].instructions;
        let amtSteps = steps_data.length

        console.log(steps_data)


        const returnValue = [];

        returnValue.push(<Title/>)

        for(let i = 0; i< amtSteps; i++){
            returnValue.push(<GenerateRecipeSteps num={i}/>)
        }

        return(
            returnValue
        )

    }

    function Title(){
        return(
            <div class = 'row'>
                <div class = "title">
                    Steps:
                </div>
            </div>
        )
    }

    function AddButton(){
        return(
            <div class = "row justify-content-center">
                <button type = "button" class = "steps">
                    {/* <button type = "button">
                        +
                    </button> */}
                    + Add Recipe Step
                </button>
            </div>
        )
    }
    
    function GenerateRecipeSteps({num}){

        let step = data.results[0].recipes[idx].instructions[num].display_text
        
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


export default DisplayRecipeSteps
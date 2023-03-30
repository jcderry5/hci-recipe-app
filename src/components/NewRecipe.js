import React from 'react'
import '../App.css';
import DisplayRecipeResults from './DisplayRecipeResults'
import { useState } from 'react';
import DisplayRecipeSteps from './DisplayRecipeSteps';
import DisplayRecipeIngrediants from './DisplayRecipeIngredients';
// import selectedRecipe from './DisplayRecipeResults'

export default function NewRecipe() {
    const [hasResults, changeHasResults] = useState(false)
    const [stepsNum, changeStep] = useState(3)
    const [currentRecipe, changeCurrentRecipe] = useState()

    let current_recipe = ""

    let theStep = Import()
    // // console.log(selectedRecipe)
    // console.log("cr", current_recipe)
    // console.log(currentRecipe)

    if(stepsNum == 2 ){
        // console.log("line 21")
        theStep = Ingrediants()
    }
    else if(stepsNum == 3){
        theStep = Steps()
    }
    else if(stepsNum == 4){
        theStep = Finalize()
    }
    


    return (
        
        <div>
            {stepsHeader()}
            {theStep}
            

        </div>

    )   


    function stepsHeader(){
        return(
            <div class = "steps-header">
                <button class = 'stepsButton' type = "button">
                    1
                </button>
                <button class = 'stepsButton' type = "button">
                    2
                </button>
                <button class = 'stepsButton' type = "button">
                    3
                </button>
                <button class = 'stepsButton' type = "button">
                    4
                </button>
            </div>
        )
    }

    function Import(){
        let results = ""

        if(hasResults == true){
            results = generateResults()
            console.log(currentRecipe)
        }

        return(
            <div class = "import">
                <form>
                    <label for = "search">Search: </label>
                    <input type = "text" value = "Kid-Friendly"></input>
                    <button type = "button" onClick={submitQuery}>Submit</button>
                    {/* <input type = "submit" value = "Enter" onClick={() => flipIt()}></input> */}
                </form>
                <div>
                    {results}
                </div>
            </div>
        )
    }

    function submitQuery(){
        changeHasResults(true)
    }





    function generateResults(){
        //here we pass the search values to DisplayRecipeResults

        return(
            <div>
                <div class="container text-center">
                    <   DisplayRecipeResults/>
                </div>
            </div>
        )
    }

    function Steps(){
        return(
            <   DisplayRecipeSteps/>
        )

    }

    // function chosenRecipe(data){
    //     changeCurrentRecipe(data)
    // }

    function Ingrediants(){
        return(
            <   DisplayRecipeIngrediants/>
        )

    }
    function Finalize(){

    }
}
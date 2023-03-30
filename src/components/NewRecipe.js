import React from 'react'
import '../App.css';
import { useState, useRef } from 'react';
import DisplayRecipeResults from './DisplayRecipeResults'
import DisplayRecipeSteps from './DisplayRecipeSteps';
import DisplayRecipeIngredients from './DisplayRecipeIngredients';
import DisplayRecipeSummary from './DisplayRecipeSummary';
// import selectedRecipe from './DisplayRecipeResults'

export default function NewRecipe() {
    // useRef for searchText since it will constantly be updating
    const searchTextRef = useRef();
    const [searchState, setSearchState] = useState("");

    const [hasResults, changeHasResults] = useState(false)
    const [stepsNum, changeStep] = useState(4)
    const [currentRecipe, changeCurrentRecipe] = useState()
    const [addedIngredients, changeAddedIngredients] = useState([])

    let current_recipe = ""

    let theStep = Import()
    let nextStep = tempNextButton()
    // // console.log(selectedRecipe)
    // console.log("cr", current_recipe)
    // console.log(currentRecipe)

    if (stepsNum == 2) {
        // console.log("line 21")
        theStep = Ingrediants()
    }
    else if (stepsNum == 3) {
        theStep = Steps()
    }
    else if (stepsNum == 4) {
        theStep = Finalize()
        nextStep = ""
    }



    return (

        <div>
            {stepsHeader()}
            {theStep}
            {nextStep}
        </div>

    )


    function stepsHeader() {
        return (
            <div class="steps-header">
                <button class='stepsButton' type="button">
                    1
                </button>
                <button class='stepsButton' type="button">
                    2
                </button>
                <button class='stepsButton' type="button">
                    3
                </button>
                <button class='stepsButton' type="button">
                    4
                </button>
            </div>
        )
    }

    function tempNextButton() {
        return (
            <div class="row justify-content-center">
                <button type="button" class="temp-button" onClick={addStep}>
                    Next Step
                </button>
            </div>
        )
    }

    function addStep() {
        if (stepsNum < 4) {
            changeStep(stepsNum + 1)
        }

    }


    function Import() {
        let results = ""

        if (hasResults == true) {
            results = generateResults()
            console.log(currentRecipe)
        }

        return (
            <div class="import">
                <form>
                    <label for="search">Search: </label>
                    <input type="text" placeholder="Kid-Friendly" ref={searchTextRef} ></input>
                    <button type="button" onClick={submitQuery}>Submit</button>
                    {/* <input type = "submit" value = "Enter" onClick={() => flipIt()}></input> */}
                </form>
                <div>
                    {results}
                </div>
            </div>
        )
    }

    function submitQuery() {
        setSearchState(searchTextRef.current.value);
        changeHasResults(true)
    }





    function generateResults() {
        //here we pass the search value to DisplayRecipeResults

        return (
            <div>
                <div class="container text-center">
                    <DisplayRecipeResults searchState={searchState} />
                </div>
            </div>
        )
    }

    function Steps() {
        return (
            <   DisplayRecipeSteps />
        )

    }

    // function chosenRecipe(data){
    //     changeCurrentRecipe(data)
    // }

    function Ingrediants() {
        return (
            <   DisplayRecipeIngredients 
            addedIngredients={addedIngredients} 
            changeAddedIngredients={changeAddedIngredients} />
        )

    }
    function Finalize() {
        return (
            <   DisplayRecipeSummary
            addedIngredients={addedIngredients} 
            changeAddedIngredients={changeAddedIngredients} />
        )
    }
}
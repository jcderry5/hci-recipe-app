import React from 'react'
import '../App.css';
import { useState, useRef } from 'react';
import DisplayRecipeResults from './DisplayRecipeResults'
import DisplayRecipeSteps from './DisplayRecipeSteps';
import DisplayRecipeIngredients from './DisplayRecipeIngredients';
import DisplayRecipeSummary from './DisplayRecipeSummary';
// import selectedRecipe from './DisplayRecipeResults'
import data from '../data.json'
export default function NewRecipe() {
    // useRef for searchText since it will constantly be updating
    const searchTextRef = useRef();
    const [searchState, setSearchState] = useState("");
    const [currentRecipeIndex, setRecipeIndex] = useState(0);
    const [hasResults, changeHasResults] = useState(false)
    const [stepsNum, changeStep] = useState(1)
    const [currentRecipe, changeCurrentRecipe] = useState()
    const [currentIngredients, changeCurrentIngredients] = useState([])
    let theStep = Import()
    let nextStep = ""
    let stepName = "";
    console.log("Heyo, currently in NewRecipe")
    
    if (stepsNum === 2) {
        //console.log('this is currentrecipeindex', currentRecipeIndex)
        // Update change current ingredients
        //changeCurrentIngredients([])
        //const allIngredients = data.results[0].recipes[currentRecipeIndex].sections[0].components

        //console.log("All ingredients: ", allIngredients)
        //console.log("length= ", allIngredients.length)

        // Make it iterable
        // Iterate over the property names:
        // for (const currKey of Object.keys(allIngredients)) {
        //     const currValue = allIngredients[currKey];
        //     //console.log("currKey and currValue below:")
        //     //console.log(currKey, currVal);
        //     changeCurrentIngredients(currArray => [...currArray, currValue])
        // }
        //console.log("This is the useState:", currentIngredients)
        // for (const currKey of Object.keys(allIngredients)) {
        //     console.log("Current Ingredient ", allIngredients[currKey])
        //     changeCurrentIngredients(...currentIngredients, allIngredients[currKey])
        // }

        theStep = Ingredients()
        stepName = data.results[0].recipes[currentRecipeIndex].name
        nextStep = tempNextButton();
    }
    else if (stepsNum === 3) {
        theStep = Steps()
        stepName = data.results[0].recipes[currentRecipeIndex].name
        nextStep = tempNextButton();
    }
    else if (stepsNum === 4) {
        theStep = Finalize()
        stepName = data.results[0].recipes[currentRecipeIndex].name
    }

    return (

        <div>
            {stepsHeader()}
            {stepName}
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
                    Temporary Next Step Button
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
        if (hasResults === true) {
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
                    <DisplayRecipeResults searchState={searchState} setRecipeIndex={setRecipeIndex} changeStep={changeStep} currentIngredients={currentIngredients} changeCurrentIngredients={changeCurrentIngredients}/>
                </div>
            </div>
        )
    }
    function Steps() {
        return (
            <   DisplayRecipeSteps recipeIndex={currentRecipeIndex} />
        )
    }
    // function chosenRecipe(data){
    //     changeCurrentRecipe(data)
    // }
    function Ingredients() {
        return (
            <   DisplayRecipeIngredients recipeIndex={currentRecipeIndex} currentIngredients={currentIngredients} />
        )
    }
    function Finalize() {
        return (
            <   DisplayRecipeSummary recipeIndex={currentRecipeIndex} />
        )
    }
}
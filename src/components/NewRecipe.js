import React from 'react'
import '../App.css';
import { useState, useRef } from 'react';
import DisplayRecipeResults from './DisplayRecipeResults'
import DisplayRecipeSteps from './DisplayRecipeSteps';
import DisplayRecipeIngredients from './DisplayRecipeIngredients';
import DisplayRecipeSummary from './DisplayRecipeSummary';
import { useAuth } from '../contexts/AuthContext';

// import selectedRecipe from './DisplayRecipeResults'
import data from '../data.json'

export default function NewRecipe() {
    // useRef for searchText since it will constantly be updating
    const { user } = useAuth();
	const searchTextRef = useRef();
	const [searchState, setSearchState] = useState("");
    const [currentRecipeIndex, setRecipeIndex] = useState(0);
    const [hasResults, changeHasResults] = useState(false)
    const [stepsNum, changeStep] = useState(1)
    const [currentRecipe, changeCurrentRecipe] = useState() //is this being used?
    const [addedIngredients, changeAddedIngredients] = useState([])
    const [currentIngredients, changeCurrentIngredients] = useState([])

    const [recipeSteps, changeRecipeSteps] = useState([])

    let theStep = Import()
    let nextStep = ""
    let stepName = "";
    if (stepsNum === 2) {
        theStep = Ingredients()
        stepName = data.results[currentRecipeIndex[0]].recipes[currentRecipeIndex[1]].name
        nextStep = tempNextButton();
    } else if (stepsNum === 3) {
        theStep = Steps()
        stepName = data.results[currentRecipeIndex[0]].recipes[currentRecipeIndex[1]].name
        nextStep = tempNextButton();
    } else if (stepsNum === 4) {
        theStep = Finalize()
        stepName = data.results[currentRecipeIndex[0]].recipes[currentRecipeIndex[1]].name
    }

    return (
        <div>
            {stepsHeader()}
            <div class="row justify-content-center">
                <div class="recipe-name">
                    {stepName}
                </div>
            </div>
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

    function handleSearchKeyDown(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            submitQuery();
        }
    }

    function Import() {
        let results = ""
        if (hasResults === true) {
            results = generateResults()
        }
        return (
            <div class="import">
                <form>
                    <label for="search">Search: </label>
                    <input type="text" placeholder="Chicken" ref={searchTextRef} onKeyDown={handleSearchKeyDown}></input>
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
                    <DisplayRecipeResults searchState={searchState} setRecipeIndex={setRecipeIndex} changeStep={changeStep} recipeSteps={recipeSteps} changeRecipeSteps={changeRecipeSteps} currentIngredients={currentIngredients} changeCurrentIngredients={changeCurrentIngredients}/>
                </div>
            </div>
        )
    }

    function Steps(){
        return(
            <   DisplayRecipeSteps recipeIndex={currentRecipeIndex} recipeSteps={recipeSteps} changeRecipeSteps={changeRecipeSteps} />
        )
    }

    function Ingredients() {
        return (
            <   DisplayRecipeIngredients
                currentIngredients={currentIngredients}
                changeCurrentIngredients={changeCurrentIngredients}/>
        )
    }

    function Finalize() {
        return (
            <   DisplayRecipeSummary
            recipeSteps={recipeSteps}
            currentIngredients={currentIngredients}
            changeAddedIngredients={changeAddedIngredients}
            recipeIndex={currentRecipeIndex} user={user}/>
        )
    }
}
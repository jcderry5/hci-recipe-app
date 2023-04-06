import React from 'react'
import '../App.css';
import { useState, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import DisplayRecipeResults from './DisplayRecipeResults'
import DisplayRecipeSteps from './DisplayRecipeSteps';
import DisplayRecipeIngrediants from './DisplayRecipeIngredients';
import DisplayRecipeSummary from './DisplayRecipeSummary';
// import selectedRecipe from './DisplayRecipeResults'

export default function NewRecipe() {
    // useRef for searchText since it will constantly be updating
	const searchTextRef = useRef();
	const [searchState, setSearchState] = useState("");
    const { user } = useAuth();
    const [hasResults, changeHasResults] = useState(false)
    const [stepsNum, changeStep] = useState(1)
    const [currentRecipe, changeCurrentRecipe] = useState()
    let current_recipe = ""

    return (
        <div>
            {Finalize()}
        </div>
    )
    function Finalize(){
        return(
            <   DisplayRecipeSummary/>
        )
    }
}
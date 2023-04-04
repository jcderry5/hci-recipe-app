import React from 'react'
import data from '../data.json'
import '../RecipeResults.css'
import { useState, useRef } from 'react';
import selectedRecipe from './DisplayRecipeResults'
import getIngredientData from './IngredientSubstitute'

function DisplayRecipeIngredients({ currentIngredients }) {

    let theIngredients = extractRecipeIngredients({ currentIngredients })

    return (
        <div>
            {theIngredients}
            {AddButton()}
        </div>
    )

    function extractRecipeIngredients({ currentIngredients }) {
        console.log("Entering extractRecipeIngredients")
        let amtIngredients = currentIngredients.length
        const returnValue = [];
        returnValue.push(<Title/>);
        for(let i = 0; i< amtIngredients; i++){
            returnValue.push(<GenerateRecipeIngredients idx={i} currentIngredients={currentIngredients}/>)
        }
        // returnValue.push(<AddButton/>);
        return (
            returnValue
        )
    }

    function Title() {
        return (
            <div class='row'>
                <div class="title">
                    Ingredients:
                </div>
            </div>
        )
    }

    function AddButton() {
        return (
            <div class = "row justify-content-center">
                <button type = "button" class = "ingredient">
                    {/* <button type = "button">
                        +
                    </button> */}
                    + Add Ingredient
                </button>
            </div>
        )
    }

    function GenerateRecipeIngredients({ idx, currentIngredients }) {
        let amt = currentIngredients[idx].measurements[0].quantity
        let unit_a = currentIngredients[idx].measurements[0].unit.display_plural
        if (amt == 1) {
            unit_a = currentIngredients[idx].measurements[0].unit.display_singular
        }
        let ingredient_a = currentIngredients[idx].ingredient.name
        let space = " "
        return (
            <div class = "row justify-content-center">
                <div onClick={() => { getIngredientData({ ingredient_a }) }} class="ingredient">
                    {amt} {unit_a}
                    {space}
                    {ingredient_a}
                </div>

            </div>
        )
    }
}

export default DisplayRecipeIngredients
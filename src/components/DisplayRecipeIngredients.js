import React from 'react'
import data from '../data.json'
import '../RecipeResults.css'
import { useState, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import selectedRecipe from './DisplayRecipeResults'
import getIngredientData from './IngredientSubstitute'

   

function DisplayRecipeIngredients({ currentIngredients, changeCurrentIngredients }) {
    const { user } = useAuth();
    const [addStage, changeAddStage] = useState(false);
    let theIngredients = extractRecipeIngredients({ currentIngredients })
    let addState = AddButton()
    if(addStage === true){
        addState = AddIngredient()
    }

    // console.log(user)
    return (
        <div>
            {theIngredients}
            {addState}
        </div>
    )

    function extractRecipeIngredients({ currentIngredients }) {
        let amtIngredients = currentIngredients.length
        const returnValue = [];
        returnValue.push(<Title/>);
        for(let i = 0; i< amtIngredients; i++){
            returnValue.push(<GenerateRecipeIngredients idx={i} currentIngredients={currentIngredients}/>)
        }
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
            <div class="row justify-content-center">
                <button type="button" class="ingredient" onClick={(addClick)}>
                    + Add Ingredient
                </button>
            </div>
        )
    }

    function addClick(){
        changeAddStage(!addStage)
    }

    function AddIngredient() {
        const handleSubmit = async (e) => {
            e.preventDefault();
            let addedUnit = e.target.elements.unit.value
            let addedIngredient = e.target.elements.name.value
            changeCurrentIngredients(addedIngredients => [...addedIngredients, {
                ingredient: addedIngredient,
			    measurements: addedUnit,
			    raw_text: addedUnit + " " + addedIngredient
            }]);
            addClick()
        }
        return (
            <div class="justify-content-center">
                <form class="new-ingredient-form" onSubmit={handleSubmit}>
                    <div class="row" id="new-ingredient-row">
                        <div class="col-4">
                            <input type="text" id="recipe-measurement" class = "new-ingredient-input" name = "unit" placeholder="Unit">
                            </input>
                        </div>
                        <div class="col-8">
                            <input type="text" id= "recipe-name" class = "new-ingredient-input" name = "name" placeholder="Ingredient">
                            </input>
                    </div>
                </div>
                    <input type = "submit" class = "sub-butt" value="Add Ingredient"/>
                </form>
            </div>
        )
    }

    function GenerateRecipeIngredients({ idx, currentIngredients }) {
        //console.log("Ingredient Object: ", currentIngredients[idx])
        let displayText = currentIngredients[idx].raw_text
        let name = currentIngredients[idx].ingredient
        let measurementObj = currentIngredients[idx].measurements // can hold obj (if from data) or string (if custom)
        //console.log("name", nameObj)
        // let amt = currentIngredients[idx].measurements[0].quantity
        // let unit_a = currentIngredients[idx].measurements[0].unit.display_plural
        // if (amt == 1) {
        //     unit_a = currentIngredients[idx].measurements[0].unit.display_singular
        // }
        // let ingredient_a = currentIngredients[idx].ingredient.name
        //let space = " "
        return (
            <div class = "row justify-content-center">
                <div onClick={() => { getIngredientData({ name }) }} class="ingredient">
                    {displayText}
                </div>
            </div>
        )
    }
}
export default DisplayRecipeIngredients
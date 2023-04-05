import React from 'react'
import data from '../data.json'
import '../RecipeResults.css'
import { useState, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import selectedRecipe from './DisplayRecipeResults'
import getIngredientData from './IngredientSubstitute'


function DisplayRecipeIngredients({recipeIndex, addedIngredients, changeAddedIngredients}) {
    const { user } = useAuth();
    const [addStage, changeAddStage] = useState(false);
    // const [addedIngredients, changeAddedIngredients] = useState([])

    let idx = 0
    let theIngredients = extractRecipeIngredients({recipeIndex})

    let addState = AddButton()

    if(addStage === true){
        addState = AddIngredient()
    }

    // console.log(user)
    return (
        <div>

            {theIngredients}
            {GenerateNewIngredients()}
            {addState}

        </div>
    )

    function extractRecipeIngredients({recipeIndex}){
        let ingredients_data = data.results[0].recipes[recipeIndex].sections[0].components;
        let amtIngredients = ingredients_data.length

        console.log(data.results)

        const returnValue = [];

        returnValue.push(<Title />);

        for(let i = 0; i< amtIngredients; i++){
            returnValue.push(<GenerateRecipeIngredients idx={recipeIndex} num={i}/>)
        }
        // returnValue.push(<AddButton/>);

        return(

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
            const newElement = e.target.elements.new.value
            changeAddedIngredients(addedIngredients => [...addedIngredients, newElement]);
            addClick()
        }

        return (
            <div class="row justify-content-center">
                <form class = "new-ingredient-form" onSubmit={handleSubmit}>
                    <input type="text" class = "new-ingredient-input" name = "new">
                    </input>
                    <input type = "submit" class = "sub-butt" value="Submit"/>
                </form>
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

    function GenerateRecipeIngredients({idx, num}){


        let amt = data.results[0].recipes[idx].sections[0].components[num].measurements[0].quantity
        let unit_a = data.results[0].recipes[idx].sections[0].components[num].measurements[0].unit.display_plural
        if (amt == 1) {
            unit_a = data.results[0].recipes[idx].sections[0].components[num].measurements[0].unit.display_singular
        }
        let ingredient_a = data.results[0].recipes[idx].sections[0].components[num].ingredient.name
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
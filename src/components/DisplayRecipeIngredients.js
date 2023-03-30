import React from 'react'
import data from '../data.json'
import '../RecipeResults.css'

import selectedRecipe from './DisplayRecipeResults'


function DisplayRecipeIngredients(){

    let idx = 0

    let theIngredients = extractRecipeIngredients()




    //here is where the code to pass idx back and forth goes
    
    return(
        <div>
            {theIngredients}
        </div>
    )

    function extractRecipeIngredients(){
        // console.log("line 24")
        let ingredients_data = data.results[0].recipes[idx].sections[0].components;
        let amtIngredients = ingredients_data.length

        const returnValue = [];
        for(let i = 0; i< amtIngredients; i++){
            returnValue.push(<GenerateRecipeIngredients num={i}/>)
        }

        return(
            returnValue
        )
    }

    function GenerateRecipeIngredients({num}){

        let amt = data.results[0].recipes[idx].sections[0].components[num].measurements[0].quantity
        let unit_a = data.results[0].recipes[idx].sections[0].components[num].measurements[0].unit.display_plural
        if(amt == 1){
            unit_a = data.results[0].recipes[idx].sections[0].components[num].measurements[0].unit.display_singular
        }
        let ingredient_a = data.results[0].recipes[idx].sections[0].components[num].ingredient.name
        let space = " "
        return(
            <div class = "row justify-content-center">
                <div class = "ingredient">
                    {amt} {unit_a}
                    {space}
                    {ingredient_a} 
                </div>
               
            </div>
        )

    }
}


export default DisplayRecipeIngredients
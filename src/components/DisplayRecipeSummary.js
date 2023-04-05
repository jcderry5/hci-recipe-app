import React from 'react'
import data from '../data.json'
import '../RecipeResults.css'
import { Link } from "react-router-dom"
import { database } from '../firebase';
import { set, push, update, ref } from "firebase/database";
import { useAuth } from '../contexts/AuthContext';



function DisplayRecipeSummary({ recipeIndex, addedIngredients, changeAddedIngredients, user }){
    // const user = useAuth();
    let theIngredients = extractRecipeIngredients({recipeIndex})
    let newIngredients = GenerateNewIngredients()
    let theSteps = extractRecipeSteps({recipeIndex})

    //here is where the code to pass idx back and forth goes
    return(
        <div>
            {TitleSum()}
            {theIngredients}
            {newIngredients}
            {theSteps}
            {ConfirmRecipe()}
        </div>
    )

    // async function getRecipeCount() {
    //     const val = await fetch(`${"https://recipe-remix-996dc-default-rtdb.firebaseio.com//users/"+user.uid+"/recipecount"}/.json`);
    //     const responseJson = await val.json();
    //     console.log(responseJson)
    //     return responseJson
    //   }

    function updateRecipe(recipeIndex) {
        // console.log("hi", user)
        // console.log("inside updaterecipe", user.uid)
        update(ref(database,'users/' + user.uid + '/recipe-book'),{
            [data.results[0].recipes[recipeIndex].name]:  { 
                recipethumbnail: data.results[0].recipes[recipeIndex].thumbnail_url,
                recipe_obj: {
                    steps: data.results[0].recipes[recipeIndex].instructions,
                    ingredients: data.results[0].recipes[recipeIndex].sections[0].components
                }
            }
        })
    }
    
    //add firebase data confirmation to here
    function ConfirmRecipe(){
        
        return(
            <div class = "row justify-content-center">
                <button type="button" class = "confirm-but">
                   <Link to="/hci-recipe-app/RecipeBook"  onClick={() => updateRecipe(recipeIndex)}>Add New Recipe</Link>
               </button>
            </div>
        )
     
    }

    function TitleSum(){
        return(
            <div class = 'row'>
                <div class = "title-sum">
                    Summary
                </div>
            </div>
        )
    }

    function TitleIn(){
        return(
            <div class = 'row'>
                <div class = "title">
                    Ingredients
                </div>
            </div>
        )
    }

    function TitleSteps(){
        return(
            <div class = 'row'>
                <div class = "title">
                    Steps
                </div>
            </div>
        )
    }




    // INGREDIENT PORTION

    function extractRecipeIngredients({recipeIndex}){
        // console.log("line 24")
        let ingredients_data = data.results[0].recipes[recipeIndex].sections[0].components;
        let amtIngredients = ingredients_data.length

        // console.log(data.results)

        const returnValue = [];

        returnValue.push(<TitleIn />);

        for(let i = 0; i< amtIngredients; i++){
            returnValue.push(<GenerateRecipeIngredients idx={recipeIndex} num={i}/>)
        }

        // returnValue.push(<AddButton/>);

        return (
            returnValue
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
            <div class="row justify-content-center">
                <div class="ingredient">
                    {amt} {unit_a}
                    {space}
                    {ingredient_a}
                </div>

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


    // STEPS PORTION

    function extractRecipeSteps({recipeIndex}){

        let steps_data = data.results[0].recipes[recipeIndex].instructions;
        let amtSteps = steps_data.length

        // console.log(steps_data)


        const returnValue = [];

        returnValue.push(<TitleSteps/>)

        for(let i = 0; i< amtSteps; i++){
            returnValue.push(<GenerateRecipeSteps recipeIndex={recipeIndex} num={i}/>)
        }

        return(
            returnValue
        )

    }

    function GenerateRecipeSteps({recipeIndex, num}){

        let step = data.results[0].recipes[recipeIndex].instructions[num].display_text
        
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


export default DisplayRecipeSummary
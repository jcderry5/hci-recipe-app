import React, { useEffect } from 'react'
import data from '../data.json'
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { database } from '../firebase';
import { update, ref } from "firebase/database";
import { useAuth } from '../contexts/AuthContext';
import DisplayRecipeSummary from './DisplayRecipeSummary';
import '../RecipeResults.css';
import { Link, useNavigate } from "react-router-dom"
// import { DisplayRecipeSummary } from "DisplayRecipeSummary"

export default function RecipeBook() {
    const navigate = useNavigate();
    const returnValue = [];
    // const currIngredients = [];
    const { user } = useAuth();
    const [recipes, recipe_val] = useState([]);
    const [recipeObj, recipeObj_val] = useState([]);
    const [currIngredients, currIngredients_val] = useState([]);
    const [steps, steps_val] = useState([]);
    const [recipethumbnail, recipethumbnail_val] = useState([]);
    function extractRecipeInfo() {
        // Possible variables to use
        let name = data.results[0].recipes[0].name
        let instructions = data.results[0].recipes[0].instructions
        let userRatings = data.results[0].recipes[0].user_ratings.score
        let id = data.results[0].recipes[0].id
        let thumbnailURL = data.results[0].recipes[0].thumbnail_url
        let originalURL = data.results[0].recipes[0].original_video_url
        // console.log(name)
        // console.log(instructions)
        // console.log(thumbnailURL)
        // console.log(originalURL)
        //TODO: Fetch from recipes/get-more-info using id
    }

    useEffect(() => {
        // This useEffect should only render on changes to {user} state
        // Specifically, if a user exists (logged in) it will get recipes
        getRecipeName();
    }, [user]);

    function DataSetResults({idx}) {
        // extractRecipeInfo();
        // getRecipeName();
        // getRecipeThumbnail(idx = {idx});
    }

    async function getRecipeName() {
        // console.log("getting recipe name")
        // Once user is actually properly mounted, getRecipeName() will confirm and then pull recipes from firebase user
        if (typeof user.uid !== 'undefined') {
            const val = await fetch(`${"https://recipe-remix-hci-default-rtdb.firebaseio.com//users/"+user.uid+"/recipe-book"}/.json`);
            const responseJson = await val.json();
            recipeObj_val(responseJson)
            recipe_val(Object.keys(responseJson))
        }
        // console.log("uwu", Object.keys(responseJson))
        return
      }
    //   async function getRecipeThumbnail({idx}) {
    //     const val = await fetch(`${"https://recipe-remix-hci-default-rtdb.firebaseio.com//users/"+user.uid+"/recipe-book"+"/"+recipes[idx]+"/recipethumbnail"}/.json`);
    //     const responseJson = await val.json();
    //     recipethumbnail_val(responseJson)
    //     // console.log("uwu", Object.keys(responseJson))
    //     return

    //   }

      function Build({idx}){
        // <DataSetResults idx = {idx}/>
        return(
            <div class="recipe-row">
            <div class="row">
            <div class="col-3 recipe-subtitles">
                Name:
            </div>
            <div class="col-9 truncate">
                {recipes[idx]}
            </div>
        </div>
        {/* <div class="row">
             {<img src = {recipethumbnail}></img>}
        </div> */}
        <div class="row">
        <button type="button" class="temp-button" onClick={() => finalize(idx=idx)}>
            View
            </button>
        </div>
        </div>
        )
      }

    async function getCurrentIngredients(idx) {
        const val = await fetch(`${"https://recipe-remix-hci-default-rtdb.firebaseio.com/users/"+user.uid+"/recipe-book/"+recipes[idx]+"/recipe_obj/ingredients"}/.json`);
        const responseJson = await val.json();
        // console.log("current ing",responseJson)
        // currIngredients_val(responseJson)
        return responseJson
    }
    async function getSteps(idx) {
        const val = await fetch(`${"https://recipe-remix-hci-default-rtdb.firebaseio.com//users/"+user.uid+"/recipe-book/"+recipes[idx]+"/recipe_obj/steps"}/.json`);
        const responseJson = await val.json();
        // console.log("current steps",responseJson)
        // steps_val(responseJson)
        return responseJson
    }

    async function finalize(idx) {
        // navigate('/hci-recipe-app/summaryreview', {state: {idx: idx, currIngr: getCurrentIngredients(idx)}});
        const ingredients = await getCurrentIngredients(idx=idx)
        const theSteps = await getSteps(idx=idx)
        // console.log("len is", currIngredients.length)
        // for (let i = 0; i < currIngredients.length; i++)
        // console.log("infinalize", ingredients)
        // console.log("infinal", theSteps)
        // // const summary = < DisplayRecipeSummary
        // currentIngredients={ingredients} recipeSteps = {theSteps}
        // recipeIndex={idx} user={user}/>
        // console.log(currIngredients)
        // console.log(currentIngredients)
        // recipeIndex = idx
        navigate('/hci-recipe-app/summaryreview', {state: {ingredients, theSteps, idx}});
    }

    for(let i = 0; i< recipes.length; i++){
        //<DataSetResults/>
        returnValue.push(<Build idx={i}/>)
    }
    
    return (
        returnValue
    )

}

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

    useEffect(() => {
        // This useEffect should only render on changes to {user} state
        // Specifically, if a user exists (logged in) it will get recipes
        getRecipeName();
    }, [user]);


    function DataSetResults({ idx }) {
        // extractRecipeInfo();
        // getRecipeName();
        // getRecipeThumbnail(idx = {idx});
    }

    async function getRecipeName() {
        // console.log("getting recipe name")
        // Once user is actually properly mounted, getRecipeName() will confirm and then pull recipes from firebase user
        if (typeof user.uid !== 'undefined') {
            const val = await fetch(`${"https://recipe-remix-hci-default-rtdb.firebaseio.com//users/" + user.uid + "/recipe-book"}/.json`);
            const responseJson = await val.json();
            recipeObj_val(responseJson)
            recipe_val(Object.keys(responseJson))
        }
        // console.log("uwu", Object.keys(responseJson))
        return
    }

    function Build({ idx }) {
        let recipeDifficulty = getRecipeDifficulty(recipeObj[recipes[idx]].recipe_obj.ingredients.length)
        return (
            <div class="recipe-row">
                <button class="recipe-options-but" type="button" onClick={() => finalize(idx=idx)}>
                    <div class="row">
                        <img class="recipe-options-img" src={recipeObj[recipes[idx]].recipethumbnail}></img>
                    </div>
                    <h5 class="recipe-book-subtitles truncate recipe-subtitles">
                        {recipes[idx]}
                    </h5>
                    <div class="row">
					<div class="col-6 recipe-subtitles">
						Recipe Diffuculty:
					</div>
					<div class="col-6">
		                {recipeDifficulty}
					</div>
				</div>
                </button>
            </div>
        )
    }

    function Title() {
        return (
            <div class='row'>
                <div class="title">
                    Recipe Book
                </div>
            </div>
        )
    }

    function getRecipeDifficulty(numSteps) {
        if (numSteps < 5) {
            return "Easy"
        } else if (numSteps < 10) {
            return "Medium"
        } else {
            return "Hard"
        }
    }

    async function getCurrentIngredients(idx) {
        const val = await fetch(`${"https://recipe-remix-hci-default-rtdb.firebaseio.com/users/" + user.uid + "/recipe-book/" + recipes[idx] + "/recipe_obj/ingredients"}/.json`);
        const responseJson = await val.json();
        // console.log("current ing",responseJson)
        // currIngredients_val(responseJson)
        return responseJson
    }

    async function getSteps(idx) {
        const val = await fetch(`${"https://recipe-remix-hci-default-rtdb.firebaseio.com//users/" + user.uid + "/recipe-book/" + recipes[idx] + "/recipe_obj/steps"}/.json`);
        const responseJson = await val.json();
        console.log("current steps", responseJson)
        // steps_val(responseJson)
        return responseJson
    }

    async function finalize(idx) {
        // navigate('/hci-recipe-app/summaryreview', {state: {idx: idx, currIngr: getCurrentIngredients(idx)}});
        const ingredients = await getCurrentIngredients(idx = idx)
        const theSteps = await getSteps(idx = idx)
        navigate('/hci-recipe-app/summaryreview', { state: { ingredients, theSteps, idx } });
    }

    returnValue.push(<Title></Title>)
    for (let i = 0; i < recipes.length; i++) {
        //<DataSetResults/>
        returnValue.push(<Build idx={i} />)
    }

    return (
        returnValue
    )

}

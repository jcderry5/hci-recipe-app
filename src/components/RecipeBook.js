import React from 'react'
import data from '../data.json'
import { useState } from 'react';
import { database } from '../firebase';
import { update, ref } from "firebase/database";
import { useAuth } from '../contexts/AuthContext';
import '../RecipeResults.css';
import { Link, useNavigate } from "react-router-dom"
// import { DisplayRecipeSummary } from "DisplayRecipeSummary"

export default function RecipeBook() {
    const { user } = useAuth();
    const [recipename, recipename_val] = useState([]);
    const [recipethumbnail, recipethumbnail_val] = useState([]);
    function extractRecipeInfo() {
 
        // Possible variables to use
        let name = data.results[0].recipes[0].name
        let instructions = data.results[0].recipes[0].instructions
        let userRatings = data.results[0].recipes[0].user_ratings.score
        let id = data.results[0].recipes[0].id
        let thumbnailURL = data.results[0].recipes[0].thumbnail_url
        let originalURL = data.results[0].recipes[0].original_video_url
        console.log(name)
        console.log(instructions)
        console.log(thumbnailURL)
        console.log(originalURL)
        //TODO: Fetch from recipes/get-more-info using id
    
    }

    function DataSetResults() {
        extractRecipeInfo()
        
        getRecipeThumbnail();
        getRecipeName();
        return 
    }

    async function getRecipeName() {
        const val = await fetch(`${"https://recipe-remix-996dc-default-rtdb.firebaseio.com//users/"+user.uid}/.json`);
        const responseJson = await val.json();
        recipename_val(responseJson)
      }
      async function getRecipeThumbnail() {
        const val = await fetch(`${"https://recipe-remix-996dc-default-rtdb.firebaseio.com//users/"+user.uid}/.json`);
        const responseJson = await val.json();
        recipethumbnail_val(responseJson)
      }

    function RecipeResult({ idx }) {
        <DataSetResults/>
        return (
            <div class="recipe-row">
                <div class="row">
                    <img src={recipethumbnail}></img>
                </div>
                <div class="row">
                    <div class="col-3 recipe-subtitles">
                        Name:
                    </div>
                    <div class="col-9 truncate">
                        {recipename}
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 recipe-subtitles">
                    <Link to="/hci-recipe-app/recipesummaryagain"> View Recipe</Link>
                    </div>
                </div>
                
                <div class="row">
                <div class="col-6 recipe-subtitles">
                        Changes Made:
                    </div>
                    <div class="col-6">
                        
                    </div>
                </div>
                
                    {/* data.results[0].recipes[0].instructions.count */}
                
            </div>
        )
    }
    return (
        <RecipeResult/>
    )
}
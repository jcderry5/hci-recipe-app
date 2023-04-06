import React from 'react'
import data from '../data.json'
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { database } from '../firebase';
import { update, ref } from "firebase/database";
import { useAuth } from '../contexts/AuthContext';
import '../RecipeResults.css';
import { Link, useNavigate } from "react-router-dom"
// import { DisplayRecipeSummary } from "DisplayRecipeSummary"

export default function RecipeBook() {
    const returnValue = [];
    const { user } = useAuth();
    const [recipes, recipe_val] = useState([]);
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

    function DataSetResults({idx}) {
        // extractRecipeInfo();
        getRecipeName();
        // getRecipeThumbnail(idx = {idx});
    }

    async function getRecipeName() {
        // console.log("getting recipe name")
        const val = await fetch(`${"https://hci-recipe-app-default-rtdb.firebaseio.com//users/"+user.uid+"/recipe-book"}/.json`);
        const responseJson = await val.json();
        recipe_val(Object.keys(responseJson))
        // console.log("uwu", Object.keys(responseJson))
        return
      }
    //   async function getRecipeThumbnail({idx}) {
    //     const val = await fetch(`${"https://recipe-remix-996dc-default-rtdb.firebaseio.com//users/"+user.uid+"/recipe-book"+"/"+recipes[idx]+"/recipethumbnail"}/.json`);
    //     const responseJson = await val.json();
    //     recipethumbnail_val(responseJson)
    //     // console.log("uwu", Object.keys(responseJson))
    //     return

    //   }

      function Build({idx}){
        <DataSetResults idx = {idx}/>
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
            <div class="col-3 recipe-subtitles">
            View
            </div>
        </div>
        </div>
        )
      }

    //   return (
    //             <Container>
    //             <DataSetResults/>

    //             <Build/>

    //             </Container>
    //     )

    // return (
    //         <div id="list" ></div>
    //         <script>

    //         </script>

    // )

    //   function build_me() {
    //     for (var i = 0; i<recipes.length; i++){
    //         {recipes[0]}
    //     }
    //   }

    // extractRecipeInfo();
    getRecipeName();
    // getRecipeThumbnail();
    for(let i = 0; i< recipes.length; i++){
        <DataSetResults/>
        returnValue.push(<Build idx={i}/>)
    }
    return (
        returnValue
    )

}

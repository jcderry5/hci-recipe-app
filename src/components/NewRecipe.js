import React from 'react'
import '../App.css';
import DisplayRecipeResults from './DisplayRecipeResults'

export default function NewRecipe() {
    return (
        <div>
            {stepsHeader()}
        <div/>
        
        <div class="container text-center">
            <   DisplayRecipeResults/>
        </div>
        </div>
    )   
}

function stepsHeader(){
    return(
        <div class = "steps-header">
            <button class = 'stepsButton'>
                1
            </button>
            <button class = 'stepsButton'>
                2
            </button>
            <button class = 'stepsButton'>
                3
            </button>
            <button class = 'stepsButton'>
                4
            </button>
        </div>
    )
}

function Import(){
    return(
        <div class = "import">
            <form>
                <input type = "text">

                </input>
            </form>
        </div>
    )
}
function Steps(){

}
function Ingrediants(){

}
function Finalize(){

}
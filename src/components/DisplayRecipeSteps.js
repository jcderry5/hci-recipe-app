import React from 'react'
import data from '../data.json'
import '../RecipeResults.css'
import selectedRecipe from './DisplayRecipeResults'


function DisplayRecipeSteps({ recipeIndex, recipeSteps, changeRecipeSteps}){

    let results = extractRecipeSteps({recipeIndex, recipeSteps, changeRecipeSteps})
    // const [addStage, changeAddStage] = useState(false);

    //here is where the code to pass idx back and forth goes
    return (
        <div>
            {results}
            {/* {AddButton()} */}
        </div>
    )

    function extractRecipeSteps({recipeIndex, recipeSteps, changeRecipeSteps}){

        // let steps_data = data.results[0].recipes[recipeIndex].instructions;
        // let amtSteps = steps_data.length
        // console.log(steps_data)
        const returnValue = [];
        
        returnValue.push(<Title/>)
        for(let i = 0; i< recipeSteps.length; i++){
            returnValue.push(<GenerateRecipeSteps recipeIndex={recipeIndex} num={i} recipeSteps={recipeSteps} changeRecipeSteps={changeRecipeSteps}/>)
        }
        return (
            returnValue
        )
    }

    function Title() {
        return (
            <div class='row'>
                <div class="title">
                    Steps:
                </div>
            </div>
        )
    }

    function AddButton(num, changeRecipeSteps) {
        return (
            <div class="row justify-content-center">
                <button type="button" class="step-butt" onClick={(showForm(num={num}, changeRecipeSteps={changeRecipeSteps}))}>
                    {/* <button type = "button">
                        +
                    </button> */}
                    +
                </button>
                <form id="formElement" style="display: none;">

                </form>
            </div>
        )
    }

    function showForm(num, recipeSteps, changeRecipeSteps){
        // let arr = recipeSteps
        let form = document.getElementById('formElement')
        // form.style.display = "block"
    }        
    



    function GenerateRecipeSteps({recipeIndex, num, recipeSteps, changeRecipeSteps}){
        // let step = data.results[0].recipes[recipeIndex].instructions[num].display_text
        let step = recipeSteps[num]
        
        let punctuation = ". "
        return (
            <div class="row justify-content-center">
                <div class="steps">
                    {num}
                    {punctuation}
                    {step}
                    
                </div>
                {AddButton(num={num}, recipeSteps={recipeSteps}, changeRecipeSteps={changeRecipeSteps})}
            </div>
        )
    }
    
}
export default DisplayRecipeSteps
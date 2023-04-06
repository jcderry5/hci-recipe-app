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
        let addbutton = "addbutton" + num

        return (
            <div class="row justify-content-center">
                <button type="button" class="step-butt" onClick={showForm} id = "addbutton">
                    {/* <button type = "button">
                        +
                    </button> */}
                    +
                </button>
                <form id="formElement" style={{display: 'none'}}>
                    <input type="text" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

    function showForm(event) {
        // let arr = recipeSteps
        let form = event.target.parentElement.children[1];
        console.log("gets into showForm")
        form.style.display = "block"
        console.log(form.style.display)
        
        let ab = document.getElementById('addbutton')
        console.log(ab)

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
import React, { useRef } from 'react'
import data from '../data.json'
import { useAuth } from '../contexts/AuthContext';
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

    /**
     * When the 'submit' button for a new step is pressed, this handles adding
     * the recipe step to the list.
     */
    function handleRecipeStepSubmit(e, {num, recipeSteps, changeRecipeSteps, submitRef}) {
        e.preventDefault();
        // submitRef.current.value contains the contents of the new step to add.
        const newRecipeSteps = [];
        for (let i = 0; i < recipeSteps.length; i++) {
            newRecipeSteps.push(recipeSteps[i]);
            if (i === num) {
                // At num, insert the new recipe step.
                newRecipeSteps.push(submitRef.current.value);
            }
        }

        // Set the recipe state to include the newly added steps
        changeRecipeSteps(newRecipeSteps);
    }

    function AddButton({num, recipeSteps, changeRecipeSteps}) {
        // The ref that will contain each form's input string
        const submitRef = useRef();

        return (
            <div class="row justify-content-center">
                <button type="button" class="step-butt" onClick={showForm} id = "addbutton">
                    {/* <button type = "button">
                        +
                    </button> */}
                    +
                </button>
                <form id="formElement" style={{display: 'none'}} onSubmit={(e) => {handleRecipeStepSubmit(e, {num, recipeSteps, changeRecipeSteps, submitRef})}}>
                    <input type="text" ref={submitRef}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

    function showForm(event) {
        // Using the event origin, gets the form element from parent's children
        let form = event.target.parentElement.children[1];
        form.style.display = "block"
    }

    function GenerateRecipeSteps({recipeIndex, num, recipeSteps, changeRecipeSteps}){
        // let step = data.results[0].recipes[recipeIndex].instructions[num].display_text
        let step = recipeSteps[num]
        
        let punctuation = ". "
        return (
            <div class="row justify-content-center" key={num}>
                <div class="steps">
                    {num}
                    {punctuation}
                    {step}
                    
                </div>
                {AddButton({num, recipeSteps, changeRecipeSteps})}
            </div>
        )
    }
}

export default DisplayRecipeSteps
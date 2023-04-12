import React, { useRef } from 'react'
import data from '../data.json'
import { useAuth } from '../contexts/AuthContext';
import '../RecipeResults.css'
import selectedRecipe from './DisplayRecipeResults'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import styled from 'styled-components'

const DeleteButton = styled.div`
    background: red;
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding-top: 25px;
    padding-left: 5%;
    justify-content: center;
    border-radius: 15px;
    height: 80%;
`

function DisplayRecipeSteps({ recipeIndex, recipeSteps, changeRecipeSteps }) {
    let results = extractRecipeSteps({ recipeIndex, recipeSteps, changeRecipeSteps })
    // const [addStage, changeAddStage] = useState(false);

    //here is where the code to pass idx back and forth goes
    return (
        <div>
            {results}
            {
                <button type="button" class="step-butt" onClick={showForm} id = "addbutton">
                {/* <button type = "button">
                    +
                </button> */}
                +
                </button>
            }
        </div>
    )

    function extractRecipeSteps({ recipeIndex, recipeSteps, changeRecipeSteps }) {
        const returnValue = [];

        const trailingActions = () => (
            <TrailingActions>
                <SwipeAction onClick={() => console.info('swipe action triggered')}>
                    <DeleteButton>Delete</DeleteButton>
                </SwipeAction>
            </TrailingActions>
        );

        const RecipeStepItem = ({ recipeIndex, idx, recipeSteps, changeRecipeSteps }) => {
            return (
                <SwipeableListItem trailingActions={trailingActions()} onSwipeEnd={dragDirection => swipeEndActions({ dragDirection, idx, recipeSteps, changeRecipeSteps })}>
                    <GenerateRecipeSteps recipeIndex={recipeIndex} num={idx} recipeSteps={recipeSteps} changeRecipeSteps={changeRecipeSteps} />
                </SwipeableListItem>
            )
        }

        //returnValue.push(<Title />)
        for (let i = 0; i < recipeSteps.length; i++) {
            returnValue.push(<RecipeStepItem recipeIndex={recipeIndex} idx={i} recipeSteps={recipeSteps} changeRecipeSteps={changeRecipeSteps}></RecipeStepItem>)
        }

        return (
            <SwipeableList fullSwipe={true} threshold={3.0}>
                {returnValue}
            </SwipeableList>
        )
    }

    function swipeEndActions({ dragDirection, idx, recipeSteps, changeRecipeSteps }){
        const tempSteps = recipeSteps
        tempSteps.splice(idx, 1)
        changeRecipeSteps([...tempSteps])
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
    function handleRecipeStepSubmit(e, { num, recipeSteps, changeRecipeSteps, submitRef }) {
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

    function AddButton({ num, recipeSteps, changeRecipeSteps }) {
        // The ref that will contain each form's input string
        const submitRef = useRef();

        return (
            <div class="row justify-content-center">
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

    function GenerateRecipeSteps({ recipeIndex, num, recipeSteps, changeRecipeSteps }) {
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
                {AddButton({ num, recipeSteps, changeRecipeSteps })}
            </div>
        )
    }
}

export default DisplayRecipeSteps
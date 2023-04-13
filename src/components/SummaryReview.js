import React, { useEffect } from 'react'
import data from '../data.json';
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { database } from '../firebase';
import { update, ref } from "firebase/database";
import { useAuth } from '../contexts/AuthContext';
import DisplayExistingRecipe from './DisplayExistingRecipe';
import '../RecipeResults.css';
import { Link, useNavigate } from "react-router-dom"

const SummaryReview = (props) => {
    const { user } = useAuth();
    const location = useLocation();
    console.log(location)
    console.log(location.state.idx)
    console.log(location.state.ingredients)
    console.log(location.state.theSteps)
    const summary = <DisplayExistingRecipe
        currentIngredients={location.state.ingredients} recipeSteps = {location.state.theSteps}
        recipeIndex={location.state.idx} user={location.state.user}/>
    return(<div>{summary}</div>)
}
export default SummaryReview
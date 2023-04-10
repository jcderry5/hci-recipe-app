import React, { useEffect } from 'react'
import data from '../data.json';
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { database } from '../firebase';
import { update, ref } from "firebase/database";
import { useAuth } from '../contexts/AuthContext';
import DisplayRecipeSummary from './DisplayRecipeSummary';
import '../RecipeResults.css';
import { Link, useNavigate } from "react-router-dom"
function SummaryReview() {
    const { user } = useAuth();
    useEffect(() => {
        // This useEffect should only render on changes to {user} state
        // Specifically, if a user exists (logged in) it will get recipes
        // getRecipeName();
    }, [user]);
    const {state} = useLocation();
    const { summary } = state; 
    
    return ({summary})
}
export default SummaryReview
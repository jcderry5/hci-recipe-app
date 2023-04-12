import React, { useRef, useState } from 'react'
import data from '../data.json'
import '../RecipeResults.css';
import { useAuth } from '../contexts/AuthContext';
// import changeState from "./NewRecipe"

function DisplayRecipeResults({ searchState, setRecipeIndex, changeStep, changeRecipeSteps, currentIngredients, changeCurrentIngredients}) {
	const { user } = useAuth();
	// useRef for searchText since it will constantly be updating
	//const searchText = useRef();
	//const [searchState, setSearchState] = useState("");
	// const handleSearchKeyDown = (event) => {
	// 	if (event.key === 'Enter') {
	// 		// force render by setting state of search text.
	// 		setSearchState(searchText.current.value);
	// 	}
	// };
	// getResponseData(searchText)
	// console.log(user)
	return (
		<div>
			< DataSetResults searchState={searchState} setRecipeIndex={setRecipeIndex} changeStep={changeStep} changeRecipeSteps={changeRecipeSteps} currentIngredients={currentIngredients} changeCurrentIngredients= {changeCurrentIngredients}/>
		</div>
	)
}

function getResponseData(searchText) {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '2620049abdmsh2d5507fea766061p13ed79jsnbe78905cb066',
			'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
		}
	};
	// TODO: Fix URL not sourcing properly
	let URL = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=' + searchText
	extractRecipeInfo()
	// TODO: Uncomment code when ready for fetching
	// fetch(URL, options)
	// .then(response => response.json())
	// 	.then(response => console.log(response))
	// 	.then(respone => extractRecipeInfo(response))
	// .catch(err => console.error(err));
}

// TODO: add a turn jsonFile into response and add 'response' to param
function extractRecipeInfo() {
	// Possible variables to use
	let name = data.results[0].recipes[0].name
	let instructions = data.results[0].recipes[0].instructions
	let userRatings = data.results[0].recipes[0].user_ratings.score
	let id = data.results[0].recipes[0].id
	let thumbnailURL = data.results[0].recipes[0].thumbnail_url
	let originalURL = data.results[0].recipes[0].original_video_url
	//TODO: Fetch from recipes/get-more-info using id
}

function DataSetResults({ searchState, setRecipeIndex, changeStep, changeRecipeSteps, currentIngredients, changeCurrentIngredients }) {
	extractRecipeInfo()
	const returnValue = [];
	for (let i = 0; i < data.results[0].recipes.length; i++) {
		if (searchState === "" || data.results[0].recipes[i].name.toLowerCase().includes(searchState)) {
			returnValue.push(<RecipeResult idx={i} setRecipeIndex={setRecipeIndex} changeStep={changeStep} changeRecipeSteps={changeRecipeSteps} currentIngredients={currentIngredients} changeCurrentIngredients= {changeCurrentIngredients}/>)
		}
	}
	return returnValue;
}

function handleRecipeChoice({idx, setRecipeIndex, changeStep, changeRecipeSteps, currentIngredients, changeCurrentIngredients}) {
	setRecipeIndex(idx);

	let amtSteps = data.results[0].recipes[idx].instructions.length

	let steps = []

	for(let i = 0; i<amtSteps; i++){
		steps.push(data.results[0].recipes[idx].instructions[i].display_text)
	}

	changeRecipeSteps(steps)

	changeStep(2);
	const allIngredients = data.results[0].recipes[idx].sections[0].components
	let ingredientArr = [];
	for (const currKey of Object.keys(allIngredients)) {
		const currValue = allIngredients[currKey];
		// changeCurrentIngredients(currArray => [...currArray, currValue])
		ingredientArr = [...ingredientArr, {
			ingredient: currValue.ingredient,
			measurements: currValue.measurements,
			raw_text: currValue.raw_text
		}];
	}
	changeCurrentIngredients(ingredientArr);
}

function RecipeResult({ idx, setRecipeIndex, changeStep, changeRecipeSteps, currentIngredients, changeCurrentIngredients }) {
	return (
		<div class="recipe-row">
			<button class="recipe-options-but" type="button" onClick={() => {handleRecipeChoice({idx, setRecipeIndex, changeStep, changeRecipeSteps, currentIngredients, changeCurrentIngredients})}}>
				<div class="row">
					<img class="recipe-options-img" src={data.results[0].recipes[idx].thumbnail_url}></img>
				</div>
				<div class="row">
					<div class="col-3 recipe-subtitles">
						Name:
					</div>
					<div class="col-9 truncate">
						{data.results[0].recipes[idx].name}
					</div>
				</div>
				<div class="row">
					<div class="col-6 recipe-subtitles">
						Recipe Steps:
					</div>
					<div class="col-6">
						{data.results[0].recipes[idx].instructions.length}
					</div>
				</div>
			</button>
			<div class="row">
				<a class="recipe-subtitles truncate-url" href={data.results[0].recipes[idx].original_video_url}> OG Recipe URL</a>
			</div>
			{/* data.results[0].recipes[0].instructions.count */}
		</div>
	)
}

export default DisplayRecipeResults

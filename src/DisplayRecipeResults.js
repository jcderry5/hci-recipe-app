import React from 'react'
import axios from 'axios'
import data from './data.json'



function DisplayRecipeResults() {
	const searchText = "Burger"

	getResponseData(searchText)

	return (
		<h1>
			Where does this appear?
		</h1>
	)
}

function getResponseData(searchText) {

	console.log("Inside the getResponseData function")
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '2620049abdmsh2d5507fea766061p13ed79jsnbe78905cb066',
			'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
		}
	};

	// TODO: Fix URL not sourcing properly
	let URL = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=' + searchText
	console.log(URL)
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
	console.log("Inside extract")
	console.log(data.results[0].recipes[1])

	// Possible variables to use
	let name = data.results[0].recipes[0].name
	let instructions = data.results[0].recipes[0].instructions
	let userRatings = data.results[0].recipes[0].user_ratings.score
	let id = data.results[0].recipes[0].id
	//TODO: Fetch from recipes/get-more-info using id
}

export default DisplayRecipeResults
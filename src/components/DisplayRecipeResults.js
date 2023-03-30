import React from 'react'
import data from '../data.json'
import '../RecipeResults.css';


function DisplayRecipeResults() {
	const searchText = "Burger"

	// getResponseData(searchText)

	return (
		< DataSetResults />
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
	let thumbnailURL = data.results[0].recipes[0].thumbnail_url
	let originalURL = data.results[0].recipes[0].original_video_url
	console.log(name)
	console.log(instructions)
	console.log(thumbnailURL)
	console.log(originalURL)
	//TODO: Fetch from recipes/get-more-info using id

}

function DataSetResults() {
	extractRecipeInfo()
	const returnValue = [];
    for (let i = 0; i < 5; i++) {
      returnValue.push(<RecipeResult idx={i} />)
	}
    return returnValue
}

function RecipeResult({ idx }) {
	return (
		<div class="row recipe-row">
			<div class="row">
				<img src={data.results[0].recipes[idx].thumbnail_url}></img>
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
			
			<div class="row">
				<a class= "recipe-subtitles truncate" href={data.results[0].recipes[idx].original_video_url}> OG Recipe URL</a>
			</div>
			
				{/* data.results[0].recipes[0].instructions.count */}
			
		</div>
	)
}

export default DisplayRecipeResults
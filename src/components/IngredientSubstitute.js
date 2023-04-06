import React, { useRef, useState } from 'react'


const getIngredientData = function (ingredientName) {
	let ingredientString = getIngredientName(ingredientName)
	let encodedIngredient = encodeURI(ingredientString)
	// let URL = 'https://api.spoonacular.com/food/ingredients/substitutes?apiKey=14642766b5284fb08af1d8eb4aa030ac&ingredientName=butter'
	let URL = 'https://api.spoonacular.com/food/ingredients/substitutes?apiKey=14642766b5284fb08af1d8eb4aa030ac&ingredientName=' + encodedIngredient
	alert("You are about to make a fetch to the API")

	var result = "Here are possible substitutions:\n"
	fetch(URL)
		.then(response => response.json())
		.then(response => {
			if (response.status === 'failure') {
				console.log("ERROR!!!")
				console.log(response)
				console.log(ingredientString)
				console.log(encodedIngredient)
				alert("This ingredient cannot be substituted")
			} else {
				console.log(response)
				console.log(response.substitutes)
				for (const currSub of response.substitutes) {
					result += (currSub + '\n')
				}
				alert(result)
			}
		})
}

function getIngredientName(ingredientObj){
	if (typeof ingredientObj.name.name === 'undefined') {
		return ingredientObj.name
	} else {
		return ingredientObj.name.name
	}
}
export default getIngredientData
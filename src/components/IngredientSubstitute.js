import React, { useRef, useState } from 'react'


const getIngredientData = function(ingredientName) {
	// TODO: Account for ingredients with spaces
	console.log("I sent them the name: " + ingredientName.ingredient_a)
	// let URL = 'https://api.spoonacular.com/food/ingredients/substitutes?apiKey=14642766b5284fb08af1d8eb4aa030ac&ingredientName=butter'
	let URL = 'https://api.spoonacular.com/food/ingredients/substitutes?apiKey=14642766b5284fb08af1d8eb4aa030ac&ingredientName=' + ingredientName.ingredient_a

	alert("You are about to make a fetch to the API")

	var result = "Here are possible substitutions:\n"
	fetch(URL)
		.then(response => response.json())
		.then(response => {
			for (const currSub of response.substitutes) {
				result += (currSub + '\n')
			}
			alert(result)
		})
}

export default getIngredientData
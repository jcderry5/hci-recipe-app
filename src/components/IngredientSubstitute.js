import React, { useRef, useState } from 'react'


const getIngredientData = function(ingredientName) {
	let ingredientToSub = encodeURI(ingredientName.ingredient_a)
	// let URL = 'https://api.spoonacular.com/food/ingredients/substitutes?apiKey=14642766b5284fb08af1d8eb4aa030ac&ingredientName=butter'
	let URL = 'https://api.spoonacular.com/food/ingredients/substitutes?apiKey=14642766b5284fb08af1d8eb4aa030ac&ingredientName=' + ingredientToSub

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
console.log('formApp')

let btnOk = document.querySelector('#submitButton')

let chmpText = document.querySelector('.form-control')
console.log(chmpText)

let checkboxes = document.querySelectorAll('input[type="checkbox"]')
console.log(checkboxes) // j'ai donc un array

let select  = document.querySelector('#ville')


let radios = document.querySelectorAll("input[type=\"radio\"]")
console.log(radios) // j'ai donc un array


btnOk.addEventListener('click',controlForm)


// select.value = "Villeurbanne"

function controlForm(){

	// afficher ce qu'il y a dans le champ text 
	// on passe par l'attribut value 
	let chpSaisie = chmpText.value
	let villeSelected = select.value
	console.log(villeSelected)
	if(villeSelected != ''){
		console.log('une ville a été choisie ',villeSelected)
	}	

	if(checkboxes[0].checked){
		console.log('conditions acceptées')
	}
	if(checkboxes[1].checked){
		console.log('Abo Newsletter')
	}

	if(radios[0].checked){
		console.log('Credit Card!')
	}
	
}




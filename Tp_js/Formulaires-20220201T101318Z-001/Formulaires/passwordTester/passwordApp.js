console.log('password App.js')

let pwd1 = document.querySelector('#password1')
let pwd2 = document.querySelector('#password2')
let spanInfo = document.querySelector('div >p >span')
let pBar = document.querySelector('.progress-bar')
let okBtn = document.querySelector('#submitButton')

okBtn.disabled= true

spanInfo.textContent='faible'

let pwdStrenght = 'faible'

//
/*
 de 0 à 4 : faible
 de 5 à 8 : moyen 
 >8       : fort
 */ 

pwd1.addEventListener('keyup',checkPassword)
okBtn.addEventListener('click',submitForm)

function submitForm(){

	if(pwd2.value.length>0){
		if(pwd1.value===pwd2.value){
		// ok pour l'envoie
		}else{
			// afficher erreur avant envoie
		}
	}
	console.log(checkPassword)
	

}





function checkPassword(){
	let pwdL = pwd1.value.length

	if(pwdL>0 && pwdL<5){
		// faible
		pBar.style.width = "10%"
		pBar.style.backgroundColor='red'
		spanInfo.textContent='faible'
		pwdStrenght = 'faible'
		okBtn.disabled= true
	}
	if(pwdL>=5 && pwdL<=8){
		// moyen 
		spanInfo.textContent='modéré'
		pBar.style.backgroundColor='yellow'
		pBar.style.width = "50%"
		pwdStrenght = 'modéré'
		okBtn.disabled= false
	}
	if(pwdL>8){
		//fort
		spanInfo.textContent='fort'
		pBar.style.backgroundColor='lime'
		pBar.style.width = "100%"
		pwdStrenght = 'fort'
		okBtn.disabled= false
	}


	console.log(pwd1.value,pwdL)

}

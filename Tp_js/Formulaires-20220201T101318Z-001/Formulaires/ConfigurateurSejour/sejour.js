console.log('sejour.js')

let typeSelect = document.querySelector('#type')
let previewImg = document.querySelector('.card-img-top')
let showPrice  = document.querySelector('.card-body>h6.card-title')

let allChck  = document.querySelectorAll('input[type="checkbox"]')
let allRadios = document.querySelectorAll('input[type="radio"]')

let okBtn = document.querySelector('#submitButton')

typeSelect.addEventListener('change',updateImage)

okBtn.addEventListener('click',calcPrixSejour)

function updateImage(){
  let typeHebergement= typeSelect.value
  previewImg.src = "./img/"+typeHebergement+".jpg"

  let prixDeBase = 0

  if(typeHebergement=='tente'){
     prixDeBase = 10
  }
  if(typeHebergement=='toile'){
     prixDeBase = 50
  }
  if(typeHebergement=='pierre'){
     prixDeBase = 100
  }
  // showPrice.textContent = prixDeBase
  return prixDeBase
}


function calcPrixSejour(){

    // recupère le prix de base 

    let prixDeBase = updateImage()
    if(prixDeBase==0){
      console.warn('merci de choisir un type d\'hebergement')
    }

    // calcul les options du séjour 
    let totalOptions = 0

    if(allChck[0].checked){
       totalOptions += 30
    }
    if(allChck[1].checked){
       totalOptions += 5
    }
    
    // petit dej ou pas 
    let totalBreakfast = 0

    if(allRadios[0].checked){
        totalBreakfast=10 
    }
    console.log('prix de base ', prixDeBase)
    console.log('total options & breakfast ', totalOptions+totalBreakfast)


    showPrice.textContent = prixDeBase+totalOptions+totalBreakfast+'€'

}
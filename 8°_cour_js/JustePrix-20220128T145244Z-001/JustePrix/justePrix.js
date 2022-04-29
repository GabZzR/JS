const btn = document.querySelector('.btn-primary')
const chmpTxt = document.querySelector('#prix')
const erreurType = document.querySelector('.text-danger')

const divParentResult = document.querySelector('#instructions')

let nbAlea = getRandomInt(100)
console.log('nbAlea', nbAlea);

function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
}

btn.addEventListener('click', function() {
    let valeurSaisie = chmpTxt.value
    console.log('click deviner')
    console.log(valeurSaisie)

    taGrandMere()

})

erreurType.style.display = 'none'

function taGrandMere() {
    let laDiv = document.createElement('div')
    if (chmpTxt.value == nbAlea) {
        laDiv.textContent = 'Gagne'
        laDiv.classList.add('fini', 'alert')
        divParentResult.prepend(laDiv)
    }
    if (chmpTxt.value > nbAlea) {
        console.log('Moins');
    }
    if (chmpTxt.value < nbAlea) {
        console.log('Plus');
    }
}
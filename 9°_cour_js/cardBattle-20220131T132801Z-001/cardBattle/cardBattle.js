console.log('cardBattle')

let life = document.querySelector('lifeLevel')
let lifeProgress = document.querySelector('.life_progress')
let btn = document.querySelectorAll('button')
let nbAlea = getRandomInt(100)



function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
}

function lifeValue(nb) {
    console.log(nb);
    lifeProgress.value = nb
}



for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function() {
        lifeValue(getRandomInt(100))
        console.log('ok');
    })
}



/*
for (let i = 0; i >= lifeValue; i++) {
    if (lifeValue = nbAlea) {
        break;
    else lifeValue.value = nbAlea;
    }
}
*/
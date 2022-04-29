console.log('rockPaper.js');

let lesBtn = document.querySelectorAll(".cardBtn")

let choices = ['Pierre', 'Feuille', 'Ciseau']

let ordiJoue = document.querySelector('.computer')

let result = document.querySelector('.result')

lesBtn[0].addEventListener('click', clickOnPierre)
lesBtn[1].addEventListener('click', clickOnFeuille)
lesBtn[2].addEventListener('click', clickOnCiseau)

function clickOnPierre() {
    console.log('Pierre !')
    let tourOrdi = getRandomInt(3)
    ordiJoue.textContent = ('Ordi joue : ' + choices[tourOrdi])
    console.log('Ordi joue :', choices[tourOrdi])

    if (choices[tourOrdi] == 'Pierre') {
        console.log('égalité')
        result.textContent = ('Egalité ! Recommence. 😉')
        result.style.backgroundColor = 'orange'
    }
    if (choices[tourOrdi] == 'Feuille') {
        console.log('perdu')
        result.textContent = ('Perdu! 😥')
        result.style.backgroundColor = 'red'
    }
    if (choices[tourOrdi] == 'Ciseau') {
        console.log('gagné')
        result.textContent = ('Gagné! Bien Joué! 😁')
        result.style.backgroundColor = 'greenyellow'
    }
}

function clickOnFeuille() {
    console.log('Feuille !')
    let tourOrdi = getRandomInt(3)
    ordiJoue.textContent = ('Ordi joue : ' + choices[tourOrdi])
    console.log('ordi joue :', choices[tourOrdi])

    if (choices[tourOrdi] == 'Pierre') {
        console.log('gagné')
        result.textContent = ('Gagné! Bien Joué! 😁')
        result.style.backgroundColor = 'greenyellow'
    }
    if (choices[tourOrdi] == 'Feuille') {
        console.log('égalité')
        result.textContent = ('Egalité ! Recommence. 😉')
        result.style.backgroundColor = 'orange'
    }
    if (choices[tourOrdi] == 'Ciseau') {
        console.log('perdu')
        result.textContent = ('Perdu! 😥')
        result.style.backgroundColor = 'red'
    }
}

function clickOnCiseau() {
    console.log('Ciseau !')
    let tourOrdi = getRandomInt(3)
    ordiJoue.textContent = ('Ordi joue : ' + choices[tourOrdi])
    console.log('ordi joue :', choices[tourOrdi])

    if (choices[tourOrdi] == 'Pierre') {
        console.log('perdu')
        result.textContent = ('Perdu! 😥')
        result.style.backgroundColor = 'red'
    }
    if (choices[tourOrdi] == 'Feuille') {
        console.log('gagné')
        result.textContent = ('Gagné! Bien Joué! 😁')
        result.style.backgroundColor = 'greenyellow'
    }
    if (choices[tourOrdi] == 'Ciseau') {
        console.log('égalié')
        result.textContent = ('Egalité ! Recommence. 😉')
        result.style.backgroundColor = 'orange'
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
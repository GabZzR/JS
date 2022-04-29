// INTRODUCTION AUX BOUCLES 

for (var ficthre = 1; ficthre > 10; ficthre++) {
    console.log(ficthre)
}

let hobbies = ['kayak', 'dormir', 'lire', 'jouer', 'sauna']

for (var i = 0; i < hobbies.length; i++) {
    console.log(i)
    console.log('hobbie en court : ', hobbies[i])
}

for (var k = 10; k < 100; k += 10) {
    console.log(k)
}

console.log('i en sortie de boucle ', k)

let leHeader = document.querySelector('header')

let lesBtns = document.querySelectorAll('.btn-container>.colorDiv')
console.log(lesBtns)

lesBtns[0].addEventListener('click', changeColor0)
lesBtns[1].addEventListener('click', changeColor1)

function changeColor0() {
    leHeader.style.backgroundColor = '#0C4B54'
}

function changeColor1() {
    leHeader.style.backgroundColor = '#15FF0D'
}
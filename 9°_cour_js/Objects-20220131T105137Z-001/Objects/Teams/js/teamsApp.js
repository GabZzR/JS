console.log('teamsApp')

// remplacer dynamiquement les infos de la card avec
// les infos de l'objet oneDev si dessous :

const oneDev = {
    'firstName': 'Menuk',
    'lastName': 'Efrim',
    'verbatim': 'Behaviour-driven Self-driving Conference Calls',
    'jobTitle': 'Full Stack 🚀',
    'profilePic': 'profil01.jpg',
    'stack': [{
            'label': 'VueJs',
            'level': 3
        },
        {
            'label': 'php',
            'level': 5
        }
    ]
}


let img = document.querySelector('.card-image')
let job = document.querySelector('.job')
let names = document.querySelector('.card-text > h2')
let paragraphe = document.querySelector('.card-text > p')
let BGC = document.querySelector('.card-stats')



img = oneDev.profilePic
job.textContent = oneDev.jobTitle
names.textContent = oneDev.firstName + ' ' + oneDev.lastName
paragraphe.textContent = oneDev.verbatim
BGC.style.backgroundColor = rgb(7, 143, 255)


const starlevels = document.querySelectorAll('.stat>.level')
console.log(starlevels)

starlevels[0].textContent + ''
starlevels[1].textContent + ''

starlevels[0].textContent = ''
starlevels[1].textContent = ''


for (var i = 1; i <= oneDev.stack[0].level; i++) {
    starlevels[0].textContent = starlevels[0].textContent + '🧿'
}

for (var i = 1; i <= oneDev.stack[1].level; i++) {
    starlevels[1].textContent = starlevels[1].textContent + '🧿'
}




// ! Attention le nombre d'étoiles doit bien correspondre au level

// si vous êtes en avance :
// Regardez un peu l'object destructuring ^^
// > https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
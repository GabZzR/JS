let monImage = document.getElementById("monImage")
monImage.addEventListener("click", testEvent)
monImage.addEventListener("mouseenter", testHover)

function testEvent() {
    console.log("c'est cliqué!!")
}

function testHover() {
    console.log("repérer!!")
}

let prebom = 'Bob'
let hobbies = ["vélo", "kayak", "lecture", "dormir"]
let nbHobbies = hobbies.length

/*console.log(nbHobbies)
console.log(hobbies[2])
console.log(hobbies[hobbies.length - 1])

hobbies[3] = 'rester actif'
console.log(hobbies)
console.table(hobbies)

hobbies.pop()
console.log("après POP")
console.log(hobbies)

hobbies.length = 0
console.log(hobbies)

console.log(hobbies.join("🐱‍👤"))

let users = "Pi chun;Bernard;Coraline;Lucas"

let arrayUsers = users.split(';')

console.log(arrayUsers)*/

let codeSaisie = 'JS'

let codePromos = ['CCI', 'EKLYA', 'YNOV']
codePromos.push('JS')
console.log(codePromos)
console.log(codePromos.includes(codeSaisie))

if (codePromos.includes(codeSaisie)) {

}

function supprimer(leArray)
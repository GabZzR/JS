console.log('Hey ! I am here !');
/*
let budget = document.querySelector('.full-input.budget-field>input')
let depense = document.querySelector('.full-input.depense-field')
let montant = document.querySelector('.full-input.montant-field')
let btnAdd = document.querySelector('.add-btn')

let depenses = document.querySelector('.right-expenses')
let btnReset = document.querySelector('.reset-btn')

let income = document.querySelector('.income')
let expense = document.querySelector('.expense')
let balance = document.querySelector('.balance')
*/

const budgetInput = document.querySelector('#budget')
const budgetInfo = document.querySelector('.income >span')

budgetInput.addEventListener('focusout', updateBudget)

function updateBudget() {
    const budget = budgetInput.value
    budgetInfo.textContent = budget
}
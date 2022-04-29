console.log('budget')

const budgetInput = document.querySelector('#budget')

const budgetInfo = document.querySelector('.income >span')

const btnAdd = document.querySelector('.add-btn')

let budgetGlobal  = 0
let globalCounter = 0

let allDepenses = 0
let balance     = 0

budgetInput.addEventListener('focusout',()=>{
	budgetGlobal = budgetInput.value
	budgetInfo.textContent = budgetGlobal
})



btnAdd.addEventListener('click',()=>{

	const expense = document.querySelector('#depense').value
	const value   = document.querySelector('#montant').value
	addExpense(expense,value)


})



function updateExpense(expense){
	document.querySelector('.expense >span').textContent=expense
}

const balanceSpan = document.querySelector('.balance >span')

function updateBalance(balance){
	if(balance<0){
		balanceSpan.classList.add('negative-balance')
	}else{
		balanceSpan.classList.remove('negative-balance')
	}
	balanceSpan.textContent=balance
}


function addExpense(what,howMuch){

	let expenseItem = document.createElement('div')
	expenseItem.classList.add('expenses-item')
	let span = document.createElement('span')
	span.textContent = what+' '+howMuch
	expenseItem.append(span)

	document.querySelector('.expenses-list').append(expenseItem)
	updateGlobalInfos(howMuch)
}

function updateGlobalInfos(lastDepense){

	allDepenses+=+lastDepense
	balance = budgetGlobal-allDepenses

	updateExpense(allDepenses)
	updateBalance(balance)

}

document.querySelector('.reset-btn').addEventListener('click',flushEverything)

function flushEverything(){
	budgetInput.value = 0
	balance      = 0
	budgetGlobal = 0
	allDepenses  = 0
 	document.querySelector('#depense').value = ''
	document.querySelector('#montant').value=''
	budgetInfo.textContent = budgetGlobal
	updateExpense(0)
	updateBalance(0)
	let allItems = document.querySelectorAll('.expenses-item')
	for (let i = 0; i < allItems.length; i++) {
		allItems[i].remove()
	}



}

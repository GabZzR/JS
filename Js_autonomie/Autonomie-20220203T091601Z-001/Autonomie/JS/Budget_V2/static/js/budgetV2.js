console.log('budgetV2')

const budgetInput = document.querySelector('#budget')

const budgetInfo = document.querySelector('.income >span')

const btnAdd = document.querySelector('.add-btn')

let budgetGlobal  = 0
let globalCounter = 0

let allDepenses = 0
let balance     = 0


let depensesHistory = []

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
/*<button class="reset-btn">
							<i class="fa fa-eraser"></i>
						</button>*/

function addExpense(what,howMuch){

	let oneDepense = {
		'label':what,
		'value':howMuch
	}
	depensesHistory.push(oneDepense)
	updateExpenseList(depensesHistory)
	// updateGlobalInfos(depensesHistory)
}


function updateExpenseList(depensesHistory){

	deleteAllExpensesItems()

	for (let i = 0; i < depensesHistory.length; i++) {
		let oneDep = depensesHistory[i]

		let expenseItem = document.createElement('div')
		expenseItem.classList.add('expenses-item')
		let span = document.createElement('span')
		span.textContent = oneDep.label+' '+oneDep.value

		let btnDel = document.createElement('button')
		btnDel.classList.add('del-btn')
		btnDel.id = 'del'+i
		let icon = document.createElement('i')
		icon.classList.add('fa','fa-trash')
		btnDel.append(icon)
		btnDel.addEventListener('click',function(){		
			deleteOneDepense(this.id)
		})
		expenseItem.append(span)
		expenseItem.append(btnDel)
		document.querySelector('.expenses-list').append(expenseItem)
		

	}
	updateGlobalInfos(depensesHistory)

	


}



function deleteOneDepense(id){
	let btnId   = +id.substring(3,10)
	depensesHistory.splice(btnId,1)

	console.log(depensesHistory)
	updateExpenseList(depensesHistory)

	// let laLigne = document.querySelector('#'+id)
	console.log(btnId)

}

function updateGlobalInfos(depensesHistory){
	let allExp = 0
	for (let i = 0; i < depensesHistory.length; i++) {
		allExp+=+depensesHistory[i].value
	}
	balance = budgetGlobal-allExp
	updateExpense(allExp)
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
	deleteAllExpensesItems()

}

function deleteAllExpensesItems(){
	let allItems = document.querySelectorAll('.expenses-item')
	for (let i = 0; i < allItems.length; i++) {
		allItems[i].remove()
	}
}

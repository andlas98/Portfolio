let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
}

let addExpense = function(acc, amount){
    acc.expenses = acc.expenses + amount;
}

addExpense(myAccount, 2.50);
console.log(myAccount);
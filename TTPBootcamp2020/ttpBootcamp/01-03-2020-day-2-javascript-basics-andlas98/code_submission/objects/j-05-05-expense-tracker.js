let myAccount = {
    name: "Andrew Ohakam", 
    expenses: 0,
    income: 0
}
let addExpense = function(account, amount) {
    account.expenses - account.expenses + amount;
}

let addIncome = function(account, income){
    account.income = account.income = income;
}

let resetAccount = function (account){
    account.expenses = 0;
    account.income = 0;
}

let getAccSummary = function(account){
    let balance = account.income - account.expenses;
    return `Account for ${account.name} has $${balance}, $${account.income} in income.`
}

addIncome(myAccount, 2000);
addExpense(myAccount, 2.5);
addExpense(myAccount, 160);
console.log(getAccSummary(myAccount));
resetAccount(myAccount);
console.log(getAccSummary(myAccount));
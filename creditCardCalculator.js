const prompt = require("prompt-sync")()

function credit_limit_calculator() {
    const accountNumber = prompt("Enter your account number: ")
    const month_begining_balance = prompt("Enter balance at The beginning of the Month: ")
    const total_of_item_charged_this_month = prompt("Enter total amount of item purchase this month: ")
    const total_number_of_credit_applied = prompt("Enter total credit applied this month: ")
    const allowed_credit_limit = 10000;

    let newBalance = (month_begining_balance + total_of_item_charged_this_month) - total_number_of_credit_applied
    if (newBalance <  allowed_credit_limit) console.log("credit exceeded ")
    return "The Account Number with: "+ accountNumber + " \n new Account Balance; "+ newBalance;
}

console.log(credit_limit_calculator())
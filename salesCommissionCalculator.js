const prompt = require("prompt-sync")()
function sales_commission_calculator(){
    let total = 0.0;
    let percentage = 0.09
    const item = prompt("Enter number of item sold: ")
    for (let count = 0; count < item; count++) {
        const value = prompt("Enter item: "+ (count+1) + " price: ")
        const ans = parseInt(value);
        total = total+ans;

    }
    const grossPay = (total * percentage) + 200
    return "your week gross pay is: $ "+ parseInt(grossPay);
}

console.log(sales_commission_calculator())
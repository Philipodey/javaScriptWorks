const input = require("prompt-sync")()

function largest(){
    let counter =1 ; let largest = 0 ;
    for (let count = 0; count < 5; count++) {
        let number = input("Enter number "+ counter + " : ")
        let newNumber = parseInt(number)
        if (newNumber > largest) largest = number;
        counter+=1;
    }

    return "largest Number is: " + largest;
}
console.log(largest())
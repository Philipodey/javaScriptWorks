//  (Gas Mileage) Drivers are concerned with the mileage their automobiles get. One driver has
// kept track of several trips by recording the miles driven and gallons used for each tankful. Develop
// a JavaScript application that will input the miles driven and gallons used (both as integers) for each trip.
// The program should calculate and display the miles per gallon obtained for each trip and print the
// combined miles per gallon obtained for all trips up to this point. All averaging calculations should
// produce floating-point results. Use class Scanner and sentinel-controlled iteration to obtain the data
// from the user.

const prompt = require("prompt-syn")();

function gasMileage(){
    let mileage = 0;
    let  gallonUsed = 0;
    let mile_per_gallon_used = 0;
    let value = "";
    let count = 0;

    while (value!=="no"){
         mileage = prompt("Enter mileage: ")
         gallonUsed = prompt("Enter how many gallon Used in liters: ")
         mile_per_gallon_used = mileage/gallonUsed;
        console.log(mile_per_gallon_used)
        count = count+ 1;
        value = prompt("Press no to stop or yes to continue ");
    }
    return mile_per_gallon_used / count;

}

console.log(gasMileage())
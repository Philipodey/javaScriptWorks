const prompt = require("prompt-sync")()
function gasMileage(){
    let milesDriven = 0;
    let  gallonUsed = 0;
    let mile_per_gallon_used = 0;
    let value = "";
    let count = 0;

    while (value!=="no"){
         milesDriven = prompt("Enter the miles driven: ")
         gallonUsed = prompt("Enter how many gallon Used in liters: ")
         mile_per_gallon_used = milesDriven/gallonUsed;
        console.log(mile_per_gallon_used)
        count = count+ 1;
        value = prompt("Press no to stop or yes to continue ");
    }
    return mile_per_gallon_used / count;

}

console.log(gasMileage())
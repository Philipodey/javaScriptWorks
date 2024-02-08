const prompt = require("prompt-sync")()

function earningPercentage(number){
    if (number > 0 && number <= 30000)
        return number* 0.15
    else
        return  number * 0.20;
}
function taxCalculator(){
  let firstCitizen = prompt("Enter citizen name: ")
  const earning = prompt("How much is your annual earning ? :$ ")
    const newEarning = parseInt(earning)
    let percentage = earningPercentage(newEarning);
    return "Hello "+ firstCitizen + "\nyour annual Tax is: "+ percentage

}
function threeCitizens(){
    let citizenOne = taxCalculator();
    let citizenTwo = taxCalculator();
    let citizenThree = taxCalculator();
    return citizenOne + "\n " + citizenTwo + "\n " + citizenThree
}

console.log(threeCitizens())
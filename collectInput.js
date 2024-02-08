const prompt = require("prompt-sync")();

const firstName = prompt("What is your name: ")
console.log(firstName)

const sum = (a,b) =>{
    let answer = a+b;
    return answer;
}

module.exports = {sum}
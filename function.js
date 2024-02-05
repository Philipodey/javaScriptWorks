function arr(){

}

let arrowFunction = function(){

}


let birthYears = [2000, 1972, 1999, 2001]
let currentYear = 2024;

const getResultArray = (birthYears, func) =>{
    const result = [];
    for(let birthYear of birthYears){
        let value = func(birthYear);
        result.push(value)
    }
    return result
}

const calculateAge = (birthYear) => {
    let age = currentYear - birthYear;
    return age
}
let arrayResult = getResultArray(birthYears, calculateAge)
console.log(arrayResult)


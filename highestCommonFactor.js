let array = [8,4,12,2];
let indexOne = 0;



const getHighestCommonFactor = (array, func) =>{
    let newArray = [];
    for (let count = 0; count < largestOf;) {
        for (let counter = 0; counter < array.length; counter++) {
            if(array[counter] % count === 0){
                indexOne +=1;
            } 
        }
        if(count === indexOne){
            newArray.push(indexOne)
            indexOne = 0;
            let dividedNumbersByCount = func(array, count)
        }
        else{
            indexOne = 0;
            count += 1;
        }
    }
    return newArray
};

const largestOf = (array) => {
    let element = array[0];
    for (let index = 0; index < array.length; index++) {
        if(array[index] > element){
            element = array[index];
        } 
    }
    return element
}

const numberDivided = (array, count) => {
    let dividedNumbers = 0;
    for (let index = 0; index < array.length; index++) {
        array[index] /= count;
    }
}

let highestCommonFactor = getHighestCommonFactor(array, numberDivided);
console.log(highestCommonFactor)


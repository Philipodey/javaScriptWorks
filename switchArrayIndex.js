
const switchIndexElement = (arr) =>{
    let count = 0;
    let newArray = [[],[]]
    for(let index1 = 0; index1 < arr.lenght; index1 +=1){
        for( let index2 = 0; index2 < arr[index1].lenght; index2 += 1){
            if(index1 === count && index2 === count){ 
                newArray[count][index2] =  arr[index1][index2];
                count += 1;
                if(count === arr[index1].lenght || count === arr[index1][index2]){
                    count = 0;
                }
            }
        }
    }
    return newArray;
}

module.exports = {switchIndexElement}
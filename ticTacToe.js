let length = 0;
let width = 0;

let obj = [
   [ {row:0, col: 0, value : 'x'},
    {row:0, col: 1, value : 'x'},
    {row:0, col: 2, value :'o'}],
    [{row:1, col: 0, value: 'o'},
    {row:1, col: 1,value: " "},
    {row:1, col: 2, value: "x"}],
    [{row:2, col: 0, value: "x"},
    {row:2, col: 1, value: "o"},
    {row:2, col: 2, value: "o"}]
];

let arr =[[],[],[]]

const arrayObject = (obj, func) => {
     
    
    for(let count = 0; count < obj.length; count++){
       for(let counter = 0; counter< obj[count].length; counter++){
            if(count === 0 && counter === 0){
                arr[count][counter] = obj[count][counter]["value"];
            }
            if(count === 0 && counter === 1){
                arr[count][counter] = obj[count][counter]["value"];
              
            }
            if(count === 0 && counter === 2){ i
                arr[count][counter] = obj[count][counter]["value"];
              
            }
            if(count === 1 && counter === 0){
                arr[count][counter] = obj[count][counter]["value"];
              
            }
            if(count === 1 && counter === 1){
                arr[count][counter] = "";
            }
            if(count === 1 && counter === 2){
                arr[count][counter] = obj[count][counter]["value"];
            }
            if(count === 2 && counter === 0){
                arr[count][counter] = obj[count][counter]["value"];
            }
            if(count === 2 && counter === 1){
                arr[count][counter] = obj[count][counter]["value"]; 
            }
            if(count === 2 && counter === 2){
                arr[count][counter] = obj[count][counter]["value"];
                
            }  
       }
    }
    console.log(arr)
}

console.log(arrayObject(obj))



// let printObject = getArrayObject(length, width)



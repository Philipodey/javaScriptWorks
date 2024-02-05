let array = [1,2,3,4]

 for(const count in array){
    console.log(count)
}

for(const count of array){
    console.log(count)
}

let user = {
    firstName : "Philip",
    lastName : "Obika",
    age : 23
} 

for (const value in user){
    console.log(value)
}

for (const value in user){
    let key = user[value]
    console.log(key)
}

const arr = [1,3,4,5];
newArray = []
arr.forEach((x)=>  {
    if(x % 2 === 0 ){
        console.log(x)
    }
})

arr.forEach((x)=>  {
 
        let ans = x* 3;
    newArray.push(ans); 
    
});

console.log(newArray)

const words = ['spray', 'elite', 'exurberant','destruction', 'present'];
const res = words.filter((word) => word.length < 6);

console.log(res);

const map1 = arr.map((x) => x *2);

console.log(map1);

let arrays = [2,3,5,6,7]

const squareOfNumbers = arrays.map((num) => num * num);
console.log(squareOfNumbers)
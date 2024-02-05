let arr = [["Car", 2000],
          ["Truck", 500],
          ["Bike", 6500]]

let car = arr[0][0]
console.log(car)

arr.push(["Scooter", 1500])

console.log(arr)

let carIndex = arr[0]
let carIndexAdd = carIndex.push(["Toyota", "Nissan"]);

console.log(arr)
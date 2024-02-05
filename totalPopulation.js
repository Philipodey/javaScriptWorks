

let object1 = {
    name : "Ethopia",
    population : 4112,
    temperature : 45,
    currency : "eup"

}


let object2 = {
    name : "Canada",
    population : 1209,
    temperature : 45,
    currency : "CANUSD"

}

let object3 = {
    name : "Equitoria Guinea",
    population : 512,
    temperature : 45,
    currency : "eup"

}


let object4 = {
    name : "Cote 'd voire",
    population : 2512,
    temperature : 45,
    currency : "franc"

}


let object5 = {
    name : "Cameroon",
    population : 5012,
    temperature : 45,
    currency : "eup"

}


let object6 = {
    name : "Guinea bissau",
    population : 2512,
    temperature : 45,
    currency : "eup"

}

let object7 = {
    name : "Cape verde",
    population : 250,
    temperature : 45,
    currency : "eup"

}

let object8 = {
    name : "Ghana",
    population : 2150,
    temperature : 45,
    currency : "cedis"

}

let object9 = {
    name : "Togo",
    population : 50,
    temperature : 45,
    currency : "franc"

}

let objectArray = [[null,object1, object2, object3],
                   [object4, object5, object6, null],
                   [object7, null, object8, object9]
]


let addPopulation = 0

for (const key in objectArray) {
    for (const key2  in key) {
        if(objectArray[key] == null){
            continue
        }
        addPopulation += [key][key2][`population`] 
    }
    
}
console.log(addPopulation)
let left_operand = 12;
let right_operand = 23;
// console.log(typeof operator)
let operators = "%"

 operators = "-"? console.log(left_operand + right_operand):
 "-" ? console.log(left_operand - right_operand) 
: "*"?console.log(left_operand + right_operand)? "/": 
console.log(left_operand + right_operand): console.log(left_operand % right_operand)


let operator = "-";
switch(operator){
    case "+" :
         console.log(left_operand+right_operand);
          break;
    case "-" : console.log(left_operand-right_operand); break;
    case "*" : console.log(left_operand*right_operand); break;
    case "/" : console.log(left_operand/right_operand); break;
    case "%" : console.log(left_operand%right_operand); break;
}

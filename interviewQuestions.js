function question(role) {
    switch (role){
        case 'Manager' :
            return function(role){
                return `Hi ${role}, what is the core value of the company?`;
            };
        case 'native':
            return function(role){
                return`Hi ${role}, what is your best programming language?`;
            };
        case 'elders':
            return function(role){
                return `Hi ${role}, do you love your job?`;
            };
        default :
            return ;
    }
}


let answer = question('Manager');
console.log(answer);
console.log(answer('manager'));
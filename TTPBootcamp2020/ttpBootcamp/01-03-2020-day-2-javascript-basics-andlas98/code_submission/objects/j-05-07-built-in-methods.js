let name = 'Andrew Ohakam';

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());

let password = "G1ngL0rem!";
console.log(password.includes('password'));

// Trimming

console.log(name.trim());

// Challenge

let isPassValid = function(password){
    return password.length > 0 && !password.includes('password');
}

console.log(isPassValid("GingLorem"));
console.log(isPassValid("passworddd"));
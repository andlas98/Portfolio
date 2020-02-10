let greetUser = function(){
    console.log('Welcome user!')
}

greetUser();
greetUser();

let square = function (num){
    let result = num * num;
    return result;
}

let value = square(3);
let otherval = square(3);

console.log(value);
console.log(otherval);

// CHALLENGE

let convertFahrToCelsius = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

let tempOne = convertFahrToCelsius(32);

console.log(tempOne);
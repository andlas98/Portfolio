let isAccountLocked = false;
let userRole = 'admin';

if (isAccountLocked){
    console.log("The account is locked");
} 
else if (userRole === 'admin'){
    console.log("Hello, Admin");
}else {
    console.log('Welcome!');
}

// CHALLENGE AREA

let temp = 45;
if (temp <= 32){
    console.log("It's freezing outside!");
}
else if (temp >= 110){
    console.log("It is hot outside!");
}
else{
    console.log("Go for it! It is pretty nice");
}
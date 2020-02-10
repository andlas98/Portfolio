let temp = 65;


if (temp >= 60 && temp <= 90){
    console.log('It is pretty nice out');
}
if (temp <= 0 || temp >= 120){
    console.log('Do not go outside');
}

// CHALLENGE AREA
let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan){
    console.log("They're both vegan?? Only offer up vegan dishes.")
}
else if (isGuestOneVegan || isGuestTwoVegan){
    console.log('At least one vegan? Make sure to offer up some vegan options');
}
else{
    console.log('Offer up anything on the menu!')
}
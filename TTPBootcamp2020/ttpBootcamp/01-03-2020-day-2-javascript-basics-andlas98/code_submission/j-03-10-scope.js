let var1 = 'var1';
if (true){
    console.log(var1);
    let var2 = 'var2';
    console.log(var2);
    if(true){
        let var4 = "var4";
    }
}

// This makes an error because its out of scope
// console.log(var2);

if(true){
    let var3 = "var3";
}
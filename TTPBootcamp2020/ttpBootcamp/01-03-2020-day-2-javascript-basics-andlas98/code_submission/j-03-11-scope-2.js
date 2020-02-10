let name = 'Andrew';

if (true){
    let name = 'Mike';
    if (true){
        console.log(name);
        // itll print Mike because Andrew is out of scope
    }
}

if (true){
    console.log(name);
    // This will print Andrew, since that's the only name in scope
}
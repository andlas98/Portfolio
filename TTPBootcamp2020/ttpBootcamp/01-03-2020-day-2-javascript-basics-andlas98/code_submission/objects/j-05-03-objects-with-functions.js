let myBook = {
    title: '1984',
    author: 'George Orwell', 
    pageCount: 326
}

let otherBook = {
    title: 'A People\'s History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book){
    return{
        summary: `${book.title} by ${book.author}`, pageCountSummary: `${book.title} is ${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook);
let otherBookSum = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);

// Challenge Area

let convertFahren = function(fahr){
    return{
        fahrenheit: fahr,
        kelvin: (fahr + 459.67),
        celsius: (fahr - 32) * (5/9)
    }
}

let temp = convertFahren(64);
console.log(temp);
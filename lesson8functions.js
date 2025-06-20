// Declarative function

function helloOne(){
    console.log('Hello One!')
}

helloOne()  // funkciju pozivamo onoliko puta koliko je potrebno, može se pozvati i pre ispisivanja

// Anonymus function - nema ime, ali da bi funkcionisala rezultati funkcije moraju da budu dodeljeni nekoj varijabli
// poziva se samo nakon ispisivanja funkcije.

var helloTwo = function(){
    console.log('Hello Two!')
}

helloTwo()

// ES6 function syntax or arrow function -  ES6 (ECMAScript 2015) je šesta verzija JavaScript jezika

var helloThree = () => {
    console.log('Hello Three!')
}

helloThree()

// Function with arguments - 

function printName(name, lastName){
    console.log(name+' '+lastName)
}

printName('John', 'Smith')

// Function with return

function multiplyByTwo(number){
    var result = number * 2
    return result
}

var newResult = multiplyByTwo(5)
console.log(newResult)

// import function - omogućava uvoženje funkcije iz drugih fajlova, obavezno ta funkcija mora imati key word EXPORT/ u package.json mora biti podešen type : module

import { printAge } from "./hellpers/printHelper.js"
printAge(5)

// import everything - uvodimo kao objekat koji posle koristimo za pozivanje funkcija nakon tačke

import * as helper from "./hellpers/printHelper.js" // ceo fajl je uvezen kao objekat, koji poziva dostupne funkcije sa tačkom
helper.printAge(10)
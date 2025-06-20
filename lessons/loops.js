// LOOPS


// for loop - for i loop

/*for (statement1; statement2; statement3) {}
statement1 - inicijalna izjava, sa čime želimo da započnemo petlju
statement2 - uslov koliko ciklusa želimo da traje naša petlja i kada se završava - stopping point to exit from loop
statement3 - izjava šta se radi nakon svakog završenog ciklusa petlje */



for (let i=0; i<5; i++) {
    console.log("Hello World")
}


// for of loop - štampamo vrednost iz niza

var cars = ["Volvo", "Toyota", "Tesla"]

for (let car of cars){  // car je varijabla koja će izvesti vrednosti iz niza cars
    console.log(car)
}

/* drugi način ES6 sintakza sa forEach metodom u JS / pronaći ove metode

cars.forEach( car =>{
    console.log(car)
})

*/


// ako želimo da pronađemo neku vrednost u nizu dodajemo if izjavu da izađe iz petlje kada vrednost bude pronađena

var cars = ["Volvo", "Toyota", "Tesla"]

for (let car of cars){ 
    console.log(car)
    if (car == "Toyota"){
        break
    }
}
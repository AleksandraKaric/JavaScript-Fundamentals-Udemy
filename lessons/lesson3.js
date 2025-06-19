// objects

var customer = {
    firstName : 'John',
    lastName : 'Smith',
    cars: ["Volvo", "Toyota", "Tesla"] // dodajemo niz u naš objekat
}

console.log(customer) // da prikaže ceo objekat
console.log(customer.firstName) // da prikaže samo određenu vrednost varijable
console.log(customer['lastName']) // isto kao gore ali drugačiji način

//Dot notation
customer.firstName = "John David" // ako želimo da promenimo neku vrednost u objektu

// Bracket notation
customer['lastName'] = "Smith 2"

console.log(`${customer.firstName} ${customer.lastName}`)

//arrays

var car = ["Volvo", "Toyota", "Tesla"]
car[0] = "BMW" // menjamo podatak u nizu
console.log(car[0]) // ispisujemo podatak iz niza

console.log(customer.cars[0]) //ispisujemo vrednost iz niza koji se nalazi u objektu customer
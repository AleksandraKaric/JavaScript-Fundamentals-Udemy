// print in console Hello World!

console.log("Hello World!")

// variables

var firstName = "John"   // samo dok traje izvršenje programa
let lastName = "Smith"
console.log(firstName)

var age, dateOfBirth, sex
age = "5"
sex = "Male"
console.log(age)

age = "6"
console.log(age) // ako ovo pokrenemo prikazaće se i 5 i 6 za age, zato što varijable (var) nam to omogućava, moguće je da se override varijabla

// constants

const occupation = "Engineer" // mora se deklarisati i inicijalizovati odmah
console.log(occupation)
// occupation = "driver" - nemoguće je promeniti konstantu

// data types
var middleName = "David" // string, može i u '' navodnicima u JS
var ageOfBirth = 25 // number
var isHeMarried = false // boolean
var yearsInMarriage = null // neočekuje se nikakava vrednost ako je nema
var numberOfCars = undefined // undefined
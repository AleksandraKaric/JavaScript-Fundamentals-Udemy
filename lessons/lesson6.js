// Conditioanal statement

if (condition) {
    // execute some code here
} else {
    // execute some code here
}

// ispiši izraz 
// ako je između 6 i 12 sati "Goog Morning"
// ako je između 12 i 18 sati popodne "Good Afternoon"
// Ostalo vreme "Good Evening"

var hour = 5

if (hour >= 6 && hour < 12) {
    console.log('Good Morning')
} else if (hour >= 12 && hour < 18) {
    console.log('Good Afternoon')
} else {
    console.log('Goode Evening')
}

var isMoreThanEqualToEighteen = true
var isSRBCitizen = true

if (isMoreThanEqualToEighteen && isSRBCitizen) {
    console.log('Customer is eligible for DL')
} else {
    console.log('Customer is NOT eligible for DL')
}
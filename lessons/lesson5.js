// Logical operators

// Logical "AND"
console.log(true && true) // sve vrednosti moraju da budu TRUE kako bi izraz bio TRUE

// Logical "OR"
console.log(true || false) // samo jedna vrednost mora da bude TRUE da bi izraz bio TRUE


// ispiši izraz gde se proverava da li osoba ispunjava uslove za dobijanje vozačke dozvole.
// uslovi su da ima 18 ili više godina i da je državljanin Srbije

var isMoreThanEqualToEighteen = true
var isSRBCitizen = true

var eligibilityForDriverLicenese = isMoreThanEqualToEighteen && isSRBCitizen // oba uslova moraju da budu ispunjena

console.log('This customer is eligible for DL: ' +eligibilityForDriverLicenese)


// ispiši izraz gde se proverava da li osoba ispunjava uslove za dobijanje vozačke dozvole.
// gde jedan od uslova mora da bude ispunje: da ima 18 ili više godina ili je državljain Srbije

var isMoreThanEqualToEighteen = true
var isSRBCitizen = false

var eligibilityForDriverLicenese = isMoreThanEqualToEighteen || isSRBCitizen // jedan od uslova mora biti ispunjen

console.log('This customer is eligible for DL: ' +eligibilityForDriverLicenese)

// Logical "NOT" 
console.log(!true)
console.log(6 !==10)
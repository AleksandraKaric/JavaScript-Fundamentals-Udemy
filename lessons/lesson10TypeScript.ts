// stiktnija deklaracija varijabli nego u JS
//

var firstName: string = "John"
var lastName: string = "Smith"
var age : number = 25


type Customer = {firstName: string, lastName: string, active: boolean}

var firstCustomer : Customer = {
    firstName : "Mary",  // nema jednako, ovo je json oblik
    lastName : "Jhones",
    active : true
}
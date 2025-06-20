

/* prvi način
// importovali smo klasu 
import { CustomerDetails } from "../hellpers/printHelper.js";

// kreiaramo novu instancu klase, koju sada koristimo kao objekat za pozivanje metoda iz klase
var customerDetails = new CustomerDetails()




customerDetails.printFirstName('Maria')
customerDetails.printLastName('Smith')
*/

// drugi način
import { customerDetails } from "../hellpers/printHelper.js";

customerDetails.printFirstName('John')
customerDetails.printLastName('Smith')
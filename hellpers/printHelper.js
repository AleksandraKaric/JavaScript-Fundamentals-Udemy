export function printAge(age){
    console.log(age)
}
/* prvi način
export class CustomerDetails{

    printFirstName(firstName){
        console.log(firstName)
    }

    printLastName(lastName){
        console.log(lastName)
    }


}
*/ 

// drugi način - 
class CustomerDetails{
    printFirstName(firstName){
        console.log(firstName)
    }

    printLastName(lastName){
        console.log(lastName)
    }
}

//ovde konstruišemo instancu i njega eksportujemo, mora da bude const
export const customerDetails = new CustomerDetails()
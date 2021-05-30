import Query  from "../models";//only need parenthesis with require


async function insertCustomer(customer) {
    return Query("INSERT INTO customers SET ?", [customer])//customer is an object with the data from the form and since they are in the same order as the database we dont need 4 ? marks
}
export default { insertCustomer }
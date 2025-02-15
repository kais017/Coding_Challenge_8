// Task 1: Function Declaration

function calculateSalary(baseSalary, bonus, taxRate) {
// creating a function that calculates salary based on the base salary, bonus, and tax rate
let netSalary = ((baseSalary + bonus) - (baseSalary * taxRate));
{
    return (netSalary.toFixed(2)); // returns the calculated output and uses .toFixed to inclue two decimal places
}     
}
console.log("Employee Salary Calculation")
console.log(`Net Salary 1: ${calculateSalary(5000,500,0.1)}`)
console.log(`Net Salary 2: ${calculateSalary(7000,1000,0.15)}`)
// logging the test data

// Task 2: Function Expression 

function calculateDiscount(price,discountRate) {
// creating a function that calculates the discount based on the price and discout rate

let finalPrice = ((price)-(price * discountRate))
{
    return (finalPrice.toFixed(2))
} // returns the function and uses .toFixed to include two decimal places in the output
}

console.log("Product Price After Discount")
console.log(`Final Price 1: $${calculateDiscount(100, 0.2)}`);
console.log(`Final Price 2: $${calculateDiscount(250, 0.15)}`);
// logging each set of test data given and adding a title to the console log

// Task 3: Arrow Function
const  calculateServiceFee = (amount,serviceType) => {
// creating a function that calculates applies a fee
    let serviceFee;
 if (serviceType === "Premium") {serviceFee = 0.15;} // applies a 15%  fee for premium service
else if (serviceType === "Standard") {serviceFee = 0.10;} // applies a 10% fee for standard service
else if (serviceType === "Basic") {serviceFee = 0.05;} // applies a 5% fee for basic service

return (amount * serviceFee).toFixed(2) // returns the service fee amount using .toFixed to include two decimal places
}

console.log("Service Fee Calculation") // adding a title to the console log
console.log(`Service Fee 1: $${calculateServiceFee(200, "Premium")}`); // logging the Premium Service test data
console.log(`Service Fee 1: $${calculateServiceFee(500, "Standard")}`); //loggin the Standard Service test data









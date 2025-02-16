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

// Task 4: Parameters and Arguments
function calculateRentalCost(days, carType, insurance = false) {
// create a function that calculates rental costs based on days, car type, and insurance
let rentalCost = 0;

if (carType === "Economy") {rentalCost = (40 * days);} // if the car type is Economy, the rental cost will be $40 per day
else if (carType === "Standard") {rentalCost = (60 * days);} // if the car type is Standard, the rental cost will be $60 per day
else if (carType === "Luxury") {rentalCost = (100 * days);} // if the car type is Luxury, the rental cost will be $100 per day

if (insurance === true) { rentalCost += 20 ;} // if there is insurance, there will be an additional $20 fee

{ 
    return `${rentalCost.toFixed(2)}`;  // returns the calculated rental cost and uses .toFixed to include two decimal places in the output
}
}

console.log("Car Rental Cost Calculation:") // adding a title to the console log
console.log(`Total Rental Cost 1: $${calculateRentalCost(3, "Economy", true)}`); // logging test data 1
console.log(`Total Rental Cost 2: $${calculateRentalCost(5, "Luxury", false)}`); // logging test data 2

// Task 5: Returning Values

function calculateLoanPayment(principal, rate, time) {
// creating a function that calculates a loan payment based on the principal, rate, and time
    let totalPayment = (principal + (principal * rate * time));
// creating the formula to calculate the total loan payment
 {
    return(totalPayment.toFixed(2))
 } // gives us our calculation in the output with two decimal places
}

console.log("Loan Payment Calculation:") // adding a title to console
console.log(`Total Payment: $${calculateLoanPayment(1000, 0.05, 2)}`); // logging test data 1
console.log(`Total Payment: $${calculateLoanPayment(5000, 0.07, 3)}`); // logging test data 2

// Task 6: Higher-Order Functions
let transactions = [200, 1500, 3200, 800, 2500];
// declaring an array with five values

function filterLargeTransactions(transactions) {
return transactions.filter(transactions => transactions > 1000);
} //creating a function that will return any transaction over 1000

console.log("Transactions:", filterLargeTransactions(transactions));
// logging the function, giving us the filtered output








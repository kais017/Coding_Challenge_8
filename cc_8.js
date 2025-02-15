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

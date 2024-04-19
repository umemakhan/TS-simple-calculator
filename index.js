#! /usr/bin/env node
// importing inquirer
import inquirer from "inquirer";
// welcoming message
console.log("\n\t\tCalculator");
// questions from user through inquirer
let answers = await inquirer.prompt([
    {
        name: "firstNumber",
        type: "number",
        message: "\nEnter first number",
    },
    {
        name: "secondNumber",
        type: "number",
        message: "\nEnter second number",
    },
    {
        name: "operator",
        type: "list",
        message: "\nSalect a operator to perform operations",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "Subtraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else {
    console.log("\nInvalid Operator");
}

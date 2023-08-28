#!/usr/bin/env node
// Main Program for caculator
import div from "./first.js";
import mul from "./second.js";
import sum from "./third.js";
import sub from "./fourth.js";
import check from "./flag1.js";
import inquirer from "inquirer";
import chalk from 'chalk';
console.log("Welcome to My Calculator! Give parameters to calculate the results\n");
let flag = 1;
while (flag) {
    let answers = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: chalk.bold.red("Which operation do you want the calculator to perform:\n"),
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        },
        {
            name: "num1",
            type: "number",
            message: chalk.bold.red("Enter the first operand\n")
        },
        {
            name: "num2",
            type: "number",
            message: chalk.bold.red("Enter the second operand\n")
        }
    ]);
    switch (answers.operation) {
        case "Addition":
            console.log(chalk.bgRed(`\n${answers.num1} + ${answers.num2} = ${sum(answers.num1, answers.num2)}`));
            break;
        case "Subtraction":
            console.log(chalk.bgRed(`\n${answers.num1} - ${answers.num2} = ${sub(answers.num1, answers.num2)}`));
            break;
        case "Multiplication":
            console.log(chalk.bgRed(`\n${answers.num1} * ${answers.num2} = ${mul(answers.num1, answers.num2)}`));
            break;
        case "Division":
            console.log(chalk.bgRed(`\n${answers.num1} / ${answers.num2} = ${div(answers.num1, answers.num2)}`));
            break;
        default:
            break;
    }
    flag = await check();
}

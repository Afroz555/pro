import inquirer from 'inquirer';
import { sum } from './cal.js';
import { sub} from './cal.js';
import { multiply } from './cal.js';
import { divide } from './cal.js';

let calulate :{
    num1:number;
    num2:number;
    oppreter:string;
}= await inquirer.prompt( [
    {
        massege:"enter your first number",
        type:"number",
        name:"num1"
    },
    {
        massege:"enter your second number",
        type:"number",
        name:"num2"

    },
    {massege:"enter your oppreter number",
        type:"list",
        name:"oppreter",
        choices:["+","-","*","/"]
    }

])


if (calulate.oppreter==="+"){
    let result=sum(calulate.num1,calulate.num2);
    console.log(`sum of ${calulate.num1} and ${calulate.num2} is equal to ${result}`)
};
if (calulate.oppreter==="-"){
    let result=sub(calulate.num1,calulate.num2);
    console.log(`sub of ${calulate.num1} and ${calulate.num2} is equal to ${result}`)
};
if (calulate.oppreter==="*"){
    let result=multiply(calulate.num1,calulate.num2);
    console.log(`multiply of ${calulate.num1} and ${calulate.num2} is equal to ${result}`)
};
if (calulate.oppreter==="/"){
    let result=divide(calulate.num1,calulate.num2);
    console.log(`divide of ${calulate.num1} and ${calulate.num2} is equal to ${result}`)
}










          








































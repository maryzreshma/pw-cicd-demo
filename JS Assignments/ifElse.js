let personName= 'Robin'
let age = 21
let job = 'QA'
let company = 'XYZ'
// my name is Robin and age is 21 working as QA ib XYZ company
console.log("My name is " + personName + " and age is " +age+ " working as " +job+ " in " +company);
console.log(`My name is ${personName} and age is ${age} working as ${job} in ${company}`);
/* Write the logic to check if the number is even or odd
    write the logic to check if the number is positive or negative */

let number = 20; 
console.log(number);

if (number % 2 == 0)
    console.log("Number is even");
else
    console.log ("Number is odd")

if (number >= 0)
    console.log ("Number is positive")
else
    console.log("number is negative")


let marks = 85
if (marks > 35)
    console.log("Student passed")
else
    console.log("student failed")
console.log ("##########")
for(let i=6; i>=1; i--){
console.log(i);
}
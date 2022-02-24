let found: boolean = true;
let grade: number = 22.3;
let firstName: string = "Alex";
let lastName: string = 'Lam';

// let's break it!
/*
found = 0;
grade = "A";
firstName = false;
*/

console.log(found);
console.log("The grade is " + grade);

console.log("Hi " + firstName + " " + lastName);

// use template Strings
console.log(`Hi ${firstName} ${lastName}`);
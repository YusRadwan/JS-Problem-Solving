console.log(`%%%%%%%%% 1 %%%%%%%%%`);
let name = "Yusuf",
    age = 26,
    isStudent = false;

console.log(`My name is ${name}, I am ${age} old, Student: ${isStudent ? 'Yes' : 'No'}`);

console.log(`%%%%%%%%% 2 %%%%%%%%%`);

let x = "10";

console.log(+x + 5);

console.log(`%%%%%%%%% 3 %%%%%%%%%`);

let num = 100;

console.log(num + (num / num) - (num * num)) // -9899

console.log(`%%%%%%%%% 4 %%%%%%%%%`);

let price = 99.99;

console.log(parseInt(price)); 
console.log(+price.toFixed()); 
console.log(Math.round(price)); 
console.log(Math.ceil(price)); 
console.log(Math.floor(price)); 

console.log(`%%%%%%%%% 5 %%%%%%%%%`);

let salary = "5000 EGP";

console.log(parseInt(salary) + 2500);

console.log(`%%%%%%%%% 6 %%%%%%%%%`);

console.log(Math.round(Math.random() * 100) + 1);

console.log(`%%%%%%%%% 7 %%%%%%%%%`);

let word = "JavaScript";

console.log(word.charAt(0));
console.log(word.charAt(word.length - 1));
console.log(word.toUpperCase());
console.log(word.length);
console.log(word.slice(2, 6));

console.log(`%%%%%%%%% 8 %%%%%%%%%`);

let message = "  I love JavaScript  ";

console.log(message.trim());
console.log(message.replace("love", "practice"));
console.log(message.includes("Script"));

console.log(`%%%%%%%%% 9 %%%%%%%%%`);

let inputText = "Hello";

console.log(inputText.split("").reverse().join(''));

console.log(`%%%%%%%%% 10 %%%%%%%%%`);

let promptName = prompt('What is Your Name?');
let promptAge = prompt('What is Your Age?');

console.log(`Welcome ${promptName}, next Year You Will be ${parseInt(promptAge) + 1}`);






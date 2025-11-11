console.log(`%%%%%%%% 1 %%%%%%%%`);
let grade = 85;

switch(true) {
    case grade >= 90:
        console.log("Excellent");
        break;
    case grade >= 80:
        console.log("Very Good");
        break;
    case grade >= 70:
        console.log("Good");
        break;
    default:
        console.log("Needs Improvement");
        break;
}

console.log(`%%%%%%%% 2 %%%%%%%%`);

let typeDay = "Fri" // prompt('Write Type Day');

switch(typeDay) {
    case "Fri":
        console.log("Weekend 🎉");
        break;
    case "Sat":
    case "Sun":
        console.log("Work Start 😐");
        break;
    default:
        console.log("Normal Day");
        break;
}

console.log(`%%%%%%%% 3 %%%%%%%%`);

let num = 12;

num % 2 === 0 ? console.log("Even") : console.log("Odd");

console.log(`%%%%%%%% 4 %%%%%%%%`);

for (let i = 1; i <= 10; i++) {
    console.log(i === 5 ? "Five!" : i);
}

console.log(`%%%%%%%% 5 %%%%%%%%`);

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

console.log(`%%%%%%%% 6 %%%%%%%%`);

let nums = [10, 15, 20, 25, 30];

for (let num of nums) {
    if (num === 25) break; 
    console.log(num * 2);
}

console.log(`%%%%%%%% 7 %%%%%%%%`);

let word = "Youssef";

for (let char of word) {
    console.log(char);
}

console.log(`%%%%%%%% 8 %%%%%%%%`);

let fruits = ["Apple", "Banana", "Mango"];
fruits.push("Orange");
console.log(fruits);
fruits.shift();
console.log(fruits);
console.log(fruits.length);
console.log(fruits.join(" - "));

console.log(`%%%%%%%% 9 %%%%%%%%`);

let numbers = [5, 10, 15, 20, 25];

let sumLoop = 0; 

numbers.forEach((a) => sumLoop += a);

console.log(sumLoop);

console.log(`%%%%%%%% 10 %%%%%%%%`);

let mix = [10, "Youssef", 20, "Ali", 30, "Nada"];

let arrNumber = mix.filter(a => typeof a === 'number');

console.log(arrNumber);

//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93]

//Programmatically subtract the value of the first element in the array from the value in the last element of the array.
let fiLa = ages[ages.length -1] - ages[0];

console.log(fiLa);

//Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

ages.push(17);

console.log(ages);

fiLa = ages[ages.length -1] - ages[0];

console.log(fiLa);

//Use a loop to iterate through the array and calculate the average age.
let sum = 0; 
for(let i = 0; i < ages.length; i++) {
    sum += ages[i];
}

let avr = sum / ages.length;

console.log(avr);

//Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log(names);
//Use a loop to iterate through the array and calculate the average number of letters per name.
let sum1 = 0;

for(let i = 0; i < names.length; i++) {
    sum1 += names[i].length;
}

let average = sum1 / names.length;

//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 

let allNames = "";

for(let i = 0; i < names.length; i++) {
    allNames += names[i] + " ";
}

console.log(average);
console.log(allNames);

//How do you access the last element of any array?
let array2 = [1, 5, 6, 9, 10, 14];
console.log(array2[array2.length -1]);

//How do you access the first element of any array?
console.log(array2[0]);

//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = [];

for(let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}

console.log(nameLengths);

//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

let namesSum = 0;

for(let i = 0; i < nameLengths.length; i++) {
    namesSum += nameLengths[i];
}

console.log(namesSum);

function aFunction(word, n) {
    return word;
}
aFunction("Cats", 3);
console.log(aFunction("Cats", 3));

/*Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
(i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).*/

function myFunction(word, n) {
    let repeat = "";
    for(let i = 0; i < n; i++){
        repeat += word;
}
    return repeat;
}

console.log(myFunction("Hello", 3));

//Write a function that takes two parameters, firstName and lastName, and returns a full name.

function nameFunction(firstName, lastName) {
    return (firstName + " " + lastName);
}

console.log(nameFunction("John","Smith"));

//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function gtrThn100(num1) {
    let sum = 0;
    for (let i = 0; i < num1.length; i++){
    sum += num1[i];
}
return sum > 100;
}

let num1 = [4, 2, 76, 1, 5];
console.log(gtrThn100(num1));

num1 = [95, 96, 97, 98];
console.log(gtrThn100(num1));


//Write a function that takes an array of numbers and returns the average of all the elements in the array.

function arrAvrg(num2) {
    let total = 0;
    for (let i = 0; i < num2.length; i++) {
        total += num2[i];
    }
    return num2 = total / num2.length;
}

let num2 = [4, 8, 12, 16, 20];
console.log(arrAvrg(num2));

/*Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array 
is greater than the average of the elements in the second array.*/
function arr3(arr1, arr2) {
let one = 0;
let two = 0;

for(let i = 0; i < arr1.length; i++){
    one += arr1[i];
}
for(let j = 0; j < arr2.length; j++){ 
    two += arr2[j];
}
return (one/arr1.length) > (two/arr2.length);

}

console.log(arr3([9, 7, 4], [3, 2, 1]));
console.log(arr3([3, 2, 1], [9, 7, 4]));


/*Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket,
 and returns true if it is hot outside and if moneyInPocket is greater than 10.50.*/
 function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket >= 10.50;
 }
console.log(willBuyDrink(true, 10));

/*Create a function of your own that solves a problem.
In comments, write what the function does and why you created it.*/

function myMood(mood) {
    if(mood === "happy") {
    return "You are Happy! Keep it up!";
}else if(mood ==="sad") {
    return "You are Sad :( Call your mom.";
}else if(mood ==="upset") {
    return "You are Upset. Go to therapy.";
}else if(mood === "tired") {
    return "You are Tired. Get some sleep.";
}
}

console.log(myMood("happy"));
console.log(myMood("sad"));
console.log(myMood("upset"));
console.log(myMood("tired"));
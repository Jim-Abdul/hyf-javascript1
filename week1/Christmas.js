
//1. Write a console.log statement saying "Hello World!" for each language that you know.
//For example:
//Halo, dunia! // Indonesian
//Ciao, mondo! // Italian
//Hola, mundo! // Spanish
console.log("Hoi wereld!");
console.log("Hi world!");
//2. Consider the following code:
//console.log('I'm awesome');
//Copy the code in your.js file and run it.You will see that you will get a SyntaxError.Find a solution for this error.Hint: read the error message carefully, it also gives an indication of where the problem is.
console.log("I'm awesome");


//3. Declare a variable x and initialize it with an integer, using these exact steps:
//3.1 First, declare your variable x(do not initialize it yet).
//3.2 Add a console.log statement that explains that explains in words what you think the value of x is, like in this example:
let x ="";
console.log('the value of my variable x will be the quantity of passengers');       
//3.3 Add a console.log statement that logs the value of x.
console.log(x);
//3.4 Now initialize your variable x with an integer.
let x = 6;
//3.5 Next, add a console.log statement that explains what you think the value of x is.
console.log(3);
//3.6 Add a console.log statement that logs the value of x.Steps to be taken:


//4. Declare a variable y and assign a string to it.
//4.1 Write a console.log statement in which you explain in words what you think the value of the string is.
//4.2 Now console.log the variable y.
//4.3 Now assign a new string to the variable y.
//4.4 Just like you did before write a console.log statement that explains in words what you think will be logged to the console.
//4.5 Now console.log y again.

let y = "Jim";
console.log('the value of my string will be: name');
console.log(y);
let y = "Cat";
console.log('my favorite animal');

//5. How do you round the number 7.25, to the nearest integer(i.e., whole number) ?
//5.1 Declare a variable z and assign the number 7.25 to it.
var z = 7.25;
//5.2 Console.log z.
console.log(z);
//5.3 Declare another variable a that has the value of z but rounded to the nearest integer.
var a = Math.round(z);
//5.4 Console.log a.
console.log(a);
//5.5 So now we have z and a find a way to compare the two values and store the highest of the two in a new variable.
var m ="";
if (z > a) {
    var m = z;
 }
else{var m = a}
//5.6 Console.log the highest value.
console.log(m);

//6. Arrays!
//6.1 Declare an empty array.Make sure that the name you choose indicates 'plurality', because an array is capable of containing more than one element. (See Naming conventions.)
var myFavoriteAnimals = ["","",""];
//6.2 Write a console.log statement that explains in words what you think the value of the array is.
console.log("myFavoriteAnimals");
//6.3 Console.log your array.
console.log(myFavoriteAnimals);
//6.4 Create an array that has your favorite animals inside(see if you can find a good name that exactly describes what this variable will hold).
var myFavoriteAnimals = ["Cat","Dog","Tiger","Eagle"];
//6.5 Log your array.
console.log(myFavoriteAnimals);
//6.6 Add a statement that adds Daan's favorite animal ('baby pig') to the existing array.
myFavoriteAnimals.push('baby pig');
//6.7 Log your new array!
console.log(myFavoriteAnimals);

//7. More strings
//7.1 Let's consider the following string: let myString = "this is a test".
let myString = "Hack my heart if you can"
//7.2 Add the string to your file and console.log it.
//7.3 Find a way to get the length of myString.
let length = myString.length;
//7.4 Console.log the length of myString.
console.log(myString.length);



//8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.
//8.1 First declare at least four variables and assign them different data types.
let myLength = 185;
let myAge    = true;
let myHairColor = 'brown';
let myHobbies = ['reading', 'swimming', 'internet'] 
//8.2 For each variable write a console.log statement that logs the value
console.log(myLength);
console.log(myAge);
console.log(myHairColor);
console.log(hobbies);
//let foo = 3;
//console.log('The value of my variable foo is: ' + foo);

//8.3 Now write a console.log statement wherein you first explain in words what you think the type of your variables is.
console.log('the value of variable w will be my weight ');
//8.4 Now use typeof to log the actual type of your variables.

//8.5 Now compare the types of your different variables with one another.
//8.6 Make sure to also show a message when the variables you are comparing are not the same type.
//For example:
//let x = 9;
//let y = 'Hello';
//if (...) {
//    console.log('SAME TYPE');
//}
// TODO -> add a way of giving feedback if your variables don't have the same type
//9. If x equals 7, and the only other statement is x = x % 3, what would be the new value of x ?
//9.1 Add at least 3 console.log statements in which you show that you understand what % does.
'use strict';
let x = 7;
x = x % 3;
console.log("the new value for x will be: 1");
console.log(x);
console.log("the operation % calculate the Remainder of the division between tow values ");
//10. Write a program to answer the following questions:
//10.1 Can you store multiple types in an array ? Numbers and strings ? Make an example that illustrates your answer.
//10.2 Can you compare infinities ? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this?
//10.3 Add console.log statements to the above program's in which you show that you understand the concepts (just like you've done in the above assignments).
'use strict';

let multi = ["Hello", 2018, true];
console.log(multi);
console.log("We can store multiple types in an array.");

let x = 6;
let y = 10;
if (x / 0 === y / 0) {
    console.log(true);
} else {
    console.log(false);
}

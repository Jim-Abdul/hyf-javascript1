'use strict'
//------------------------------------Srtings

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
console.log(myString.replace(/,/gi," "));

//-------------------------------------Arrays

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);

favoriteAnimals.splice(1, 0, 'meerkat');
console.log(favoriteAnimals);
console.log('The array has a length of ' + favoriteAnimals.length);

favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
console.log('The item you are looking for is at index: ' + favoriteAnimals.indexOf('meerkat'));

//------------------------------------ More JS

//--- 1 ---
let x = 2;
let y = 6;
let z = 3;
function sum() {
    console.log(x + y + z);
}
sum();

//--- 2 ---
let color = 'red';
function colorCar() {
    console.log('a ' + color + ' car');
}
colorCar();

//--- 3 ---

let car = { type: 'Fiat', color: 'red' , model:2018};
function carInfo() {
    
    console.log(car.type);
    console.log(car.color);
    console.log(car.model);
   
    
}
carInfo();

//--- 4 ---
let code = 0 ;
function vehicleType(color, code) {
    let type = 'car';
    if (code === 1) { type = 'car' };
    if (code === 2) { type = 'motorbike' };
    return 'a ' + color + type;
}
console.log(vehicleType('blue ', 1));
console.log(vehicleType('green ', 2));



//--- 5 ---

if (3) { console.log(true) };


//--- 6 ---
// this is in separate file called step6.js

//--- 7 ---
//---- 8 ---
//----- 9 --- 
//------ 10 ---

let vehicleList = ['motorbike', 'caravan', 'bike', 'car']
console.log("Amazing Joe's Garage, we service " + vehicleList[3] + ", " + vehicleList[0] +
    ", and " + vehicleList[1] + ", " + vehicleList[2] + ".");


for (let i = 0; i < vehicleList.length; i ++) { 
    console.log("Amazing Joe's Garage, we service " + vehicleList[i]);
}

let vehicleTypes = { a: "Bike ,", b: "Carvan ,", c: "Motorbike." };

let text = "";
let j = 0;
for (j in vehicleTypes) {
    text += vehicleTypes[j] + " ";

}

console.log(vehicleTypes);
console.log("Amazing Joe's Garage, we service " + text);

//--- 11 ---
let add = vehicleTypes.d = "Lorry"
console.log("Amazing Joe's Garage, we service " + vehicleList +" and "+ add + ".");



console.log(vehicleList[2]); //bike

function vehicle(color,code,age) {
    return 'a ' + color + age + code + '.';
}

console.log();
vehicle('green', 3, 1)

//--- 12 ---

let emptyObj = '';

//--- 13 ---
let teachers = {
    first: 'Gijs',
    second: 'Filip',
    third: 'Dine',
    forth: 'Jim'
}
console.log(teachers);

//--- 14 ---
teachers.languages = 'English';
console.log(teachers);

//--- 15 ---
let x1 = [1, 2, 3];
let y1 = [1, 2, 3];
let z1 = y;
console.log(x1 == y1); //false
console.log(x1 === y1);//false
console.log(z1 == y1);//false
console.log(z1 == x1);//false


//--- 16 ---
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;


if (o3 = o2) {
    console.log(o1);
    console.log(o2);
    console.log(o3);
}
if (o2 = o3) {
    console.log(o1);
    console.log(o2);
    console.log(o3);
}
// --- 17 --- string

let bar = 42;
typeof typeof bar;
console.log(typeof bar);
console.log(typeof typeof bar);










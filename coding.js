//8
function checkDataType(value) {
    return typeof value;
}

console.log(typeof(45)); 
console.log(typeof("Welcome")); 


//9
let a = null;        
let b;              
let c = "";         

console.log(a);
console.log(b); 
console.log(c); 


//10
const number = 10;

console.log(number);

//11
let fruits = ["Apple", "Mango", "Orange"];
fruits[2] = "Banana"; 
console.log(fruits); 

//12
function isObject(variable) {
    return typeof variable === "object" && variable !== null;
}

console.log(isObject({ name: "John" })); 
console.log(isObject(null)); 


// Constructor

const Car = function(brand, price, stock){ 
    // there is no this function in arrow function
    this.brand = brand; 
    this.price = price;
    this.stock = stock;

    // adding a function, but not a good practice. Cause nicher const a o function create hobe. So better to use prototype
    // this.totalProfit = function(){

    // };
};

// instance
const m8 = new Car('BMW', 10, 5);
console.log(m8);

const modelS = new Car('Tesla', 15, 2);
console.log(modelS);

// Why new is written
// 1. New empty object create cause we have this inside the Car
// 2. Function is called and this = {}
// 3. Empty object is linked to prototype
// 4. Object is returned

// making prototype
Car.prototype.totalProfit = function(){
    return this.price*this.stock;
};

console.log(m8.totalProfit());
console.log(modelS.totalProfit());

console.log(m8.__proto__);
console.log(m8.__proto__.__proto__);
console.log(m8.__proto__.__proto__.__proto__); // noting above object
// so the sequence in JavaScript is function-> object -> null




// make my own prototype
Array.prototype.sharif = function(){
    return [... new Set(this)] // as set is a constructor
    // as Set is a function so spread ... used
    // Set returns only unique values from the array
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 6, 7, 8, 9]
console.log(array.sharif())


// timeout
console.log("Task 1");
setTimeout(() => {
 console.log("Task 2");
}, 5000);
console.log("Task 3");
setTimeout(() => {
 console.log("Task 4");
}, 0);
console.log("Task 5");



const count = () => {
    for (var i = 1; i < 5; i++) {}
    console.log(i);
   };
   count();
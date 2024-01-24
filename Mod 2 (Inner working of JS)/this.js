// this keyword

// global call:
// if we call this in global scope it works for global objects as well as the window
console.log(this);


// simple function call:
// could be undefined or global object
function func(){
    console.log(this);  // window returns
}
func();


"use strict";
function func(){
    console.log(this);  // undefined returns
}
func();


// arrow function call:
// arrow function doesn't have any this but it takes this from the lexical environment
const func = () => {
    console.log(this); // window returns cause this function in global environment
};



// method call:
const apple = {
    count: 2,
    price: 10,
    calculate: function (){
        console.log(this.count * this.price);
        console.log(this); // object returns
    },
};

apple.calculate();


// like an inheritance
const apple = {
    count: 2,
    price: 10,
    calculate: function (){
        console.log(this.count * this.price);
        console.log(this); // object that is calling the methode returns
    },
};

const banana = {
    count: 10,
    price: 5,
};

banana.calculate = apple.calculate; // so banana object has the same calc method of apple

console.log(banana);



// event listner:
// this returns a DOM element
const button = document.getElementById('button');

button.addEventListener('click', function () {
    console.log(this);
});
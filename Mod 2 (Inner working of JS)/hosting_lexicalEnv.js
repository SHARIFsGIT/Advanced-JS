// Hosting //
console.log(name);
var name = 'Sharif';
console.log(name);
// the upper console gives undefined cause it thinks there is a variable like var name = undefined;

// problem happens when we try to use let or const like below:
console.log(name);
const name = 'Sharif';
console.log(name);

// what happens in case of function
test();
function test(){
    console.log('test');
}
// function declared itself, but in case of IIFE function it works fine
(function test(){
    console.log('test');
})();
// but 
test();
(function test(){
    console.log('test');
})();

// annonymous arrow functions
test();
const test = () => {
    console.log('test');
};

// it wont host as there is no function keyword

test();
var test = () => {
    console.log('test');
};

// in this case terminal says test is not a function cause it hosting like var test = undefined before test();



// Lexical environment -> where is the function? Is a global function or inside someting //
const calculate = (a, b) => {
    let num1 = a;
    let num2 = b;

    function add(){
        return num1 + num2;
    }
    return add();
};
console.log(calculate(2, 2));

// add function has an environment that is calculate. Reminder not with console. So lexical environment of add is calculate and lexical environment of calculate is global. 
// So add can use all the variables of his lexical environment
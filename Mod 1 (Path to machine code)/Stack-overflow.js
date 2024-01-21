// stack overflow
function inception (){
    inception();
}
inception();



// call stack: global execution -> call add() 
// FIFO: 1. add() --> 2. main [main wont remove]
const add = (a, b) => {
    return a + b;
};
const result = add(2, 2);
console.log(result);



// call stack: global execution -> calculate() -> call add() 
const add = (a, b) => {
    return a + b;
};

const calculate = () => {
    return add(2, 2);
};
calculate();



// memory leak
const array = [];
for (let i = 1; i > 0; i++){
    array.push(i);
}

// to avoid memory leak 
// 1. not to use global variable
// 2. adding event listeners without removing it
// 3. setting timer without cleanup



// single thread problem
// 1. As it's a FIFO stack so it won't work untill the first function finished
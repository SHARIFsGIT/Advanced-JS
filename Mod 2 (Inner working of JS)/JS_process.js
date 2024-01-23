const myName = 'Shariful';

// 3rd push to stack
const greetings = (name) => {
    return `Welcome ${name}.`;
};

// 2nd push to stack
const wish = (name, time) => {
    return greetings(name) + ` Good ${time}`;
};

const result = wish(myName, 'Morning.'); // 1st push to stack after global variable
console.log(result)
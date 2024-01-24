// Scope

let name = 'Shariful';

const func1 = () =>{
    let y = 'Islam'
    console.log(y);
};
console.log(y); // it not working cause y is inside of the func1. 
func1();



// it also works
const func1 = (param) =>{
    console.log(param);
};

const func2 = () =>{
    let y = 'Islam'
    func1(y);
};

func2();



// it also works cause inside the lexical environment
const func2 = () =>{
    let y = 'Islam';
    const func1 = () =>{
        console.log(y);
    };    
    func1();
};

func2();



// block and function scope
// Class declaration:

// class CarClass{

// }

// Class expression:

const CarClassExpression = class{
    constructor(brand, price, stock){
        this.brand = brand;
        this.price = price;
        this.stock = stock;
    }
    // instance method
    totalProfit(){
        return this.price * this.stock;
    }
    // static method
    static hello(){
        console.log('Hello');
    }
};

const m8 = new CarClassExpression('BMW', 10, 2);
console.log(m8);
console.log(m8.totalProfit());
console.log(m8.__proto__);

CarClassExpression.hello();
m8.hello(); // error message cause hello is a static method and will work only with constructor and dont work for prototype
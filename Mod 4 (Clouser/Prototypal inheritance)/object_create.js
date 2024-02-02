// Object.create(); // no constructor but multiple obj can be created from inside

const CarProto = {
    totalProfit(){
        return this.price * this.stock;
    },
    creator(brand, price, stock) {
        this.brand = brand;
        this.price = price;
        this.stock = stock;
    }
}

const m8 = Object.create(CarProto);
console.log(m8); // empty object
console.log(m8.__proto__); // there will not any constructor

m8.brand = 'BMW';
m8.price = 10;
m8.stock = 2;
console.log(m8);

m8.creator('BMW', 10, 2);
console.log(m8);
console.log(m8.totalProfit());
// const x = 5;
// x = 7;
// console.log(x);

let car = {
    name:'Honda City 2023',
    price: 1500000,
    engine: '1498cc',
    mileage: '18kmpl'
}
console.log(car);
Object.freeze(car); 
car.price = 1600000;
car.wheels = 4;
console.log(car);
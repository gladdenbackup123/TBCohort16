let car = {
    name:'Honda City 2023',
    price: 1500000,
    engine: '1498cc',
    mileage: '18kmpl'
}
console.log(car);
Object.seal(car);
car.price = 1600000;
car.mileage = 19;
car.wheels = 4;
console.log(car);
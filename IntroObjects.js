//create an object - 1. Object Literal Syntax
let thar = {
    brand: "Mahindra",
    wheels: 4,
    price: 1800000,
    color: 'Black',
    engine: 'bs6 2.0'
};

//console.log(thar);

let tommy = {
    type: "Golden Retriever",
    color: "Brown",
    age: 2,
    gender: 'Male',
    weight: 20
};
// console.log(tommy);
// console.log(tommy.gender);
// console.log(tommy.type);

//create object - 2. Object Constructor
let pen = new Object();
pen.color = "Blue";
pen.price = 10;
pen.type = "Ballpoint";

//console.log(pen);
pen.price = 20;
//console.log(pen);

//create object - 3. Using a constructor function
function Phone(model,price,year){
    this.model = model;
    this.price = price;
    this.year = year;
}

let iphone15 = new Phone('15ProMax',100000,2024);
console.log(iphone15);
let samsung = new Phone('S22Ultra',75000,2024);
samsung.price = 80000;
console.log(samsung);
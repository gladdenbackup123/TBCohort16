let marks = [92,94,96];
let [english,maths,science] = marks;
//console.log(english,maths,science);

let percentages = [84,72,96];
percentages.sort(); //72 84 96
console.log(percentages);
let [third,second,first] = percentages;

console.log(first,second,third);


//Destructuring Objects - Unpacking 
let person = {
    name:'Gladden',
    age:'24',
    city:'Mumbai'
};

let {name,age,city} = person;
console.log(name,age,city);


//Dynamic Property access
let x = 'emailid';

let student = {
    name:'Gladden',
    rollNo:'60',
    [x]:'gladdenrumao@gmail.com' //dynamically using object values
};

console.log(student);
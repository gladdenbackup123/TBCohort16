let person = {name:"Viren",age:21,city:"Mumbai"};

console.log(person.city);

let rectangle = {
    length : 5,
    breadth : 7,
    area : function(){
        return this.length*this.breadth;
    }
}

console.log(rectangle.length);
console.log(rectangle.breadth);
console.log("Area of Rectangle",rectangle.area());

function Animal(name){
    this.name = name;
}

Animal.prototype.speak = function(){
    console.log(this.name , "is making some noise!");
}

let myDog = new Animal("tommy");
console.log(myDog.name);
myDog.speak();

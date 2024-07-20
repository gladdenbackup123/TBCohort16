class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(this.name , "is making some noise!");
    }
}

let myDog = new Animal("Sheru");
console.log(myDog.name);
myDog.speak();
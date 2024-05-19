class Dog{
    constructor(name,color,breed,age){
        this.name = name;
        this.color = color;
        this.breed = breed;
        this.age = age;
    }
    eat(food){
        console.log(this.name+" is eating : "+food);
    }
    sleep(){
        console.log(this.name+" is sleeping...zzzzz");
    }
}
let tommy = new Dog('tommy','brown','Golden Retriever',2);
let sheru = new Dog('sheru','black','German Sheperd',1);

console.log(tommy);
tommy.eat('bone');
tommy.sleep();
sheru.eat('roti');
sheru.sleep();
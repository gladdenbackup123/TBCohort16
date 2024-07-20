let catPrototype = {
    speak : function(){
        console.log(this.name , "is meowinggg.");
    },
    sleep : function(){
        console.log(this.name , "is sleepinggg.");
    }
}

let cat = Object.create(catPrototype);
cat.name = "Lucy";
cat.speak();
cat.sleep();




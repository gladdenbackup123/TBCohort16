function CreateCounter(){
    let count = 0; // private variable
    return{
        increment(){
            count++;
            console.log(count);
        },
        decrement(){
            count--;
            console.log(count);
        }
    }
}

let counter = new CreateCounter();
counter.increment();
counter.decrement();




let employee = {
    name:'Ramesh',
    age:30,
    role:'Backend Developer',
    incrementAge(){
        this.age += 1;
    }
}
console.log(employee);
employee.incrementAge();
console.log(employee);
employee.incrementAge();
console.log(employee);
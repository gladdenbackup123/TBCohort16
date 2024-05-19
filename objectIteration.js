let person = {
    name : 'John',
    age : 25,
    status : 'single',
    weight : 72,
    city : 'Pune'
};

//console.log(person.city);

// for(let key in person){
//     console.log(key +': '+person[key]); //value
// }


//Object.keys()
let keys = Object.keys(person);
console.log(keys);

//Object.values()
let values = Object.values(person);
console.log(values);

//Object.entries()
let entries = Object.entries(person);
console.log(entries);

// for each on Object.keys()
keys.forEach(key=>{
    console.log(key+':'+person[key]);
})

//for..of on Object.entries()
for(let entry of entries){
    console.log(entry);
}

for(let [key,value] of entries){
    console.log(key+':'+value);
}
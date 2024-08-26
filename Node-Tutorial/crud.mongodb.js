use("crudDB");
console.log(db);

db.createCollection("employee");

//Create
// db.employee.insertOne({
//     "name":"Satish",
//     "Designation":"Software Engineer",
//     "age":28,
//     "salary":150000
// })

// db.employee.insertMany([
//     {
//         "name": "Satish",
//         "Designation": "Software Engineer",
//         "age": 28,
//         "salary": 150000
//     },
//     {
//         "name": "Amit",
//         "Designation": "Senior Developer",
//         "age": 32,
//         "salary": 200000
//     },
//     {
//         "name": "Priya",
//         "Designation": "Project Manager",
//         "age": 35,
//         "salary": 250000
//     },
//     {
//         "name": "Ravi",
//         "Designation": "DevOps Engineer",
//         "age": 30,
//         "salary": 180000
//     },
//     {
//         "name": "Anjali",
//         "Designation": "UI/UX Designer",
//         "age": 27,
//         "salary": 140000
//     },
//     {
//         "name": "Karan",
//         "Designation": "Full Stack Developer",
//         "age": 29,
//         "salary": 160000
//     },
//     {
//         "name": "Neha",
//         "Designation": "Quality Analyst",
//         "age": 31,
//         "salary": 145000
//     },
//     {
//         "name": "Vikas",
//         "Designation": "Database Administrator",
//         "age": 34,
//         "salary": 210000
//     },
//     {
//         "name": "Meera",
//         "Designation": "HR Manager",
//         "age": 36,
//         "salary": 190000
//     },
//     {
//         "name": "Arjun",
//         "Designation": "Software Tester",
//         "age": 26,
//         "salary": 135000
//     }
// ]
// )


//Read
let a = db.employee.find({"salary":150000});
//console.log(a);
//console.log(a.count());

let b = db.employee.findOne({"salary":160000});
// console.log(b);

let c = db.employee.find({"age":32});
console.log(c);

//Update
db.employee.updateOne({"salary":150000},{$set:{"salary":180000}})

db.employee.updateOne({"age":31},{$set:{"age":32}})

db.employee.updateMany({"Designation":"Software Engineer"},{$set:{"Designation":"Senior Software Engineer"}})


//Delete
db.employee.deleteOne({"Designation":"Quality Analyst"});

db.employee.deleteMany({"age":25});

db.employee.deleteOne({"name":"Satish"});


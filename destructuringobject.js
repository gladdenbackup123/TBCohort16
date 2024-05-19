let user = {
    id:1,
    username:"glad",
    email:"gladdenrumao@gmail.com",
    profile:{
        firstName:"Gladden",
        lastName:"Rumao",
        age:"24"
    }
}

let {id,username,email,profile:{firstName,lastName,age}} = user;
console.log(lastName);
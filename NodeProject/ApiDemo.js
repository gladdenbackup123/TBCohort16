let axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/pos/2')
    .then(response =>{
        console.log(response.data);
    })
    .catch(error=>{
        console.log("Error fetching data :",error);
    })
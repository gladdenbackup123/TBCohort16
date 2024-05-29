let dogButton = document.getElementById('dog-btn');
dogButton.addEventListener('click',dogButtonhander);

function dogButtonhander(){
    fetch('https://dog.ceo/api/breeds/image/random')
        .then( response =>{
            if(response.status===200)
                console.log("Request Successfull");
            else
                console.log("Error processing request");
            return response.json();
        })
        .then( data => {
            console.log(data);
            let output = `<img src = '${data.message}'>`

            let dogImage = document.getElementById('dog-image');
            dogImage.innerHTML = output;
        })
}


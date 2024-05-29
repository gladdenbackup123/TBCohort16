let fetchbtn = document.getElementById('fetchbtn');
fetchbtn.addEventListener('click', buttonClickhandler);

function buttonClickhandler(){
    let xhr = new XMLHttpRequest();

    xhr.open('GET','https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies', true); 

    xhr.onload = function(){
        if(this.status === 200){ 
            let data = this.responseText;
            let response = JSON.parse(data);

            console.log(response);

            let output = "<ul>"

            for(movie of response){
                console.log(movie.Title);

                output += `<li>${movie.Title}</li>`;
            }
            output += "</ul>";

            let content = document.getElementById('content');
            content.innerHTML = output;
        }
        else{
            console.log("Some error has occured , data not found");
        }
    }
    xhr.send();
}
let actorsButton = document.getElementById('fetchbtn-actors');
actorsButton.addEventListener('click', actorsButtonHandler);
function actorsButtonHandler(){
    let xhr = new XMLHttpRequest();

    xhr.open('GET','actors.json',true); //non-blocking

    xhr.onload = function(){
        console.log(this.status);
        if(this.status === 200){
            //console.log(this.responseText);
            let response = JSON.parse(this.responseText);
            let output = "<ul>";
            for(actor of response){
                output += `<li>${actor.name}</li>`;
            }
            output += "</ul>";

            let contentActors = document.getElementById('content-actors');
            contentActors.innerHTML = output;
        }
        else{
            console.log("Error , data not found");
        }
    }

    //send the request
    xhr.send();

}

let singersButton = document.getElementById('fetchbtn-singers');
singersButton.addEventListener('click', singersButtonHandler);
function singersButtonHandler(){
    let xhr = new XMLHttpRequest();

    xhr.open('GET','singers.json',true); //non-blocking

    xhr.onload = function(){
        console.log(this.status);
        if(this.status === 200){
            //console.log(this.responseText);
            let response = JSON.parse(this.responseText);
            let output = "<ul>";
            for(singer of response){
                output += `<li>${singer.name}</li>`;
            }
            output += "</ul>";

            let contentSingers = document.getElementById('content-singers');
            contentSingers.innerHTML = output;
        }
        else{
            console.log("Error , data not found");
        }
    }

    //send the request
    xhr.send();

}
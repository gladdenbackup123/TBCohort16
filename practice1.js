function addPara(){
    let newPara = document.createElement("p");
    newPara.innerHTML = "This is the New paragraph!";

    let div = document.getElementById('container');
    div.appendChild(newPara);
}


function changeText(){
    let para = document.getElementById('text');
    para.innerHTML = "GG in the CHAT!";
}

function changeStyle(){
    let para = document.getElementById('text2');
    para.style.color = "red";
    para.style.fontSize = "32px";
    para.style.fontWeight = "bold";
}

function hideContent(){
    let para = document.getElementById('text3');
    if(para.style.display === "block"){
        para.style.display = "none"
        hideBtn.innerHTML = "Show"
    }
    else{ //none
        para.style.display = "block"
        hideBtn.innerHTML = "Hide"
    }
}

let hideBtn = document.getElementById('hide-btn');
hideBtn.addEventListener('click', hideContent );


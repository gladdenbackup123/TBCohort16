// console.log("Data Request sent!");

// console.log("Loading....");

// setTimeout(() => {
//     console.log("Data fetched successfully!");
// }, 3000);




// setTimeout(() => {
//     console.log("Hello I will appear after 5 secs")
// }, 5000);

// function greet(){
//     console.log("Welcome to this website!");
//     alert("Welcome to this website!");
// }
// setTimeout( greet , 2000);


function updateText(){
    let text = document.getElementById('text');
    text.innerHTML = "Until Salman Khan arrives!"
}
setTimeout( updateText , 3000);

function changeColor(){
    let text = document.getElementById('color-text');
    text.style.color = "red";
    text.style.fontSize = "30px";
    
}
setTimeout( changeColor , 3000);


function moveBox(){
    let box = document.getElementById('box');
    box.style.left = "200px";
}
setTimeout(moveBox,5000);

// function disappearBox(){
//     let box = document.getElementById('box');
//     box.style.display = "none";
// }
// setTimeout(disappearBox,5000);




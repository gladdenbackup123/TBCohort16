function myfunction(){
    console.log("Box1 is clicked");
}

function mouseOver(){
    console.log("You are on Box 2");
}

function mouseMove(){
    console.log("Mouse Moved - Box 3");
}

function keyPress(){
    console.log("Key is pressed , input updated");
}

function keyDown(){
    console.log("Key is down");
}

function keyUp(){
    console.log("Key is Up");
}

let box4 = document.getElementById('box4');

box4.addEventListener( 'click', (e) => {
    console.log("Box 4 is clicked", e.clientX , e.clientY);
    // console.log("Box4 is clicked");
})

// box4.addEventListener( 'click', () => {
//     console.log("Box4 is clicked - second event.");
// })

let box5 = document.getElementById('box5');
box5.addEventListener('mousemove',()=>{
    console.log("Box 5 - Mouse Moved");
})

let input = document.getElementById('inputtext');
input.addEventListener('keypress', (e)=>{
    console.log(e.key,"is pressed")
})
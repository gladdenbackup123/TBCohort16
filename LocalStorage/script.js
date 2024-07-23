document.getElementById('nameInput').value = localStorage.getItem('username');

function setData(){
    let name = document.getElementById('nameInput').value;
    localStorage.setItem('username',name);

    let city = document.getElementById('cityInput').value;
    localStorage.setItem('city',city);

    let age = document.getElementById('ageInput').value;
    localStorage.setItem('age',age);
}

function getData(){
    // let username = localStorage.getItem('username');
    // document.getElementById('user-data').textContent = username;

}
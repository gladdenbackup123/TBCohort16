// import logo from './logo.svg';
import './App.css';

function App() {
  let name = "Gladden Rumao";
  let city = "Mumbai";
  let url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsSJjiNKmXVkvy-9LuRs2VmnMih2qIk2TCAg&s";
  let person ={
    firstName : "Kapil",
    lastName : "Sharma",
    imgUrl : "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSNev36z81j4H5M4gqqWztUpYWki0VqQzBpXYXi3uKLaqdv-ko3"
  }

  function greet(user){
    if(user){
      return <h1>Good Morning {user}!</h1>
    }
    else{
      return <h1>Good Morning Stranger!</h1>
    }
  }

  function printDay(day){
    return <p>Today is {day}</p>
  }

  let title = "Introduction to Hooks!";
  return (
    <>

      <h1>Today's Lecture - {title} </h1>
      <div>{printDay("Monday")}</div>

      <div>{greet("Viren")}</div>

      <div className='name'>Hello {name}</div>
      <p>I am from {city}</p>
      <img src={url}></img>

      <h1>Welcome to {person.firstName} {person.lastName} Show!!</h1>
      <img src={person.imgUrl} />
    </>
  );
}

export default App;

{/* <>
      <h1>Learning React!</h1>
      <div className="main">Hello World</div>
      <div>We are learning about JSX in React.</div>
    </> */}
/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Gladden!!
        </a>
        <p>Introduction to JSX in React</p>
      </header>
    </div> */

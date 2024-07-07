import logo from './logo.svg';
import './App.css';
import Numbers from './Numbers';
import Objects from './Objects';
import UsersList from './UsersList';
import Even from './Even';

function App() {
  const numbers = [1,2,3,4,5];

  const users = [
    {
        id: 1,
        name: 'John Doe',
        city: 'New York'
    },
    {
        id: 2,
        name: 'Jane Smith',
        city: 'Toronto'
    },
    {
        id: 3,
        name: 'Michael Johnson',
        city: 'London'
    },
    {
        id: 4,
        name: 'Emily Davis',
        city: 'Sydney'
    },
    {
        id: 5,
        name: 'David Brown',
        city: 'Auckland'
    }
  ];


  return (
    <div className="App">
      {/* <Numbers data={numbers}/> */}
      <Objects/>

      <UsersList users={users}/>

      <Even/>
    </div>
  );
}

export default App;

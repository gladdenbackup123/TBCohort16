import logo from './logo.svg';
import './App.css';
import FetchGithubUser from './FetchGithubUser';
import Nasa from './Nasa';
import AxiosMovieData from './AxiosMovieData';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Fetch Github Repositories</h1>
        <FetchGithubUser/> */}
        {/* <Nasa/> */}

        <AxiosMovieData/>
      </header>
    </div>
  );
}

export default App;

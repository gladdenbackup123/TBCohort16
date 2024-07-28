import logo from './logo.svg';
import './App.css';
import { Suspense,lazy } from 'react';
import Navbar from './Components/Navbar';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Footer from './Footer';
import ErrorPage from './Components/ErrorPage';
const Home = lazy(()=> import('./Components/Home'));
const Campus = lazy(()=> import('./Components/Campus'));
const About = lazy(()=> import('./Components/About'));
const Placements = lazy(()=> import('./Components/Placements'));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/placements",
      element: <Placements/>
    },
    {
      path: "/campus",
      element: <Campus/>
    },
    {
      path:"*",
      element : <ErrorPage/>
    }
  ])

  return (
    <div className="App">
      <header>
        <Navbar/>
        {/* <h1>Aflatoon University</h1> */}
        <Suspense fallback={<div>Loading....</div>}>
            <RouterProvider router={router}/>
        </Suspense>
        
        {/* <Footer/> */}
      </header>

    </div>
  );
}

export default App;

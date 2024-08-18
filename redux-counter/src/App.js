import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { decrement, increment , reset} from './counterSlice';

function App() {
  const count = useSelector(state=>state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter with Redux!</h1>
      <h2>{count}</h2>

      <button onClick={()=>dispatch(increment())}>Increment Count</button>
      <button onClick={()=>dispatch(decrement())}>Decrement Count</button>
      <button onClick={()=>dispatch(reset())}>Reset Count</button>
    </>
  );
}

export default App;

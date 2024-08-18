import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTopping, toggleGluten } from './pizzaSlice';

function App() {
  const pizza = useSelector(state => state.pizza);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Pizza</h1>
      {pizza.toppings.map(topping =>(
          <div key={topping}>{topping}</div>
        ))}

      <button onClick={()=> dispatch(addTopping('pepperoni'))}>Add Pepperoni</button>
      <button onClick={()=> dispatch(addTopping('olives'))}>Add Olives</button>
      <button onClick={()=> dispatch(addTopping('Cheese'))}>Add Cheese</button>
      
    </>
  );
}

export default App;

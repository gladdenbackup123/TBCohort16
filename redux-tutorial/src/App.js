import logo from './logo.svg';
import './App.css';
import { addTopping,addSauce } from './pizzaSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const pizza = useSelector(state => state.pizza)
  const dispatch = useDispatch();
  return (
    <>
      <h1>Welcome to Gladden's Pizza!</h1>
      <h2>Choose your Pizza Toppings!</h2>
      <h3>Your Toppings :</h3>
      {pizza.toppings.map((topping)=>(
        <div key={topping}>{topping}</div>
      ))}
      <h3>Your Sauces :</h3>
      {pizza.sauces.map((sauce)=>(
        <div key={sauce}>{sauce}</div>
      ))}

      <button onClick={()=>dispatch(addTopping('Olives'))}>Add Olives</button>
      <button onClick={()=>dispatch(addTopping('Mushroom'))}>Add Mushroom</button>
      <button onClick={()=>dispatch(addTopping('Extra Cheese'))}>Add Extra Cheese</button>

      <button onClick={()=>dispatch(addSauce('Barbeque Sauce'))}>Add Barbeque Sauce</button>
      <button onClick={()=>dispatch(addSauce('Sweet Chilli Sauce'))}>Add Sweet Chilli Sauce</button>

    </>
  );
}

export default App;

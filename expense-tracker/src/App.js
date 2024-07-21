import logo from './logo.svg';
import './App.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
import ExpenseList from './ExpenseList';
import Filter from './Filter';

function App() {
  const[expenses,setExpenses] = useState([]);
  const[filter,setFilter] = useState('all');

  const filteredExpenses = filter === 'all' ? expenses : expenses.filter(exp=>exp.category===filter)

  function addExpense(expense){
    setExpenses([...expenses,expense]);
  }

  return (
    <div className="App-header">
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense}/>
      <Filter setFilter={setFilter}/>
      <ExpenseList filteredExpenses={filteredExpenses}/>
    </div>
  );
}

export default App;

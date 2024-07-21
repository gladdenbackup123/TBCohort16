import React, { useState } from "react";

function ExpenseForm({addExpense}){
    const [title,setTitle] = useState('');
    const [amount,setAmount] = useState('');
    const [category,setCategory] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        // addExpense({title:vegetable , amount:150 , category: food})
        addExpense({id:Date.now() ,title,amount,category});
        setTitle('');
        setAmount('');
        setCategory('');
    }

    return(
        <div className="expense-form-container">
            {/* <h2>Add New Expense!</h2> */}
            <form onSubmit={handleSubmit} className="expense-form">
                <label>Expense Title : </label>
                <input 
                    type ="text" 
                    placeholder="Enter the title"
                    value = {title}
                    onChange={(e)=>setTitle(e.target.value)}
                    required
                    />
                <br/>
                <label>Amount : </label>
                <input 
                    type ="text" 
                    placeholder="Enter the amount"
                    value={amount}
                    onChange={(e)=>setAmount(e.target.value)}
                    required
                    />
                <br/>
                <label>Category : </label>
                <select value={category} onChange={(e)=>setCategory(e.target.value)} required>
                    <option value='' disabled>Select Category</option>
                    <option value='food'>Food</option>
                    <option value='transport'>Transport</option>
                    <option value='entertainment'>Entertainment</option>
                    <option value='utility'>Utility</option>
                    <option value='others'>Others</option> 
                </select>
                <br/>
                <br/>
                <button type="submit">Submit</button>
            </form>
            <hr/>
        </div>
    )
}

export default ExpenseForm;
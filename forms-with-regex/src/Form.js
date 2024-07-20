import React from "react";
import { useState } from "react";
import './App.css';

function Form(){
    const [email,setEmail] = useState('');
    const [emailError,setEmailError] = useState('');

    const [password,setPassword] = useState('');
    const [phone,setPhone] = useState('');
    const [phoneError,setPhoneError] = useState('');
    // const phoneRegex = /^[0-9]{10}$/;
    const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    const emailRegex = /.+@.+\..+/;


    function handleSubmit(e){
        e.preventDefault();
        
        if(!validateEmail(email)){
            setEmailError('Please enter correct email address!');
            console.log('Invalid Email')
        }
        else{
            setEmailError('');
            console.log('Valid email',email);
        }
        
    
        if(!validatePhone(phone)){
            setPhoneError('Invalid Phone Number');
            console.log('Invalid Phone Number');
        }
        else{
            setPhoneError('');
            console.log('valid phone number',phone);
        }

        console.log(password);
    }

    const validatePhone = (phone)=> phoneRegex.test(phone);
    const validateEmail = (email)=> emailRegex.test(email);
    return(
        <form onSubmit={handleSubmit}>
            <h1>Personal Information</h1>
            <label>Name : </label>
            <input placeholder="Enter your name!" />
            <br/>
            <label>Email : </label>
            <input 
                onChange={(e)=>setEmail(e.target.value)}
                type="email" 
                placeholder="Enter your email!" 
                required/>
            <br/>
            <div className='error'>{emailError}</div>
            <label>Phone : </label>
            <input 
                onChange={(e)=>setPhone(e.target.value)}
                placeholder="Enter your phone number!"/>
            <br/>
            <div className='error'>{phoneError}</div>
            <label>Password : </label>
            <input 
                onChange={(e)=>setPassword(e.target.value)}
                type="password" 
                placeholder="Enter your password!" 
                required/>
            <br/>
            <br/>
        
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;
import React from "react";

function Calculator(){
    let a = 12;
    let b = 6;
    function addition(a,b){
        let ans = a+b;
        return <p>{ans}</p>
    }
    function subtraction(a,b){
        let ans = a-b;
        return <p>{ans}</p>
    }
    function multiplication(a,b){
        let ans = a*b;
        return <p>{ans}</p>
    }
      function division(a,b){
        let ans = a/b;
        return <p>{ans}</p>
    }
    return (
        <div>
            <p>Addition of {a} and {b} is {addition(a,b)} </p>
            <p>Subtraction of {a} and {b} is {subtraction(a,b)} </p>
            <p>Multiplication of {a} and {b} is {multiplication(a,b)} </p>
            <p>Division of {a} and {b} is {division(a,b)} </p>
        </div>
    );
}

export default Calculator;
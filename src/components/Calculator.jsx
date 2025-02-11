import {React, useState} from "react";
import './styles.css';

const Calc = () => {


 const [equation, setEquation] = useState("");
 const [result, setResult] = useState("");

 const handle = (e) =>{
    // console.log(e.target.innerHTML)
    setEquation(equation + e.target.innerHTML);
 }

 const clear = () => {
    setEquation("");
    setResult();
 }

 const handleOperators = (e) => {
    if(equation.charAt(equation.length-1) === e.target.innerHTML){
        setEquation(equation.slice(0,-1));
        setEquation(equation + e.target.innerHTML);
    }else{
        setEquation(equation + e.target.innerHTML);
    }
 }

 const operation = () => {
    if(equation === ""){
        setResult("Error");
    }else if(isNaN(eval(equation))){
        setResult("NaN")
    }else if(!isFinite(eval(equation))){
        setResult("Infinity")   
    }
    
    
    
    else{

    const answer = eval(equation);
    setResult(answer);
    }
 }

    return (
        <div>
        <h1>React Calculator</h1><br/>
        <input  value={equation}/><br/><br/><br/>
        <div className="result">
            {result ? <p>{result}</p> : <br/>}
        </div>
        <div className="buttons">
            <button onClick={(e) => handle(e)}> 7</button>  
            <button onClick={(e) => handle(e)}> 8</button>
            <button onClick={(e) => handle(e)}> 9</button>
            <button onClick={(e) => handleOperators(e)}> +</button><br/>
            <button onClick={(e) => handle(e)}> 4</button>
            <button onClick={(e) => handle(e)}> 5</button>
            <button onClick={(e) => handle(e)}> 6</button>
            <button onClick={(e) => handleOperators(e)}> -</button><br/>
            <button onClick={(e) => handle(e)}> 1</button>
            <button onClick={(e) => handle(e)}> 2</button>
            <button onClick={(e) => handle(e)}> 3</button>
            <button onClick={(e) => handleOperators(e)}> *</button><br/>
            <button onClick={clear}> C</button>
            <button onClick={(e) => handle(e)}> 0</button>
            <button onClick={operation}> =</button>
            <button onClick={(e) => handleOperators(e)}> /</button>

        </div>
        </div>
    );
}

export default Calc;
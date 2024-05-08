import { useState } from "react";
import { useImperativeHandle } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App(){
  const [step,setStep]=useState(1);
  let [test,setTest]=useState({name:"pranto"});
  const[isOpen,setisOpen]=useState(true);


  function handlePrevious(){
    alert("Previous");
    if(step>1)
    setStep(step-1);
  
  }
  function handleNext(){
    alert("Next");
    if(step<3)
    setStep(step+1);
    setTest({name:"sam"});
  }

 
return(

<div>
  <button className="close" onClick={()=>setisOpen(!isOpen)}>
    &times;
  </button>
  {isOpen && (
      <div className="steps">
      <div className="numbers">
        <div className={`${step>=1 ? "active":""}`}>1</div>
        <div className={`${step>=2 ? "active":""}`}>2</div>
        <div className={`${step>=3 ? "active":""}`}>3</div>
      </div>
    <p className="message">
      Step {step}:{messages[step-1]}
      {test.name}
    </p>
    <div className="buttons">
      <button style={{backgroundColor:"#7905ff"}}
      onClick={handlePrevious}>
      previous
      </button>
      <button style={{backgroundColor:"#7905ff"}} 
      onClick={handleNext}>
        next
        </button>
    </div>
    </div>
  )}
</div>

  );
}
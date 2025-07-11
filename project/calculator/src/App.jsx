import style from'./App.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Display from './components/Display';
import ButtonContainer from './components/ButtonContainer';
import { useState } from 'react';
import { evaluate } from 'mathjs';
function App() {
  const [calVal,setcalVal]=useState("");


  const onButtonClick=(buttonText)=>{
    if(buttonText=== 'C'){
      setcalVal("")
    }
    else if(buttonText=== '='){
      const result = evaluate(calVal);
      setcalVal(result.toString());
    }
    else{
      const newDisplayValue=calVal+buttonText;
      setcalVal(newDisplayValue);
    }
  }
  return (
    <>
      <div className={style.calculator}>
          <Display displayValue={calVal}/>
          <ButtonContainer onButtonClick={onButtonClick}/>
      </div>
    </>
  )
}

export default App

import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement=useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment())
    
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement())
  };

  const handleAdd=()=>{
    dispatch(counterActions.add(inputElement.current.value,))
    inputElement.current.value="";
  }

  const handleSubtract=()=>{
    dispatch(counterActions.subtract(inputElement.current.value))
    inputElement.current.value="";
  }

  const handlePrivacyToggle=()=>{
    dispatch(privacyActions.toggle())
  }
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={handlePrivacyToggle}
          
        >
          Privacy Toggle
        </button>
        
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center input_row">
        <input type="text" className="input" placeholder="Enter Number" ref={inputElement}/>
        <button type="button" className="btn btn-warning" onClick={handleAdd}>
          Add
        </button>
        <button type="button" className="btn btn-info" onClick={handleSubtract}>
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;

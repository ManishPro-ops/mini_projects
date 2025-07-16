import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement=useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAdd=()=>{
    dispatch({type:"ADD",payload:{
        num:inputElement.current.value,
    }})
    inputElement.current.value="";
  }

  const handleSubtract=()=>{
    dispatch({type:"SUBTRACT",payload:{
        num:inputElement.current.value,
    }})
    inputElement.current.value="";
  }

  const handlePrivacyToggle=()=>{
    dispatch({type:"PRIVACY_TOGGLE"})
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

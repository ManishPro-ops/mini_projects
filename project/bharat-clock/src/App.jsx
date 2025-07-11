import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [time,setTime] = useState(new Date());

  useEffect(()=>{
      const intervalId=setInterval(()=>{              
        setTime(new Date());
      },1000);
      
      return ()=>{
        clearInterval(intervalId);
        console.log("cleaning up of useEffect hook cancelled the interval")
      }
  },[])

  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold text-body-emphasis">WELCOME TO BHARAT SAMAY</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          this is the current time: {time.toLocaleDateString()} -{" "}
          {time.toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
}

export default App;

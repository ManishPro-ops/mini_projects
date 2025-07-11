import Heading from "./components/Heading.jsx";
import FoodItems from "./components/FoodItems.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";
import Container from "./components/Container.jsx";
import Inputtext from "./components/Inputtext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  let [foodItems, setfoodItems] = useState([]);


  const onKeyDown=(event)=>{
    if(event.key==='Enter'){
      let newfooditem= event.target.value;
      let updateditems=[...foodItems,newfooditem];
      setfoodItems(updateditems);
      console.log("enter food item is " + newfooditem)
    }
  }

  return (
    <>
      <Container>
        <Heading />
        <Inputtext handleKeydown={onKeyDown} />
        {/* <p>{texttoshow}</p> */}
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>

      {/* <Container>
    <p> this is being used to explain the use of props.children</p>
    </Container> */}
    </>
  );
}

export default App;

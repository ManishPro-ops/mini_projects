import { useState } from "react";
import Item from "./Item";
function FoodItems({ items }) {

    let [activeitems,setactiveitems]=useState([]);

    let onBuybutton=(item,event)=>{
        let newItems=[...activeitems,item];
        setactiveitems(newItems);
        console.log(`${item} is bought`)
    }
  return (
    <>
      <ul className={` list-group `}>
        {items.map((item) => (
          <Item
            key={item}
            foodItem={item}
            bought={activeitems.includes(item)}
            buttonClickedwith={(event) => onBuybutton(item,event)}
          />
        ))}
      </ul>
    </>
  );
}

export default FoodItems;

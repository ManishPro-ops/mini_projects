import style from "./Item.module.css";
const Item = ({ foodItem,bought,buttonClickedwith }) => {
  
  return (
    <>
      <span>
        <li className={`${style.foodname} list-group-item ${bought && "active" }`}>
          {foodItem}
          <button
            className={`${style.btn} btn btn-success`}
            onClick={buttonClickedwith}
          >
          btn
          </button>
        </li>
      </span>
    </>
  );
};
export default Item;

import style from "./ButtonContainer.module.css";
import Button from "./Button";
const ButtonContainer = ({onButtonClick}) => {
  let buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className={style.buttonsContainer}>
        <Button ButtonName={buttonName} onClick={onButtonClick}/>
      </div>
    </>
  );
};

export default ButtonContainer;

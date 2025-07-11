import style from "./Button.module.css";

const Button = ({ButtonName,onClick}) => {
  return (
    <>
      {ButtonName.map((name,index) => 
        (<button key={index} className={style.button} onClick={()=>onClick(name)}>{name}</button>)
      )}
    </>
  );
};

export default Button;

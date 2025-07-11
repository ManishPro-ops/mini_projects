import style from "./Inputtext.module.css";

const Inputtext = ({ handleKeydown }) => {
  return (
    <>
      <input
        type="text"
        className={style.text}
        placeholder="enter your text"
        onKeyDown={handleKeydown}
      />
    </>
  );
};

export default Inputtext;

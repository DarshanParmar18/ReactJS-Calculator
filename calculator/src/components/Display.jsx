import style from "./Display.module.css";

const Display = ({ displayVal }) => {
  return (
    <input
      type="text"
      className={`${style.inpt}`}
      value={displayVal}
      readOnly
    />
  );
};
export default Display;

import style from "./BtnContainer.module.css";
const BtnContainer = ({ btnClicked }) => {
  const btnarr = [
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
    "9",
    "=",
    "0",
    ".",
  ];

  return (
    <div className={style.container}>
      {btnarr.map((btn) => (
        <button
          key={btn}
          className={style.button}
          onClick={() => btnClicked(btn)}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};
export default BtnContainer;

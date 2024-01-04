import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./App.module.css";
import Display from "./components/Display";
import BtnContainer from "./components/BtnContainer";

function App() {
  let [calVal, setCalVal] = useState("");
  const handleBtnclicked = (btn) => {
    console.log(`btn clicked ${btn}`);
    if (btn == "C") {
      setCalVal("");
    } else if (btn == "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      let newDisplayVal = calVal + btn;
      setCalVal(newDisplayVal);
    }
  };
  return (
    <>
      <div className={`${style.container}`}>
        <Display displayVal={calVal} />
        <BtnContainer btnClicked={handleBtnclicked} />
      </div>
    </>
  );
}

export default App;

// import './App.css';
import { useState } from "react";
import styles from "./App.module.css"
import Form from "./component/Form";
import Hover from "./component/Hover";
function App() {
  const [selected, setSelected] = useState("Top");
  const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };
   const handleMouseLeave = () => {
      setIsHover(false);
   };

  function updateValue (value) {
    setSelected(value);
  }
  return (
    <div className={styles.App}>
      <Form update={updateValue} value={selected}/>
      <Hover value={selected} hover={isHover} enter={handleMouseEnter} leave={handleMouseLeave}/>
    </div>
  );
}

export default App;

import React, { useEffect, useState} from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
  const [pomes, setPomes] = useState([])
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    fetch("http://localhost:8004/poems")
    .then(r => r.json())
    .then(setPomes)
  }, [])
  
  function handleVisible() {
    setVisible(!visible)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={handleVisible}>Show/hide new poem form</button>
        {visible ? <NewPoemForm pomes={pomes} setPomes={setPomes} /> : null}
      </div>
      <PoemsContainer pomes={pomes} />
    </div>
  );
}

export default App;

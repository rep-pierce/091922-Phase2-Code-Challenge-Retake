import React from "react";
import Poem from "./Poem";

function PoemsContainer({ pomes }) {

  const createPoems = pomes.map(pome => <Poem key={pome.id} poem={pome} />)

  return (
    <div className="poems-container">
      {createPoems}
    </div>
  );
}

export default PoemsContainer;

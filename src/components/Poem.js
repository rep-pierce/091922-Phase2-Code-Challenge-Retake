import React, { useState } from "react";

function Poem({ poem }) {
  const [status, setStatus] = useState(true)

  function bookStatus(){
    if(status===true){
      return 'Mark as Read'
    }else {
      return 'Read'
    }
  }

  function handleClick(){
    setStatus(!status)
  }

  return (
    <div>
      <h3>{poem.title}</h3>
      <p>{poem.content}</p>
      <p>
        <strong>- By {poem.author}</strong>
      </p>
      <button onClick={handleClick}>{bookStatus()}</button>
    </div>
  );
}

export default Poem;

import React, { useState } from "react";

function NewPoemForm({ pomes, setPomes }) {
  const[title, setTitle] = useState('')
  const[author, setAuthor] = useState('')
  const[content, setContent] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    const newPoem = {
      title,
      author,
      content
    }
    
    fetch('http://localhost:8004/poems', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPoem),
    })
    .then(r => r.json())
    .then(data => setPomes([...pomes, data]))
  }

  return (
    <form className="new-poem-form" onSubmit={handleSubmit}>
      <input placeholder="Title" id="title" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Author" id="author" value={author} onChange={e => setAuthor(e.target.value)} />
      <textarea id="masterpiece" placeholder="Write your masterpiece here..." rows={10} value={content} onChange={e => setContent(e.target.value)} />
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;

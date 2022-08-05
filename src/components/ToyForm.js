import React, { useState } from "react";

function ToyForm({onHandleSubmit}) {
  const [form, setForm] = useState({
    name : "",
    image : "",
    likes: 0
  })
  function handleChange(e) {
    const {name, value} = e.target
    setForm({...form, [name]: value})
  }
  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(form)
    })
    .then(r=>r.json())
    .then(toy => onHandleSubmit(toy))
  }
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={form.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={form.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;

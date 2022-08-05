import React, { useState } from "react";

function ToyCard({toy, onHandleDelete, onUpdateToy}) {
  const {id, name, image, likes} = toy
  const [updateLikes, setUpdateLikes] = useState(likes)
  function handleClick() {
    fetch(`http://localhost:3001/toys/${id}`,{
      method: "DELETE"
    })
    .then(r=>r.json())
    .then(()=> onHandleDelete(id))
  }
  function handleLikes() {
    setUpdateLikes(preLikes => preLikes + 1)
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({likes : updateLikes})
    })
    .then(r=>r.json())
    .then(toy => onUpdateToy(toy))
  }
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{updateLikes} Likes </p>
      <button className="like-btn" onClick={handleLikes}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;

import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  function handleSubmit(newToy){
    setToys([...toys, newToy])
  }
  function handleDelete(id){
    const deleteToys = toys.filter(toy => toy.id !== id)
    setToys(deleteToys)
  }
  function updateToy(updatedToy) {
    const updatedToys = toys.map(toy => {
      if (toy.id === updatedToy.id) {
        return updatedToy
      } else {
        return toy
      }
    })
  }

  useEffect(()=> {
    fetch("http://localhost:3001/toys")
    .then(r=>r.json())
    .then(data => setToys(data))
  },[])

  return (
    <>
      <Header />
      {showForm ? <ToyForm onHandleSumbit={handleSubmit}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onHandleDelete={handleDelete} onUpdateToy={updateToy}/>
    </>
  );
}

export default App;

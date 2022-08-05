import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onHandleDelete, onUpdateToy}) {
  const renderToy = toys.map(toy => {
    return <ToyCard key={toy.id} toy={toy} onHandleDelete={onHandleDelete} onUpdateToy={onUpdateToy}/>
  })
  return (
    <div id="toy-collection">{renderToy}</div>
  );
}

export default ToyContainer;

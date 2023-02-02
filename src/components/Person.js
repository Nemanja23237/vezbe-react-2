import React from "react";
// Pitanje za onclikc
const Person = ({person,deletePerson}) => {
  return (
    <div className="card">
      <h3>{person.name}</h3>
      <h3>{person.job}</h3>
      <h3>{person.gender}</h3>
      <button className="delete-btn" onClick={()=>{deletePerson(person.id)}}>Delete</button>
      
    </div>
  );
};

export default Person;

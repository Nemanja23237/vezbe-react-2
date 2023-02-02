import React from "react";
import Person from "./Person";

const PersonList = ({data, deletePerson})=>{

    const ListOfPersons = data.map(person =>{
        return(
            <Person deletePerson={deletePerson} person={person} key={person.id}/>
        )
    })


    return(
        <div className="main-box">
            {ListOfPersons}
        </div>
    )
}

export default PersonList;
import React, {Component} from "react";
import PersonList from "./components/PersonsList";
import Newpesron from "./components/NewPerson";

//styles
import "./App.css"

class App extends Component {

state= {
    
    data : [
        { name: "Danilo", job: "developer", gender: "mail",id:1},
        { name: "Ivan", job: "game", gender: "mail",id:2 },
        { name: "Ana", job: "game", gender: "femail",id:3},
        { name: "Nemanja", job: "developer", gender: "mail",id:4},
        { name: "Jelena", job: "game", gender: "femail",id:5},
      ]
}  

insertNewPerson = (person) => {
    person.id = Math.floor(Math.random()*(10000 - 10)+10);
    let dataCopy = this.state.data.concat(person)
    this.setState({
        data : dataCopy
    })
}

deletePerson = (id) =>{
    let filteredData = this.state.data.filter(el=>{
        return el.id !== id;
    });
    this.setState({
        data : filteredData
    })
}

    render() {
        return ( 
            <div  >
                <PersonList deletePerson={this.deletePerson} data={this.state.data}/>
                <Newpesron insertNewPerson={this.insertNewPerson}/>
            </div>
        );
    }
}

export default App;


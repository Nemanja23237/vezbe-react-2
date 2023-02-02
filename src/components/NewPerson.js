import React, {Component} from "react";
import "../css/NewPerson.css"

class Newpesron extends Component{
     state = {
        name : "",
        job : "",
        gender : ""
     }
    setValues = (e)  =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }

      save = (e) =>{
        e.preventDefault();
        this.props.insertNewPerson(this.state)
      }

    render(){
        return(
            <div className="form-box" onSubmit={this.save}>
                <form action="">
                    <input className="field" id="name" onChange={this.setValues} type="text" placeholder="Name" /><br/>
                    <input className="field" id="job" onChange={this.setValues} type="text" placeholder="Job" /><br/>
                    <input className="field" id="gender" onChange={this.setValues} type="text" placeholder="Gender" /><br/>
                    <button className="btn" type="submit">Save</button>
                </form>
            </div>
        )
    }
}

export default Newpesron;
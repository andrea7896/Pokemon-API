import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import faker from 'faker';
import Form from './Form';
import Date from './Form/Date';


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: "Andrea",
      inputValue:""
    }
  } 

  printName = () => {
    const nombre = faker.name.firstName()
    this.setState({
      name: nombre
    })
  }

  onChange = (event) => {
    console.log(event.target.value);
    this.setState({
      inputValue: event.target.value
    })
  }

  addName = (event) => {
    console.log(event.target)
    const {inputValue} = this.state;
    if(inputValue !== ''){
      this.setState({
        name : inputValue,
        inputValue : ""
      })
      
    }
  }

  render(){
  return (
    <div className="App">
      <div onMouseOver={this.printName}>
        <span>{this.state.name}</span>
      </div>
      
     <button onClick={this.printName}>Crea nombre aleatorio</button>
     <br></br>
      <br></br>
     <div>
       <span>Agregar nombre</span>
       <input value={this.state.inputValue} onChange={this.onChange}></input>
       <button value="" onClick={this.addName}>Agregar mi nombre</button>

       <br></br>
       <br></br>

       <Form></Form>
       
     </div>
    </div>
    );
  }
}

export default App;

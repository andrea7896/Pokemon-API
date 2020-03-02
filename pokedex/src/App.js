import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Search from './Components/Search'
import Profile from './Components/Profile'
import Pokedex from './Components/Pokedex'
import Menu from './Components/Menu'
import {Container,Row,Col,Alert} from 'reactstrap'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      pokemons:[]
    }
  }

  catchPokemon = (pokemon) => {
     this.state.pokemons.push(pokemon)
     this.setState({
       pokemons : this.state.pokemons
     })
     alert("El pokemon ha sido atrapado")
  }

  deletePokemon = (index) => {
    this.state.pokemons.splice(index,1)
    this.setState({
      pokemons : this.state.pokemons
    })
    console.log(index)
    alert("El pokemon ha sido liberado")
  }
 
  render(){
   
    return <Router >
      <Menu />
      <Container >
      <Row>
        <Col md='2'></Col>
        <Col md='8'>
        <Switch>
         <Route path="/pokedex">
           <Pokedex pokemons ={this.state.pokemons} delete={this.deletePokemon}></Pokedex>
         </Route>

         <Route path="/profile">
            <Profile pokemons={this.state.pokemons}></Profile>
         </Route>
         
         <Route path="/">
           <Search catchPokemon={this.catchPokemon}></Search>
         </Route>
        </Switch>
        </Col>
        <Col md='2'></Col>
      </Row>
      </Container>

    </Router>

 
  }

  
}

export default App;

import React,{Component} from 'react'
import {
    Link
  } from "react-router-dom";
  import 'font-awesome/css/font-awesome.min.css';

class Menu extends Component{
  
    render(){
      const styles = {
        container:{
          display:"flex",
          flexDirection:"row",
          justifyContent:"space-between",
          alignItems:"center",
          backgroundColor:"blue",
          padding:"20px",
          color:"yellow"
        }
        ,
        li:{
          color:"black",
          fontWeight:"bold"
        }
    }
        return <nav >
        <ul style={styles.container}>
          <li>
          <i className="fa fa-heart"></i>
            <Link style={styles.li} to="/"> Search</Link>
          </li>
          <li>
          <i className="fa fa-heart"></i>
            <Link style={styles.li} to="/pokedex"> Pokedex</Link>
          </li>
          <li>
          <i className="fa fa-heart"></i>
          <Link style={styles.li} to="/profile"> Profile</Link>
          </li>
        </ul>
      </nav>
    }
}

export default Menu
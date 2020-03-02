import React,{Component} from 'react'
import { Row, Col, Container} from 'reactstrap'

class Profile extends Component{
    
    render(){
        const {pokemons} = this.props
        var styles = {
            container:{
                display:"flex",
                alignItems:"center"
            }
        }
        return <Container>
            <h1>Pokemons Profile</h1>
            <br></br>
        {
            pokemons.map(p => 
             (
                 <Row>
                     <Col md="2" style={styles.container}>
                        <h2>{p.name}</h2>
                     </Col>
                     <Col md="2">
                         <label>Normal</label>
                         <img alt={p.name} src={p.sprites.front_default}></img>
                         <img  src={p.sprites.back_default}></img>
                    </Col>
                    {
                        p.sprites.front_female ? <Col md="2">
                        <label>Female</label>
                        <img  src={p.sprites.front_female}></img>
                        <img  src={p.sprites.back_female}></img>
                   </Col> : <Col md="2">
                        <label>Female</label>
                        <p>No existe</p>
                   </Col>
                    }
                    
                    <Col md="2">     
                         <label>Shiny</label>
                         <img  src={p.sprites.front_shiny}></img>
                         <img  src={p.sprites.back_shiny}></img>
                         </Col>     
                 </Row>
                 
             ))
             }
     </Container>
    }
}

export default Profile
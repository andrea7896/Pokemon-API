import React,{Component} from 'react'
import { Form, FormGroup, Label,Input,Container,Row,Col,Button,Alert} from 'reactstrap';
import * as yup from 'yup'
import { getPokemon } from '../../Services/pokemonServices'
import Pokemon from './Pokemon'

class Search extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            isNameValid: true,
            pokemonExists:true,
            pokemon: null
        }
    }

    onChange = (e) =>{
        const name = e.target.value
        this.setState({
            name
        })
    }

     onClick = async (e) =>{
        e.preventDefault()
        const {name : poke} = this.state
        let schema = yup.object().shape({
            pokemon: yup.string().min(3).required()
        })
        //validacion de campo
        const isValid = await schema.isValid({pokemon : poke})

        this.setState({
            isNameValid : isValid,
            pokemonExists:true
        })

        
        if(!isValid) return 

        //buscamos en la API
        let state = {}
        try{
        const {data} = await getPokemon(poke)
             state ={
               pokemonExists:true,
               pokemon:data
            }
        }catch(error){
            state.pokemonExists = false
        }

        this.setState(state)
    }

    render(){
        return <Container>
            <h1>Catch'em all!</h1>
            <Row>
                <Col md="12">
                    <Form>
                        <FormGroup>
                            <Label for="pokemon">
                                Pokemon a buscar:
                            </Label>
                            <Input type="text" name="pokemon" placeholder="Nombre" value={this.state.name} onChange={this.onChange}
                            invalid={!this.state.isNameValid}>
                            </Input>
                            {!this.state.pokemonExists && <Alert color="danger">
                                El pokemon no existe
                            </Alert> 
                            }
                            
                            <Button outline color="danger" block onClick={this.onClick}>Buscar</Button>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
            {
                this.state.pokemon && <Pokemon pokemon={this.state.pokemon} catchPokemon = {this.props.catchPokemon} />
               
            }
            
        </Container>
    }
}

export default Search
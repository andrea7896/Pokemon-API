import React,{Component} from 'react'
import CustomInput from './input'
import { Label, Input, FormGroup,Form} from 'reactstrap'
//Firstday, Lastname, Bday,phone,email

class CustomForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            firstNameHasError:false,
            lastNameHasError:false,
            phoneHasError:false,
            Lastname:'',
            birthDay:'',
            phone:'',
            email:''
        }
    }
    
    onFirstNameChange = (event) => {
        this.setState({firstName: event.target.value})
    }

    onLastNameChange = (event) => {
        this.setState({
            Lastname:event.target.value
        })
    }

    onPhoneChange = (event) => {
        this.setState({
            phone:event.target.value
        })
    }

    validate = (event) =>{
        event.preventDefault()
        const {firstName , Lastname, phone} = this.state

        let errors = {}
        if(firstName === "" ){
           errors.firstNameHasError = true
        }

        if(Lastname == ""){
            errors.lastNameHasError = true
        }

        if(!phone.match(/^\d{10}$/)){
            errors.phoneHasError = true
        }

        console.log(errors)
        this.setState(errors);
    }

    

    render(){
        const {
            firstName,
            Lastname,
            birthDay,
            phone,
            email,
            lastNameHasError,
            firstNameHasError,
            phoneHasError
            } = this.state

        return <Form>
            <h1>Form</h1>
             <CustomInput 
             title={"Nombre"} 
             value={firstName}
             onChange={this.onFirstNameChange} 
             placeholder={"Nombre"}
             hasError={firstNameHasError}>
             </CustomInput>

            <CustomInput 
            title={"Apellido"} 
            value={Lastname}
            onChange={this.onLastNameChange} 
            placeholder={"Apellido"}
            hasError={lastNameHasError}>
            </CustomInput>
            
            <CustomInput
            title={"Tel."}
            value={phone}
            onChange={this.onPhoneChange}
            placeholder={"Telefono"}
            hasError={phoneHasError}
            >
            </CustomInput>

            <FormGroup>
            <Label for="exampleDatetime">Datetime</Label>
            <Input
            type="date"
            name="date"
            id="exampleDate"
            placeholder="date placeholder"
            />
            </FormGroup>
            
           <h2>Salu2</h2>
           <h2>cali2 y pelu2</h2>
           <h3>staaaap plis</h3>
           <h3>staaaap plis</h3>
            <br></br>
            <button onClick={this.validate}>Validar información</button>
        </Form>
    }
}

export default CustomForm 
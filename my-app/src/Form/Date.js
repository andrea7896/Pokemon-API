import React, {Component} from 'react'
import ReactDatePicker from "react-datepicker";
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
 

export default class DatePicker extends Component{
    constructor(props){
        super(props)
        this.state={
            date: new Date()
        }
    }

    handleChange = date => {
        this.setState({
            startDate: date
        })
        
    }

    render(){
        return <ReactDatePicker selected={this.state.startDate} onChange={this.handleChange}>

        </ReactDatePicker>
    }

}
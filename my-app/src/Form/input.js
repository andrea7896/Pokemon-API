import React, {Component} from 'react'
import './style.css'


function Input(props){
    const {
        title,
        value,
        onChange,
        placeholder = "Llena este campo",
        hasError
    } = props
    return  <>
            <span>{title}</span>
            <input 
            value={value} 
            onChange={onChange}
            placeholder={placeholder}
            ></input>
            {
                hasError ? <span className='hasError'>x</span> : null
            }
            <br></br> 
            </>
}

export default Input
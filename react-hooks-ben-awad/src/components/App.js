import React, {useState,useEffect} from 'react';
import {useForm} from './useForm.js';

const App = () => {
const [values, handleChange] = useForm({ email: "", password:""});
    
useEffect(() => {
    console.log("render");
},[values.password])

    return (
        <div>
          <input name="email" value-={values.email} onChange= {handleChange}/>
          <input name="Pass" value-={values.password} onChange= {handleChange}/>
        </div>
    )
}

export default App; 
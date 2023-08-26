import React, { useRef, useState } from 'react'
// import { apiClient } from '../../shared/services/apiClient';
import { Button, Container, TextField } from '@mui/material';
import { apiClient } from '../../shared/services/apiClient';
export const Register = () => {
    const [message, setMessage] = useState('');
    const emailRef = useRef();
    const pwdRef = useRef();
    const nameRef = useRef();
    const phoneRef = useRef();
    const doRegister = async ()=>{
        const userInfo = {
            'email': emailRef.current.value,
            'password': pwdRef.current.value,
            'name': nameRef.current.value,
            'phone': phoneRef.current.value,
        }
        try{

  
        const response = await apiClient.post("http://localhost:1234/register", userInfo);
        setMessage(response.data.message);
        console.log('Response is ', response);
        console.log('UserInfo ', userInfo);
        }
        catch(err){
            setMessage('Register Fail...');
            console.log('Error is ', err);
        }
    }
  return (
   <Container>
    <p>{message}</p>
    <TextField inputRef = {emailRef} id="outlined-basic" label="Email" variant="outlined" />
    <TextField inputRef = {pwdRef} id="outlined-basic" type="password" label="Password" variant="outlined" />
    <TextField inputRef = {nameRef} id="outlined-basic" label="Name" variant="outlined" />
    <TextField inputRef = {phoneRef} id="outlined-basic" label="Phone" variant="outlined" />
    <Button onClick={doRegister} variant="contained">Register</Button>
   </Container>
  )
}

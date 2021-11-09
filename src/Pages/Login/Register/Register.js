import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import login from '../../../images/login.png';
import useAuth from './../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const {user, registerUser, isLoading, authError} = useAuth();

    const handleOnBlur = e => {
         const field = e.target.name;
         const value = e.target.value;
         const newLoginData = {...loginData};
         newLoginData[field] =  value;
         console.log(newLoginData);
         setLoginData(newLoginData);
         console.log(loginData)
    }

    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert('Your password did not match')
            return;
        }
        console.log(loginData)
        registerUser(loginData.Email, loginData.password, loginData.name, history)
        e.preventDefault();
    } 
    return (
        <Container>
        <Grid container spacing={2}>
            <Grid  sx={{mt: 8}} item xs={12} md={6} >
            <Typography style={{fontWeight:'bold'}} variant="body1" gutterBottom>
               Register
            </Typography>
           { !isLoading && <form onSubmit={handleLoginSubmit}>
            <TextField  
                sx={{ width: '75%', m: 1 }}
                id="standard-basic" 
                label="Your Name" 
                name= "name"
                onBlur={handleOnBlur}
                variant="standard" />
            <TextField  
                sx={{ width: '75%', m: 1 }}
                id="standard-basic" 
                label="Your Email" 
                name= "Email"
                type="email"
                onBlur={handleOnBlur}
                variant="standard" />
<br/>       <TextField  
                sx={{ width: '75%', m: 1 }}
                id="standard-basic" 
                label="Your Pass" 
                type="password"
                name= "password"
                onBlur={handleOnBlur}
                variant="standard" /> 
<br/>       <TextField  
                sx={{ width: '75%', m: 1 }}
                id="standard-basic" 
                label="re-password" 
                type="password"
                name= "password2"
                onBlur={handleOnBlur}
                variant="standard" /> <br/>
             <Button  sx={{ width: '75%', m: 1 }} type="submit" variant='contained'>Submit</Button>   <br/>
             <NavLink style={{textDecoration: 'none'}} to="/login">Already Registered? Please Login!</NavLink>
            </form>}

            {isLoading && <CircularProgress/>}
            {user?.email && <Alert severity="success">User Created successfully</Alert>}
            {authError && <Alert severity="error">{authError}</Alert>}
            </Grid>
            <Grid item xs={12} md={6}>
                <img style={{width:'100%'}} src={login} alt=""/>
            </Grid>
        </Grid>
       </Container>
    );
};

export default Register;
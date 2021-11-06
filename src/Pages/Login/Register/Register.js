import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const handleOnChange = e => {
         const field = e.target.name;
         const value = e.target.value;
         const newLoginData = {...loginData};
         newLoginData[field] =  value;
         setLoginData(newLoginData);
    }

    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert('Your password did not match')
            return;
        }
        e.preventDefault();
    }
    return (
        <Container>
        <Grid container spacing={2}>
            <Grid  sx={{mt: 8}} item xs={12} md={6} >
            <Typography style={{fontWeight:'bold'}} variant="body1" gutterBottom>
               Register
            </Typography>
            <form onSubmit={handleLoginSubmit}>
            <TextField  
                sx={{ width: '75%', m: 1 }}
                id="standard-basic" 
                label="Your Email" 
                name= "Email"
                onChange={handleOnChange}
                variant="standard" />
<br/>       <TextField  
                sx={{ width: '75%', m: 1 }}
                id="standard-basic" 
                label="Your Pass" 
                type="password"
                name= "password"
                onChange={handleOnChange}
                variant="standard" /> 
<br/>       <TextField  
                sx={{ width: '75%', m: 1 }}
                id="standard-basic" 
                label="re-password" 
                type="password"
                name= "password2"
                onChange={handleOnChange}
                variant="standard" /> <br/>
             <Button  sx={{ width: '75%', m: 1 }} type="submit" variant='contained'>Submit</Button>   <br/>
             <NavLink style={{textDecoration: 'none'}} to="/login">Already Registered? Please Login!</NavLink>
            </form>
            </Grid>
            <Grid item xs={12} md={6}>
                <img style={{width:'100%'}} src={login} alt=""/>
            </Grid>
        </Grid>
       </Container>
    );
};

export default Register;
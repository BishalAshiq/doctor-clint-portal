import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, signInWithGoogle, isLoading, authError} = useAuth(); 

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
         const field = e.target.name;
         const value = e.target.value;
         const newLoginData = {...loginData};
         newLoginData[field] =  value;
         setLoginData(newLoginData);
    }

    const handleLoginSubmit = e =>{
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }

    const handleGoogleSignIn = ()=>{
         signInWithGoogle(location, navigate)
    }
    return (
       <Container>
        <Grid container spacing={2}>
            <Grid  sx={{mt: 8}} item xs={12} md={6} >
            <Typography variant="body1" gutterBottom>
               Login 
            </Typography>
            <form onSubmit={handleLoginSubmit}>
            <TextField  
                sx={{ width: '75%', m: 1 }}
                id="standard-basic" 
                label="Your Email" 
                name= "Email"
                onBlur={handleOnChange}
                variant="standard" />
<br/>       <TextField  
                sx={{ width: '75%', m: 1 }}
                id="standard-basic" 
                label="Your Pass" 
                type="password"
                name= "password"
                onBlur={handleOnChange}
                variant="standard" /> <br/>
             <Button  sx={{ width: '75%', m: 1 }} type="submit" variant='contained'>Submit</Button>   <br/>
             <NavLink style={{textDecoration: 'none'}} to="/register">New User? Please Register!</NavLink>
             {isLoading && <CircularProgress/>}
            {user?.email && <Alert severity="success">User Created successfully</Alert>}
            {authError && <Alert severity="error">{authError}</Alert>}
            </form>
            <p>--------</p>
            <Button onClick={handleGoogleSignIn} variant='contained'>Google Sign In</Button>
            </Grid>
            <Grid item xs={12} md={6}>
                <img style={{width:'100%'}} src={login} alt=""/>
            </Grid>
        </Grid>
       </Container>
    );
};

export default Login;
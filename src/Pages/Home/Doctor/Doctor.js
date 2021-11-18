import { Grid } from '@mui/material';
import React from 'react';

const Doctor = ({doctor}) => {
    const {name, image} = doctor;
    return (
        <div>
            <Grid item xs={12} sm={6} md={4}>
                <img 
                style={{width:'200px', height:'300px', marginRight:'100px', borderRadius:'20px'}} 
                src={`data:image/jpeg;base64,${image}`} alt=''/>
               <h3>{name}</h3>     
            </Grid>
        </div>
    );
};

export default Doctor;
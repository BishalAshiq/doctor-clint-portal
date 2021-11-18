import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/doctors')
        .then(res=>res.json())
        .then(data=> setDoctors(data))
    } ,[])
    return (
        <div>
            <h2 style={{marginTop:'50px'}}>our Doctors: {doctors.length}</h2>
            <Container style={{display:'grid', gridTemplateColumn:'repeat(3, 1fr)'}}>
            <Grid container spacing={2}>
            {
                doctors.map(doctor=><Doctor
                key={doctor._id}
                doctor={doctor}
                >

                </Doctor>)
            }
             </Grid>
            </Container>
        </div>
    );
};

export default Doctors;
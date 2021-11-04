import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background:`url(${bg})`,
    backgroundColor: 'rgba(40, 58, 75)',
    backgroundBlendMode:'darken, luminosity',
    marginTop: 200
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img style={{width: 400, marginTop: '-120px'}} src={doctor} alt=""/>
        </Grid>
        <Grid item xs={12} md={6} sx={{display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center'}}>
         <Box>
         <Typography variant="h6" sx={{mb:5}} style={{color: '#5CE7ED'}}>
            Appointment
          </Typography>
          <Typography variant="h4" style={{color:'white'}}>
             Make an Appointment 
          </Typography>
          <Typography variant="h6" style={{color:'white', fontSize: 14, fontWeight: 400, marginBottom: '30px'}}>
          A patient typically presents a set of complaints to the physician.
          </Typography>
          <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Learn More</Button>
         </Box>
        </Grid>
      </Grid>
    </Box>
    );
};

export default AppointmentBanner;
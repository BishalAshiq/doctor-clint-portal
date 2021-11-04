import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Box, Button, Container, Typography } from '@mui/material';

const bannerBg = {
    background: `url${bg}`
}

const verticalCenter = {
    display:'flex',
    alignItems:'center',
    height: 400
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} style={{ ...verticalCenter,textAlign: 'left'}}>
         <Box>
         <Typography variant="h3" sx={{mt:'20px'}}>
            Your New Smile <br/>
            Start Here
         </Typography>
         <Typography variant="h6" sx={{my:5, fontSize:13, fontWeight:300, color: 'gray', my:'20px'}}>
         The physician's expertise comes from his knowledge of what is healthy and normal contrasted with knowledge and experience.
         </Typography>
         <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Get Appointment</Button>
         </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{width:'350px', marginTop:'20px'}} src={chair} alt=""/>
        </Grid>
      </Grid>
    </Container>
    );
};

export default Banner;
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
{
    name:'Fluoride Treatment',
    description: 'Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist.',
    img: fluoride
},
{
    name:'Cavity Filling',
    description: ' You may feel a bit of a sting, but thats a reaction from the local anesthetic when it starts to block the nerve signals to stop the pain.',
    img: cavity
},
{
    name:'Teeth Whitening',
    description: 'The good news is that yellow teeth can become white again. Part of the process takes place at home, while the other part is in your dentists office.',
    img: whitening
},
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
         <Container>
         <Typography sx={{ m:2, color: 'success.main' }} variant="h5" component="div">
           Our Services
        </Typography>
         <Typography sx={{ fontWeight: 'bold', my: 2 }} variant="h4" component="div">
           Services We Provide
        </Typography>
         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         {
             services.map(service=><Service
             key={service}
             service={service}
             ></Service>)
         }
        </Grid>
         </Container>
      </Box>
    );
};

export default Services;
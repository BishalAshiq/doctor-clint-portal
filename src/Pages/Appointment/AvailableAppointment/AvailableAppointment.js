import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
  id: 1,
  name: 'Teeth Orthodontics',
  time: '6.00 PM - 9.00PM',
  space: 4 
},
    {
  id: 2,
  name: 'Cosmetic Dentistry',
  time: '10.05 AM - 11.300AM',
  space: 9 
},
    {
  id: 3,
  name: 'Teeth Cleaning',
  time: '5.00 PM - 6.30PM',
  space: 10 
},
    {
  id: 4,
  name: 'Cavity Protection',
  time: '7.00 PM - 8.30PM',
  space: 13 
},
    {
  id: 5,
  name: 'Pediatric Dental',
  time: '6.00 PM - 7.00 PM',
  space: 7 
},
    {
  id: 6,
  name: 'Oral Surgery',
  time: '7.00 PM - 8.00PM',
  space: 10 
 }
]

const AvailableAppointment = ({date}) => {
    return (
        <Container>
            <Typography sx={{color:'info.main', mb: 2}} variant="h4" gutterBottom component="div">Available Appointment on {date.toDateString()}</Typography> 
            <Grid container spacing={2}>
                {
                    bookings.map(booking=><Booking
                    key={booking.id}
                    booking={booking}
                    ></Booking>)
                }
            </Grid> 
        </Container>
    );
};

export default AvailableAppointment;
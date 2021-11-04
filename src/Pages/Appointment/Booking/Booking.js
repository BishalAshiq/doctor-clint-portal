import { Button, Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking}) => {
    const {name, space, time} = booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
       <>
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3}>
            <Typography sx={{color:'info.main', fontWeight:'bold'}} variant="h5" gutterBottom component="div">
               {name}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
               {time}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
               {space} Space Available 
            </Typography>
            <Button onClick={handleBookingOpen} variant="contained" sx={{backgroundColor:'info.main', my:4}}>Book Appointment</Button>
            </Paper>
        </Grid>  
            <BookingModal
            booking={booking}
            openBooking={openBooking}
            handleBookingClose={handleBookingClose}
            >   
            </BookingModal>
       </>
       
    );
};

export default Booking;
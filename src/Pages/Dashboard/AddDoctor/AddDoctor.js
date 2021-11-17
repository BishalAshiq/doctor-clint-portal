import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    return (
        <div>
            <h3>Add a Doctor</h3>
            <form>
            <TextField 
            sx={{width: '50%'}}
            label="Name" 
            required
            onChange={e=> setName(e.target.value)}
            variant="standard" />
            <br/>
            <TextField 
            sx={{width: '50%'}}
            label="Email"
            type="email" 
            required
            onChange={e=> setEmail(e.target.value)}
            variant="standard" />
            <br/>
            <Input 
            accept="image/*"
             id="contained-button-file" 
              type="file" /> <br/>

            <Button variant="contained" type='submit'>
                ADD DOCTOR
            </Button>
            </form>
        </div>
    );
};

export default AddDoctor;
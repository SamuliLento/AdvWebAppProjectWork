import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useState } from "react";

function Register ({jwt}) {

    const [userData, setUserData] = useState ({});

    /* Register new user */
    const submit = (e) => {
        e.preventDefault();
        
        fetch("/api/users/register", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData),
            mode: "cors"
        })
            .then(response => response.json());
    }

    /* Modifies userData when user writes on textfield */
    const handleChange = (e) => {
        setUserData({...userData, [e.target.id]: e.target.value});
    }

    return (
        <Box align="left" sx={{ padding: 1 }}>
            <Typography variant="h4">Register</Typography>
            {!jwt && 
                <Box component="form" onSubmit={submit} onChange={handleChange} sx={{ padding: 1 }}>
                    <TextField id="username" type="string" label="Username" variant="outlined"></TextField>
                    <TextField id="password" type="password" label="Password" variant="outlined"></TextField>
                    <Button id="submit" type="submit" variant="contained">Register</Button>
                </Box>
            }
            {jwt &&
                <Typography>You are already logged in!</Typography>
            }
        </Box>
    )
}

export default Register;

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useState } from "react";
import { Buffer } from "buffer";

function Login ({jwt, setJwt, setUser}) {

    const [userData, setUserData] = useState ({});

    /* Login with existing user */
    const submit = (e) => {
        e.preventDefault();
        
        fetch("/api/users/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData),
            mode: "cors"
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if(data.token) {
                    setJwt(data.token);
                    setUser(JSON.parse(Buffer.from(data.token.split(".")[1], "base64").toString()));
                }
            })
    }

    /* Modifies userData when user writes on textfield */
    const handleChange = (e) => {
        setUserData({...userData, [e.target.id]: e.target.value});
    }

    return (
        <Box align="left" sx={{ padding: 1 }}>
            <Typography variant="h4">Login</Typography>
            {!jwt && 
                <Box component="form" onSubmit={submit} onChange={handleChange} sx={{ padding: 1 }}>
                    <TextField id="username" type="string" label="Username" variant="outlined"></TextField>
                    <TextField id="password" type="password" label="Password" variant="outlined"></TextField>
                    <Button id="submit" type="submit" variant="contained">Login</Button>
                </Box>
            }
            {jwt &&
                <Typography>You are already logged in!</Typography>
            }
        </Box>
    )
}

export default Login;

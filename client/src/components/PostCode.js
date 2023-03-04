import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useState } from "react";

function PostCode ({user}) {

    const [codeData, setCodeData] = useState ({});

    /* Post new code snippet */
    const submit = (e) => {
        e.preventDefault();
        
        fetch("/api/codes/post", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(codeData),
            mode: "cors"
        })
            .then(response => response.json());
    }

    /* Modifies codeData when user writes on textfield */
    const handleChange = (e) => {
        setCodeData({...codeData, [e.target.id]: e.target.value, user: user.username});
    }

    return (
        <Box align="left" sx={{ padding: 1 }}>
            <Typography variant="h5">Post code snippets</Typography>
            <Box component="form" onSubmit={submit} onChange={handleChange} sx={{ padding: 1 }}>
                <TextField id="title" type="string" label="Title" variant="outlined"></TextField>
                <TextField id="content" type="string" label="Code" variant="outlined"></TextField>
                <Button id="submit" type="submit" variant="contained">Post</Button>
            </Box>
        </Box>
    )
}

export default PostCode;

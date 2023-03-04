import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useState } from "react";

function PostComment ({title, user}) {

    const [commentData, setCommentData] = useState ({});

    /* Post new comment */
    const submit = (e) => {
        e.preventDefault();
        
        fetch("/api/comments/post", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(commentData),
            mode: "cors"
        })
            .then(response => response.json());
    }

    /* Modifies commentData when user writes on textfield */
    const handleChange = (e) => {
        setCommentData({...commentData, [e.target.id]: e.target.value, title: title, user: user.username});
    }

    return (
        <Box align="left" sx={{ padding: 1 }}>
            <Typography variant="h5">Post comments</Typography>
            <Box component="form" onSubmit={submit} onChange={handleChange} sx={{ padding: 1 }}>
                <TextField id="content" type="string" label="Comment" variant="outlined"></TextField>
                <Button id="submit" type="submit" variant="contained">Comment</Button>
            </Box>
        </Box>
    )
}

export default PostComment;

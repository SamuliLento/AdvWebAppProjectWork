import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from "@mui/material/List";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { useState, useEffect } from "react";

function Comments ({title}) {

    const [comments, setComments] = useState([]);

    /* Get all comments on current code snippet */
    useEffect(() => {
        fetch("/api/comments/" + title)
            .then(response => response.json())
            .then(json => setComments(json))
    }, [title]);

    return (
        <Box align="left" sx={{ padding: 1 }}>
            <Typography variant="h5">Comments</Typography>
            <List>
                {comments.map((comment) => (
                    <ListItem key={comment._id}>
                        <Box sx={{ padding: 1, border: 1 , width: 0.3 }}>
                            <ListItemText primary={comment.user + ":"} secondary={comment.content}/>
                        </Box>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default Comments;

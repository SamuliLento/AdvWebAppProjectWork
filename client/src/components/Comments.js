import List from "@mui/material/List";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { useState, useEffect } from "react";

function Comments ({title}) {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch("/api/comments/" + title)
            .then(response => response.json())
            .then(json => setComments(json))
    }, [title]);

    return (
        <List>
            {comments.map((comment) => (
                <ListItem key={comment._id}>
                    <div>
                        <ListItemText primary={comment.user + ":"} secondary={comment.content}/>
                    </div>
                </ListItem>
            ))}
        </List>
    )
}

export default Comments;

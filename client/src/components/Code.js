import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Comments from "./Comments";
import PostComment from "./PostComment";

function Code({user}) {

    const {title} = useParams();
    const [code, setCode] = useState({});

    /* Get code snippet by title */
    useEffect(() => {
        fetch("/api/codes/" + title)
            .then(response => response.json())
            .then(json => setCode(json))
    }, [title]);

    return (
        <Box align="left" sx={{ padding: 1 }}>
            <Typography variant="h4">{code.title}</Typography>
            <Typography>{code.content}</Typography>
            <Comments title={code.title}/>
            {user.username ?
                <PostComment  title={code.title} user={user}/>
                : <Typography variant="h5" align="left">Login to comment</Typography>
            }
        </Box>
    )
}

export default Code;

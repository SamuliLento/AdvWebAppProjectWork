import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useState } from "react";

function PostComment ({title, user}) {

    const [commentData, setCommentData] = useState ({});

    const submit = (e) => {
        
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

    const handleChange = (e) => {
        setCommentData({...commentData, [e.target.id]: e.target.value, title: title, user: user.username});
    }

    return (
        <div>
            <form onChange={handleChange}>
                <TextField id="content" label="Comment" variant="outlined"></TextField>
                <Button id="submit" onClick={()=> submit()}>Submit</Button>
            </form>
        </div>
    )

}


export default PostComment;
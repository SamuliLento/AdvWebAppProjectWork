import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useState } from "react";

function PostCode ({user}) {

    const [codeData, setCodeData] = useState ({});

    const submit = (e) => {
        
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

    const handleChange = (e) => {
        setCodeData({...codeData, [e.target.id]: e.target.value, user: user.username});
    }

    return (
        <div>
            <form onChange={handleChange}>
                <TextField id="title" label="Title" variant="outlined"></TextField>
                <TextField id="content" label="Code" variant="outlined"></TextField>
                <Button id="submit" onClick={()=> submit()}>Submit</Button>
            </form>
        </div>
    )

}


export default PostCode;

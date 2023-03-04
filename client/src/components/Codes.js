import List from "@mui/material/List";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from "@mui/material/Button";

import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Codes () {

    const [codes, setCodes] = useState([]);

    /* Gets all code snippets from database on page load */
    useEffect(() => {
        fetch("/api/codes")
            .then(response => response.json())
            .then(json => setCodes(json))
    }, []);

    return (
        <List>
            {codes.map((code) => (
                <ListItem key={code._id}>
                    <div>
                        <Button component={Link} to={"/codes/" + code.title}>{code.title}</Button>
                        <ListItemText primary={code.user + ":"} secondary={code.content}/>
                    </div>
                </ListItem>
            ))}
        </List>
    )
}

export default Codes;

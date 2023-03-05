import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from "@mui/material/List";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from "@mui/material/Button";

import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Codes () {

    const [codes, setCodes] = useState([]);

    /* Gets all code snippets on page load */
    useEffect(() => {
        fetch("/api/codes")
            .then(response => response.json())
            .then(json => setCodes(json))
    }, []);

    return (
        <Box align="left" sx={{ padding: 1 }}>
            <Typography variant="h5">Code snippets</Typography>
            <List>
                {codes.map((code) => (
                    <ListItem key={code._id}>
                        <Box sx={{ padding: 1, border: "1px solid #0288d1", width: 1 }}>
                            <Button component={Link} to={"/codes/" + code.title} variant="outlined">{code.title}</Button>
                            <ListItemText primary={code.user + ":"} secondary={code.content}/>
                        </Box>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default Codes;

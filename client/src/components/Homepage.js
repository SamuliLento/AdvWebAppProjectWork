import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Codes from "./Codes";
import PostCode from "./PostCode";

function Homepage ({user}) {

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h3">Home</Typography>
            <Codes />
            {user.username ? 
                <PostCode user={user}/>
                : <Typography variant="h5" align="left">Login to post</Typography>
            }
        </Box>
    )
}

export default Homepage;

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

function Header ({jwt, setJwt, user, setUser}) {

    /* Removes jsonwebtoken and user */
    const logout = () => {
        setJwt("");
        setUser({});
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Button edge="start" color="inherit" component={Link} to="/">
                        Home
                    </Button>
                    <Typography sx={{ flexGrow: 1 }}></Typography>
                    {!jwt &&
                        <Button color="inherit" component={Link} to="/login">
                            Login
                        </Button>
                    }
                    {!jwt &&
                        <Button color="inherit" component={Link} to="/register">
                            Register
                        </Button>
                    }
                    {jwt &&
                        <Button color="inherit">
                            Welcome {user.username}
                        </Button>
                    }
                    {jwt &&
                        <Button color="inherit" onClick={()=> logout()}>
                            Logout
                        </Button>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;

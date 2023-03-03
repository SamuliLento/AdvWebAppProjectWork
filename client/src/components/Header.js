import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

function Header ({jwt, setJwt}) {

    const logout = () => {
        setJwt("");
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Button edge="start" color="inherit" component={Link} to="/">
                    Home
                </Button>
                {!jwt &&
                    <Button edge="start" color="inherit" component={Link} to="/login">
                        Login
                    </Button>
                }
                {!jwt &&
                    <Button edge="start" color="inherit" component={Link} to="/register">
                        Register
                    </Button>
                }
                {jwt &&
                    <Button edge="start" color="inherit" onClick={()=> logout()}>
                        Logout
                    </Button>
                }
            </Toolbar>
        </AppBar>
    )
}

export default Header
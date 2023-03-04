import './App.css';
import { Box } from '@mui/system';

import { useState, useEffect } from 'react';
import { Buffer } from "buffer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Homepage from './components/Homepage';
import Code from './components/Code';
import NotFoundPage from './components/NotFoundPage';
import Register from './components/Register';
import Login from './components/Login';

function App() {

    const [jwt, setJwt] = useState("");
    const [user, setUser] = useState({});

    /* Load jsonwebtoken and user from local storage */
    useEffect(() => {
        if (window.localStorage.getItem('jwt')) {
            setJwt(window.localStorage.getItem('jwt'));
            setUser(JSON.parse(Buffer.from(window.localStorage.getItem('jwt').split(".")[1], "base64").toString()));
        }
    }, []);

    /* Save jsonwebtoken to local storage */
    useEffect(() => {
        window.localStorage.setItem('jwt', jwt);
    }, [jwt]);

    return (
        <Router>
            <Box className="App" sx={{ bgcolor: '#cfe8fc' }}>
                <Header jwt={jwt} setJwt={setJwt}/>
                <h2>{jwt ? `Welcome ${user.username}!` : ""}</h2>
                <Routes>
                    <Route path="/" element={ <Homepage jwt={jwt} user={user}/> }/>
                    <Route path="/codes/:title" element={ <Code /> }/>
                    <Route path="/register" element={ <Register jwt={jwt}/> }/>
                    <Route path="/login" element= { <Login jwt={jwt} setJwt={setJwt} setUser={setUser}/> }/>
                    <Route path="*" element={ <NotFoundPage /> }/>
                </Routes>
            </Box>
        </Router>
    );
}

export default App;

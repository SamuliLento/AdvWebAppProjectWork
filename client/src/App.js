import './App.css';
import Box from '@mui/material/Box';

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
            <Box className="App"
                sx={{
                    padding: 2,
                    bgcolor: 'paper'
                }}>
                <Header jwt={jwt} setJwt={setJwt} user={user} setUser={setUser}/>
                <Routes>
                    <Route path="/" element={ <Homepage user={user}/> }/>
                    <Route path="/codes/:title" element={ <Code user={user}/> }/>
                    <Route path="/register" element={ <Register jwt={jwt}/> }/>
                    <Route path="/login" element= { <Login jwt={jwt} setJwt={setJwt} setUser={setUser}/> }/>
                    <Route path="*" element={ <NotFoundPage /> }/>
                </Routes>
            </Box>
        </Router>
    );
}

export default App;

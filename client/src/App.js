import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import NotFoundPage from './components/NotFoundPage';
import Register from './components/Register';
import Login from './components/Login';

function App() {

    const [jwt, setJwt] = useState("");
    const [user, setUser] = useState({});

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={ <Homepage /> }/>
                    <Route path="/register" element={ <Register /> }/>
                    <Route path="/login" element= { <Login setJwt={setJwt} setUser={setUser} jwt={jwt}/> }/>
                    <Route path="*" element={ <NotFoundPage /> }/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;

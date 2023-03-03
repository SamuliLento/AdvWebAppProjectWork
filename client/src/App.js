import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
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
                <Header jwt={jwt} setJwt={setJwt}/>
                <Routes>
                    <Route path="/" element={ <Homepage /> }/>
                    <Route path="/register" element={ <Register jwt={jwt}/> }/>
                    <Route path="/login" element= { <Login jwt={jwt} setJwt={setJwt} setUser={setUser}/> }/>
                    <Route path="*" element={ <NotFoundPage /> }/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;

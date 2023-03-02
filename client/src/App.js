import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import NotFoundPage from './components/NotFoundPage';
import Register from './components/Register';
import Login from './components/Login';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={ <Homepage /> }/>
                    <Route path="/register" element={ <Register /> }/>
                    <Route path="/users/login" element= { <Login /> }/>
                    <Route path="*" element={ <NotFoundPage /> }/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;

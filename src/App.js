import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import UserForm from './components/UserForm';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/edit/:id" element={<UserForm />} />
                <Route path="/create" element={<UserForm />} />
            </Routes>
        </Router>
    );
};

export default App;

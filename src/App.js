// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import RegisterPage from './components/RegisterPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FinalRegistrationForm from './components/FinalRegistrationForm';

function App() {
    return (
        <Router>
            {/* Now everything is inside Router */}
             <ScrollToTop />
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register/:slug" element={<RegisterPage />} />
                 <Route path="/final-registration" element={<FinalRegistrationForm />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

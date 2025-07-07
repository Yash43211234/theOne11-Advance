// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import RegisterPage from './HomeComponents/RegisterPage';
import Navigation from './HomeComponents/Navigation';
import Footer from './HomeComponents/Footer';
import ScrollToTop from './HomeComponents/ScrollToTop';
import FinalRegistrationForm from './HomeComponents/FinalRegistrationForm';
import Battle_of_music from './Events/Battle_of_music';

function App() {
    return (
        <Router>
            {/* Now everything is inside Router */}
             <ScrollToTop />
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                
                 <Route path="/final-registration" element={<FinalRegistrationForm />} />


                 {/* Events. */}
                 
                 <Route path="/battle-of-music" element={<Battle_of_music />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

// src/App.js (updated to include Navigation)
import React, { useState } from 'react';
import Navigation from './components/Navigation'; // <--- Add this import
import HeroSection from './components/HeroSection';
import CompetitionsSection from './components/CompetitionsSection';
import EpisodesSection from './components/EpisodesSection';
import EventsSection from './components/EventsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MessageBox from './components/MessageBox';

import './index.css'; // Import global styles

function App() {
    const [messageBox, setMessageBox] = useState({
        show: false,
        message: ''
    });

    const showMessage = (msg) => {
        setMessageBox({ show: true, message: msg });
    };

    const closeMessageBox = () => {
        setMessageBox({ show: false, message: '' });
    };

    return (
        <div className="App">
            <Navigation /> {/* <--- Add the Navigation component here */}
            <main>
                {/*
                 * The pt-16 (padding-top: 4rem) on HeroSection.module.css
                 * is intended to push the content down below the fixed navigation bar.
                 * If your navigation bar's height changes, adjust this value.
                 */}
                <HeroSection />
                <CompetitionsSection />
                <EpisodesSection showMessage={showMessage} />
                <EventsSection showMessage={showMessage} />
                <ContactSection showMessage={showMessage} />
            </main>
            <Footer />
            <MessageBox
                message={messageBox.message}
                show={messageBox.show}
                onClose={closeMessageBox}
            />
        </div>
    );
}

export default App;
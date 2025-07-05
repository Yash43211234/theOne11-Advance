// src/pages/Home.js
import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import CompetitionsSection from '../components/CompetitionsSection';
import EpisodesSection from '../components/EpisodesSection';
import EventsSection from '../components/EventsSection';
import ContactSection from '../components/ContactSection';
import MessageBox from '../components/MessageBox';

import '../index.css'; // global styles

function Home() {
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
        <div className="HomePage">
           
            <main>
                <HeroSection />
                <CompetitionsSection />
                <EpisodesSection showMessage={showMessage} />
                <EventsSection showMessage={showMessage} />
                <ContactSection showMessage={showMessage} />
            </main>
           
            <MessageBox
                message={messageBox.message}
                show={messageBox.show}
                onClose={closeMessageBox}
            />
        </div>
    );
}

export default Home;

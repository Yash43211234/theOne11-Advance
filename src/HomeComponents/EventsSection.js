// src/components/EventsSection.js
import React from 'react';
import styles from './EventsSection.module.css';

const EventCard = ({ imgSrc, imgAlt, title, date, venue, status, buttonText, message, showMessage }) => (
    <div className={styles.card}>
        <img src={imgSrc} alt={imgAlt} className={styles.cardImage} />
        <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{title}</h3>
            {date && <p className={styles.cardDetail}>Date: {date}</p>}
            {venue && <p className={styles.cardDetail}>Venue: {venue}</p>}
            {status && <p className={styles.cardDetail}>Status: {status}</p>}
            <button
                onClick={() => showMessage(message)}
                className={`${styles.cardButton} btn-primary`}
            >
                {buttonText}
            </button>
        </div>
    </div>
);

const EventsSection = ({ showMessage }) => {
    const events = [
        {
            imgSrc: "https://placehold.co/600x400/333333/ff69b4?text=Live+Show",
            imgAlt: "Event Thumbnail 1",
            title: "The One11 Showcase Live",
            date: "October 26, 2025",
            venue: "Virtual Arena",
            buttonText: "Get Tickets",
            message: "Tickets for The One11 Showcase Live are coming soon!"
        },
        {
            imgSrc: "https://placehold.co/600x400/333333/32cd32?text=Workshop",
            imgAlt: "Event Thumbnail 2",
            title: "Creator Workshop: Mix & Master",
            date: "November 10, 2025",
            venue: "Online Webinar",
            buttonText: "Register",
            message: "Registration for the Creator Workshop opens soon!"
        },
        {
            imgSrc: "https://placehold.co/600x400/333333/00ffff?text=New+Artists",
            imgAlt: "Event Thumbnail 3",
            title: "Next Wave Artist Submissions",
            date: "Deadline: December 1, 2025",
            status: "Open Now!",
            buttonText: "Submit",
            message: "Submit your work to be considered for The One11 Show!"
        }
    ];

    return (
        <section id="events" className={styles.eventsSection}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Upcoming Events & Updates</h2>
                <div className={styles.grid}>
                    {events.map((event, index) => (
                        <EventCard key={index} {...event} showMessage={showMessage} />
                    ))}
                </div>
                <div className={styles.allEventsLinkContainer}>
                    <a href="#" className={`${styles.allEventsLink} btn-primary`}>View All Events</a>
                </div>
            </div>
        </section>
    );
};

export default EventsSection;
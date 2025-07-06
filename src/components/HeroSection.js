// src/components/HeroSection.js
import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
    // Smooth scrolling logic can be placed here or in a global utility
    const handleScrollToCompetitions = (e) => {
        e.preventDefault();
        document.getElementById('competitions').scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <section id="home" className={styles.heroSection}>
            <div className={styles.heroAbstractBackground}>
                <div className={styles.floatingOrbs}>
                    <div className={styles.orb}></div>
                    <div className={styles.orb}></div>
                    <div className={styles.orb}></div>
                    <div className={styles.orb}></div>
                    <div className={styles.orb}></div>
                </div>
            </div>

            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>
                    Where genres and language won't be your first thought.
                </h1>
                <p className={styles.heroSubtitle}>
                   Join Us in this exciting Music Battle
                </p>
                <a
                    href="#competitions"
                    className={`${styles.heroButton} btn-primary`}
                    onClick={handleScrollToCompetitions}
                >
                   Explore Events
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
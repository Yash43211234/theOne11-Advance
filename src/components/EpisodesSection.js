// src/components/EpisodesSection.js
import React from 'react';
import styles from './EpisodesSection.module.css';

const EpisodeCard = ({ imgSrc, imgAlt, title, description, showMessage }) => (
    <div className={styles.card}>
        <img src={imgSrc} alt={imgAlt} className={styles.cardImage} />
        <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDescription}>{description}</p>
            <button
                onClick={() => showMessage(`Playing ${title}. (This is a demo button)`)}
                className={`${styles.cardButton} btn-primary`}
            >
                Watch Now <i className="fas fa-play"></i>
            </button>
        </div>
    </div>
);

const EpisodesSection = ({ showMessage }) => {
    const episodes = [
        {
            imgSrc: "https://placehold.co/600x400/171616/f81a26?text=Episode+1",
            imgAlt: "Episode Thumbnail 1",
            title: "Episode 01: The Dawn of Sound",
            description: "Featuring: Melody Harmon & Sonic Sculptor"
        },
        {
            imgSrc: "https://placehold.co/600x400/171616/faffff?text=Episode+2",
            imgAlt: "Episode Thumbnail 2",
            title: "Episode 02: Visual Harmonies",
            description: "Featuring: Canvas Whisperer & Digital Dreamer"
        },
        {
            imgSrc: "https://placehold.co/600x400/171616/00ffff?text=Episode+3",
            imgAlt: "Episode Thumbnail 3",
            title: "Episode 03: The Spoken Beat",
            description: "Featuring: Lyric Lumina & Rhythm Rhapsody"
        }
    ];

    return (
        <section id="episodes" className={styles.episodesSection}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Latest Episodes</h2>
                <div className={styles.grid}>
                    {episodes.map((episode, index) => (
                        <EpisodeCard key={index} {...episode} showMessage={showMessage} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EpisodesSection;
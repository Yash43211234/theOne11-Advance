import React from 'react';
import styles from './CompetitionsSection.module.css';

const CompetitionCard = ({ imgSrc, imgAlt, title, description }) => (
  <div className={styles.card}>
    <img src={imgSrc} alt={imgAlt} className={styles.cardImage} />
    <div className={styles.cardContent}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <button className={`${styles.cardButton} btn-primary`}>
        Register Now
      </button>
    </div>
  </div>
);

const CompetitionsSection = () => {
  const competitions = [
    {
      imgSrc: "https://placehold.co/600x400/333333/00ffff?text=Battle+of+Bands",
      imgAlt: "Battle of Bands Poster",
      title: "Battle of Bands",
      description: "Rock, Pop, Indie & More!",
    },
    {
      imgSrc: "https://placehold.co/600x400/333333/ff00ff?text=Singer-Songwriters",
      imgAlt: "Singer-Songwriters Poster",
      title: "Singer/Songwriter Battle",
      description: "Original Melodies & Lyrics",
    },
    {
      imgSrc: "https://placehold.co/600x400/333333/ffff00?text=Musicians",
      imgAlt: "Musicians Poster",
      title: "Musicians (Instrumental)",
      description: "Showcase Your Instrumental Skills",
    },
    {
      imgSrc: "https://placehold.co/600x400/333333/a020f0?text=Rappers",
      imgAlt: "Rappers Poster",
      title: "Battle of Rappers",
      description: "Unleash Your Lyrical Flow",
    },
    {
      imgSrc: "https://placehold.co/600x400/333333/ffa500?text=DJs",
      imgAlt: "DJs Poster",
      title: "Battle of DJs",
      description: "Spin the Decks, Hypnotize the Crowd",
    },
    {
      imgSrc: "https://placehold.co/600x400/333333/00ccff?text=48H+Music+Challenge",
      imgAlt: "48 Hours Music Making Challenge Poster",
      title: "48-Hours Music Making Challenge",
      description: "For Producers: Create a Track in 2 Days!",
    },
    {
      imgSrc: "https://placehold.co/600x400/333333/00f0c0?text=More+Competitions",
      imgAlt: "More Competitions Poster",
      title: "Upcoming Competitions",
      description: "Stay Tuned for New Challenges!",
    },
  ];

  return (
    <section id="competitions" className={styles.competitionsSection}>
      <img
        src="https://placehold.co/600x600/171616/f81a26/png?text=Vinyl+Disc"
        alt="Animated Vinyl Disc"
        className={styles.competitionBackgroundVinyl}
      />
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Competitions</h2>
        <div className={styles.grid}>
          {competitions.map((comp, index) => (
            <CompetitionCard key={index} {...comp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitionsSection;

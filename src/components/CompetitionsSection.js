import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CompetitionsSection.module.css';

const CompetitionCard = ({ imgSrc, imgAlt, title, description, slug }) => (
  <div className={styles.card}>
    <img src={imgSrc} alt={imgAlt} className={styles.cardImage} />
    <div className={styles.cardContent}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <Link
        to={`/register/${slug}`}
        state={{ title, description, imgSrc }}
        className={`${styles.cardButton} btn-primary`}
      >
        Register Now
      </Link>
    </div>
  </div>
);


const CompetitionsSection = () => {
  const competitions = [
  {
    slug: "battle-of-bands",
    imgSrc: "https://placehold.co/600x400/333333/00ffff?text=Battle+of+Bands",
    imgAlt: "Battle of Bands Poster",
    title: "Battle of Bands",
    description: "Rock, Pop, Indie & More!",
  },
  {
    slug: "singer-songwriter-battle",
    imgSrc: "https://placehold.co/600x400/333333/ff00ff?text=Singer-Songwriters",
    imgAlt: "Singer-Songwriters Poster",
    title: "Singer/Songwriter Battle",
    description: "Original Melodies & Lyrics",
  },
  {
    slug: "musicians-instrumental",
    imgSrc: "https://placehold.co/600x400/333333/ffff00?text=Musicians",
    imgAlt: "Musicians Poster",
    title: "Musicians (Instrumental)",
    description: "Showcase Your Instrumental Skills",
  },
  {
    slug: "battle-of-rappers",
    imgSrc: "https://placehold.co/600x400/333333/a020f0?text=Rappers",
    imgAlt: "Rappers Poster",
    title: "Battle of Rappers",
    description: "Unleash Your Lyrical Flow",
  },
  {
    slug: "battle-of-djs",
    imgSrc: "https://placehold.co/600x400/333333/ffa500?text=DJs",
    imgAlt: "DJs Poster",
    title: "Battle of DJs",
    description: "Spin the Decks, Hypnotize the Crowd",
  },
  {
    slug: "48-hours-music-making",
    imgSrc: "https://placehold.co/600x400/333333/00ccff?text=48H+Music+Challenge",
    imgAlt: "48 Hours Music Making Challenge Poster",
    title: "48-Hours Music Making Challenge",
    description: "For Producers: Create a Track in 2 Days!",
  },
  {
    slug: "upcoming-competitions",
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

import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { DotNavigation } from './DotNavigation';

const competitionImages = {
  "battle-of-music": "/wave-haikei.png",
  "singer-songwriter-battle": "/wave-haikei.png",
  "musicians-instrumental": "/wave-haikei.png",
  "battle-of-rappers": "/wave-haikei.png",
  "battle-of-djs": "/wave-haikei.png",
  "48-hours-music-making": "/wave-haikei.png",
  "upcoming-competitions": "/wave-haikei.png"
};

const competitions = [
  { title: "Battle of Music", slug: "battle-of-music", description: "Unleash your ultimate musical prowess in an epic showdown of genres and talents!" },
  { title: "Singer/Songwriter Battle", slug: "singer-songwriter-battle", description: "Showcase your original lyrics and melodies. Compete with your voice and your story." },
  { title: "Musicians (Instrumental)", slug: "musicians-instrumental", description: "From classical to contemporary, let your instruments do the talking in this captivating contest." },
  { title: "Battle of Rappers", slug: "battle-of-rappers", description: "Spit fire and drop beats. Prove your lyrical mastery and stage presence." },
  { title: "Battle of DJs", slug: "battle-of-djs", description: "Spin, mix, and scratch your way to victory. Command the crowd with your unique sound." },
  { title: "48-Hours Music Making Challenge", slug: "48-hours-music-making", description: "Create a masterpiece from scratch in just two days. A true test of creativity and speed." },
  { title: "Upcoming Competitions", slug: "upcoming-competitions", description: "Get ready! New challenges and exciting opportunities are just around the corner." },
];

const VerticalCompetitionCards = () => {
  const [activeId, setActiveId] = useState(null);
  const observer = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);

    const elements = competitions.map((c) => document.getElementById(c.slug));
    elements.forEach((el) => {
      if (el) observer.current.observe(el);
    });

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, []);

  return (
    <div style={styles.container}>
      <DotNavigation sectionIds={competitions.map(c => c.slug)} />

      {competitions.map((item, idx) => (
        <div key={idx} id={item.slug} style={styles.card}>
          <div style={styles.imageWrapper}>
            <img
              src={competitionImages[item.slug] || `https://placehold.co/1200x500/1a1a1a/00ffff?text=${encodeURIComponent(item.title)}`}
              alt={item.title}
              style={styles.image}
            />
            <div style={styles.imageOverlay}></div>
          </div>
          <div style={styles.content}>
            <h2
              style={{
                ...styles.title,
                ...(activeId === item.slug ? styles.activeTitle : {}),
              }}
            >
              {item.title}
            </h2>
            <p style={styles.description}>{item.description}</p>
            <Link to={`/${item.slug}`} style={styles.button}>
              Learn More →
            </Link>
          </div>
        </div>
      ))}

      <div style={styles.guidelinesBox}>
        <h4 style={styles.guidelinesTitle}>Upcoming Guidelines</h4>
        <p style={styles.guidelinesText}>
          Stay tuned for <strong>competition dates, rules, and submission deadlines</strong>. Details will be released soon.
          Don't miss out – follow us on social media for real-time updates!
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '4rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '3.5rem',
    alignItems: 'center',
    backgroundColor: '#0a0a0a',
    color: '#e0e0e0',
    position: 'relative',
    fontFamily: "'Inter', sans-serif",
  },
  card: {
    width: '100%',
    maxWidth: '900px',
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundColor: '#1b1b1b',
    boxShadow: '0 12px 30px rgba(0,0,0,0.7)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #282828',
  },
  imageWrapper: {
    width: '100%',
    height: '280px',
    overflow: 'hidden',
    position: 'relative',
    borderBottom: '1px solid #333',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 50%)',
  },
  content: {
    padding: '2.5rem',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#ff4da6',
    fontWeight: '700',
    letterSpacing: '0.05em',
    textShadow: '0 0 10px rgba(255, 77, 166, 0.4)',
    transition: 'all 0.3s ease-in-out',
  },
  activeTitle: {
    color: '#ffffff',
    textShadow: '0 0 15px rgba(255, 77, 166, 0.9)',
    transform: 'scale(1.05)',
  },
  description: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#b0b0b0',
    marginBottom: '1.5rem',
    maxWidth: '600px',
  },
  button: {
    display: 'inline-block',
    marginTop: '1.5rem',
    padding: '0.9rem 2.5rem',
    backgroundColor: '#f81a6b',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '50px',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease',
    boxShadow: '0 4px 15px rgba(248, 26, 107, 0.4)',
  },
  guidelinesBox: {
    marginTop: '4rem',
    padding: '2rem',
    border: '1px dashed #444',
    borderRadius: '15px',
    backgroundColor: '#161616',
    color: '#ccc',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    boxShadow: '0 6px 20px rgba(0,0,0,0.5)',
  },
  guidelinesTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#ff4da6',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
  guidelinesText: {
    fontSize: '1.15rem',
    lineHeight: '1.7',
    color: '#a0a0a0',
  },
};

export default VerticalCompetitionCards;

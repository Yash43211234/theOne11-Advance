// src/pages/Home.js
import React, { useState, useEffect, useRef } from 'react';
import HeroSection from '../components/HeroSection';
import CompetitionsSection from '../components/CompetitionsSection';
import EpisodesSection from '../components/EpisodesSection';
import EventsSection from '../components/EventsSection';
import ContactSection from '../components/ContactSection';
import MessageBox from '../components/MessageBox';

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

  const sectionIds = ['hero', 'competitions', 'episodes', 'events', 'contact'];

  return (
    <div className="HomePage">
      <DotNavigation sectionIds={sectionIds} />
      <main>
        <section id="hero"><HeroSection /></section>
        <section id="competitions"><CompetitionsSection /></section>
        <section id="episodes"><EpisodesSection showMessage={showMessage} /></section>
        <section id="events"><EventsSection showMessage={showMessage} /></section>
        <section id="contact"><ContactSection showMessage={showMessage} /></section>
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

export const DotNavigation = ({ sectionIds = [] }) => {
  const [activeId, setActiveId] = useState(null);
  const [activeDotPosition, setActiveDotPosition] = useState({ top: 0, height: 0 });
  const dotRefs = useRef({});
  const observer = useRef(null);
  const [hoveredDot, setHoveredDot] = useState(null);

  useEffect(() => {
    const setInitialActiveSection = () => {
      let foundActive = false;
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight * 0.5) {
            setActiveId(id);
            foundActive = true;
            break;
          }
        }
      }
      if (!foundActive && sectionIds.length > 0) {
        setActiveId(sectionIds[0]);
      }
    };
    setInitialActiveSection();
    window.addEventListener('resize', setInitialActiveSection);
    return () => {
      window.removeEventListener('resize', setInitialActiveSection);
    };
  }, [sectionIds]);

  useEffect(() => {
    const handleIntersect = (entries) => {
      let newActiveId = null;
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const viewportMid = window.innerHeight / 2;
          if (rect.top <= viewportMid && rect.bottom >= viewportMid) {
            newActiveId = id;
            break;
          }
        }
      }
      if (!newActiveId) {
        let maxRatio = 0;
        let candidateId = null;
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target.id === sectionIds[0] && entry.intersectionRatio > 0) {
              candidateId = entry.target.id;
              maxRatio = entry.intersectionRatio;
            } else if (entry.intersectionRatio > maxRatio) {
              candidateId = entry.target.id;
              maxRatio = entry.intersectionRatio;
            }
          }
        });
        newActiveId = candidateId;
      }
      if (newActiveId && newActiveId !== activeId) {
        setActiveId(newActiveId);
      } else if (!newActiveId && sectionIds.length > 0) {
        setActiveId(sectionIds[0]);
      }
    };

    observer.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '0px',
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    });

    sectionIds.forEach(id => {
      const section = document.getElementById(id);
      if (section) {
        observer.current.observe(section);
      }
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [sectionIds, activeId]);

  useEffect(() => {
    if (activeId && dotRefs.current[activeId]) {
      const activeDotElement = dotRefs.current[activeId];
      const parentRect = activeDotElement.parentElement.getBoundingClientRect();
      const dotRect = activeDotElement.getBoundingClientRect();
      const topOffset = dotRect.top - parentRect.top;
      setActiveDotPosition({
        top: topOffset,
        height: dotRect.height,
      });
    }
  }, [activeId]);

  const scrollTo = (id) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(id);
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      right: '40px',
      transform: 'translateY(-50%)',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px',
      padding: '20px 0',
      background: 'linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(255,255,255,0.08))',
      borderRadius: '30px',
      backdropFilter: 'blur(10px) saturate(180%)',
      border: '1px solid rgba(255,255,255,0.3)',
      boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
    }}>
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '20px',
        bottom: '20px',
        width: '3px',
        backgroundColor: 'rgba(255,255,255,0.2)',
        transform: 'translateX(-50%)',
        zIndex: -1,
        borderRadius: '2px',
      }} />
      <div style={{
        position: 'absolute',
        left: '50%',
        width: '4px',
        backgroundColor: '#6366f1',
        transform: 'translateX(-50%)',
        zIndex: 0,
        borderRadius: '2px',
        transition: 'all 0.4s cubic-bezier(0.86, 0, 0.07, 1)',
        top: `${activeDotPosition.top}px`,
        height: `${activeDotPosition.height}px`,
      }} />
      {sectionIds.map((id) => (
        <div
          key={id}
          ref={(el) => (dotRefs.current[id] = el)}
          onClick={() => scrollTo(id)}
          onMouseEnter={() => setHoveredDot(id)}
          onMouseLeave={() => setHoveredDot(null)}
          role="button"
          aria-label={`Scroll to ${id}`}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              scrollTo(id);
            }
          }}
          style={{
            position: 'relative',
            width: activeId === id ? '28px' : '16px',
            height: activeId === id ? '28px' : '16px',
            borderRadius: '50%',
            backgroundColor: activeId === id
              ? '#818cf8'
              : (hoveredDot === id ? '#cbd5e1' : '#a7b4c2'),
            cursor: 'pointer',
            boxShadow: activeId === id ? '0 0 20px rgba(129, 140, 248, 0.8), 0 0 8px white' : 'none',
            border: activeId === id ? '3px solid white' : '1px solid rgba(255,255,255,0.5)',
            transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
            transform: hoveredDot === id && activeId !== id ? 'scale(1.1)' : 'scale(1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
          }}
          title={id}
        >
          {activeId === id && (
            <span style={{
              position: 'absolute',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: 'white',
              opacity: '0.8',
              animation: 'pulseGlow 1.5s infinite alternate ease-in-out',
            }} />
          )}
        </div>
      ))}
      <style>{`
        @keyframes pulseGlow {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.2);
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { educationEvents } from '../data/educationData';
import { FiCalendar, FiAward, FiChevronLeft, FiChevronRight, FiPause, FiPlay } from 'react-icons/fi';

const getIcon = (title) => {
    if (title.includes('BSc')) return <FiAward />;
    return <FiCalendar />;
};

const EducationEvents = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const totalSlides = educationEvents.length;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (!isPlaying) return;
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [isPlaying, currentIndex]);

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) nextSlide();
        if (touchStart - touchEnd < -50) prevSlide();
    };

    return (
        <section id="events" className="education-slideshow">
            <div className="slideshow-container">
                <h2 className="slideshow-title">
                    Education & <span>Events</span>
                </h2>
                <p className="slideshow-subtitle">
                    My academic journey and professional experiences
                </p>

                <div className="slideshow-wrapper">
                    <div
                        className="slideshow-track"
                        onMouseEnter={() => setIsPlaying(false)}
                        onMouseLeave={() => setIsPlaying(true)}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {educationEvents.map((event, index) => (
                            <div
                                key={event.id}
                                className={`slide ${index === currentIndex ? 'active' : ''}`}
                            >
                                <div className="slide-card">
                                    <div className="slide-image-area">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="slide-img"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = 'https://placehold.co/600x400/1a1a2e/a855f7?text=' + encodeURIComponent(event.title.substring(0, 15));
                                            }}
                                        />
                                        <div className="slide-year">{event.year}</div>
                                    </div>
                                    <div className="slide-info">
                                        <div className="slide-icon">
                                            {getIcon(event.title)}
                                        </div>
                                        <h3>{event.title}</h3>
                                        <h4>{event.institution}</h4>
                                        <p>{event.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="nav-btn nav-prev" onClick={prevSlide}>
                        <FiChevronLeft size={24} />
                    </button>
                    <button className="nav-btn nav-next" onClick={nextSlide}>
                        <FiChevronRight size={24} />
                    </button>

                    <button className="play-btn" onClick={() => setIsPlaying(!isPlaying)}>
                        {isPlaying ? <FiPause size={16} /> : <FiPlay size={16} />}
                    </button>

                    <div className="slide-dots">
                        {educationEvents.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationEvents;
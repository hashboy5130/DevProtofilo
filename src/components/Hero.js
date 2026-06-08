import React, { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiDownload, FiChevronDown } from 'react-icons/fi';

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const roles = ['Full-Stack Developer', 'React Specialist', 'UI/UX Enthusiast', 'Problem Solver'];

    useEffect(() => {
        const currentWord = roles[wordIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (charIndex <= currentWord.length) {
                    setDisplayText(currentWord.slice(0, charIndex));
                    setCharIndex(charIndex + 1);
                } else {
                    setIsDeleting(true);
                    setTimeout(() => {}, 1500);
                }
            } else {
                if (charIndex > 0) {
                    setDisplayText(currentWord.slice(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    setIsDeleting(false);
                    setWordIndex((wordIndex + 1) % roles.length);
                }
            }
        }, 100);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, wordIndex, roles]);

    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="profile-image-container">
                        <img
                            src="/profile.png"
                            alt="Hashen Liyanaarachchi"
                            className="profile-image"
                        />
                    </div>

                    <span className="badge">Welcome to my world</span>
                    <h1 className="hero-title">
                        Hi, I'm <span className="gradient-text">Hashen Liyanaarachchi</span>
                    </h1>
                    <div className="typewriter">
                        {displayText}<span className="cursor">|</span>
                    </div>
                    <div className="btn-group">
                        <a href="#contact" className="btn btn-primary">
                            Hire Me <FiMail size={16} />
                        </a>
                        {/* 👇 DOWNLOAD CV BUTTON - PDF path එක හරිද check කරන්න */}
                        <a href="/Hashen_CV.pdf" className="btn btn-outline" download>
                            Download CV <FiDownload size={16} />
                        </a>
                    </div>
                    <div className="social-icons">
                        <a href="https://github.com/hashboy5130" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FiGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/hashen-liyanaarachchi-8352b1358/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FiLinkedin />
                        </a>
                        <a href="https://twitter.com/hashen03" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FiTwitter />
                        </a>
                        <a href="mailto:hashenliyanaarachchi03@email.com" className="social-icon">
                            <FiMail />
                        </a>
                    </div>
                </div>
            </div>
            <div className="scroll-down">
                <FiChevronDown />
            </div>
        </section>
    );
};

export default Hero;
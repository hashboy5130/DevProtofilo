import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="social-icons" style={{ marginBottom: '1rem' }}>
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FiGithub />
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FiLinkedin />
                    </a>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FiTwitter />
                    </a>
                    <a href="mailto:your@email.com" className="social-icon">
                        <FiMail />
                    </a>
                </div>
                <p>
                    Made with <FiHeart size={12} style={{ display: 'inline', color: '#ec4899' }} /> by Hash Software Solutions
                </p>
                <p style={{ marginTop: '0.5rem', fontSize: '0.7rem' }}>
                    © 2026 All rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['Home', 'About', 'Skills', 'Projects', 'Articles', 'Contact'];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="logo">
                    {'<DevPortfolio />'}
                </div>

                <ul className="nav-links">
                    {navItems.map((item) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase()}`}>{item}</a>
                        </li>
                    ))}
                </ul>

                <div className="mobile-menu" onClick={() => setMobileMenu(!mobileMenu)}>
                    {mobileMenu ? <FiX /> : <FiMenu />}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
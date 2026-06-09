import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    // ============================================
    // DISABLE RIGHT-CLICK & INSPECT (Code Protection)
    // ============================================
    useEffect(() => {
        // 1. Disable right-click context menu
        const disableRightClick = (e) => {
            e.preventDefault();
            return false;
        };

        // 2. Disable keyboard shortcuts for dev tools
        const disableKeyboardShortcuts = (e) => {
            // F12 key
            if (e.key === 'F12' || e.keyCode === 123) {
                e.preventDefault();
                return false;
            }
            // Ctrl+Shift+I
            if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
                e.preventDefault();
                return false;
            }
            // Ctrl+Shift+J (Console)
            if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) {
                e.preventDefault();
                return false;
            }
            // Ctrl+Shift+C (Inspect element)
            if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c')) {
                e.preventDefault();
                return false;
            }
            // Ctrl+U (View Source)
            if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) {
                e.preventDefault();
                return false;
            }
            // Ctrl+S (Save page)
            if (e.ctrlKey && (e.key === 'S' || e.key === 's')) {
                e.preventDefault();
                return false;
            }
            return true;
        };

        // Add event listeners
        document.addEventListener('contextmenu', disableRightClick);
        document.addEventListener('keydown', disableKeyboardShortcuts);

        // Cleanup
        return () => {
            document.removeEventListener('contextmenu', disableRightClick);
            document.removeEventListener('keydown', disableKeyboardShortcuts);
        };
    }, []);

    // Smooth scroll for anchor links
    useEffect(() => {
        const handleAnchorClick = (e) => {
            const target = e.target.closest('a');
            if (target && target.hash && target.hash.startsWith('#')) {
                const element = document.querySelector(target.hash);
                if (element) {
                    e.preventDefault();
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);
        return () => document.removeEventListener('click', handleAnchorClick);
    }, []);

    if (loading) {
        return (
            <div style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#0a0a0a'
            }}>
                <div style={{
                    width: '50px',
                    height: '50px',
                    border: '3px solid rgba(168,85,247,0.2)',
                    borderTop: '3px solid #a855f7',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                }} />
                <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Articles />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
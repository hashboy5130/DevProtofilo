import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
    {
        id: 1,
        title: 'PlanMate – Task Management System',
        description: 'Full-stack task manager with user authentication, notifications, and real-time task tracking. Implemented RESTful APIs using Java and Hibernate. Integrated React frontend with Java backend via Axios. Designed dynamic dashboards and progress charts.',
        tech: ['React', 'Java', 'Hibernate', 'MySQL', 'Tailwind'],
        github: 'https://github.com/hashboy5130/planmate',
        demo: 'https://planmate-demo.com',
        icon: '📋',
        image: '/etradet.png'
    },
    {
        id: 2,
        title: 'JemPoint – E-commerce Platform',
        description: 'Developed a responsive online store with seller and admin dashboards, product management, and payment gateway integration.',
        tech: ['Java', 'Hibernate', 'MySQL', 'JavaScript', 'Tailwind', 'FetchAPI'],
        github: 'https://github.com/hashboy5130/jempoint',
        demo: 'https://jempoint-demo.com',
        icon: '🛒',
        image: '/etradet.png'
    },
    {
        id: 3,
        title: 'ChateMate – Chat App',
        description: 'Built a real-time chat application supporting instant messaging, user authentication, and cloud database storage.',
        tech: ['React Native', 'WebSocket', 'Java Backend', 'Nativewind'],
        github: 'https://github.com/hashboy5130/chatemate',
        demo: 'https://chatemate-demo.com',
        icon: '💬',
        image: '/etradet.png'
    },
    {
        id: 4,
        title: 'E-Trade – E-commerce Web Application',
        description: 'Developed customer, seller, and admin dashboards for product management and analytics. Integrated secure checkout and payment functionality. Implemented responsive design for smooth user experience on all devices.',
        tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
        github: 'https://github.com/hashboy5130/etrade',
        demo: 'https://etrade-demo.com',
        icon: '🏪',
        image: '/etradet.png'
    },
    {
        id: 5,
        title: 'ERP Management System – Java Desktop App',
        description: 'Enterprise resource planning desktop application to manage business operations including inventory, sales, and employee records. Developed modular JavaFX interfaces, integrated MySQL for centralized data storage, implemented reporting using JasperReports for analytics.',
        tech: ['Java', 'JavaFX', 'MySQL', 'JasperReports', 'Hibernate'],
        github: 'https://github.com/hashboy5130/erp-system',
        demo: 'https://github.com/hashboy5130/erp-system',
        icon: '🏢',
        image: '/etradet.png'
    },
    {
        id: 6,
        title: 'BOOK MY SEAT - Movie Ticket Booking System',
        description: 'A complete movie ticket booking platform with Android user app, Spring Boot backend, and web admin panel. Users can browse movies, select seats (40-seat interactive grid), pay online via PayHere, and receive QR code tickets via email. Admin panel includes revenue dashboard, movie management, booking management, seat configuration, and report generation.',
        tech: ['Android', 'Spring Boot', 'Firestore', 'PayHere', 'JasperReports', 'Firebase Auth', 'ZXing'],
        github: 'https://github.com/hashboy5130/bookmyseat',
        demo: 'https://github.com/hashboy5130/bookmyseat',
        icon: '🎬',
        image: '/bookmyseatt.png'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">
                    Featured <span>Projects</span>
                </h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="project-img"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.style.display = 'none';
                                            const parent = e.target.parentElement;
                                            parent.innerHTML = `<span style="font-size: 3rem;">${project.icon}</span>`;
                                        }}
                                    />
                                ) : (
                                    <span style={{ fontSize: '3rem' }}>{project.icon}</span>
                                )}
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                                        <FiGithub size={14} /> Code
                                    </a>
                                    {project.demo && project.demo !== 'https://github.com/hashboy5130/erp-system' && (
                                        <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                                            <FiExternalLink size={14} /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
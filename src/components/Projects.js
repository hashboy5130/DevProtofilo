import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
    {
        id: 1,
        title: 'PlanMate – Task Management System',
        description: 'Full-stack task manager with user authentication, notifications, and real-time task tracking. Implemented RESTful APIs using Java and Hibernate. Integrated React frontend with Java backend via Axios. Designed dynamic dashboards and progress charts.',
        tech: ['React', 'Java', 'Hibernate', 'MySQL', 'Tailwind'],
        github: 'https://github.com/hashen03/planmate',
        demo: 'https://planmate-demo.com',
        icon: '📋'
    },
    {
        id: 2,
        title: 'JemPoint – E-commerce Platform',
        description: 'Developed a responsive online store with seller and admin dashboards, product management, and payment gateway integration.',
        tech: ['Java', 'Hibernate', 'MySQL', 'JavaScript', 'Tailwind', 'FetchAPI'],
        github: 'https://github.com/hashen03/jempoint',
        demo: 'https://jempoint-demo.com',
        icon: '🛒'
    },
    {
        id: 3,
        title: 'ChateMate – Chat App',
        description: 'Built a real-time chat application supporting instant messaging, user authentication, and cloud database storage.',
        tech: ['React Native', 'WebSocket', 'Java Backend', 'Nativewind'],
        github: 'https://github.com/hashen03/chatemate',
        demo: 'https://chatemate-demo.com',
        icon: '💬'
    },
    {
        id: 4,
        title: 'E-Trade – E-commerce Web Application',
        description: 'Developed customer, seller, and admin dashboards for product management and analytics. Integrated secure checkout and payment functionality. Implemented responsive design for smooth user experience on all devices.',
        tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
        github: 'https://github.com/hashen03/etrade',
        demo: 'https://etrade-demo.com',
        icon: '🏪'
    },
    {
        id: 5,
        title: 'ERP Management System – Java Desktop App',
        description: 'Enterprise resource planning desktop application to manage business operations including inventory, sales, and employee records. Developed modular JavaFX interfaces, integrated MySQL for centralized data storage, implemented reporting using JasperReports for analytics.',
        tech: ['Java', 'JavaFX', 'MySQL', 'JasperReports', 'Hibernate'],
        github: 'https://github.com/hashen03/erp-system',
        demo: 'https://github.com/hashen03/erp-system',
        icon: '🏢'
    },
    {
        id: 6,
        title: 'Car Wash Management System – Java Desktop App',
        description: 'Desktop application for automating operations at car wash centers, from customer booking to billing. Developed modules for customer management, service tracking, and payment handling with JasperReports for invoicing.',
        tech: ['Java', 'JavaFX', 'MySQL', 'JasperReports', 'Hibernate'],
        github: 'https://github.com/hashen03/carwash-system',
        demo: 'https://github.com/hashen03/carwash-system',
        icon: '🚗'
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
                                {project.icon}
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
                                    {project.demo && project.demo !== 'https://github.com/hashen03/erp-system' && (
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
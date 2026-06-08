import React from 'react';
import { FiUser, FiCalendar, FiMapPin, FiMail, FiCode, FiDatabase, FiServer } from 'react-icons/fi';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">
                    About <span>Me</span>
                </h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I'm a passionate <strong className="gradient-text">Backend-Focused Full-Stack Developer</strong> with 1+ years of experience
                            building scalable web applications. I specialize in <strong>Java, Spring Boot, and Hibernate</strong>
                            for robust backend development, while also working with modern frontend technologies like React.
                        </p>
                        <p>
                            My journey in tech started when I built my first website at 16. Since then,
                            I've focused on mastering <strong>Java ecosystem</strong> - building REST APIs, desktop applications,
                            and enterprise-level systems. I believe in writing clean, maintainable code
                            that solves real-world problems efficiently.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new Java frameworks,
                            contributing to open-source projects, writing technical blogs about Spring Boot,
                            or learning advanced database optimization techniques.
                        </p>
                    </div>
                    <div className="info-grid">
                        <div className="info-item">
                            <div className="info-icon"><FiUser /></div>
                            <div className="info-text">
                                <strong>Name</strong>
                                <p>Hashen Liyanaarachchi</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon"><FiCalendar /></div>
                            <div className="info-text">
                                <strong>Experience</strong>
                                <p>1+ Years</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon"><FiCode /></div>
                            <div className="info-text">
                                <strong>Core Stack</strong>
                                <p>Java · Spring Boot · Hibernate</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon"><FiServer /></div>
                            <div className="info-text">
                                <strong>Backend</strong>
                                <p>REST APIs · Microservices · JPA</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon"><FiDatabase /></div>
                            <div className="info-text">
                                <strong>Database</strong>
                                <p>MySQL · PostgreSQL · MongoDB</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon"><FiMapPin /></div>
                            <div className="info-text">
                                <strong>Location</strong>
                                <p>Colombo, Sri Lanka</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon"><FiMail /></div>
                            <div className="info-text">
                                <strong>Email</strong>
                                <p>hashenliyanaarachchi03@email.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
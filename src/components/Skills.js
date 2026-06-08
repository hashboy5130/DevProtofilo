import React from 'react';
import {
    SiReact, SiJavascript, SiTypescript, SiNodedotjs,
    SiSpringboot, SiMongodb, SiPostgresql, SiDocker,
    SiGit, SiTailwindcss, SiNextdotjs, SiFirebase
} from 'react-icons/si';

const skills = [
    { name: 'React', icon: <SiReact />, color: '#61DAFB' },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
    { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
    { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6DB33F' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
    { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
    { name: 'Git', icon: <SiGit />, color: '#F05032' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff' },
    { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
];

const Skills = () => {
    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">
                    My <span>Skills</span>
                </h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <div className="skill-icon" style={{ color: skill.color }}>
                                {skill.icon}
                            </div>
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
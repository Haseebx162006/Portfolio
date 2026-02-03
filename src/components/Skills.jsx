import { useEffect, useRef } from 'react';
import skillsData from '../data/skills.json';
import './Skills.css';

const Skills = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" className="skills section" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title animate-on-scroll">Skills & Expertise</h2>
                    <p className="section-subtitle animate-on-scroll">
                        Technologies and tools I work with daily
                    </p>
                </div>

                <div className="skills__categories">
                    {skillsData.categories.map((category, catIndex) => (
                        <div
                            key={category.name}
                            className="skills__category glass-card animate-on-scroll"
                            style={{ transitionDelay: `${catIndex * 100}ms` }}
                        >
                            <div className="skills__category-header">
                                <span className="skills__category-icon">{category.icon}</span>
                                <h3 className="skills__category-title">{category.name}</h3>
                            </div>

                            <div className="skills__list">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skill.name} className="skills__item">
                                        <div className="skills__item-header">
                                            <span className="skills__item-name">{skill.name}</span>
                                            <span className="skills__item-level">{skill.level}%</span>
                                        </div>
                                        <div className="skills__progress-bar">
                                            <div
                                                className="skills__progress-fill"
                                                style={{
                                                    '--progress-width': `${skill.level}%`,
                                                    animationDelay: `${(catIndex * 100) + (skillIndex * 50)}ms`
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

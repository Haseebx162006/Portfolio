import { useEffect, useRef } from 'react';
import profile from '../data/profile.json';
import './About.css';

const About = () => {
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
        <section id="about" className="about section" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title animate-on-scroll">About Me</h2>
                    <p className="section-subtitle animate-on-scroll">
                        Passionate about building robust, scalable applications
                    </p>
                </div>

                <div className="about__content">
                    <div className="about__bio animate-on-scroll">
                        <div className="about__bio-card glass-card">
                            <div className="about__bio-header">
                                <div className="about__bio-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        <path d="M2 17l10 5 10-5" />
                                        <path d="M2 12l10 5 10-5" />
                                    </svg>
                                </div>
                                <span className="about__bio-label">Full-Stack Developer</span>
                            </div>
                            <p className="about__bio-text">{profile.bio}</p>
                            <div className="about__bio-stats">
                                <div className="about__stat">
                                    <span className="about__stat-number">1+</span>
                                    <span className="about__stat-label">Years Experience</span>
                                </div>
                                <div className="about__stat">
                                    <span className="about__stat-number">10+</span>
                                    <span className="about__stat-label">Projects Completed</span>
                                </div>
                                <div className="about__stat">
                                    <span className="about__stat-number">100%</span>
                                    <span className="about__stat-label">Client Satisfaction</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about__details animate-on-scroll">
                        <h3 className="about__details-title">What I Do</h3>

                        <div className="about__services">
                            <div className="about__service glass-card">
                                <div className="about__service-icon">⚡</div>
                                <h4>Backend Development</h4>
                                <p>Building robust REST APIs and server-side applications with Node.js and Express</p>
                            </div>

                            <div className="about__service glass-card">
                                <div className="about__service-icon">⚛️</div>
                                <h4>Frontend Development</h4>
                                <p>Creating responsive, interactive UIs with React.js and modern CSS</p>
                            </div>

                            <div className="about__service glass-card">
                                <div className="about__service-icon">🗄️</div>
                                <h4>Database Design</h4>
                                <p>Designing efficient MongoDB schemas and data modeling solutions</p>
                            </div>

                            <div className="about__service glass-card">
                                <div className="about__service-icon">🔌</div>
                                <h4>Real-Time Apps</h4>
                                <p>Implementing WebSocket solutions with Socket.IO for live features</p>
                            </div>
                        </div>

                        <div className="about__tech-stack animate-on-scroll">
                            <h4 className="about__tech-title">Tech Stack</h4>
                            <div className="about__tech-badges">
                                {profile.techStack.map((tech, index) => (
                                    <span key={index} className="badge about__tech-badge">
                                        <span className="about__tech-badge-icon">{tech.icon}</span>
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

import profile from '../data/profile.json';
import './Hero.css';

const Hero = () => {
    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero">
            {/* Background Effects */}
            <div className="hero__bg-effects">
                <div className="hero__gradient-orb hero__gradient-orb--1"></div>
                <div className="hero__gradient-orb hero__gradient-orb--2"></div>
                <div className="hero__gradient-orb hero__gradient-orb--3"></div>
                <div className="hero__grid"></div>
            </div>

            <div className="hero__container container">
                <div className="hero__content">
                    <div className="hero__text">
                        <p className="hero__greeting animate-fadeInUp">Hello, I'm</p>
                        <h1 className="hero__name animate-fadeInUp delay-100">{profile.name}</h1>
                        <h2 className="hero__title animate-fadeInUp delay-200">
                            <span className="gradient-text">{profile.title}</span>
                        </h2>
                        <p className="hero__tagline animate-fadeInUp delay-300">
                            {profile.tagline}
                        </p>

                        <div className="hero__cta animate-fadeInUp delay-400">
                            <a
                                href="#projects"
                                className="btn btn-primary"
                                onClick={(e) => scrollToSection(e, '#projects')}
                            >
                                <span>View Projects</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M7 17l10-10M7 7h10v10" />
                                </svg>
                            </a>
                            <a
                                href="#contact"
                                className="btn btn-outline"
                                onClick={(e) => scrollToSection(e, '#contact')}
                            >
                                <span>Contact Me</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="hero__tech-stack animate-fadeInUp delay-500">
                            {profile.techStack.slice(0, 4).map((tech, index) => (
                                <span key={index} className="hero__tech-pill">
                                    <span className="hero__tech-icon">{tech.icon}</span>
                                    {tech.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="hero__image-wrapper animate-slideInRight delay-200">
                        <div className="hero__image-container">
                            <div className="hero__image-glow"></div>
                            <div className="hero__image-frame">
                                <img src="/profile.jpg" alt={profile.name} className="hero__image" />
                            </div>
                            {/* Floating Elements */}
                            <div className="hero__float-badge hero__float-badge--1 animate-float">
                                <span>⚛️</span> React
                            </div>
                            <div className="hero__float-badge hero__float-badge--2 animate-float delay-200">
                                <span>💚</span> Node.js
                            </div>
                            <div className="hero__float-badge hero__float-badge--3 animate-float delay-400">
                                <span>🍃</span> MongoDB
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="hero__scroll-indicator animate-fadeIn delay-600">
                    <span>Scroll</span>
                    <div className="hero__scroll-line">
                        <div className="hero__scroll-dot"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

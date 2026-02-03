import profile from '../data/profile.json';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__brand">
                        <a href="#home" className="footer__logo" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
                            <span className="footer__logo-text">{profile.name}</span>
                        </a>
                        <p className="footer__tagline">
                            Turning ideas into powerful digital experiences ⚡
                        </p>
                    </div>

                    <div className="footer__links">
                        <div className="footer__links-column">
                            <h4>Navigation</h4>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className="footer__links-column">
                            <h4>Connect</h4>
                            <ul>
                                {profile.social.github && (
                                    <li><a href={profile.social.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
                                )}
                                {profile.social.linkedin && (
                                    <li><a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                                )}
                                {profile.social.twitter && (
                                    <li><a href={profile.social.twitter} target="_blank" rel="noopener noreferrer">Twitter</a></li>
                                )}
                                <li><a href={`mailto:${profile.email}`}>Email</a></li>
                            </ul>
                        </div>
                    </div>

                    <button className="footer__scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 15l-6-6-6 6" />
                        </svg>
                    </button>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {currentYear} {profile.name}. All rights reserved.
                    </p>
                    <p className="footer__tech">
                        Built with <span className="footer__heart">❤</span> using React
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

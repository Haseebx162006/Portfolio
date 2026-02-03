import { useState, useEffect, useRef } from 'react';
import profile from '../data/profile.json';
import './Contact.css';

const Contact = () => {
    const sectionRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission - Replace with actual backend endpoint
        try {
            // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    return (
        <section id="contact" className="contact section" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title animate-on-scroll">Get In Touch</h2>
                    <p className="section-subtitle animate-on-scroll">
                        Have a project in mind? Let's build something amazing together
                    </p>
                </div>

                <div className="contact__content">
                    <div className="contact__info animate-on-scroll">
                        <div className="contact__info-card glass-card">
                            <h3>Let's Connect</h3>
                            <p>
                                I'm always interested in hearing about new projects,
                                creative ideas, or opportunities to be part of your visions.
                            </p>

                            <div className="contact__details">
                                <a href={`mailto:${profile.email}`} className="contact__detail">
                                    <div className="contact__detail-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <path d="M22 6l-10 7L2 6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="contact__detail-label">Email</span>
                                        <span className="contact__detail-value">{profile.email}</span>
                                    </div>
                                </a>

                                <div className="contact__detail">
                                    <div className="contact__detail-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="contact__detail-label">Location</span>
                                        <span className="contact__detail-value">{profile.location}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="contact__social">
                                <h4>Follow Me</h4>
                                <div className="contact__social-links">
                                    {profile.social.github && (
                                        <a
                                            href={profile.social.github}
                                            className="contact__social-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="GitHub"
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                                            </svg>
                                        </a>
                                    )}
                                    {profile.social.linkedin && (
                                        <a
                                            href={profile.social.linkedin}
                                            className="contact__social-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="LinkedIn"
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </a>
                                    )}
                                    {profile.social.twitter && (
                                        <a
                                            href={profile.social.twitter}
                                            className="contact__social-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Twitter"
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact__form-wrapper animate-on-scroll">
                        <form className="contact__form glass-card" onSubmit={handleSubmit}>
                            <div className="contact__form-group">
                                <label htmlFor="name" className="contact__label">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="contact__input"
                                    placeholder="Your name"
                                />
                            </div>

                            <div className="contact__form-group">
                                <label htmlFor="email" className="contact__label">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="contact__input"
                                    placeholder="yourname@example.com"
                                />
                            </div>

                            <div className="contact__form-group">
                                <label htmlFor="message" className="contact__label">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="contact__textarea"
                                    placeholder="Tell me about your project..."
                                    rows="5"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary contact__submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="contact__spinner"></span>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 2L11 13" />
                                            <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                                        </svg>
                                    </>
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="contact__status contact__status--success">
                                    ✓ Message sent successfully! I'll get back to you soon.
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="contact__status contact__status--error">
                                    ✕ Something went wrong. Please try again.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

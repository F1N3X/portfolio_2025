import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar = () => {
    const { t } = useTranslation();
    const [activeSection, setActiveSection] = useState('');
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const navLinksRef = useRef({});
    const navRef = useRef(null);

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    useEffect(() => {
        if (!activeSection || !navLinksRef.current[activeSection]) {
            setIndicatorStyle({ opacity: 0 });
            return;
        }

        const activeLink = navLinksRef.current[activeSection];
        const linkRect = activeLink.getBoundingClientRect();

        const container = navRef.current;
        const containerRect = container
            ? container.getBoundingClientRect()
            : activeLink.closest('.navbar-links')?.getBoundingClientRect();

        if (!containerRect) {
            setIndicatorStyle({ opacity: 0 });
            return;
        }

        const left = linkRect.left - containerRect.left - 2;
        const width = linkRect.width;

        setIndicatorStyle({
            left: `${left}px`,
            width: `${width}px`,
            opacity: 1,
        });
    }, [activeSection]);

    return (
        <nav className="navbar" ref={navRef}>
            <ul className="navbar-links">
                <li>
                    <a 
                        href="#about" 
                        ref={(el) => (navLinksRef.current['about'] = el)}
                        className={activeSection === 'about' ? 'active' : ''}
                    >
                        {t('about.title')}
                    </a>
                </li>
                <li>
                    <a 
                        href="#projects" 
                        ref={(el) => (navLinksRef.current['projects'] = el)}
                        className={activeSection === 'projects' ? 'active' : ''}
                    >
                        {t('projects.title')}
                    </a>
                </li>
                <li>
                    <a 
                        href="#techs" 
                        ref={(el) => (navLinksRef.current['techs'] = el)}
                        className={activeSection === 'techs' ? 'active' : ''}
                    >
                        {t('techs.title')}
                    </a>
                </li>
                <li>
                    <a 
                        href="#contact" 
                        ref={(el) => (navLinksRef.current['contact'] = el)}
                        className={activeSection === 'contact' ? 'active' : ''}
                    >
                        {t('contact.title')}
                    </a>
                </li>
            </ul>
            <div className="navbar-indicator" style={indicatorStyle}></div>
        </nav>
    );
}

export default Navbar;
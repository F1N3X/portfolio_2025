import React, { useEffect } from "react";
import GradientText from '../blocks/TextAnimations/GradientText/GradientText';
import "./About.css";
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();
    const primaryColor = "var(--primary-color)";
    const secondaryColor = "var(--secondary-color)";
    
    useEffect(() => {
        document.documentElement.style.setProperty('--timeline-items', parcours.length);
    }, []);

    const parcours = [
        {
            titre: t('about.experience.exp1.title'),
            date: t('about.experience.exp1.date'),
            description: t('about.experience.exp1.company')
        },
        {
            titre: t('about.experience.exp2.title'),
            date: t('about.experience.exp2.date'),
            description: t('about.experience.exp2.company')
        },
        {
            titre: t('about.experience.exp3.title'),
            date: t('about.experience.exp3.date'),
            description: t('about.experience.exp3.company')
        },
        {
            titre: t('about.experience.exp4.title'),
            date: t('about.experience.exp4.date'),
            description: t('about.experience.exp4.company')
        }
    ];

    const passions = [
        {
            titre: t('about.hobbies.hobbie1'),
            emoji: "🤺"
        },
        {
            titre: t('about.hobbies.hobbie2'),
            emoji: "🎻"
        },
        {
            titre: t('about.hobbies.hobbie3'),
            emoji: "👾"
        }
    ];

    return (
        <section id="about">
            <h1>
                <GradientText
                    colors={[primaryColor, secondaryColor, primaryColor, secondaryColor]}
                    animationSpeed={10}
                    showBorder={false}
                    className="custom-class"
                >
                    {t('about.title')}
                </GradientText>
            </h1>

            <div className="about-main-grid">
                {/* Colonne gauche */}
                <div className="about-left-column">
                    {/* Profil */}
                    <div className="about-left-outer-grid">
                        <div className="about-emoji-grid">
                            <span className="about-emoji">👨‍💻</span>
                        </div>
                        <div className="about-text-grid">
                            <span className="about-short-text">
                                {t('about.description1')}
                                <br/>
                                <br/>
                                {t('about.description2')}
                            </span>
                        </div>
                    </div>
                    
                    {/* Wrapper pour passions et timeline */}
                    <div className="passions-timeline-wrapper">
                        {/* Blocs des passions */}
                        <div className="passions-container">
                            {passions.map((passion, idx) => (
                                <div className="passion-bloc" key={idx}>
                                    <div className="passion-emoji">{passion.emoji}</div>
                                    <h4 className="passion-title">{passion.titre}</h4>
                                </div>
                            ))}
                        </div>
                        
                        {/* Parcours */}
                        <div className="about-timeline-grid">
                            <h3>{t('about.experience.title')}</h3>
                            <ul className="timeline-list">
                                {parcours.map((etape, idx) => (
                                    <li className="timeline-item" key={idx}>
                                        <div className="timeline-point" />
                                        <div className="timeline-content">
                                            <div className="timeline-title">{etape.titre}</div>
                                            <div className="timeline-date">{etape.date}</div>
                                            {etape.description && <div className="timeline-desc">{etape.description}</div>}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
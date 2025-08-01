import React, { useEffect } from "react";
import GradientText from '../blocks/TextAnimations/GradientText/GradientText';
import "./About.css";

const parcours = [
    {
        titre: "Alternant Développeur Full Stack",
        date: "2024 - Aujourd'hui",
        description: "Dataventure"
    },
    {
        titre: "Stage IOT",
        date: "2024",
        description: "IIM Digital School"
    },
    {
        titre: "Responsable de projet",
        date: "2023 - 2024",
        description: "404 De Vinci"
    }
];

const passions = [
    {
        titre: "Escrime",
        emoji: "🤺"
    },
    {
        titre: "Violon",
        emoji: "🎻"
    },
    {
        titre: "Retro Gaming",
        emoji: "👾"
    }
];

const About = () => {
    const primaryColor = "var(--primary-color)";
    const secondaryColor = "var(--secondary-color)";
    
    useEffect(() => {
        document.documentElement.style.setProperty('--timeline-items', parcours.length);
    }, []);

    return (
        <section id="about">
            <h1>
                <GradientText
                    colors={[primaryColor, secondaryColor, primaryColor, secondaryColor]}
                    animationSpeed={10}
                    showBorder={false}
                    className="custom-class"
                >
                    À propos de moi
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
                                Passionné par le développement web, j'aime créer des expériences interactives et accessibles.
                            </span>
                        </div>
                    </div>
                    
                    {/* Blocs des passions */}
                    <div className="passions-container">
                        {passions.map((passion, idx) => (
                            <div className="passion-bloc" key={idx}>
                                <div className="passion-emoji">{passion.emoji}</div>
                                <h3 className="passion-title">{passion.titre}</h3>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Colonne droite - Parcours */}
                <div className="about-timeline-grid">
                    <h2>Mon parcours</h2>
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
        </section>
    );
}

export default About;
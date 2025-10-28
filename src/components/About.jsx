import React, { useEffect } from "react";
import GradientText from '../blocks/TextAnimations/GradientText/GradientText';
import "./About.css";

const parcours = [
    {
        titre: "Alternant Développeur .NET et Agile",
        date: "2025 - Aujourd'hui",
        description: "Société Générale"
    },
    {
        titre: "Alternant Développeur Full Stack",
        date: "2024 - 2025",
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
                                Développeur web depuis plusieurs années, je cherche sans cesse à améliorer mes compétences et à relever de nouveaux défis.
                                <br/>
                                <br/>
                                Curieux, passionné et toujours prêt à apprendre, j'essaie constamment d'explorer de nouvelles technologies et de nouvelles approches.
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
                            <h3>Mon parcours</h3>
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
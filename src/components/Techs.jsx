import React from "react";
import GradientText from '../blocks/TextAnimations/GradientText/GradientText';
import Magnet from '../blocks/Animations/Magnet/Magnet'
import './Techs.css';

const Techs = () => {

    const primaryColor = "var(--primary-color)";
    const secondaryColor = "var(--secondary-color)";

    const techs = [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" }
    ]

    return (
        <section id="techs">
            <h1>
                <GradientText
                    colors={[primaryColor, secondaryColor, primaryColor, secondaryColor]}
                    animationSpeed={10}
                    showBorder={false}
                    className="custom-class"
                >
                    Mes Techs
                </GradientText>
            </h1>
            <div className="techs-list">
                {techs.map((tech, index) => (
                    <div key={index} className="tech-bubble">
                        <Magnet padding={200} disabled={false} magnetStrength={5}>
                            <div className="tech-bubble-inner">
                                <img src={tech.icon} alt={tech.name} className="tech-icon" />
                                <span className="tech-name">{tech.name}</span>
                            </div>
                        </Magnet>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Techs;

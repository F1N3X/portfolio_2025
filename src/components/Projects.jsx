import React, { useState, useRef } from "react";
import GradientText from '../blocks/TextAnimations/GradientText/GradientText';
import { ExternalLink, Github, CircleChevronLeft, CircleChevronRight, Dot } from 'lucide-react';
import "./Projects.css";
import DecryptedText from '../blocks/TextAnimations/DecryptedText/DecryptedText';
import TextType from '../blocks/TextAnimations/TextType/TextType';
import pixelWarImg from '../assets/projects/pixel_war.png';
import canvas from '../assets/projects/canvas.png';
import librairieUI from '../assets/projects/librairie_ui.png';
import puissance4 from '../assets/projects/puissance_4.png';
import { useTranslation } from 'react-i18next';

const Projects = () => {
    const { t } = useTranslation();
    
    const primaryColor = "var(--primary-color)";
    const secondaryColor = "var(--secondary-color)";

    const [activeProject, setActiveProject] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [transitionDirection, setTransitionDirection] = useState('');

    const imgDisplayRef = useRef(null);


    const handleNextProject = () => {
        if (isTransitioning) return;

        const currentTransform = getCurrentTransform();
        
        setIsTransitioning(true);
        setTransitionDirection('next');

        if (imgDisplayRef.current && currentTransform) {
            imgDisplayRef.current.style.setProperty('--current-transform', currentTransform);
        }
        
        setTimeout(() => {
            setActiveProject((prev) => (prev < projects.length - 1 ? prev + 1 : 0));

            setIsTransitioning(false);
            setTransitionDirection('');

            if (imgDisplayRef.current) {
                imgDisplayRef.current.style.removeProperty('--current-transform');
            }
        }, 300);
    }

    const handlePreviousProject = () => {
        if (isTransitioning) return;

        const currentTransform = getCurrentTransform();
        
        setIsTransitioning(true);
        setTransitionDirection('prev');

        if (imgDisplayRef.current && currentTransform) {
            imgDisplayRef.current.style.setProperty('--current-transform', currentTransform);
        }
        
        setTimeout(() => {
            setActiveProject((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
            
            setIsTransitioning(false);
            setTransitionDirection('');

            if (imgDisplayRef.current) {
                imgDisplayRef.current.style.removeProperty('--current-transform');
            }
        }, 300);
    }

    const getCurrentTransform = () => {
        if (!imgDisplayRef.current) return null;
        
        const computedStyle = window.getComputedStyle(imgDisplayRef.current);
        const matrix = computedStyle.transform;
        
        if (matrix === 'none') {
            return 'perspective(1200px) rotateX(10deg) rotateY(-20deg) rotateZ(5deg)';
        }
        
        const animationTime = performance.now() % 5000;
        const progress = animationTime / 5000;
        
        let rotateX, rotateY, rotateZ;
        
        if (progress <= 0.5) {
            const t = progress * 2;
            rotateX = 10 + (15 - 10) * t;
            rotateY = -20 + (-22 - (-20)) * t;
            rotateZ = 5 + (8 - 5) * t;
        } else {
            const t = (progress - 0.5) * 2;
            rotateX = 15 + (10 - 15) * t;
            rotateY = -22 + (-20 - (-22)) * t;
            rotateZ = 8 + (5 - 8) * t;
        }
        
        return `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    }


    const techsLogos = {
        React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        NodeJs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
        Express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        Jest: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
        Storybook: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg",
        SocketIO: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
    };

    const projects = [
        {
            title: t('projects.project1.name'),
            description: t('projects.project1.description'),
            image: pixelWarImg,
            techs: ["React", "Express", "TypeScript"],
            siteLink: "",
            codeLink: "https://github.com/La-404-Devinci/pixel-war"
        },
        {
            title: t('projects.project2.name'),
            description: t('projects.project2.description'),
            image: puissance4,
            techs: ["SocketIO", "Express", "TypeScript"],
            siteLink: "https://power4.kan-a-pesh.fr/",
            codeLink: "https://github.com/IIM-Backrow/B3-SocketIO"
        },
        {
            title: t('projects.project3.name'),
            description: t('projects.project3.description'),
            image: canvas,
            techs: ["JavaScript"],
            siteLink: "https://creative-developement.vercel.app/",
            codeLink: "https://github.com/F1N3X/creative_developement"
        },
        {
            title: t('projects.project4.name'),
            description: t('projects.project4.description'),
            image: librairieUI,
            techs: ["React", "TypeScript", "Storybook", "Jest"],
            siteLink: "https://iim-backrow.github.io/B3-libraryUI",
            codeLink: "https://github.com/IIM-Backrow/B3-libraryUI"
        },
    ];

    const getImageDisplayClass = () => {
        let className = "img-display";
        if (isTransitioning) {
            className += ` transitioning-${transitionDirection}`;
        }
        return className;
    };

    return (
        <section id="projects">
            <h1>
                <GradientText
                    colors={[primaryColor, secondaryColor, primaryColor, secondaryColor]}
                    animationSpeed={10}
                    showBorder={false}
                    className="custom-class"
                >
                    {t('projects.title')}
                </GradientText>
            </h1>

            <div className="projects-navigation">
                <div className="projects-content">
                    <h2>
                        <TextType 
                            key={activeProject}
                            text={projects[activeProject].title}
                            startOnVisible={true}
                            typingSpeed={75}
                            cursorCharacter="|"
                            loop={false}
                        />
                    </h2>

                    <p>
                        <DecryptedText
                            key={activeProject}
                            text={projects[activeProject].description}
                            animateOn="view"
                            revealDirection="start"
                            speed={110}
                            maxIterations={9}
                            useOriginalCharsOnly={true}
                        />
                    </p>

                    <div 
                        className="techs" 
                        key={activeProject}
                    >
                        {projects[activeProject].techs.map((tech, index) => (
                            <div 
                                key={index}
                                className="project-fade-in"
                                style={{ "--delay": `${index * 0.12}s` }}
                            >
                                <img
                                    src={techsLogos[tech]}
                                    alt={tech}
                                    className="tech-logo"
                                />

                                <span className="tech-item">
                                    {tech}
                                </span>
                            </div>
                        ))}
                    </div>
                    
                    <div className="project-links">
                        {projects[activeProject].siteLink && (
                            <div
                                className="site-link project-link-fade-in"
                                style={{ "--delay": "0.08s" }}
                            >
                                <ExternalLink />
                                <a href={projects[activeProject].siteLink} target="_blank">Demo</a>
                            </div>
                        )}

                        {projects[activeProject].codeLink && (
                            <div
                                className="code-link project-link-fade-in"
                                style={{ "--delay": "0.22s" }}
                            >
                                <Github />
                                <a href={projects[activeProject].codeLink} target="_blank">Code</a>
                            </div>
                        )}
                    </div>
                </div>

                <div className={getImageDisplayClass()} ref={imgDisplayRef}>
                    <div className="mac-window-header">
                        <span className="mac-dot red"></span>
                        <span className="mac-dot yellow"></span>
                        <span className="mac-dot green"></span>
                    </div>
                    <img src={projects[activeProject].image} alt={projects[activeProject].title} />
                </div>
            </div>

            <div className="project-indicators">
                <div className="indicator">
                    <CircleChevronLeft 
                        className="prvious-project"
                        onClick={handlePreviousProject}
                        color={primaryColor}
                        size={50}
                    />
                </div>

                <ul className="project-indicator-list">
                    {projects.map((project, index) => (
                        <li 
                            key={index} 
                            className={`project-indicator-item ${activeProject === index ? 'active' : ''}`}
                        >
                            <Dot 
                                color="var(--primary-color)"
                                size={activeProject === index ? 75 : 50}
                            />
                        </li>
                    ))}
                </ul>

                <div className="indicator">
                    <CircleChevronRight 
                        className="next-project"
                        onClick={handleNextProject}
                        color={primaryColor}
                        size={50}
                    />
                </div>
            </div>
        </section>
    );
}

export default Projects;
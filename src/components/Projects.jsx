import React, { useState, useRef } from "react";
import GradientText from '../blocks/TextAnimations/GradientText/GradientText';
import { ExternalLink, Github, CircleChevronLeft, CircleChevronRight, Dot } from 'lucide-react';
import "./Projects.css";

const Projects = () => {
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
            if (activeProject < projects.length - 1) {
                setActiveProject(activeProject + 1);
            } else {
                setActiveProject(0);
            }
            
            setTimeout(() => {
                setIsTransitioning(false);
                setTransitionDirection('');

                if (imgDisplayRef.current) {
                    imgDisplayRef.current.style.removeProperty('--current-transform');
                }
            }, 50);
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
            if (activeProject > 0) {
                setActiveProject(activeProject - 1);
            } else {
                setActiveProject(projects.length - 1);
            }
            
            setTimeout(() => {
                setIsTransitioning(false);
                setTransitionDirection('');

                if (imgDisplayRef.current) {
                    imgDisplayRef.current.style.removeProperty('--current-transform');
                }
            }, 50);
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
        JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        NodeJs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
        Express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    };



    const projects = [
        {
            title: "Projet 1",
            description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "https://randomwordgenerator.com/img/picture-generator/nick-dunlap-h65WkTvyWJY-unsplash.jpg",
            techs: ["React", "CSS", "JavaScript"],
            siteLink: "https://example.com/projet1",
            codeLink: ""
        },
        {
            title: "Projet 2",
            description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "https://randomwordgenerator.com/img/picture-generator/53e8d2434f5bb10ff3d8992cc12c30771037dbf85254784c772d7ddc9e44_640.jpg",
            techs: ["HTML", "CSS", "JavaScript"],
            siteLink: "https://example.com/projet2",
            codeLink: ""
        },
        {
            title: "Projet 3",
            description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "https://randomwordgenerator.com/img/picture-generator/55e0d5444257ab14f1dc8460962e33791c3ad6e04e50744077297bd5924fc0_640.jpg",
            techs: ["NodeJs", "Express", "MongoDB"],
            siteLink: "https://example.com/projet3",
            codeLink: "https://example.com/code/projet3"
        }
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
                    Mes Projets
                </GradientText>
            </h1>

            <div className="projects-navigation">
                <div className="projects-content">
                    <h2>{projects[activeProject].title}</h2>

                    <p>{projects[activeProject].description}</p>

                    <div className="techs">
                        {projects[activeProject].techs.map((tech, index) => (
                            <div key={index}>
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
                                <div className="site-link">
                                    <ExternalLink />
                                    <a href={projects[activeProject].siteLink} target="_blank">Demo</a>
                                </div>
                            )}

                            {projects[activeProject].codeLink && (
                                <div className="code-link">
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
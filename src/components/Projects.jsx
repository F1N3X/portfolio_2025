import React, { useState } from "react";
import GradientText from '../blocks/TextAnimations/GradientText/GradientText';
import { ExternalLink, Github } from 'lucide-react';
import "./Projects.css";

const Projects = () => {
    const primaryColor = "var(--primary-color)";
    const secondaryColor = "var(--secondary-color)";

    const [activeProject, setActiveProject] = useState(0);

    const handleNextProject = () => {
        if (activeProject < projects.length - 1) {
            setActiveProject(activeProject + 1);
        } else {
            setActiveProject(0);
        }
    }

    const handlePreviousProject = () => {
        if (activeProject > 0) {
            setActiveProject(activeProject - 1);
        }
        else {
            setActiveProject(projects.length - 1);
        }
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
                            <div>
                                <img
                                    key={index}
                                    src={techsLogos[tech]}
                                    alt={tech}
                                    className="tech-logo"
                                />

                                <span key={index} className="tech-item">
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
                <div className="img-display">
                    <div>
                        <img src={projects[activeProject].image} alt={projects[activeProject].title} />
                    </div>
                </div>
            </div>

            <div className="project-indicators">
                <button className="nav-button" onClick={handlePreviousProject}>Précédent</button>
                <button className="nav-button" onClick={handleNextProject}>Suivant</button>
            </div>
        </section>
    );
}

export default Projects;
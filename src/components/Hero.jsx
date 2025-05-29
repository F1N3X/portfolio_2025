import React from "react";
import GradientText from '../blocks/TextAnimations/GradientText/GradientText';
import { Dot, Mail, Github, Linkedin, ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">

            <h1>
                <GradientText
                colors={["#2EC5ED", "#7681F2", "#E6489D", "#2EC5ED", "#7681F2", "#E6489D"]}
                animationSpeed={5}
                showBorder={false}
                className="custom-class"
                >
                    Quentin Garnier
                </GradientText>
            </h1>

            <div className="hero-content">
                <h2 className="hero-title">Développeur Web Full-Stack</h2>

                <div className="hero-description">
                    <Dot className="dot" size={50} color="green"/>
                    <p>Disponible pour de nouveaux projets</p>
                </div>

                <div className="hero-links">
                    <a
                        href="https://github.com/F1N3X"
                        className="hero-link"
                        target="_blank"
                    >
                       <Github color="cyan" size={30}/>
                    </a>
    
                    <a
                        href="https://www.linkedin.com/in/quentin-garnier-07a58824b/"
                        className="hero-link"
                        target="_blank"
                    >
                       <Linkedin color="cyan" size={30}/>
                    </a>

                    <a
                        href="mailto:quentin.garnier@email.com"
                        className="hero-link"
                        target="_blank"
                    >
                       <Mail color="cyan" size={30}/>
                    </a>
                </div>

                <div className="hero-cta">
                    <a
                        href="#"
                        className="hero-cta-button"
                    >
                        <ChevronDown color="cyan" size={75}/>
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Hero;
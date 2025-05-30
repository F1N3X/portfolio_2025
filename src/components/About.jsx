import React from "react";
import GradientText from '../blocks/TextAnimations/GradientText/GradientText';
import "./About.css";

const About = () => {

    const primaryColor = "var(--primary-color)";
    const secondaryColor = "var(--secondary-color)";

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
            
            <div className="about-content">
                <div className="about-image">
                    <p>👨‍💻</p>
                </div>

                <div className="about-text">
                    <span className="parcours-content">
                        <h2>Mon parcours</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, quasi eaque dolorum maxime cupiditate sint, vitae, accusamus voluptatum nobis assumenda necessitatibus ut porro veniam ab perferendis corrupti aut animi totam?</p>
                    </span>

                    <span className="philosophy-content">
                        <h2>Ma philosophie</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias blanditiis enim quia incidunt fugiat minus amet cum deleniti est consequatur, dignissimos similique inventore harum! Tempora fuga nulla quam soluta voluptate.</p>
                    </span>
                </div>
            </div>
            
        </section>
    );
}

export default About;
import React from "react";
import './Contact.css';
import GradientText from '../blocks/TextAnimations/GradientText/GradientText';
import GlareHover from '../blocks/Animations/GlareHover/GlareHover';
import { Mail, Github, Linkedin } from 'lucide-react';
import FloatingLabelInput from './Contact/FloatingLabelInput';
import { useState } from "react";

const Contact = () => {

    const primaryColor = "var(--primary-color)";
    const secondaryColor = "var(--secondary-color)";

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [object, setObject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted");
    }

    return (
        <section id="contact">
            <h1>
                <GradientText
                    colors={[primaryColor, secondaryColor, primaryColor, secondaryColor]}
                    animationSpeed={10}
                    showBorder={false}
                    className="custom-class"
                    >
                        Me Contacter
                </GradientText>
            </h1>

            <div className="contact-content">
                <div className="contact-info">
                    <div className="speach">
                        <span>Prêt à collaborer sur de futurs projets ?</span>
                        <p>Discutons ensemble !</p>
                    </div>

                    <div className="contact-bubbles">
                        <a href="mailto:quentingarnier92320@gmail.com" target="_blank">
                            <GlareHover 
                            className="contact-bubble" 
                            style={{  
                                width: '30rem',
                                height: '3rem',
                                display: 'flex',
                                gap: '0.5rem',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            }}
                            > 
                                <Mail color="var(--primary-color)" size={30} />
                                <span>quentingarnier92320@gmail.com</span>
                            </GlareHover>
                        </a>
                        
                        <a href="https://www.linkedin.com/in/quentin-garnier-07a58824b/" target="_blank">
                            <GlareHover 
                            className="contact-bubble" 
                            style={{  
                                width: '30rem',
                                height: '3rem',
                                display: 'flex',
                                gap: '0.5rem',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            }}
                            > 
                                <Linkedin color="var(--primary-color)" size={30} />
                                <span>Quentin Garnier</span>
                            </GlareHover>
                        </a>
                        
                        <a href="https://github.com/F1N3X" target="_blank">
                            <GlareHover 
                            className="contact-bubble" 
                            style={{  
                                width: '30rem',
                                height: '3rem',
                                display: 'flex',
                                gap: '0.5rem',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            }}
                            > 
                                <Github color="var(--primary-color)" size={30} />
                                <span>F1N3X</span>
                            </GlareHover>
                        </a>
                    </div>
                </div>

                <div className="contact-form">
                    <form action={handleSubmit}> 
                        <FloatingLabelInput
                            id="name"
                            name="name"
                            label="Nom complet"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <FloatingLabelInput 
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <FloatingLabelInput
                            id="object"
                            name="object"
                            label="Sujet"
                            type="text"
                            value={object}
                            onChange={(e) => setObject(e.target.value)}
                        />

                        <FloatingLabelInput
                            id="message"
                            name="message"
                            label="Message"
                            type="textarea"
                            rows="1"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />

                        <button type="submit">Envoyer</button>    
                    </form>
                </div>
            </div>
        
        </section>
    );
}

export default Contact;

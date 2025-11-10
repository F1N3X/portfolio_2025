import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

import './Contact.css';
import GradientText from '../blocks/TextAnimations/GradientText/GradientText';
import GlareHover from '../blocks/Animations/GlareHover/GlareHover';
import { Mail, Github, Linkedin } from 'lucide-react';
import FloatingLabelInput from './Contact/FloatingLabelInput';

const Contact = () => {
    const { t } = useTranslation();

    const primaryColor = "var(--primary-color)";
    const secondaryColor = "var(--secondary-color)";

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [object, setObject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
        const userId = import.meta.env.VITE_EMAIL_USER_ID;

        emailjs.sendForm(
            serviceId,
            templateId,
            event.target,
            {
                publicKey: userId
            }  
        )
        .then(() => {
            alert(t('contact.form.success'));
            setName("");
            setEmail("");
            setObject("");
            setMessage("");
        }, (error) => {
            alert(t('contact.form.error'));
            console.log(error);
        });
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
                        {t('contact.title')}
                </GradientText>
            </h1>

            <div className="contact-content">
                <div className="contact-info">
                    <div className="speach">
                        <span>{t('contact.subtitle')}</span>
                        <p>{t('contact.greeting')}</p>
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
                    <form onSubmit={handleSubmit}> 
                        <FloatingLabelInput
                            id="name"
                            name="name"
                            label={t('contact.form.name')}
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <FloatingLabelInput 
                            id="email"
                            name="email"
                            label={t('contact.form.email')}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <FloatingLabelInput
                            id="object"
                            name="title"
                            label={t('contact.form.subject')}
                            type="text"
                            value={object}
                            onChange={(e) => setObject(e.target.value)}
                        />

                        <FloatingLabelInput
                            id="message"
                            name="message"
                            label={t('contact.form.message')}
                            type="textarea"
                            rows="1"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />

                        <button type="submit">{t('contact.form.submit')}</button>    
                    </form>
                </div>
            </div>
        
        </section>
    );
}

export default Contact;

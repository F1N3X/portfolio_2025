import React from "react";
import GradientText from '../blocks/TextAnimations/GradientText/GradientText';
import Magnet from '../blocks/Animations/Magnet/Magnet';
import './Techs.css';
import { useEffect, useState, useRef } from "react";
import { useTranslation } from 'react-i18next';

const Techs = () => {
    const { t } = useTranslation();

    const primaryColor = "var(--primary-color)";
    const secondaryColor = "var(--secondary-color)";

    const techs = [
        { 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
          title: "TypeScript"
        },  
        { 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          title: "React"
        },
        { 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
          title: "Vue.js"
        },
        {
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
          title: "Express"
        },
        { 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
          title: ".NET"
        },
        { 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/symfony/symfony-original.svg",
          title: "Symfony"
        },
        { 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
          title: "MySQL"
        },
        { 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
          title: "MongoDB"
        },
        { 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
          title: "Sass"
        },
        { 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
          title: "Tailwind"
        },
        { 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
          title: "Bootstrap"
        },
        { 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
          title: "Material UI"
        },
        { 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
          title: "Python"
        },
        { 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
          title: "Git"
        },
        { 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
          title: "Docker"
        }
    ];

    const [positions, setPositions] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null); 

    useEffect(() => {
        const newPositions = [];
        const numTechs = techs.length;
        
        const centerIndex = 0;
        const innerRingCount = 5;
        const innerRadius = '10rem';
        const outerRadius = '20rem';

        techs.forEach((tech, index) => {
            let transform = 'translate(-50%, -50%)';

            if (index === centerIndex) {
                transform += ' translate(0)';
            } else if (index > centerIndex && index <= innerRingCount) {
                const angle = ((index - 1) / innerRingCount) * 360;
                transform += ` rotate(${angle}deg) translate(${innerRadius}) rotate(${-angle}deg)`;
            } else {
                const outerRingIndex = index - innerRingCount - 1;
                const outerRingTotal = numTechs - innerRingCount - 1;
                const angle = (outerRingIndex / outerRingTotal) * 360;
                transform += ` rotate(${angle}deg) translate(${outerRadius}) rotate(${-angle}deg)`;
            }

            newPositions.push({ transform });
        });

        setPositions(newPositions);
    }, [techs.length]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(sectionRef.current);
                }
            },
            {
                threshold: 0.1
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section id="techs" ref={sectionRef} className={isVisible ? 'is-visible' : ''}>
            <h1>
                <GradientText
                    colors={[primaryColor, secondaryColor, primaryColor, secondaryColor]}
                    animationSpeed={10}
                    showBorder={false}
                    className="custom-class"
                >
                    {t('techs.title')}
                </GradientText>
            </h1>
            <div className="techs-list">
              {techs.map((tech, index) => (
                <div 
                  key={index} 
                  className="tech-bubble" 
                  style={{ 
                    '--final-transform': positions[index]?.transform,
                    '--delay': `${index * 50}ms` 
                  }}
                >
                  <Magnet padding={250} disabled={false} magnetStrength={8}>
                    <div className="tech-bubble-inner">
                      <div className="tech-icon-bubble">
                        <img src={tech.image} alt={tech.title} className="tech-icon" />
                      </div>
                      <span className="tech-name">{tech.title}</span>
                    </div>
                  </Magnet>
                </div>
              ))}
            </div>
        </section>
    );
}

export default Techs;
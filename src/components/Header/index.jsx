import "./Header.css"
import React, { useEffect, useState } from 'react'
import translateIcon from "../../assets/translate.png"


const Header = ({ isEnglish, toggleLanguage }) => {


    useEffect(() => {
        const internalLinks = document.querySelectorAll('a[href^="#"]');
        
        internalLinks.forEach(link => {
            link.addEventListener("click", function (e) {
                e.preventDefault();

                const targetId = this.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            });
        });
    }, []);
    
    return (
        <div className="header-menu">
            <a href="#about">{isEnglish ? "ABOUT" : "SOBRE"}</a>
            <a href="#projects">{isEnglish ? "PROJECTS" : "PROJETOS"}</a>
            <a href="#skills">{isEnglish ? "SKILLS" : "HABILIDADES"}</a>
            <div className="translate-button" onClick={toggleLanguage}>
            <img src={translateIcon} alt="translate icon"/>
            </div>
        </div>
    )
}

export default Header
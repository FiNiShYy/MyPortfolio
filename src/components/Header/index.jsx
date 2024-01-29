import "./Header.css"
import React, { useEffect } from 'react'

const Header = () => {
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
            <a href="#about" >SOBRE</a>
            <a href="#projects">PROJETOS</a>
            <a href="#skills">SKILLS</a>
        </div>
    )
}

export default Header
import "./Header.css"
import React, { useEffect } from 'react'

const Header = () => {
    useEffect(() => {
        const internalLinks = document.querySelectorAll('a[href^="#"]');
        const trackingMato = document.getElementById("trackingMato");
        
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
            trackingMato.addEventListener("click", function () {
              window._paq.push([
                "trackEvent",
                "Menu",
                "Click",
                "Sobre",
              ]);
            });
    }, []);
    return (
        <div className="header-menu">
            <a id="trackingMato" href="#about">SOBRE</a>
            <a href="#projects">PROJETOS</a>
            <a href="#skills">SKILLS</a>
        </div>
    )
}

export default Header
import "./About.css"
import PFPKaua from '../../assets/ImagePresentation.jpg'

const About = () => {
    return (
        <div className="img-about" id="about">
            <img src={PFPKaua}></img>
            <div className="about-text">
                <h1>SOBRE MIM</h1>
                <h2>Sou desenvolvedor em busca de constantes desafios, atualmente meu foco está voltado para Front End, possuo conhecimentos e experiências em trabalhos reais com as tecnologías HTML, CSS, Javascript, React, Figma e bibliotecas diversas. Também tenho conhecimento acerca de Back End com conhecimentos sobre Node e logs.</h2>
            </div>
        </div>
    )
}

export default About
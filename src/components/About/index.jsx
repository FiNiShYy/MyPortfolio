import "./About.css"
import PFPKaua from '../../assets/ImagePresentation.jpg'

const About = () => {
    return (
        <div className="img-about" id="about">
            <img src={PFPKaua}></img>
            <div className="about-text">
                <h1>SOBRE MIM</h1>
                <h2>Sou desenvolvedor iniciante em busca de desafios, atualmente meu foco está voltado para Front End, nessa área possuo conhecimentos acerca de HTML, CSS, Figma e estou trabalhando em alguns projetos React, também tenho vontade de aprender mais sobre Back End onde ja estudei sobre Node.js</h2>
            </div>
        </div>
    )
}

export default About
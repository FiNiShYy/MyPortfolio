import "./About.css"
import PFPKaua from '../../assets/ImagePresentation.jpg'

const About = ({isEnglish}) => {
    return (
        <div className="img-about" id="about">
            <img src={PFPKaua}></img>
            <div className="about-text">
                <h1>{isEnglish ? "ABOUT ME" : "SOBRE MIM"}</h1>
                <h2>{isEnglish ? "I'm a developer passionate about technology and innovation. I always seek to create efficient and high-quality solutions. I am committed to continually learning and collaborating on projects that make a difference." : "Sou um desenvolvedor apaixonado por tecnologia e inovação. Busco sempre criar soluções eficientes e de alta qualidade. Estou comprometido em aprender continuamente e em colaborar em projetos que façam a diferença."}</h2>
            </div>
        </div>
    )
}

export default About
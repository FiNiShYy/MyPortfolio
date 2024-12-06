import './Technologies.css'

const Technologies = ({ isEnglish }) => {
    return (
        <div id='skills' className='technologies-area'>
            <h1>{isEnglish ? "TECHNOLOGIES" : "TECNOLOGIAS"}</h1>
            <ul>
                <li className='column'>
                    <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank">
                        <i className="fab fa-html5"></i>
                        <span>HTML5</span>
                    </a>
                </li>
                <li className='column'>
                    <a href="https://www.w3schools.com/cssref/index.php" target="_blank">
                        <i className="fab fa-css3"></i>
                        <span>CSS3</span>
                    </a>
                </li>
                <li className='column'>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                        <i className="fab fa-js"></i>
                        <span>JavaScript</span>
                    </a>
                </li>
                <li className='column'>
                    <a href="https://react.dev" target="_blank">
                        <i className="fab fa-react"></i>
                        <span>React.Js</span>
                    </a>
                </li>
                <li className='column'>
                    <a href="https://www.figma.com" target="_blank">
                        <i className="fab fa-figma"></i>
                        <span>Figma</span>
                    </a>
                </li>
                <li className='column'>
                    <a href="https://nodejs.org/en" target="_blank">
                        <i className="fab fa-node"></i>
                        <span>Node</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Technologies

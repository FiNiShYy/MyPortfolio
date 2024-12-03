import { useEffect } from 'react';
import './Footer.css'


const Footer = ({isEnglish}) => {
    useEffect(() => {
        document.getElementById('year').innerText = new Date().getFullYear()
    }, [])
    return (
        <div className='footer'>
            <h1>{isEnglish ? "All the rights reserved" : "Todos os direitos reservados "} © Kauã Gabriel <span id="year"></span></h1>
        </div>
    )
}


export default Footer 
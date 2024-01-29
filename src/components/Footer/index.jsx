import { useEffect } from 'react';
import './Footer.css'


const Footer = () => {
    useEffect(() => {
        document.getElementById('year').innerText = new Date().getFullYear()
    }, [])
    return (
        <div className='footer'>
            <h1>Copyright © <span id="year"></span> Kauã Gabriel. Todos os direitos reservados</h1>
        </div>
    )
}


export default Footer 
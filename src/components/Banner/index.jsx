import './Banner.css'
import gitHubLogo from '../../assets/github.png'
import whatsappLogo from '../../assets/whatsapp-white-icon.png'

const Banner = () => {
    return (
        <section className='banner'>
            <div className='about'>
                <h1>KAUÃ GABRIEL</h1>
                <h2>Desenvolvedor</h2>
            <div className='contact-logo'>
                <a target='_blank' className='contact-logo' href='https://www.linkedin.com/in/kau%C3%A3-gabriel-821996212/'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
                </a>
                <a target='_blank' className='contact-logo' href='https://github.com/FiNiShYy'>
                    <img src={gitHubLogo} />
                </a>
                <a target='_blank' className='contact-logo' href='https://api.whatsapp.com/send?phone=5544997579646&text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio%2C%20gostaria%20de%20conversar%20com%20voc%C3%AA!'>
                    <img src={whatsappLogo} />
                </a>
            </div>
            </div>
            
        </section>
    )
}

export default Banner
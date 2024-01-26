import React from 'react';
import Cards from './Cards';
import PortalSalt from '../../assets/PortalSalt.png';
import './Portfolio.css';

const Portfolio = () => {
        return (
        <div className='portfolio-section'>
            <h1>Projetos recentes</h1>
        <div className='card-section'>  
        <Cards
                className='cards'
                imageUrl={PortalSalt}
                titulo='Portal Salt Systems'
                link="https://saltsystems.com.br/"
        />
        <Cards
                className='cards'
                imageUrl={PortalSalt}
                titulo='Teste Mariana Curiosa'
                link="https://www.google.com/search?q=te+amo&sca_esv=601759512&rlz=1C1ONGR_pt-PTBR1073BR1073&tbm=isch&sxsrf=ACQVn0_VWMFmV5y9R9xMtg2HFdy5hnbYmw:1706286007489&source=lnms&sa=X&ved=2ahUKEwil5_HauvuDAxVTrpUCHcDFCTgQ_AUoAnoECAEQBA&biw=1920&bih=945&dpr=1"
        />
        <Cards
                className='cards'
                imageUrl={PortalSalt}
                titulo='Portal Salt Systems'
                link="https://saltsystems.com.br/"
        />
        <Cards
                className='cards'
                imageUrl={PortalSalt}
                titulo='Portal Salt Systems'
                link="https://saltsystems.com.br/"
        />
        <Cards
                className='cards'
                imageUrl={PortalSalt}
                titulo='Portal Salt Systems'
                link="https://saltsystems.com.br/"
        />
        <Cards
                className='cards'
                imageUrl={PortalSalt}
                titulo='Portal Salt Systems'
                link="https://saltsystems.com.br/"
        />
        
        </div>
        </div>
        )
        
};

export default Portfolio;

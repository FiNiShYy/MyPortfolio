import React from 'react';
import Cards from './Cards';
import PortalSalt from '../../assets/PortalSalt.png';
import EletroSaoJose from '../../assets/EletroSaoJoseProject.png'
import SaltHTML from '../../assets/SaltHTML.png'
import Organo from '../../assets/OrganoProject.png'
import Confeacc from '../../assets/confeacc.png'
import FazCredito from '../../assets/fazcredito.png'
import './Portfolio.css';

const Portfolio = () => {
        return (
        <div id='projects' className='portfolio-section'>
            <h1>PROJETOS RECENTES</h1>
        <div className='card-section'>  
        <Cards
                className='cards'
                imageUrl={PortalSalt}
                titulo='Portal Salt Systems'
                link="https://saltsystems.com.br/"
        />
        <Cards
                className='cards'
                imageUrl={EletroSaoJose}
                titulo='Eletro São José Landing Page'
                link="https://finishyy.github.io/meu-site/"
        />
        <Cards
                className='cards'
                imageUrl={SaltHTML}
                titulo='Portal Salt Systems (HTML version)'
                link="https://portal-salt.vercel.app/"
        />
        <Cards
                className='cards'
                imageUrl={Organo}
                titulo='Organo project made with Alura'
                link="https://organo-react-beta-one.vercel.app/"
        />
        <Cards
                className='cards'
                imageUrl={Confeacc}
                titulo='CONFEACC'
                link="https://confeacc.com.br"
        />
        <Cards
                className='cards'
                imageUrl={FazCredito}
                titulo='Faz Crédito'
                link="https://fazcredito.com.br"
        />
        </div>
        </div>
        )
        
};

export default Portfolio;

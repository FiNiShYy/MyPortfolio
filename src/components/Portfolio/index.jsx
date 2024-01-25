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
                description='Portal criado para '
                link="https://todo-list-react-smoky-alpha.vercel.app/"
        />
        <Cards
                className='cards'
                imageUrl={PortalSalt}
                titulo='Portal Salt Systems'
                description='Portal criado para '
                link="https://todo-list-react-smoky-alpha.vercel.app/"
        />
        <Cards
                className='cards'
                imageUrl={PortalSalt}
                titulo='Portal Salt Systems'
                description='Portal criado para '
                link="https://todo-list-react-smoky-alpha.vercel.app/"
        />
        <Cards
                className='cards'
                imageUrl={PortalSalt}
                titulo='Portal Salt Systems'
                description='Portal criado para '
                link="https://todo-list-react-smoky-alpha.vercel.app/"
        />
        </div>
        </div>
        )
        
};

export default Portfolio;

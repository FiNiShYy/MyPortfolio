import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Porftolio from './components/Portfolio'
import Technologies from './components/Technologies'
import Footer from './components/Footer'
import { useState } from 'react'


const App = () => {
  const [isEnglish, setIsEnglish] = useState(false);

  const toggleLanguage = () => {
    setIsEnglish(prev => !prev);
};

  return (
    <div>
    <Header isEnglish={isEnglish} toggleLanguage={toggleLanguage}/>
    <Banner isEnglish={isEnglish}/>
    <About isEnglish={isEnglish}/>
    <Porftolio isEnglish={isEnglish}/>
    <Technologies isEnglish={isEnglish}/>
    <Footer isEnglish={isEnglish}/>
    </div>
  )
}

export default App
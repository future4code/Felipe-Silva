import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ProfilePic from './imagens/pic.jpg';
import LogoLab from './imagens/labenu.png';
import Insta from './imagens/insta.png';
import ProfProfile from './imagens/prof.jpeg'; 

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ProfilePic} 
          nome="Felipe Assis" 
          descricao="Oi, eu sou o Felipe. Sou estudante de desenvolvimento web na Labenu."
        />
        
        <CardPequeno
        imagem = "https://e7.pngegg.com/pngimages/11/626/png-clipart-signal-telephone-call-computer-icons-technology-template-electronics.png"
        nome="Contato"
        endereco="Lagoa Santa - MG"
        telefone = "(31) 99911 - 4404"
        email = "felipedev.programacao@gmail.com"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={ProfProfile}
          nome="Formação" 
          descricao="Formado em Comunicação Social. Trabalhei por 7 anos na área. Hoje, procuro uma oportunidade em programação. Esse novo desafio vai contribuir para meu aperfeiçoamento profissional e humano." 
        />
        
        <CardGrande 
          imagem={LogoLab} 
          nome="LABENU" 
          descricao="A experiência na Labenu tem sido desafiadora. A cada dia tenho de superar meus limites e aprender um pouco mais." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem={Insta}
          texto="Instagram" 
        />        
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Roosevelt Andrade" 
          descricao="Olá, meu nome é Roosevelt Andrade. Sou aluno da Labenu. Atualmente estou em desenvolvimento para ser um desenvolvedor FullStack. Tenho experiência com a área administrativa e cursos extracurriculares em Administração, formação profissional, marketing pessoal e Monitoria de estudos. Busco dar o melhor de mim para sempre evoluir e aprender. "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className="base-info">
        
      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://fotoParaTrabalho.png" 
          nome="Nube" 
          descricao="Cargo: Área de marketing vendendo crédito consignado para aposentado e pensionista 
          do INSS. Evolução em marketing e trabalho em equipe pelo banco BMG." 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome=" Three Soluções " 
          descricao="Dando suporte tecnológico ao escritório e auxiliando nas demais atividades. 
          Elaboração de planilha financeira do escritório, organização de documentações e notas 
          fiscais. " 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        

        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
          texto="Linkedin" 
        />

      </div>
    </div>
  );
}

export default App;

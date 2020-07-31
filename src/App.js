import React from 'react';
import Menu from './components/Menu'
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

import './index.css';

function App() {
  const { categorias } = dadosIniciais;
  return (
    <div className="App">
      <Menu />

      <BannerMain
        videoTitle={categorias[0].videos[0].titulo}
        url={categorias[0].videos[0].url}
        videoDescription={"Uma criptomoeda é um meio de troca, podendo ser centralizado ou descentralizado que se utiliza da tecnologia de blockchain e da criptografia para assegurar a validade das transações e a criação de novas unidades da moeda."}
      />
      <div className="Carousel">
        {
          categorias.map((categoria) => (
            <Carousel
              key={categoria.titulo}
              ignoreFirstVideo
              category={categoria}
            />
          ))
        }
      </div>


      <Footer />
    </div>
  );
}

export default App;

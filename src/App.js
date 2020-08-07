import React from 'react';
import Menu from './components/Menu'
import Playlist from './data/Playlist.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

import './index.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <BannerMain />
        <div className="Carousel">
          {
            Playlist.map((category, i) => (
              <Carousel
                key={`${category.titulo}-${i}`}
                category={category}
              />
            ))
          }
        </div>
      <Footer />
    </div>
  );
}

export default App;

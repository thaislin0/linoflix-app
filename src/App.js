import React from "react";
import Menu from '../src/components/Menu';

import dadosIniciais from '../src/data/dados_iniciais.json';

import BannerMain from '../src/components/BannerMain';
import Carousel from '../src/components/Carousel';
import Footer from '../src/components/Footer';

function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-End? Trabalhando na área"}
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      <Carousel category={dadosIniciais.categorias[1]} />

      <Carousel category={dadosIniciais.categorias[2]} />

      <Footer />
    </div>
  );
}

export default Home;

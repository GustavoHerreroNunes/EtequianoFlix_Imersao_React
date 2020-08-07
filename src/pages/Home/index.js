import React from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carrosel from '../../components/Carousel';
import Footer from '../../components/Footer';
import dadosIniciais from '../../data/dados_iniciais.json';

function Home() {
  return (
    <>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Chegou a hora de arrumar um emprego, participar de entrevistas e entregar currículos, mas...como faço meu currículo, e como devo agir na entrevista? Confira aqui com o Iberê e a Mari do Manual do Mundo!"}
      />

      <Carrosel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carrosel
        category={dadosIniciais.categorias[1]}
      />

      <Carrosel
        category={dadosIniciais.categorias[2]}
      />      

      <Carrosel
        category={dadosIniciais.categorias[3]}
      />      

      <Carrosel
        category={dadosIniciais.categorias[4]}
      />      

      <Carrosel
        category={dadosIniciais.categorias[5]}
      />      

      <Footer />
    </>
  );
}

export default Home;
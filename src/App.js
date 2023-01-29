import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Conteudo from './components/Conteudo/Conteudo';

function App() {
  return (
    <div>
      <Header />
      <Conteudo />
      <Footer />
    </div>
  );
}

export default App;

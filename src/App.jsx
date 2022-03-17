import React from 'react'
import './App.css';

import Header from './sections/Header';
import SliderCategory from './components/SliderCategory';
import Warning from './components/Warning';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Warning>Compra mínima acima de R$20,00 reais</Warning>
      <SliderCategory></SliderCategory>
    </div>
  );
}

export default App;

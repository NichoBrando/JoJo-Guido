import React from 'react';
import './App.css';
import DIO from './images/DIO.png'

function App() {
  return (
    <React.Fragment>
      <div className="topDiv">
        <svg>
          <polygon points="0,0 0,1000, 1400,0 0,0"></polygon>
        </svg>
      </div>
      <div className = "title">
        <h1>Stardust Crusaders</h1>
      </div>
      <div className = "about">
        <h2>Quando acontece?</h2>
        <p>
          A história acontece em 1989, começando com o Jotaro, protagonista da série,
          na prisão.
        </p>
        <h2>Sinopse:</h2>
        <p>
          Jotaro estava na prisão, por pedido dele mesmo, pois manifestou um poder sobrenatural,
          conhecido como Stand. Após um tempo e encontro com Joseph e seu amigo, Avdol, e posteriormente
          Kakkyoin, os quatro vão em direção ao Egito, para matar DIO e salvar a mãe de Jotaro, que estava
          tendo complicações, por causa do stand.
        </p>
      </div>
      <div className="image">
        <img src={DIO}></img>
      </div>
    </React.Fragment>
  );
}

export default App;

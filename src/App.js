import React from 'react';
import  './imgs/stylesheet.css';


function App() {


  return (
    <div className="backgroundHOME">

      <h1 className="title">Cansado de pensar em ideias legais para seus personagens de RPG e não ter onde salvar?
      </h1>
      <div className= "explanation-text">
      <p>Eu e meus amigos temos o costume de jogar RPG de mesa e sempre há
        algum de nós que vê uma imagem aleatória ou tem alguma ideia mirabolante sobre algum personagem para próxima mesa, então para praticar
        minhas habilidades com <span className="highlight">node.js, react.js e mysql</span> como banco de dados eu decidi criar esta aplicação, na qual meus amigos e eu poderíamos
        vir aqui e salvar nossas ideias, podendo voltar e modificá-la caso seja necessário.
      </p>
      </div>
    </div>
  );

}

export default App;

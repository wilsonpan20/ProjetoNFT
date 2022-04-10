import React from "react";
import home from "../assets/home.png";
export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title">Lançamento em breve</p>
          <h1 className="title">Um NFT como nenhum outro</h1>
          <p className="description">
          Não perca o lançamento do nosso novo NFT. Inscreva-se abaixo para
            receber atualizações quando entrarmos ao vivo.
          </p>
          <button>Inscrever-se</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="home image" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

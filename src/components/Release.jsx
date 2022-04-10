import React from "react";
import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/release1.png";
import release2 from "../assets/release2.png";
import Card from "./Card";

export default function Release() {
  return (
    <div className="releases">
      <div className="release orange">
        <div className="content">
          <h2 className="title">Liberação Inicial 4/11</h2>
          <p className="description">
          Lançamos quatro NFTs de edição limitada antecipadamente que podem ser licitadas em
          através da <a href="#">OpenSea</a>
          </p>
          <p className="description">
          Haverá os únicos quatro desses NFTs que já fizemos, então tenha certeza
            para não perder!
          </p>
          <p className="description">50% dos rendimentos vão para a caridade.</p>
          <a href="#" className="link">
             Confira-os<BsArrowRight />
          </a>
        </div>
        <div className="image">
          <img src={release1} alt="release" />
          <div className="ellipse pink"></div>
        </div>
      </div>
      <div className="release green">
        <div className="card-container">
          <Card
            image={release2}
            series="Gloop Series"
            title="Purple Man"
            price={3.95}
            tag="1094"
            time={2}
          />
          <div className="ellipse orange"></div>
        </div>
        <div className="content">
          <h2 className="title">Liberação Inicial 4/11</h2>
          <p className="description">
           Lançamos quatro NFTs de edição limitada antecipadamente que podem ser licitadas em
           através da
          <a href="#">OpenSea</a>
          </p>
          <p className="description">
            Haverá os únicos quatro desses NFTs que já fizemos, então tenha certeza
            para não perder!
          </p>
          <p className="description">50% dos rendimentos vão para a caridade.</p>
          <a href="#" className="link">
            Verifique-os Fora <BsArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}

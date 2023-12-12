import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="section-fluid-main">
      <div className="section-row">
        <div className="section-col">
          <h2 className="title"> SOYEZ LES BIENVENUS </h2>
          <p>
            Bienvenue chez [Nom du Restaurant], l'endroit où l'art culinaire
            rencontre l'élégance et l'innovation. Notre passion pour la cuisine
            exceptionnelle et l'expérience gastronomique unique se reflète dans
            chaque plat que nous servons. Plongez dans un voyage gustatif
            inoubliable, où chaque saveur est méticuleusement créée avec des
            ingrédients frais et de qualité.
            <br />
            Nous sommes impatients de vous accueillir et de partager notre
            passion pour la gastronomie avec vous.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;

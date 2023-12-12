import React from "react";
import { Link } from "react-router-dom";
import "./Recettee.css"; // Import your CSS file for this component

function Recette() {
  return (
    <div className="recette-page">
      <div className="tips-section">
        <h2> 💡 Nos Astuces</h2>
        <p>
          Lorsque les recettes ne se déroulent pas comme prévu, voici quelques
          conseils : <br />- 🧐Vérifiez les mesures avec précision. <br />-
          🕵️Assurez-vous que les ingrédients sont frais.
          <br /> - 😐Suivez les étapes attentivement. <br />- 😟 N'ayez pas peur
          d'expérimenter des ajustements.
        </p>
      </div>

      <div className="next-steps-section">
        <h2>Que faire ensuite ?</h2>
        <p>Si le plat ne fonctionne toujours pas, voici quelques options :</p>
        {/* Button to open Google Maps (replace the '#' with the actual Google Maps link) */}
        <a
          href="https://www.google.tn/maps/@34.6113892,8.7590835,6z?hl=fr&entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="action-button">VENEZ CHEZ NOUS</button>
        </a>
        <p>
          Si vous avez le temps, essayez une autre recette et concentrez-vous
          mieux.
        </p>

        {/* Button to navigate to the "/recette" page */}
        <Link to="/recette">
          <button className="action-button">
            ESSAYER DE PREPARER UN DE NOS PLATS
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Recette;

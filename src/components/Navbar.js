import React from "react";
import Logo from "../pictures/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-sm navbar-light"
      style={{ backgroundColor: "rgb(255, 242, 228)" }}
    >
      <Link to="/" className="navbar-brand">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="collapse navbar-collapse show ml-sm-5">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Page d'accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Plat">
              Nos plats
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Recette">
              Nos astuces
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/favoris">
              Plats favories
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Ajout">
              Ajouter recettes
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Evalue">
              Evaluer
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Paramétres">
              Paramétres du compte
            </Link>
          </li>
        </ul>
      </div>
      <div className="ml-auto">
        <button className="btn btn-outline-danger">Se Déconnecter </button>
      </div>
    </nav>
  );
}
export default Navbar;

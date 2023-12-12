// Ajout.js
import React, { useState } from "react";
function Ajout() {
  const [recipeName, setRecipeName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [prepTime, setPrepTime] = useState(10);
  const [difficulty, setDifficulty] = useState("");
  const [calories, setCalories] = useState("");
  const [steps, setSteps] = useState("");
  const [tip, setTip] = useState("");
  const [ingredients, setIngredients] = useState([{ name: "", quantity: "" }]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", {
      recipeName,
      specialty,
      prepTime,
      difficulty,
      calories,
      steps,
      tip,
      ingredients,
    });
  };

  const handleIngredientChange = (index, field, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index][field] = value;
    setIngredients(updatedIngredients);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, { name: "", quantity: "" }]);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">
        si vous voulez trouver des plats personnalisés veuillez ajouter vos
        recettes personelles
      </h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>Nom de la recette:</label>
          <input
            type="text"
            className="form-control"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Spécialité:</label>
          <select
            className="form-control"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
          >
            <option value="french">Francaise</option>
            <option value="italian">Italienne</option>
            <option value="tunisian">Tunisienne</option>
            <option value="american">Américaine</option>
          </select>
        </div>

        <div className="form-group">
          <label>Temps de préparation (min):</label>
          <input
            type="number"
            className="form-control"
            value={prepTime}
            onChange={(e) => setPrepTime(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Niveau de difficulté:</label>
          <select
            className="form-control"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="super easy">Super Facile</option>
            <option value="easy">Facile</option>
            <option value="medium">Moyen</option>
            <option value="hard">Difficile</option>
            <option value="super hard">Super Difficile</option>
          </select>
        </div>
        <div className="form-group">
          <label>Ingrédients:</label>
          {ingredients.map((ingredient, index) => (
            <div key={index} className="row">
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nom de l'ingrédient"
                  value={ingredient.name}
                  onChange={(e) =>
                    handleIngredientChange(index, "name", e.target.value)
                  }
                />
              </div>
              <div className="col-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Quantité"
                  value={ingredient.quantity}
                  onChange={(e) =>
                    handleIngredientChange(index, "quantity", e.target.value)
                  }
                />
              </div>
              {index === ingredients.length - 1 && (
                <div className="col-2">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={addIngredient}
                  >
                    Autre Ingrédients
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="form-group">
          <label>Étapes de préparation:</label>
          <textarea
            className="form-control"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-warning">
          Ajouter la recette
        </button>
      </form>
    </div>
  );
}

export default Ajout;

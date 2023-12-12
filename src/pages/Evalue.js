import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Evalue.css";
import Image1 from "../pictures/evaluez 1.png";
import Image2 from "../pictures/evaluez 2.png";
function Evalue() {
  const [serviceRating, setServiceRating] = useState(0);
  const [ambianceRating, setAmbianceRating] = useState(0);
  const [dishRating, setDishRating] = useState(0);
  const [evaluationsCompleted, setEvaluationsCompleted] = useState(false);

  const handleServiceRating = (rating) => {
    setServiceRating(rating);
    checkEvaluationsCompletion();
  };

  const handleAmbianceRating = (rating) => {
    setAmbianceRating(rating);
    checkEvaluationsCompletion();
  };

  const handleDishRating = (rating) => {
    setDishRating(rating);
    checkEvaluationsCompletion();
  };

  const checkEvaluationsCompletion = () => {
    if (serviceRating !== 0 && ambianceRating !== 0 && dishRating !== 1) {
      setEvaluationsCompleted(true);
    } else {
      setEvaluationsCompleted(false);
    }
  };
  const handleValidation = () => {
    alert("Évaluation validée !");
  };

  return (
    <div className="evalue-container">
      <h1>Evaluez</h1>

      <div className="rating-section">
        <p>👨‍🍳🤵Service:</p>
        {[1, 2, 3, 4, 5].map((rating) => (
          <FaStar
            key={rating}
            onClick={() => handleServiceRating(rating)}
            style={{
              cursor: "pointer",
              color: rating <= serviceRating ? "gold" : "gray",
            }}
          />
        ))}
      </div>

      <div className="rating-section">
        <p>🎉Ambiance:</p>
        {[1, 2, 3, 4, 5].map((rating) => (
          <FaStar
            key={rating}
            onClick={() => handleAmbianceRating(rating)}
            style={{
              cursor: "pointer",
              color: rating <= ambianceRating ? "gold" : "gray",
            }}
          />
        ))}
      </div>

      <div className="rating-section">
        <p>🍜Nos Plats:</p>
        {[1, 2, 3, 4, 5].map((rating) => (
          <FaStar
            key={rating}
            onClick={() => handleDishRating(rating)}
            style={{
              cursor: "pointer",
              color: rating <= dishRating ? "gold" : "gray",
            }}
          />
        ))}
      </div>
      {evaluationsCompleted && (
        <button onClick={handleValidation}>Valider mon évaluation</button>
      )}
      <p> NOTRE BUT C'EST VOTRE SATISFACTION</p>
      <div className="image-section">
        <img src={Image1} alt="Image Gauche" className="image-gauche" />
        <img src={Image2} alt="Image Droite" className="image-droite" />
      </div>
    </div>
  );
}

export default Evalue;

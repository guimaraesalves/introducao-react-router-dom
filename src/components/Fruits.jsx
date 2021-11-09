import React from "react";
import { useHistory } from "react-router-dom";

function Fruits() {
  const history = useHistory();

  return (
    <div className="w3-top">
      <div className="w3-bar w3-white w3-padding w3-card">
        <p className="w3-bar-item w3-button">Estudo React Router Dom</p>

        <div className="w3-right w3-hide-small">
          <button
            className="w3-bar-item w3-button"
            onClick={() => history.push("/contact")}
          >
            Home
          </button>
        </div>
      </div>
      <h1>Frutas</h1>
      <ul>
        <li>Maçã</li>
        <li>Jaca</li>
        <li>Goiaba</li>
        <li>Uva</li>
        <li>Caja</li>
      </ul>
    </div>
  );
}

export default Fruits;

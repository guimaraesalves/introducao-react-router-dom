import React from "react";
import "./Contact.css";

import { useHistory } from "react-router-dom";

function Drinks() {
  const history = useHistory();
  console.log(history);
  return (
    <div>
      <div className="w3-top">
        <div className="w3-bar w3-white w3-padding w3-card">
          <p className="w3-bar-item w3-button">Estudo React Router Dom</p>

          <div className="w3-right w3-hide-small">
            <button
              className="w3-bar-item w3-button"
              onClick={() => history.push("/fruits")}
            >
              Frutas
            </button>
          </div>
        </div>
      </div>

      <div className="w3-container w3-padding-64" id="contact">
        <h1>Contact</h1>
        <p>
          We offer full-service catering for any event, large or small. We
          understand your needs and we will cater the food to satisfy the
          biggerst criteria of them all, both look and taste. Do not hesitate to
          contact us.
        </p>
        <p className="w3-text-blue-grey w3-large">
          <b>Catering Service, 42nd Living St, 43043 New York, NY</b>
        </p>
        <p>
          You can also contact us by phone 00553123-2323 or email
          catering@catering.com, or you can send us a message here:
        </p>
        <form action="/action_page.php" target="_blank">
          <p>
            <input
              className="w3-input w3-padding-16"
              type="text"
              placeholder="Name"
              required
              name="Name"
            />
          </p>
          <p>
            <input
              className="w3-input w3-padding-16"
              type="number"
              placeholder="How many people"
              required
              name="People"
            />
          </p>
          <p>
            <input
              className="w3-input w3-padding-16"
              type="datetime-local"
              placeholder="Date and time"
              required
              name="date"
              value="2020-11-16T20:00"
            />
          </p>
          <p>
            <input
              className="w3-input w3-padding-16"
              type="text"
              placeholder="Message \ Special requirements"
              required
              name="Message"
            />
          </p>
          <p>
            <button
              className="w3-button w3-light-grey w3-section"
              type="submit"
            >
              SEND MESSAGE
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Drinks;

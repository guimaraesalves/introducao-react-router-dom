import "./App.css";
import { Switch, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Fruits from "./components/Fruits";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/fruits">
          <Fruits />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </header>
    </div>
  );
}

export default App;

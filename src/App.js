import React from "react";
import "./App.css";
import Home from "../src/pages/Home";
import Error from "../src/pages/Error";
import PrecisionPositionPage from "./pages/PrecisionPositionPage";
import PreventCollisionPage from "./pages/PreventCollisionPage";
import Electrics from './pages/Electrics';
import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";
import { Route, Switch } from "react-router-dom";
import SoberEyePage from "./pages/SoberEyePage";
import MeglabPage from './pages/MeglabPage';
import AIanalytics from './pages/AIanalytics';
import Services from './pages/Services';
import Cascadia from './pages/Cascadia';


function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/precision-position" component={ PrecisionPositionPage } />
        <Route exact path="/prevent-collision" component={ PreventCollisionPage } />
        <Route exact path="/electrics" component={ Electrics } />
        <Route exact path="/meglab" component={ MeglabPage } />
        <Route exact path="/sober-eye" component={ SoberEyePage } />
        <Route exact path="/aianalytics" component={ AIanalytics } />
        <Route exact path="/services" component={ Services } />
        <Route exact path="/cascadia-scientific" component={ Cascadia } />
        <Route exact component={ Error } />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

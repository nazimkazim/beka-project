import React from "react";
import "./App.css";
import Home from "../src/pages/Home";
import SingleBlog from "../src/pages/SingleBlog";
import Error from "../src/pages/Error";
import PrecisionPositionPage from "./pages/PrecisionPositionPage";
import PreventCollisionPage from "./pages/PreventCollisionPage";
import HPShovel from './pages/HPShovel';
import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";
import Blogs from "./pages/Blogs";
import { Route, Switch } from "react-router-dom";
import SoberEyePage from "./pages/SoberEyePage";
import MeglabPage from './pages/MeglabPage';
import AIanalytics from './pages/AIanalytics';
import Services from './pages/Services';
import PostSubmit from './components/PostSubmitForm'


function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/precision-position" component={ PrecisionPositionPage } />
        <Route exact path="/prevent-collision" component={ PreventCollisionPage } />
        <Route exact path="/precision-selective-digging" component={ HPShovel } />
        <Route exact path="/meglab" component={ MeglabPage } />
        <Route exact path="/sober-eye" component={ SoberEyePage } />
        <Route exact path="/aianalytics" component={ AIanalytics } />
        <Route exact path="/services" component={ Services } />
        <Route exact path="/POST" component={ PostSubmit } />
        <Route exact component={ Error } />
        <Route exact path="/blogs" component={ Blogs } />
        <Route exact path="/blogs/:slug" component={ SingleBlog } />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

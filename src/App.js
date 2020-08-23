import React from "react";
import "./App.css";
import Home from "../src/pages/Home";
import SingleBlog from "../src/pages/SingleBlog";
import Error from "../src/pages/Error";
import PrecisionPositionPage from "./pages/PrecisionPositionPage";
import PreventCollisionPage from "./pages/PreventCollisionPage";
import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";
import Blogs from "./pages/Blogs";
import { Route, Switch } from "react-router-dom";
import SoberEyePage from "./pages/SoberEyePage";
import MeglabPage from './pages/MeglabPage'


function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/precision-position" component={ PrecisionPositionPage } />
        <Route exact path="/prevent-collision" component={ PreventCollisionPage } />
        <Route exact path="/meglab" component={ MeglabPage } />
        <Route exact path="/sober-eye" component={ SoberEyePage } />
        <Route exact path="/blogs" component={ Blogs } />
        <Route exact path="/blogs/:slug" component={ SingleBlog } />
        <Route exact component={ Error } />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

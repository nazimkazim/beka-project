import React from "react";
import "./App.css";
import Home from "../src/pages/Home";
import SingleBlog from "../src/pages/SingleBlog";
import Error from "../src/pages/Error";
import PrecisionPositionComp from "./components/PrecisionPositionComp"
import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";
import Blogs from "./pages/Blogs";
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/precision-position" component={PrecisionPositionComp} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/blogs/:slug" component={SingleBlog} />
        <Route exact component={Error} />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;

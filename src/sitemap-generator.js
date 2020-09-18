const es2015 = require('babel-preset-es2015');
const presetReact = require('babel-preset-react');
require("babel-register")({
  presets: [es2015, presetReact]
});
//Import our routes
import router from "./App";
import Sitemap from "react-router-sitemap";

function generateSitemap() {
  return (
    new Sitemap(router())
      .build("https://www.uvision.kz")
      //Save it wherever you want
      .save(".././public/sitemap.xml")
  );
}

generateSitemap();
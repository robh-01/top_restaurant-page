import "./styles.css";
import { renderHomePage } from "./homepage";
import renderMenuPage from "./menupage";
import renderAboutPage from "./aboutpage";

renderHomePage();
const homeButton = document.body.querySelector('header > nav > .home');
const menuButton = document.body.querySelector('header > nav > .menu');
const aboutButton = document.body.querySelector('header > nav > .about');

homeButton.addEventListener('click', renderHomePage);
menuButton.addEventListener('click', renderMenuPage);
aboutButton.addEventListener('click', renderAboutPage);
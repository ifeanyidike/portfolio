import React, { useState } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import "./App.css";
import BackDrop from "./components/BackDrop/BackDrop";
import Home from "./components/Home/";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";
import Offer from "./components/Offer/Offer";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog/Blog";
import Experience from "./components/Experience/Experience";
import PortfolioDetails from "./components/Portfolio/PortfolioDetails";
import useWindowSize from "./useWindowSize";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [width, height] = useWindowSize();

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawToggleClickHandler = () => {
    setSideDrawerOpen((prevState) => !prevState.sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    width < 900 && setSideDrawerOpen(false);
  };

  return (
    <div className="app">
      <Router>
        <Toolbar
          drawerClickHandler={drawToggleClickHandler}
          className="toolbar"
        />
        <div className="app__contentArea">
          {sideDrawerOpen && (
            <>
              <BackDrop close={backdropClickHandler} />
            </>
          )}

          <Switch>
            <Route path="/my-offer">
              <SideDrawer show={sideDrawerOpen} className="app__sidedrawer" />
              <Offer />
            </Route>
            <Route path="/portfolio/:portfolioId">
              <SideDrawer show={sideDrawerOpen} className="app__sidedrawer" />
              <PortfolioDetails />
            </Route>
            <Route path="/portfolio">
              <SideDrawer show={sideDrawerOpen} className="app__sidedrawer" />
              <Portfolio />
            </Route>
            <Route path="/experience">
              <SideDrawer show={sideDrawerOpen} className="app__sidedrawer" />
              <Experience />
            </Route>
            <Route path="/contact">
              <SideDrawer show={sideDrawerOpen} className="app__sidedrawer" />
              <Contact />
            </Route>
            <Route path="/resume">
              <SideDrawer show={sideDrawerOpen} className="app__sidedrawer" />
              <Resume />
            </Route>
            <Route path="/skills">
              <SideDrawer show={sideDrawerOpen} className="app__sidedrawer" />
              <Skills className="app__skills" />
            </Route>

            <Route path="/blog">
              <SideDrawer show={sideDrawerOpen} className="app__sidedrawer" />
              <Blog />
            </Route>

            <Route path="/">
              <SideDrawer show={sideDrawerOpen} className="app__sidedrawer" />
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

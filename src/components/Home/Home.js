import React from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";
import Button from "@material-ui/core/Button";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import { Link } from "react-router-dom";
// import useWindowSize from "../../useWindowSize";

import "./Home.css";

const Home = () => {
  // const [width, height] = useWindowSize();
  return (
    <div className="home">
      <div className="home__typed">
        <h1>
          <Typed
            strings={["I'm <strong>Ifeanyi</strong>,"]}
            typeSpeed={40}
          ></Typed>
        </h1>

        {/* <div>{` width: ${width}, height: ${height}`}</div> */}
        <h3>
          <Typed
            strings={[
              "Full stack web and mobile developer | writer | mathematician.",
            ]}
            typeSpeed={40}
          ></Typed>
        </h3>
        <h4>
          <Typed
            strings={[
              "I develop scalable <strong><em>web and mobile apps</em></strong> for individuals and businesses.",
              "I build top-notch apps using <strong>ReactJS, React Native, NodeJS & Python</strong>.",
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          ></Typed>
        </h4>
      </div>

      <Link to="/contact" className="hireme__link">
        <Button
          variant="contained"
          className="home__button"
          endIcon={<AssignmentTurnedInIcon />}
        >
          Hire Me
        </Button>
      </Link>

      <div className="home__particles">
        <Particles
          params={{
            particles: {
              number: {
                value: 100,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Home;

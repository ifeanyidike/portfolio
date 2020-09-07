import React from "react";
import OfferHeader from "../PageHeader/PageHeader";
import OfferFooter from "../PageHeader/PageFooter";
import Button from "@material-ui/core/Button";
import CreateIcon from "@material-ui/icons/Create";
import ForwardIcon from "@material-ui/icons/Forward";
import LaunchIcon from "@material-ui/icons/Launch";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import { Link } from "react-router-dom";

import "./Offer.css";

const Offer = () => {
  return (
    <div className="offer">
      <OfferHeader title="MY OFFER" />
      <div className="offer__body">
        <div>
          <div>
            A <span> full stack software developer</span> with{" "}
            <span> 7+ years of experience </span>
          </div>
          <Link to="/contact">
            <Button variant="contained" className="offer__hireme">
              Hire Me! <AssignmentTurnedInIcon />
            </Button>
          </Link>
        </div>

        <p>
          I have developed and launched several projects from scratch. Developed
          both the front-end and the back-end.
        </p>

        <div>
          <h4>My Strong Points Include</h4>
          <p>
            <CreateIcon /> Front-end web app development with React JS
          </p>
          <p>
            <CreateIcon /> Back-end development using NodeJS, Flask and Django
          </p>
          <p>
            <CreateIcon />
            Mobile app development using React Native
          </p>
        </div>

        <div>
          <h4>I have a lot of experience with </h4>
          <p>
            <ForwardIcon /> React Routing, Redux, React Context API, Components,
            Hooks, Digesting and Using APIs, etc.
          </p>
          <p>
            <ForwardIcon /> REST APIs, Algorithm and data structure with Python
            and Javascript, etc
          </p>
        </div>

        <div>
          <h4>I can help you with your projects </h4>
          <p>
            <LaunchIcon /> Wireframing, UI/UX Design, Project Planning and
            Design.
          </p>
          <p>
            <LaunchIcon />
            Front-end development and scaling for small and large enterprises
            using React JS
          </p>
          <p>
            <LaunchIcon />
            Back-end App development using NodeJS, Django and Flask
          </p>
          <p>
            <LaunchIcon />
            Mobile app development
          </p>
        </div>
      </div>
      <OfferFooter />
    </div>
  );
};

export default Offer;

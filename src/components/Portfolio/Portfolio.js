import React, { useState, useEffect } from "react";
import PortfolioCard from "./PortfolioCard";
import PortfolioHeader from "../PageHeader/PageHeader";
import PortfolioFooter from "../PageHeader/PageFooter";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import db from "../firebase";
import "./Portfolio.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
    height: "100vh !important",
    justifySelf: "center",
    alignSelf: "center",
    marginTop: "30vh !important",
  },
}));

const Portfolio = () => {
  const classes = useStyles();
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    db.collection("portfolio")
      .orderBy("date", "desc")
      .onSnapshot((snapshot) =>
        setPortfolios(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <div className="portfolio">
      <PortfolioHeader title="Portfolio" />
      <div className="portfolio__body">
        {portfolios === undefined || portfolios.length === 0 ? (
          <div className={classes.root}>
            <CircularProgress />
          </div>
        ) : (
          portfolios.map((portfolio) => (
            <PortfolioCard
              key={portfolio.id}
              title={portfolio.title}
              subtitle={portfolio.subtitle}
              date={portfolio.date}
              detailsurl={portfolio.detailsurl}
              githuburl={portfolio.githuburl}
              siteurl={portfolio.siteurl}
              initial={portfolio.initial}
              desc={portfolio.desc}
              url={portfolio.src}
              technologies={portfolio.technologies}
            />
          ))
        )}
      </div>
      <PortfolioFooter />
    </div>
  );
};

export default Portfolio;

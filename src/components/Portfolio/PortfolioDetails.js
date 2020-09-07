import React, { useState, useEffect } from "react";
import PortfolioDetailsHeader from "../PageHeader/PageHeader";
import PortfolioDetailsFooter from "../PageHeader/PageFooter";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { makeStyles } from "@material-ui/core/styles";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Button from "@material-ui/core/Button";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

import "./PortfolioDetails.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));
const PortfolioDetails = () => {
  const classes = useStyles();
  const [portfolioDetails, setPortfolioDetails] = useState([]);
  const { portfolioId } = useParams();

  useEffect(() => {
    if (portfolioId) {
      db.collection("portfoliodetails")
        .doc(portfolioId)
        .onSnapshot((snapshot) => setPortfolioDetails(snapshot.data()));
    }
  }, [portfolioId]);

  return (
    <div className="portfolio portfoliodetails">
      <div className="portfoliodetails__header">
        <PortfolioDetailsHeader
          title={portfolioDetails && portfolioDetails.title}
          avatar={portfolioDetails && portfolioDetails.avatar}
        />
      </div>

      <div className="portfoliodetails__body">
        {portfolioDetails === undefined || portfolioDetails.length === 0 ? (
          <Backdrop className={classes.backdrop} open={true}>
            <CircularProgress color="inherit" />
          </Backdrop>
        ) : (
          portfolioDetails && (
            <div className="portfoliodetails__panel">
              <div className="portfoliodetals__top">
                <div className="portfoliodetails__left">
                  <h4 className="portfoliodetails__subtitle">
                    {portfolioDetails.subtitle}
                  </h4>
                  <p className="portfoliodetails__shortdesc">
                    {portfolioDetails.short_desc}
                  </p>
                  <p className="portfoliodetails__moredesc">
                    {portfolioDetails.more_desc}
                  </p>
                  <h4 className="portfoliodetails__summaryHeading">
                    In summary,
                  </h4>
                  <ul className="portfoliodetails__summaries">
                    {portfolioDetails.bullet_summary.map((summary) => (
                      <li key={summary.id}>
                        <CheckBoxIcon /> <span>{summary}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="portfoliodetails__right">
                  <div className="horizontal__spacer">
                    <hr />
                  </div>
                  <div className="portfoliodetails__rightContent">
                    <h4>Technologies</h4>
                    <div className="tech">
                      {portfolioDetails.technologies.map((tech) => (
                        <a
                          className="portfoliodetails_rightAnchor"
                          key={tech.id}
                          href={tech.href}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <img src={tech.src} alt={tech.name} />
                        </a>
                      ))}
                    </div>

                    {portfolioDetails.siteurl && (
                      <a
                        href={portfolioDetails.siteurl}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Button className="visitsite">
                          Visit Website <OpenInNewIcon />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="portfoliodetails__bottom">
                {portfolioDetails.images.map((img) => (
                  <img src={img} alt={img} />
                ))}
              </div>
            </div>
          )
        )}
      </div>

      <div className="portfoliodetails__footer">
        <PortfolioDetailsFooter />
      </div>
    </div>
  );
};

export default PortfolioDetails;

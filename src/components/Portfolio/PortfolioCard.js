import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

import Fab from "@material-ui/core/Fab";
import CodeIcon from "@material-ui/icons/Code";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { Link } from "react-router-dom";
import "./PortfolioCard.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function PortfolioCard(props) {
  const classes = useStyles();

  const month = () => {
    let date = new Date(props.date.seconds * 1000);
    return date.toLocaleString("en-US", { month: "short" });
  };

  const year = () => {
    let date = new Date(props.date.seconds * 1000);
    return date.toLocaleString("en-US", { year: "numeric" });
  };

  return (
    <Card className={classes.root}>
      <div className="portfoliocard__media">
        <img src={props.url} alt={props.title} />
        <div className="portfoliocard__mediaicons">
          {props.detailsurl && (
            <Link to={`/portfolio/${props.detailsurl}`}>
              <Fab
                size="small"
                color="secondary"
                aria-label="Learn more"
                className="portfoliocard__fabCodeIcon"
              >
                <CodeIcon />
              </Fab>
            </Link>
          )}
          {props.dribbleurl && (
            <Link to={`/portfolio/${props.dribbleurl}`}>
              <Fab
                size="small"
                color="secondary"
                aria-label="Learn more"
                className="portfoliocard__dribbleIcon"
              >
                <i class="fab fa-dribbble"></i>
              </Fab>
            </Link>
          )}

          {props.githuburl && (
            <Link to={`/portfolio/${props.githuburl}`}>
              <Fab
                size="small"
                color="secondary"
                aria-label="GitHub Code"
                className="portfoliocard__fabGitHubIcon"
              >
                <GitHubIcon />
              </Fab>
            </Link>
          )}

          {props.siteurl && (
            <Link to={`/portfolio/${props.siteurl}`}>
              <Fab
                size="small"
                color="secondary"
                aria-label="View Website"
                className="portfoliocard__fabOpenInNewIcon"
              >
                <OpenInNewIcon />
              </Fab>
            </Link>
          )}
        </div>
      </div>
      <div className="portfoliocard__date">
        <span>{month()}</span> <span>{year()}</span>
      </div>

      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.initial}
          </Avatar>
        }
        title={props.title}
        subheader={props.subtitle}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.desc}
        </Typography>
        <small>Technologies</small>

        <div>
          {props.technologies.map((tech) => (
            <a
              key={tech.id}
              href={tech.href}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={tech.url} alt={tech.name} />
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

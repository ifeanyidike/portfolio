import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import WorkIcon from "@material-ui/icons/Work";
import HighlightIcon from "@material-ui/icons/Highlight";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import EmailIcon from "@material-ui/icons/Email";
import { Link } from "react-router-dom";

import "./BottomDrawer.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function IconLabelTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab
          icon={<WorkIcon />}
          label="MY WORKS"
          style={{ color: "#3f51b5" }}
          component={Link}
          to="/portfolio"
        />

        <Tab
          icon={<HighlightIcon />}
          label="WHAT I OFFER"
          style={{ color: "#008073" }}
          component={Link}
          to="/my-offer"
        />

        <Tab
          icon={<EqualizerIcon />}
          label="SKILLS"
          style={{ color: "#9c27b0" }}
          component={Link}
          to="/skills"
        />

        <Tab
          label="GET IN TOUCH"
          icon={<EmailIcon />}
          style={{ color: "#795548" }}
          component={Link}
          to="/contact"
        />
      </Tabs>
    </Paper>
  );
}

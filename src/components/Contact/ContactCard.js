import React, { useState } from "react";
import db, { Axios } from "../firebase";
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import InputAdornment from "@material-ui/core/InputAdornment";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./ContactCard.css";

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
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ContactCard() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [displayMsg, setDisplayMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
  };

  const apiurl =
    "https://us-central1-ifeanyidesmonddike.cloudfunctions.net/submit";

  const sendEmail = () => {
    setLoading(true);
    Axios.post(apiurl, { name, email, message })
      .then(({ data }) => {
        db.collection("contact").add({
          name,
          email,
          message,
          time: new Date(),
        });
        setDisplayMsg("Message sent");
        resetForm();
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setDisplayMsg(`An error occurred: ${error}`);
        setLoading(false);
      });
  };

  return (
    <Container component="main" maxWidth="xs" className="contactcard">
      <div className={classes.paper}>
        <small className="contactcard__msg">{displayMsg} </small>

        <Typography component="h1" variant="h5">
          GET IN TOUCH
        </Typography>
        <Box pt={2}></Box>

        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="fullName"
            label="Full Name"
            name="fullName"
            autoComplete="name"
            autoFocus
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="contactcard__name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon className="contactcard__nameIcon" />
                </InputAdornment>
              ),
            }}
          />
          <Box pt={2}></Box>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="email"
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="contactcard__email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon className="contactcard__emailIcon" />
                </InputAdornment>
              ),
            }}
          />
          <Box pt={2}></Box>
          <TextField
            id="outlined-multiline-static"
            label="Your Message"
            multiline
            fullWidth
            rows={4}
            variant="outlined"
            required
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="contactcard__textarea"
          />
          <Backdrop className={classes.backdrop} open={loading}>
            <CircularProgress color="inherit" />
          </Backdrop>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="contactcard__button"
          >
            Contact Me
          </Button>
        </form>
      </div>
      <Box mt={8}></Box>
    </Container>
  );
}

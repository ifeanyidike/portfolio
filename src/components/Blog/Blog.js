import React, { useState, useEffect } from "react";
import BlogHeader from "../PageHeader/PageHeader";
import BlogFooter from "../PageHeader/PageFooter";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import db from "../firebase";
import "./Blog.css";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const Blog = () => {
  const classes = useStyles();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    db.collection("blogs")
      .orderBy("date", "desc")
      .onSnapshot((snapshot) =>
        setBlogs(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  const required_date = (val, obj) => {
    let date = new Date(val * 1000);
    return date.toLocaleString("en-US", obj);
  };

  return (
    <div className="blog">
      <BlogHeader title="Blogs" />
      <div className="blog__body">
        {blogs === undefined || blogs.length === 0 ? (
          <Backdrop className={classes.backdrop} open={true}>
            <CircularProgress color="inherit" />
          </Backdrop>
        ) : (
          blogs.map((blog) => (
            <div key={blog.id} className="blog__bodyItem">
              <p>
                {required_date(blog.date.seconds, { day: "numeric" }) + " "}
                {required_date(blog.date.seconds, { month: "long" }) + " "}
                {required_date(blog.date.seconds, { year: "numeric" })}
              </p>
              <a href={blog.url}>
                <img src={blog.imgurl} alt={blog.title} />
              </a>
              <a target="_blank" rel="noreferrer noopener" href={blog.url}>
                <h2>{blog.title}</h2>
              </a>
            </div>
          ))
        )}
      </div>
      <BlogFooter />
    </div>
  );
};

export default Blog;

import React from "react";

import {withRouter} from "react-router-dom";
import {makeStyles} from "@material-ui/core";

import SideBar from "../components/SideBar";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    padding: theme.spacing(2, 4, 2, 4),
  },
}));

/**
 * LeoVegas Movie App Layout.
 * @param {Component} Children Component
 * @param {Object} Router History Object
 */
export const Main = withRouter(({children, history}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SideBar history={history} />
      <main className={classes.content}>{children}</main>
    </div>
  );
});

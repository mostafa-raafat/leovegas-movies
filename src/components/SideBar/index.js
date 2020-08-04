import React, {useMemo} from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {Drawer, List, Divider, makeStyles} from "@material-ui/core";

import {SIDEBAR_ITEMS} from "../../config/constant";
import ListItems from "../ListItems";

const drawerWidth = 220;

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: theme.palette.primary.main,
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  logo: {
    width: "80%",
    marginLeft: "2%",
  },
}));

/**
 * LeoVegas SideBar.
 * @param {Object} Router History Object
 */
const SideBar = ({history}) => {
  const classes = useStyles();
  const menuItems = useMemo(() => SIDEBAR_ITEMS, []);
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper),
      }}
    >
      <div className={classes.toolbarIcon}>
        <img
          alt="leovegas-logo"
          className={classes.logo}
          // eslint-disable-next-line no-undef
          src={process.env.PUBLIC_URL + "logo.png"}
        />
      </div>
      <Divider />
      <List>
        <ListItems history={history} menuItems={menuItems} />
      </List>
    </Drawer>
  );
};

SideBar.propTypes = {
  history: PropTypes.object.isRequired,
};

export default SideBar;

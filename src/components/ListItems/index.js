import React from "react";
import PropTypes from "prop-types";

import {Box, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  imageIcon: {
    height: "100%",
  },
  iconRoot: {
    textAlign: "center",
    width: "1.3em",
    height: "1.3em",
  },
});

/**
 * LeoVegas Manger SideBar List.
 * @param {Object} Router History Object 
 * @param {Array} Menu Items Array 
 */
const ListItems = ({history, menuItems}) => {
  const classes = useStyles();
  return (
    <Box>
      {menuItems.map((item, index) => (
        <ListItem
          key={index}
          button
          onClick={() => {
            history.push(item.url);
          }}
        >
          <ListItemIcon>
            <Icon classes={{root: classes.iconRoot}}>
              <img
                className={classes.imageIcon}
                alt={item.name}
                // eslint-disable-next-line no-undef
                src={process.env.PUBLIC_URL + `${item.icon}.svg`}
              />
            </Icon>
          </ListItemIcon>
          <ListItemText primary={item.name.charAt(0).toUpperCase() + item.name.slice(1)} />
        </ListItem>
      ))}
    </Box>
  );
};


ListItems.propTypes = {
  history: PropTypes.object.isRequired,
  menuItems: PropTypes.array
};

export default ListItems;
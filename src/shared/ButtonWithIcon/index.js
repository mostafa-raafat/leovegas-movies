import React from "react";
import PropTypes from "prop-types";
import {IconButton, Icon, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  imageIcon: {
    height: "100%",
  },
  iconRoot: {
    textAlign: "center",
    width: "1.3em",
    height: "1.3em",
  },
}));

const ButtonWithIcon = ({ButtonLabel, handleClick, iconPath, iconAlt, movie, disabled}) => {
  const classes = useStyles();

  return (
    <IconButton disabled={disabled} aria-label={ButtonLabel} onClick={() => handleClick(movie)}>
      <Icon classes={{root: classes.iconRoot}}>
        <img
          className={classes.imageIcon}
          alt={iconAlt}
          src={
            // eslint-disable-next-line no-undef
            process.env.PUBLIC_URL + iconPath
          }
        />
      </Icon>
    </IconButton>
  );
};

ButtonWithIcon.propTypes = {
  ButtonLabel: PropTypes.string.isRequired,
  iconPath: PropTypes.string.isRequired,
  iconAlt: PropTypes.string.isRequired,
  movie: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

export default ButtonWithIcon;

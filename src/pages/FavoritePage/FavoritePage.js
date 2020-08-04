import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {connect} from "react-redux";

import MovieCard from "../../shared/MovieCard";

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: theme.spacing(2),
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
  },
  centerElement: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
}));

/**
 * Favorite Page Controller.
 */
const FavoritePage = ({favorite}) => {
  const classes = useStyles();

  return (
    <Box
      className={clsx(
        classes.cardContainer,
        Object.keys(favorite).length === 0 && classes.centerElement
      )}
    >
      {Object.keys(favorite).length === 0 && (
        // eslint-disable-next-line no-undef
        <img src={process.env.PUBLIC_URL + "no-data.png"} alt="no-data-icon" />
      )}
      {Object.keys(favorite).length > 0 &&
        Object.values(favorite).map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </Box>
  );
};

FavoritePage.propTypes = {
  favorite: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    favorite: state.favorite,
  };
};

export default connect(mapStateToProps, null)(FavoritePage);

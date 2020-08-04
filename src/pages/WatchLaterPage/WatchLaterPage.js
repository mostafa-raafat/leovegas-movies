import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";

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
 * Watch Later Page.
 * @param {Object} watchLater
 */
const WatchLaterPage = ({watchLater}) => {
  const classes = useStyles();

  return (
    <Box
      className={clsx(
        classes.cardContainer,
        Object.keys(watchLater).length === 0 && classes.centerElement
      )}
    >
      {Object.keys(watchLater).length === 0 && (
        // eslint-disable-next-line no-undef
        <img src={process.env.PUBLIC_URL + "no-data.png"} alt="no-data-icon" />
      )}
      {Object.keys(watchLater).length > 0 &&
        Object.values(watchLater).map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </Box>
  );
};

WatchLaterPage.propTypes = {
  watchLater: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    watchLater: state.watchLater,
  };
};

export default connect(mapStateToProps)(WatchLaterPage);

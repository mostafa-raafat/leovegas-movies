import React, {useEffect, useState, useCallback} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import clsx from "clsx";
import {Box, makeStyles} from "@material-ui/core";

import {moviesFetchData} from "../../redux/actions/movies";
import MovieCard from "../../shared/MovieCard";
import SearchInput from "../../shared/SearchInput";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  centerElement: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
}));

/**
 * Movies Page Manager.
 */
const MoviesPage = ({fetchData, movies, isLoading}) => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");

  const fetchMovies = useCallback(
    (url, searchTerm) => {
      fetchData(url, searchTerm);
    },
    [fetchData]
  );

  useEffect(() => {
    fetchMovies("movie/popular");
  }, [fetchMovies]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    searchTerm.length > 0
      ? fetchMovies("search/movie", searchTerm)
      : fetchMovies("movie/popular");
  };

  return (
    <Box className={classes.root}>
      <SearchInput
        searchTerm={searchTerm}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <div className={clsx(
        classes.cardContainer,
        (movies.length === 0 && !isLoading) && classes.centerElement
      )}>
      {(movies.length === 0 && !isLoading) && (
        // eslint-disable-next-line no-undef
        <img src={process.env.PUBLIC_URL + "no-data.png"} alt="no-data-icon" />
      )}
        {movies.length > 0 &&
          movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </Box>
  );
};

MoviesPage.propTypes = {
  fetchData: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  return {
    movies: state.movies,
    isLoading: state.moviesAreLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (url, searchTerm) => dispatch(moviesFetchData(url, searchTerm)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);

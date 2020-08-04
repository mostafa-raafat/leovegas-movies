import React, {useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import {Chip} from "@material-ui/core";
import {favoriteAdd, favoriteRemove} from "../../redux/actions/favorite";

import {watchLaterRemove, watchLaterAdd} from "../../redux/actions/watchLater";
import {moviesHaveError} from "../../redux/actions/movies";
import movieCardStyle from "./style";
import {getTrailer} from "../../utils";
import ButtonWithIcon from "../ButtonWithIcon";

const useStyles = makeStyles(() => movieCardStyle);

const MovieCard = ({
  movie,
  favorite,
  watchLater,
  watchLaterAdd,
  watchLaterRemove,
  favoriteAdd,
  favoriteRemove,
  hasError,
}) => {
  const classes = useStyles();
  const [hasTrailer, setHasTrailer] = useState(true);
  const {title, release_date, poster_path, overview, vote_average} = movie;

  const toggleWatchLater = movie => {
    watchLater[movie.id] ? watchLaterRemove(movie.id) : watchLaterAdd(movie);
  };

  const toggleFavorite = movie => {
    favorite[movie.id] ? favoriteRemove(movie.id) : favoriteAdd(movie);
  };

  const watchTrailer = async movie => {
    const url = await getTrailer(movie.id);
    if (url) {
      window.open(`https://www.youtube.com/watch?v=${url}`, "_blank");
    } else {
      hasError("Sorry! there is no trailer for this movie.");
      setHasTrailer(false);
    }
  };

  return (
    <div className={classes.movieCard}>
      <div className="movie-card__header">
        <img
          className={classes.cardImage}
          alt={title}
          src={
            poster_path
              ? `http://image.tmdb.org/t/p/w185/${poster_path}`
              : // eslint-disable-next-line no-undef
                process.env.PUBLIC_URL + "placeholder.png"
          }
        />
      </div>
      <div className={classes.cardBody}>
        <h1>{title}</h1>
        <p title={overview}>{overview}</p>
      </div>
      <div className={classes.cardFooter}>
        <div>
          <Chip size="small" label={release_date} color="primary" />
          <ButtonWithIcon
            iconAlt="trailer icon"
            movie={movie}
            disabled={!hasTrailer}
            ButtonLabel="watch trailer"
            handleClick={watchTrailer}
            iconPath={hasTrailer ? "youtube.svg" : "youtube-outline.svg"}
          />
          <Chip
            size="small"
            label={vote_average}
            color="primary"
            className={classes.rate}
          />
        </div>
        <div>
          <ButtonWithIcon
            iconAlt="favorite icon"
            movie={movie}
            ButtonLabel="add to favorite"
            handleClick={toggleFavorite}
            iconPath={favorite[movie.id] ? "favorite.svg" : "favorite-outline.svg"}
          />
          <ButtonWithIcon
            iconAlt="watch later icon"
            movie={movie}
            ButtonLabel="add to watch later"
            handleClick={toggleWatchLater}
            iconPath={watchLater[movie.id] ? "watch-later.svg" : "watch-later-outline.svg"}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    favorite: state.favorite,
    watchLater: state.watchLater,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    watchLaterAdd: movie => dispatch(watchLaterAdd(movie)),
    watchLaterRemove: id => dispatch(watchLaterRemove(id)),
    favoriteAdd: movie => dispatch(favoriteAdd(movie)),
    favoriteRemove: id => dispatch(favoriteRemove(id)),
    hasError: bool => dispatch(moviesHaveError(bool)),
  };
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    video: PropTypes.bool.isRequired,
  }),
  watchLater: PropTypes.object.isRequired,
  watchLaterAdd: PropTypes.func.isRequired,
  watchLaterRemove: PropTypes.func.isRequired,
  favorite: PropTypes.object.isRequired,
  favoriteAdd: PropTypes.func.isRequired,
  favoriteRemove: PropTypes.func.isRequired,
  hasError: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);

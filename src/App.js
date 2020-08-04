import React from "react";
import PropTypes from "prop-types";
import {Route, Switch, withRouter} from "react-router-dom";

import {Main} from "./layout/main";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import WatchLaterPage from "./pages/WatchLaterPage/WatchLaterPage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import AlertError from "./shared/AlertError";
import {connect} from "react-redux";
import {moviesHaveError} from "./redux/actions/movies";

/**
 * App Root Component.
 */
function App({error, moviesHaveError}) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    moviesHaveError("");
  };
  return (
    <Switch>
      <Route>
        <Main>
          <AlertError error={error} handleClose={handleClose} />
          <Switch>
            <Route exact path="/" component={MoviesPage} />
            <Route exact path="/favorite" component={FavoritePage} />
            <Route exact path="/watch-later" component={WatchLaterPage} />
          </Switch>
        </Main>
      </Route>
    </Switch>
  );
}

App.propTypes = {
  error: PropTypes.string.isRequired,
  moviesHaveError: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    error: state.moviesHaveError,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    moviesHaveError: bool => dispatch(moviesHaveError(bool)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));

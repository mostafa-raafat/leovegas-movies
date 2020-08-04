/**
 * WatchLater Action Types
 */
export const WATCHLATER = {
  ADD: "WATCHLATER_ADD",
  REMOVE: "WATCHLATER_REMOVE",
};


/**
 * Add Movie to watch later list.
 * @param {Object} movie 
 */
export const watchLaterAdd = movie => {
  return {
    type: WATCHLATER.ADD,
    payload: movie,
  };
};

/**
 * Remove Movie From watch later list.
 * @param {String} id 
 */
export const watchLaterRemove = id => {
  return {
    type: WATCHLATER.REMOVE,
    payload: id,
  };
};

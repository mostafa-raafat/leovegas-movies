/**
 * Favorite Action Types
 */
export const FAVORITE = {
  ADD: "FAVORITE_ADD",
  REMOVE: "FAVORITE_REMOVE",
};

/**
 * Add Movie to Favorite.
 * @param {Object} movie 
 */
export const favoriteAdd = movie => {
  return {
    type: FAVORITE.ADD,
    payload: movie,
  };
};

/**
 * Remove Movie From Favorite.
 * @param {String} id 
 */
export const favoriteRemove = id => {
  return {
    type: FAVORITE.REMOVE,
    payload: id,
  };
};

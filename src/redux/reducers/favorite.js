import {FAVORITE} from "../actions/favorite";

export const favorite = (state = {}, action) => {
  switch (action.type) {
    case FAVORITE.ADD:
      return {...state, [action.payload.id]: action.payload};

    case FAVORITE.REMOVE: {
      // eslint-disable-next-line no-unused-vars
      const { [action.payload]: _, ...restState } = state;
      return restState;
    }

    default:
      return state;
  }
};
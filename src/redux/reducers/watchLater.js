import {WATCHLATER} from "../actions/watchLater";

export const watchLater = (state = {}, action) => {
  switch (action.type) {
    case WATCHLATER.ADD:
      return {...state, [action.payload.id]: action.payload};

    case WATCHLATER.REMOVE: {
      // eslint-disable-next-line no-unused-vars
      const { [action.payload]: _, ...restState } = state;
      return restState;
    }

    default:
      return state;
  }
};

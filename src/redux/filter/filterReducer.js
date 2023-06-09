import { setFilter } from 'redux/types';
import { initialState } from './initialState';

export const filterReducer = (state = initialState, action) => {
  if (action.type === setFilter) {
    return {
      ...state,
      filter: action.payload,
    };
  }

  return state;
};

import { initialState } from './initialState';

export const filterReducer = (state = initialState, action) => {
  if (action.type === 'filter/setFilter') {
    return {
      ...state,
      filter: action.payload,
    };
  }

  return state;
};

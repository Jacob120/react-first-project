import { createStore } from '@reduxjs/toolkit';
import shortid from 'shortid';
import initialState from './initialState';


const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
       return {...state, columns: [...state.columns, {...action.payload, id: shortid() }]}
    case 'ADD_CARD':
      return {...state, cards: [...state.cards, {...action.payload, id: shortid()}]}
    case 'SEARCH_INPUT':      
      return {...state, searchInput: action.searchInput};
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
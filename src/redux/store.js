import { createStore } from '@reduxjs/toolkit';
import shortid from 'shortid';
import initialState from './initialState';
import { strContains } from '../utils/strContains';
// import { createSelector } from '@reduxjs/toolkit';


// selectors
export const getFilteredCards = ({ cards, searchInput }, columnId) => cards.filter(card => card.columnId === columnId && strContains(card.title, searchInput));
export const getAllColumns = state => state.columns;

// action creators

export const addColumn = payload => ({type: 'ADD_COLUMN', payload});
export const addCard = payload => ({type: 'ADD_CARD', payload});


/* Example of memo - to remove*/
// const selectDupa = createSelector([getFilteredCards, getAllColumns], (cards, columns) => {
//   return {cards, columns}
// })
// console.log(selectDupa());

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
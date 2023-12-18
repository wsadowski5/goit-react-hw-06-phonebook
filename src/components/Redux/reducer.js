import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setFilter } from './actions';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const filterInitialState = {
  filter: '',
};

export const contactsReducer = createReducer(contactsInitialState, builder => {
  builder
    .addCase(addContact, (state, action) => {
      state.push(action.payload); 
    })
    .addCase(deleteContact, (state, action) => {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1); 
    });
});

export const filterReducer = createReducer(filterInitialState, builder => {
  builder.addCase(setFilter, (state, action) => {
    state.filter = action.payload; 
  });
});
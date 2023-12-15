import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export const setFilter = createAction('filter/setFilter');

export const addContact = createAction("contacts/addContact", contact => {
  return {
    payload: {
      id: uuidv4(),
      name: contact.name,
      number: contact.number,
    },
  };
});


export const deleteContact = createAction("contacts/deleteContact")



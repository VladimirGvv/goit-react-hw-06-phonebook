import React, { useEffect } from 'react';
import { PhoneForm } from './PhoneForm/PhoneForm';
import { Filter } from "./Filter/Filter";
import { Contacts } from "./Contacts/Contacts";
import { useDispatch, useSelector } from 'react-redux';
import * as contactActions from 'redux/actions';
import styles from './App.module.scss';




export const App = () => {
  const contactState = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contactState));
  }, [contactState]);

  const handleChange = e => {
    dispatch(contactActions.addFilter(e.target.value));
  };

  const filterByName = () => {
    return contactState.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const contactSubmit = values => {
    const nameArray = contactState.map(contact => {
      return contact.name;
    });
    if (nameArray.includes(values.name)) {
      return alert(`${values.name} is already in contacts.`);
    }
    return dispatch(contactActions.addContact(values));
  };

  const toDelete = id => {
    dispatch(contactActions.deleteContact(id));
  };

    return (
      <div className={styles.phone_form}>
        <h1>Phonebook</h1>
        <PhoneForm onSubmit={contactSubmit} />
        <h2>Contacts</h2>
        <Filter value={filter} filterByName={handleChange} />
        <Contacts filterByName={filterByName} toDelete={toDelete} />
      </div>
    );
};

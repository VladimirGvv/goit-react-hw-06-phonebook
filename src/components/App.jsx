import { PhoneForm } from './PhoneForm/PhoneForm';
import { Filter } from "./Filter/Filter";
import { Contacts } from "./Contacts/Contacts";
import styles from './App.module.scss';

export function App() {
  
    return (
      <div className={styles.phone_form}>
        <h1>Phonebook</h1>
        <PhoneForm />
        <h2>Contacts</h2>
        <Filter />
        <Contacts />
      </div>
    );
};

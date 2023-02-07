import styles from './Contacts.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contactsSlice';


export const Contacts = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const normalizeFilter = filter.toLocaleLowerCase();

  const filterContacts = contacts.filter(contact => {
    return contact.name.toLocaleLowerCase().includes(normalizeFilter);
  });

  return (
     <ol className={styles.contacts}>
     {filterContacts().map(({ id, name, number }) => (
      <li key={id} className={styles.contacts_item}>
        {name}: {number}
        <button
          type="submit"
          onClick={() => dispatch(deleteContacts({ id }))}
          className={styles.btn}
        >
          Delete
        </button>
      </li>
    ))}
  </ol>
  )
    
 
}

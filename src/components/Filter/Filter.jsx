import { useDispatch} from 'react-redux';
import { setFilter } from 'redux/filterSlice';

import styles from './Filter.module.scss';


export const Filter = () => {
  const dispatch = useDispatch();
  const handlerFilterChange = evt => {
    dispatch(setFilter(evt?.target?.value));
  };
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        onChange={handlerFilterChange}
        className={styles.input}
      ></input>
    </>
  )
  
};

import { useSelector, useDispatch} from 'react-redux';
import { searchAction } from 'redux/filterSlice';

import styles from './Filter.module.scss';


export const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.filter.filter);

  const handlerFilterChange = e => {
    dispatch(searchAction(e.currentTarget.value));
  };
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={handlerFilterChange}
        className={styles.input}
      ></input>
    </>
  )
  
};

import { setFilter } from 'components/Redux/actions';
import { useDispatch } from 'react-redux';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = e => {
    const filter = e.target.value;
    dispatch(setFilter(filter));
    console.log(filter)
  };

  return (
    <div className={css.filter}>
      <label className={css.filterItem}>
        <span>Find contacts by name</span>
        <input type="text" name="filter" onChange={handleChange} />
      </label>
    </div>
  );
};

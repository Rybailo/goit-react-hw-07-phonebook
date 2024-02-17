import { Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filtersSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div>
      <label htmlFor="filter">
        Find contacts by name
        <Input
          name="filter"
          type="text"
          value={filter}
          onChange={evt => dispatch(setFilter(evt.target.value))}
          placeholder="Search contact"
        />
      </label>
    </div>
  );
};

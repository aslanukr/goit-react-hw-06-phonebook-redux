import { FilterInput } from 'components/Styles.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/actions';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterHandler = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterInput
      type="text"
      name="filter"
      placeholder="Search contacts by name"
      value={filter}
      onChange={filterHandler}
    />
  );
};

import { Button } from 'components/Button/Button';
import css from './StatusFilter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from '../../redux/actions';
import { statusFilters } from 'redux/constants';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.statusFilter);
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));
  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        Completed
      </Button>
    </div>
  );
};

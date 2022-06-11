import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './filter.module.css';

const Filter = ({ filter, filterContact }) => {
  const loginInputId = nanoid();

  return (
    <div className={s.container}>
      <label htmlFor={loginInputId} className={s.label}>
        Find contacts by name
      </label>
      <input
        onChange={filterContact}
        value={filter}
        type="text"
        name="filter"
        className={s.input}
      />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  filterContact: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

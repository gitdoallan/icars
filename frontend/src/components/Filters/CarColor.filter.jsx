import propTypes from 'prop-types';
import { TextField, Autocomplete } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setCarColor } from 'redux/slices';
import * as S from './styles';

export function CarColorFilter({ carColors }) {
  const dispatch = useDispatch();
  const defaultValue = [{ id: 0, name: 'Loading...' }];
  const defaultProps = {
    options: carColors || defaultValue,
    getOptionLabel: (option) => option.name,
  };

  const handleChange = (value) => {
    const color = value ? value.id : 0;
    dispatch(setCarColor(color));
  };

  return (
    <S.Filter>
      <Autocomplete
        {...defaultProps}
        onChange={(_e, newValue) => handleChange(newValue)}
        renderInput={(params) => (
          <TextField {...params} label="Color" variant="standard" />
        )}
      />
    </S.Filter>
  );
}

CarColorFilter.propTypes = {
  carColors: propTypes.arrayOf(propTypes.shape({
    id: propTypes.number,
    name: propTypes.string,
  })),
};

CarColorFilter.defaultProps = {
  carColors: [],
};

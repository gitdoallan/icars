import propTypes from 'prop-types';
import { TextField, Autocomplete } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setCarModel } from 'redux/slices';
import * as S from './styles';

export function CarModelFilter({ carModels }) {
  const dispatch = useDispatch();
  const defaultValue = [{ id: 0, name: 'Loading...' }];
  const defaultProps = {
    options: carModels || defaultValue,
    getOptionLabel: (option) => option.name,
  };

  const handleChange = (value) => {
    const model = value ? value.id : 0;
    dispatch(setCarModel(model));
  };

  return (
    <S.Filter>
      <Autocomplete
        {...defaultProps}
        onChange={(_e, newValue) => handleChange(newValue)}
        renderInput={(params) => (
          <TextField {...params} label="Model" variant="standard" />
        )}
      />
    </S.Filter>
  );
}

CarModelFilter.propTypes = {
  carColors: propTypes.arrayOf(propTypes.shape({
    id: propTypes.number,
    name: propTypes.string,
  })),
};

CarModelFilter.defaultProps = {
  carColors: [],
};

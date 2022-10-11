import propTypes from 'prop-types';
import { TextField, Autocomplete } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setBikeModel } from 'redux/slices';
import * as S from './styles';

export function BikeModelFilter({ bikeModels }) {
  const dispatch = useDispatch();
  const defaultValue = [{ id: 0, name: 'Loading...' }];
  const defaultProps = {
    options: bikeModels || defaultValue,
    getOptionLabel: (option) => option.name,
  };

  const handleChange = (value) => {
    const model = value ? value.id : 0;
    dispatch(setBikeModel(model));
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

BikeModelFilter.propTypes = {
  bikeColors: propTypes.arrayOf(propTypes.shape({
    id: propTypes.number,
    name: propTypes.string,
  })),
};

BikeModelFilter.defaultProps = {
  bikeColors: [],
};

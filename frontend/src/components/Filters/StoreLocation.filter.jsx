import propTypes from 'prop-types';
import { TextField, Autocomplete } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setStoreLocation } from 'redux/slices';
import * as S from './styles';

export function StoreLocationFilter({ storeLocation }) {
  const dispatch = useDispatch();
  const defaultValue = [{ id: 0, name: 'Loading...' }];
  const defaultProps = {
    options: storeLocation || defaultValue,
    getOptionLabel: (option) => option.name,
  };

  const handleChange = (value) => {
    const location = value ? value.id : 0;
    dispatch(setStoreLocation(location));
  };

  return (
    <S.Filter>
      <Autocomplete
        {...defaultProps}
        onChange={(_e, newValue) => handleChange(newValue)}
        renderInput={(params) => (
          <TextField {...params} label="Location" variant="standard" />
        )}
      />
    </S.Filter>
  );
}

StoreLocationFilter.propTypes = {
  storeLocation: propTypes.arrayOf(propTypes.shape({
    id: propTypes.number,
    name: propTypes.string,
  })),
};

StoreLocationFilter.defaultProps = {
  storeLocation: [],
};

import { TextField, Autocomplete } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setRating } from 'redux/slices';
import * as S from './styles';

export function BikeRatingFilter() {
  const dispatch = useDispatch();
  const ratingOptions = Array.from(Array(5).keys()).reduce((acc, curr) => {
    const value = `${curr + 1}+ stars`;
    acc = [...acc, value];
    return acc;
  }, ['Show All']);

  const defaultProps = {
    options: ratingOptions,
    getOptionLabel: (option) => option,
  };

  const handleChange = (value) => {
    const rating = Number(value.split('+')[0]) || 0;
    dispatch(setRating(rating));
  };

  return (
    <S.Filter>
      <Autocomplete
        {...defaultProps}
        defaultValue="Show All"
        disableClearable
        onChange={(_e, newValue) => handleChange(newValue)}
        renderInput={(params) => (
          <TextField {...params} label="Filter by Rating" variant="standard" />
        )}
      />
    </S.Filter>
  );
}

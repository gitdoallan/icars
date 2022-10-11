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
  }, []);

  const defaultProps = {
    options: ratingOptions,
    getOptionLabel: (option) => option,
  };

  const handleChange = (value) => {
    const rating = value ? Number(value.split('+')[0]) : 0;
    dispatch(setRating(rating));
  };

  return (
    <S.Filter>
      <Autocomplete
        {...defaultProps}
        onChange={(_e, newValue) => handleChange(newValue)}
        renderInput={(params) => (
          <TextField {...params} label="Rating" variant="standard" />
        )}
      />
    </S.Filter>
  );
}

import { TextField, Autocomplete, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setRating } from 'redux/slices';

export function BikeRatingFilter() {
  const dispatch = useDispatch();
  const ratingOptions = Array.from(Array(5).keys()).reduce((acc, i) => {
    const value = `${i + 1}+ stars`;
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
    <Stack spacing={1} sx={{ width: 300 }}>
      <Autocomplete
        {...defaultProps}
        includeInputInList
        disableClearable
        defaultValue="Show All"
        onChange={(_e, newValue) => handleChange(newValue)}
        renderInput={(params) => (
          <TextField {...params} label="Filter by Rating" variant="standard" />
        )}
      />
    </Stack>
  );
}

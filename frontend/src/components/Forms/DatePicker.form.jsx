import { useSelector, useDispatch } from 'react-redux';
import { setStartDate, setEndDate } from 'redux/slices';
import dayjs from 'dayjs';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import * as S from './styles';

export function DatePickerForm() {
  const dispatch = useDispatch();
  const { startDate, endDate } = useSelector((state) => state.filters);
  const formattedDate = (date) => dayjs(date).format('YYYY-MM-DD');

  const handleStartDateChange = (newValue) => {
    const formattedValueDate = formattedDate(newValue);
    dispatch(setStartDate(formattedValueDate));
    if (dayjs(formattedValueDate).toDate() >= dayjs(endDate).toDate()) {
      dispatch(setEndDate(dayjs(formattedValueDate).add(1, 'day').toDate()));
    }
  };

  const handleEndDateChange = (newValue) => {
    const formattedValueDate = formattedDate(newValue);
    dispatch(setEndDate(formattedValueDate));
    if (dayjs(formattedValueDate).toDate() <= dayjs(startDate).toDate()) {
      dispatch(setStartDate(dayjs(formattedValueDate).subtract(1, 'day').toDate()));
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <S.Stack>
        <MobileDatePicker
          label="Pickup date"
          inputFormat="MM/DD/YYYY"
          value={startDate}
          onChange={handleStartDateChange}
          renderInput={(params) => <TextField sx={{ width: { sm: '50%', md: '50%' } }} {...params} />}
        />
        <MobileDatePicker
          label="Drop off date"
          inputFormat="MM/DD/YYYY"
          value={endDate}
          onChange={handleEndDateChange}
          renderInput={(params) => <TextField sx={{ width: { sm: '50%', md: '50%' }, marginLeft: 0.5 }} {...params} />}
        />
      </S.Stack>
    </LocalizationProvider>
  );
}

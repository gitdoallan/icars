import { useState } from 'react';
import dayjs from 'dayjs';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import * as S from './styles';

export function DatePicker() {
  const [startDate, setStartDate] = useState(dayjs().toDate());
  const [endDate, setEndDate] = useState(dayjs().add(1, 'day').toDate());

  const handleStartDateChange = (newValue) => {
    setStartDate(newValue);
    if (newValue >= endDate) {
      setEndDate(dayjs(newValue).add(1, 'day').toDate());
    }
  };

  const handleEndDateChange = (newValue) => {
    setEndDate(newValue);
    if (newValue <= startDate) {
      setStartDate(dayjs(newValue).subtract(1, 'day').toDate());
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
          renderInput={(params) => <TextField sx={{ width: 110 }} {...params} />}
        />
        <MobileDatePicker
          label="Drop off date"
          inputFormat="MM/DD/YYYY"
          value={endDate}
          onChange={handleEndDateChange}
          renderInput={(params) => <TextField sx={{ width: 110, marginLeft: 0.5 }} {...params} />}
        />
      </S.Stack>
      <S.BookNowButton>Book now</S.BookNowButton>
    </LocalizationProvider>
  );
}

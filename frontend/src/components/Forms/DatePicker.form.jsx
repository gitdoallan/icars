import { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import dayjs from 'dayjs';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { StatusMessages } from 'components/StatusMessages';
import { isBikeAvailable } from 'api';
import * as S from './styles';

export function DatePicker({ id }) {
  const [startDate, setStartDate] = useState(dayjs().toDate());
  const [endDate, setEndDate] = useState(dayjs().add(1, 'day').toDate());
  const [available, setAvailable] = useState(false);

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

  useEffect(() => {
    const formattedStartDate = dayjs(startDate).format('YYYY-MM-DD');
    const formattedEndDate = dayjs(endDate).format('YYYY-MM-DD');
    isBikeAvailable({ id, formattedStartDate, formattedEndDate })
      .then((response) => available !== response && setAvailable(response))
      .catch(() => setAvailable(false));
  }, [endDate]);

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
      <S.BookNowButton
        type="button"
        disabled={!available}
      >
        Book now
      </S.BookNowButton>
      <StatusMessages
        status={!available}
        message="This bike is not available for the selected dates"
        type="error"
      />
    </LocalizationProvider>
  );
}

DatePicker.propTypes = {
  id: propTypes.number.isRequired,
};

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import propTypes from 'prop-types';
import dayjs from 'dayjs';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { StatusMessages } from 'components/StatusMessages';
import { isBikeAvailable, rentBike } from 'api';
import * as S from './styles';

export function DatePicker({ id }) {
  const [startDate, setStartDate] = useState(dayjs().toDate());
  const [endDate, setEndDate] = useState(dayjs().add(1, 'day').toDate());
  const [available, setAvailable] = useState(false);

  const navigate = useNavigate();
  const formattedDate = (date) => dayjs(date).format('YYYY-MM-DD');

  const handleStartDateChange = (newValue) => {
    const formattedValueDate = formattedDate(newValue);
    setStartDate(formattedValueDate);
    if (formattedValueDate >= endDate) {
      setEndDate(dayjs(formattedValueDate).add(1, 'day').toDate());
    }
  };

  const handleEndDateChange = (newValue) => {
    const formattedValueDate = formattedDate(newValue);
    setEndDate(formattedValueDate);
    if (formattedValueDate <= startDate) {
      setStartDate(dayjs(formattedValueDate).subtract(1, 'day').toDate());
    }
  };

  const handleRentBike = async () => {
    try {
      const { orderId } = await rentBike({ id, startDate, endDate });
      navigate(`/reservations/${orderId}`);
    } catch (err) {
      setAvailable(false);
    }
  };

  useEffect(() => {
    isBikeAvailable({ id, startDate, endDate })
      .then((response) => available !== response && setAvailable(response))
      .catch(() => setAvailable(false));
  }, [startDate, endDate]);

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
      <S.BookNowButton
        type="button"
        disabled={!available}
        onClick={handleRentBike}
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

import { StatusMessages } from 'components/StatusMessages';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Autocomplete, TextField, IconButton } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { getAllFilters, bikeUpload, createBike } from 'api';

import * as S from './styles';

const INITIAL_FORM_VALUES = {
  modelId: 0,
  colorId: 0,
  locationId: 0,
  price: '',
  file: '',
};

export function CreateNewBikeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [filters, setFilters] = useState([]);
  const [status, setStatus] = useState({ status: false });
  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);
  const navigate = useNavigate();

  const {
    modelId, colorId, locationId, price, file,
  } = formValues;

  const isFormValid = Object.values(formValues).every((field) => field);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', file);
    try {
      const { path } = await bikeUpload(formData);
      return path;
    } catch (err) {
      return setStatus({ status: true, message: err.message, type: 'error' });
    }
  };

  const handleChange = (value) => {
    const id = value ? value.id : 0;
    setFormValues((prev) => ({ ...prev, [value.option]: id }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (!isFormValid) throw new Error('Please fill all required fields');
      const image = await handleUpload();
      const result = await createBike({
        modelId, colorId, locationId, price: Number(price), image,
      });
      navigate(`/admin/bike/new/${result.id}`);
    } catch (err) {
      setStatus({ status: true, message: err.message, type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    getAllFilters().then(setFilters).catch((err) => ({ status: true, message: err.message, type: 'error' }));
  }, []);

  return (
    <S.Form onSubmit={onSubmit}>
      <S.FormTitle>Create New Bike</S.FormTitle>
      <StatusMessages {...status} />
      <S.FormContainer>
        <S.Input>
          <S.UploadContainer>
            <S.LabelUpload>{file ? file.name : 'Choose a picture'}</S.LabelUpload>
            <IconButton color="primary" aria-label="upload picture" component="label">
              <input
                hidden
                accept="image/jpeg, image/jpg"
                type="file"
                onChange={(e) => setFormValues((prev) => ({ ...prev, file: e.target.files[0] }))}
              />
              <PhotoCamera />
            </IconButton>
          </S.UploadContainer>
        </S.Input>
        <S.InputGrid>
          <Autocomplete
            options={filters.bikeModels || []}
            getOptionLabel={(option) => option.name}
            onChange={(_e, value) => handleChange({ ...value, option: 'modelId' })}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Model"
              />
            )}
          />
        </S.InputGrid>
        <S.InputGrid>
          <Autocomplete
            options={filters.bikeColors || []}
            getOptionLabel={(option) => option.name}
            onChange={(_e, value) => handleChange({ ...value, option: 'colorId' })}
            renderInput={(params) => (
              <S.TextField
                {...params}
                label="Color"
              />
            )}
          />
        </S.InputGrid>
        <S.InputGrid>
          <Autocomplete
            options={filters.storeLocations || []}
            getOptionLabel={(option) => option.name}
            onChange={(_e, value) => handleChange({ ...value, option: 'locationId' })}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Location"
              />
            )}
          />
        </S.InputGrid>
        <S.InputGrid>
          <S.TextField
            label="Price"
            type="number"
            value={price}
            onChange={(e) => setFormValues((prev) => ({ ...prev, price: e.target.value }))}
          />
        </S.InputGrid>

        <S.LoadingButton type="submit" loading={isSubmitting} disabled={!isFormValid}>
          Create New Bike
        </S.LoadingButton>
      </S.FormContainer>
    </S.Form>
  );
}

import { StatusMessages } from 'components/StatusMessages';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IconButton } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { carUpload, updateCarsById } from 'api';

import * as S from './styles';

export function EditCarForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ status: false });
  const navigate = useNavigate();
  const { id } = useParams();

  const INITIAL_FORM_VALUES = {
    modelId: id,
    price: '',
    file: '',
  };

  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);

  const { modelId, price, file } = formValues;

  const isFormValid = Object.values(formValues).every((field) => field);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', file);
    try {
      const { path } = await carUpload(formData);
      return path;
    } catch ({ response }) {
      return setStatus({ status: true, message: response.data.message, type: 'error' });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (!isFormValid) throw new Error('Please fill all required fields');
      const image = await handleUpload();
      await updateCarsById({ id: modelId, price, image });
      navigate(`/admin/car/updated/${id}`);
    } catch ({ response }) {
      setStatus({ status: true, message: response.data.message, type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <S.Form onSubmit={onSubmit}>
      <S.FormTitle>Update Car</S.FormTitle>
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
          <S.TextField
            label="Price"
            type="number"
            value={price}
            onChange={(e) => setFormValues((prev) => ({ ...prev, price: e.target.value }))}
          />
        </S.InputGrid>

        <S.LoadingButton type="submit" loading={isSubmitting} disabled={!isFormValid}>
          Update Car
        </S.LoadingButton>
      </S.FormContainer>
    </S.Form>
  );
}

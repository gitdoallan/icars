import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { editUserFormValidation } from 'utils';
import { updateUsersById } from 'api';
import { StatusMessages } from 'components/StatusMessages';
import { useState } from 'react';
import { MenuItem } from '@mui/material';
import * as S from './styles';

export function EditUserForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ status: false });
  const navigate = useNavigate();
  const { id } = useParams();

  const INITIAL_FORM_VALUES = {
    id,
    name: '',
    email: '',
    role: 'user',
  };

  const onSubmit = async ({ name, email, role }) => {
    setIsSubmitting(true);
    console.log(role);
    try {
      await updateUsersById({
        id, name, email, role,
      });
      navigate(`/admin/user/updated/${id}`);
    } catch ({ response }) {
      setStatus({ status: true, message: response.data.message, type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: INITIAL_FORM_VALUES,
    validationSchema: editUserFormValidation,
    onSubmit: () => onSubmit(formik.values),
  });

  return (
    <S.Form onSubmit={formik.handleSubmit}>
      <S.FormTitle>Edit User</S.FormTitle>
      <S.FormSubtitle>You edit user information and role here</S.FormSubtitle>
      <StatusMessages {...status} />
      <S.FormContainer>
        <S.Input>
          <S.LabelText>Enter name</S.LabelText>
          <S.TextField
            label="Name *"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </S.Input>
        <S.Input>
          <S.LabelText>Enter email</S.LabelText>
          <S.TextField
            label="Email *"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </S.Input>
        <S.InputGrid>
          <S.LabelText>Select role</S.LabelText>
          <S.Select
            label="Role"
            name="role"
            value={formik.values.role}
            onChange={formik.handleChange}
            error={formik.touched.role && Boolean(formik.errors.role)}
          >
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="admin">Manager</MenuItem>
          </S.Select>
        </S.InputGrid>
        <S.LoadingButton type="submit" loading={isSubmitting}>
          Update
        </S.LoadingButton>
      </S.FormContainer>
    </S.Form>
  );
}

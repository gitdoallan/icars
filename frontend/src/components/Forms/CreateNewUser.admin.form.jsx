import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { createNewUserFormValidation } from 'utils';
import { createNewUser } from 'api';
import { StatusMessages } from 'components/StatusMessages';
import { useState } from 'react';
import { MenuItem } from '@mui/material';
import * as S from './styles';

export function CreateNewUserForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ status: false });
  const navigate = useNavigate();

  const INITIAL_FORM_VALUES = {
    name: '',
    email: '',
    password: '',
    role: 'user',
  };

  const onSubmit = async ({
    name, email, password, role,
  }) => {
    setIsSubmitting(true);
    try {
      const result = await createNewUser({
        name, email, password, role,
      });
      console.log(result);
      navigate(`/admin/user/new/${result.id}`);
    } catch (err) {
      setStatus({ status: true, message: err.message, type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: INITIAL_FORM_VALUES,
    validationSchema: createNewUserFormValidation,
    onSubmit: () => onSubmit(formik.values),
  });

  return (
    <S.Form onSubmit={formik.handleSubmit}>
      <S.FormTitle>Create New User</S.FormTitle>
      <S.FormSubtitle>You can create users and managers here</S.FormSubtitle>
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
          <S.LabelText>Enter password</S.LabelText>
          <S.TextField
            label="Password *"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </S.InputGrid>
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
          Create
        </S.LoadingButton>
      </S.FormContainer>
    </S.Form>
  );
}

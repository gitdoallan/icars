import { useFormik } from 'formik';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { loginFormValidation } from 'utils';
import { loginUser } from 'services';
import { StatusMessages } from 'components/StatusMessages';
import { useState } from 'react';
import { setUserInfo } from 'redux/slices';
import { useDispatch } from 'react-redux';
import * as S from './styles';

export function SignUpForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState({ status: false, message: '' });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const INITIAL_FORM_VALUES = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const onSubmit = async ({ email, password }) => {
    setIsSubmitting(true);
    try {
      const result = await loginUser({ email, password });
      dispatch(setUserInfo(result));
      navigate(`/${result.role}`);
    } catch (err) {
      setError({ status: true, message: err.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: INITIAL_FORM_VALUES,
    validationSchema: loginFormValidation,
    onSubmit: () => onSubmit(formik.values),
  });

  return (
    <S.Form onSubmit={formik.handleSubmit}>
      <S.FormTitle>Welcome to iBikes!</S.FormTitle>
      <S.FormSubtitle>Sign up to get started.</S.FormSubtitle>
      <StatusMessages
        message={error.message}
        type="error"
        status={error.status}
      />
      <S.FormContainer>
        <S.Input>
          <S.LabelText>Enter your name</S.LabelText>
          <TextField
            label="Name *"
            variant="outlined"
            name="name"
            fullWidth
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </S.Input>
        <S.Input>
          <S.LabelText>Enter your email</S.LabelText>
          <TextField
            label="Email *"
            variant="outlined"
            name="email"
            fullWidth
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </S.Input>
        <S.Input>
          <S.LabelText>Enter your password</S.LabelText>
          <TextField
            label="Password *"
            variant="outlined"
            name="password"
            type="password"
            fullWidth
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </S.Input>
        <S.Input>
          <S.LabelText>Confirm your password</S.LabelText>
          <TextField
            label="Confirm your password *"
            variant="outlined"
            name="confirmPassword"
            type="password"
            fullWidth
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          />
        </S.Input>
        <S.LoadingButton type="submit" loading={isSubmitting}>
          Sign Up
        </S.LoadingButton>
      </S.FormContainer>
    </S.Form>
  );
}
